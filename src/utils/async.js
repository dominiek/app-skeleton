
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const attachPromiseToComponentState = (component, promise) => {
  return (...args) => new Promise((resolve, reject) => {
    const loading = false;
    promise(...args).then(
      result => {
        const error = null;
        component.setState({ result, error, loading });
        resolve(result);
      },
      error => {
        component.setState({ error, loading });
        reject(error);
      }
    );
  });
};
