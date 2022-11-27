import React from 'react'
import { ToastContainer, toast } from "react-toastify";



export default function Alerts(props) {
  let f = props.message
  let i = props.isSuccess
  let o = props.isLoading
console.log(props)

  function alerts() {
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(resCreation, 2000);
      
      function  resCreation() {
        if (i) {
          resolve();
          console.log(e);
        } else {
          reject(e);
          console.log(e);
        }
      }
    });
    console.log(e);
    toast.promise(resolveAfter3Sec, {
      pending: o,
      success: e + " 👌",
      error:  e + " 🤯"
    });
  }
  alerts()
    return (
        <>
        <ToastContainer />
        </>
  )
}
