
export default (component, promise) => {
  return (...args) => {
    return new Promise(
      (resolve, reject) => {
        const loading = false;
        promise(...args).then(
          result => {
            const error = null;
            component.setState({ result, error, loading })
            resolve(result)
          },
          error => {
            component.setState({ error, loading })
            reject(error)
          }
        )
      }
    )
  }
}
