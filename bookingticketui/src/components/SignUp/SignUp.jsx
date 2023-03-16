import axios from "axios";
import React, {useState} from 'react'

const validEmail = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');

    const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$');


const SignUpForm = () => {
    const [formStatus, setFormStatus] = useState('Done');
    const [conFom, setConFom] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPasword : "",
        isAdmin : false
    })

    const validatePassword = (password) => {
        if((password.length > 16 || conFom.password.length < 6) 
            && validPassword.test(password) )
        {
            alert("Password length must be between 6 to 16 words. It must contain at least 1 uppercase, 1 special symbol, and 1 number");
            return false;
        }

        else 
            return true;
    }

    const validateEmail = (email) => {
        if(email == null) 
        {
            alert("Email is not allow to be empty");
            return false
        }

        if(!validEmail.test(email))
        {
            alert("Wrong email format");
            return false;
        }

        return true;
    }

    const handleChange = (event) => {
        setConFom({
            ...conFom,
            [event.target.name] : event.target.value
        })
    }

    const submitForm = async (event) => {
        event.preventDefault()

            validatePassword(conFom.password);
            validEmail(conFom.email);
            if(conFom.password != conFom.confirmPasword)
            {
                alert("Confirme password must be the same as password");
            }
            
            await axios.post("https://localhost:7089/api/Authenticate/sign-up", {
                firstName : conFom.firstName,
                lastName : conFom.lastName,
                email : conFom.email,
                password : conFom.password,
                confirmPaswork : conFom.confirmPasword,
                isAdmin : conFom.isAdmin
            })
        }
}
            
    
