export const required = (value) => {
  if ((value && value.length === 0) || !value) {
    return 'Required';
  }
  return undefined;
};

export const email = (value) =>
  !value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const password = (value = '') => {
  const errors = [];
  if (value.length < 7) {
    errors.push('is too short minimum is 7 characters');
  }

  if (!value.match(/\d/)) {
    errors.push('needs at least one number');
  }

  if (!value.match(/[^0-9.]/)) {
    errors.push('is too short minimum is 7 characters');
  }

  if (errors.length) {
    return `Password ${errors.join(' and ')}`;
  }
  return undefined;
};
