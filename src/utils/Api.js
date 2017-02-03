/* global localStorage, $ */

const superagent = require('superagent')

const getApiDomain = function () {
  let hostname = document.location.hostname
  if (hostname.match(/localhost$/)) {
    return '127.0.0.1:3001'
  } else {
    return hostname + ':3001'
  }
}

class Api {

  constructor (options) {
    if (!options) options = {}
    this.baseUrl = options.baseUrl || `${document.location.protocol}//${getApiDomain()}/`
  }

  request (method, path, params, options, callback) {
    if (!options) options = {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    if (!options.retries) options.retries = 0
    try {
      let apiVersion = options.apiVersion || '1'
      let req = superagent(method, this.baseUrl + apiVersion + path)
      if (!options.skipAuthorization && localStorage.authToken) {
        req.set('Authorization', 'Bearer ' + localStorage.authToken)
      }
      if (method !== 'GET') {
        req.send(params)
      } else {
        req.query(params)
      }
      req.end((error, res) => {
        // Could be network error, retry
        if (error) {
          if (options.retries < 3) {
            options.retries++
            setTimeout(() => {
              this.request(method, path, params, options, callback)
            }, 200)
            return
          } else {
            return callback(new Error('Connection Error: ' + error.message))
          }
        }

        // Parse response, raise error when not valid JSON
        let response
        try {
          response = JSON.parse(res.text)
        } catch (error) {
          return callback(new Error('Could not parse response: ' + error.message))
        }

        // Error on invalid status codes
        if (res.statusCode !== 200) return callback(new Error('Bad HTTP Status: ' + res.statusCode))

        // Wait if result is in queued state
        if (options.wait !== false && response.queued) {
          setTimeout(() => {
            this.request(method, path, params, options, callback)
          }, 2000)

        // Server supplied error
        } else if (response.error) {
          error = new Error(response.error.message)
          error.type = response.error.type
          return callback(error, null, res)
        } else {
          // All good!
          return callback(null, response.result, res)
        }
      })
    } catch (e) {
      return callback(new Error('Unknown error: ' + e.message))
    }
  }

  url (path, params, options) {
    if (!options) options = {}
    let apiVersion = options.apiVersion || '1'
    if (Object.keys(params).length > 0) {
      path += '?' + $.param(params)
    }
    return this.baseUrl + apiVersion + path
  }

  upload (path, file, options, callback) {
    if (!options) options = {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    let apiVersion = options.apiVersion || '1'
    let url = this.baseUrl + apiVersion + path

    let req = superagent.post(url)
    if (!options.skipAuthorization && localStorage.authToken) {
      req.set('Authorization', 'Bearer ' + localStorage.authToken)
    }
    req.attach(file.name, file)
    req.end((error, res) => {
      if (error) return callback(error)
      if (res.statusCode !== 200) return callback(new Error('Bad HTTP Status: ' + res.statusCode))
      let result
      try {
        result = JSON.parse(res.text)
      } catch (error) {
        return callback(new Error('Could not parse response: ' + error.message))
      }
      if (result.error) return callback(new Error('API returned ' + result.error.message))
      return callback(null, result)
    })
  }

}

export default new Api()
