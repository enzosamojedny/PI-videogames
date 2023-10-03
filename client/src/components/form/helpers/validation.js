function validation(error) {
  const errors = {};
  if (!error.name) {
    errors.name = "Must have at least 1 character";
  }
  if (error.name.length > 15) {
    errors.name = "Must have less than 15 characters long";
  }
  return errors;
}

export default validation;
