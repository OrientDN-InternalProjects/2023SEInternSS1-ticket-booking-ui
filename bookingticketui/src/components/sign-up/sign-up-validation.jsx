import validator from "validator";
import { displayAlert } from "../notification/toast";

export const validPasswordRegex = new RegExp(
  "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i"
);

export const validNameRegex = new RegExp("\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+");

export const validateName = (name) => {
  return validNameRegex.test(name);
};

export const validatePassword = (password) => {
  if (
    (password.length > 16 || password.length < 6) &&
    !validPasswordRegex.test(password)
  ) {
    displayAlert(
      "Password length must be between 6 to 16 words. It must contain at least 1 uppercase, 1 special symbol, and 1 number",
      "error"
    );

    return false;
  } else return true;
};

export const validateEmail = (email) => {
  if (email == null) {
    displayAlert("Email is not allow to be empty", "error");
    return false;
  }

  if (!validator.isEmail(email)) {
    displayAlert("Wrong email format", "error");
    return false;
  }

  return true;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password === confirmPassword) {
    return true;
  } else {
    displayAlert("Confirm password must be the same as password", "error");
    return false;
  }
};
