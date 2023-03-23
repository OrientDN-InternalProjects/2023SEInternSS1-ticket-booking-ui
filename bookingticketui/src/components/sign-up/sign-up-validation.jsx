import validator from "validator";

export const validPasswordRegex = new RegExp(
  "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
);

export const validatePassword = (password) => {
    if ((password.length > 16 || password.length < 6) 
        && (validPasswordRegex.test(password) === false)) 
    {
      alert(
        "Password length must be between 6 to 16 words. It must contain at least 1 uppercase, 1 special symbol, and 1 number"
      );

      return false;
    } 

    else 
    return true;
  };


  export const validateEmail = (email) => {
    if (email == null) {
      alert("Email is not allow to be empty");
      return false;
    }
    
    if (validator.isEmail(email) === false) {
      alert("Wrong email format");
      return false;
    }

    return true;
  };

  export const validateConfirmPassword = (password, confirmPassword) => {
    console.log(password);
    console.log(confirmPassword);
    if (password === confirmPassword) {
      return true;
    }

    else
    {
      alert("Confirm password must be the same as password");
      return false;
    }
  };

