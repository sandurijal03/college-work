const signupValidator = (firstname, lastname, email, password) => {
  const errors = {};

  if (
    firstname.trim() === '' ||
    firstname.length > 20 ||
    firstname.length < 3
  ) {
    errors.firstname = 'First name must bee in range 3- 20 characters length;';
  }

  if (lastname.trim() === '' || lastname.length > 20 || lastname.length < 3) {
    errors.lastname = 'First name must bee in range 3- 20 characters length;';
  }

  if (!/^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g.test(email)) {
    errors.email = 'Failed to validate email.';
  }

  if (!password || password.length < 6) {
    errors.password = 'Password must be atleast 6 characters long.';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

const signinValidator = (email, password) => {
  let errors = {};
  if (!/^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g.test(email)) {
    errors.email = 'Failed to validate email.';
  }

  if (!password || password.length < 6) {
    errors.password = 'Password must be atleast 6 characters long.';
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports = {
  signinValidator,
  signupValidator,
};
