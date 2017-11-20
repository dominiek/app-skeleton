
export default (component, promise) => {
  return (...args) => {
    return new Promise(
      (resolve, reject) => {
        promise(...args).then(
          result => {
            const error = null;
            component.setState({ result, error })
            resolve(result)
          },
          error => {
            component.setState({ error })
            reject(error)
          }
        )
      }
    )
  }
}
