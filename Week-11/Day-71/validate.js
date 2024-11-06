function validateForm(email, password) {
  // TODO: Use the test() method to validate the email and password
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  return { isEmailValid, isPasswordValid };
}


console.log(validateForm("example@email.com", "ValidPassword123!")); // { isEmailValid: true, isPasswordValid: true }
console.log(validateForm("invalid@email", "weakpass")); // { isEmailValid: false, isPasswordValid: false }