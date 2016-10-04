/* global $ */

class Api {

  constructor (options) {
    if (!options) options = {}
    this.baseUrl = options.baseUrl || `${document.location.protocol}//${document.location.hostname}:3001/1`
  }

  request (method, path, params, options, callback) {
    if (!options) options = {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    var headers = {
      'Content-Type': 'application/json'
    }
    var data = null
    if (method !== 'GET') {
      data = JSON.stringify(params)
    } else {
      path += '?' + $.param(params)
    }
    $.ajax({
      method: method,
      url: this.baseUrl + path,
      data: data,
      dataType: 'json',
      headers: headers,
      timeout: 10 * 1000
    }).done((response) => {
      if (response.error) {
        return callback(new Error('Error from API: ' + response.error.message))
      } else {
        return callback(null, response.result)
      }
    }).fail(() => {
      return callback(new Error('Error connecting to API'))
    })
  }

}

export default new Api()
