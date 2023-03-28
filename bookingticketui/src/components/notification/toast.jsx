import { Divider } from "antd";
import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const displayAlert = (message, type) => {  
    if(type === "success") 
    {
      return toast.success(message, {
         position: toast.POSITION.TOP_CENTER });
    }

    if(type === "error") 
    {
      return toast.error(message, {
        position: toast.POSITION.TOP_CENTER });
    } 
}

export {displayAlert}


