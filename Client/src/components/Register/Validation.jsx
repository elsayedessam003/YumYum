export function checkName(name) {
  return name.length >= 3;
}

export function checkEmail(email) {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function checkPassword(password) {
  return password.length >= 8;
}
