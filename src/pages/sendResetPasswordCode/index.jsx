import {React , useState} from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { HiDevicePhoneMobile } from "react-icons/hi2";


import Namaste from "../../assets/namaste.png"


import './style.scss'

const SendResetPassword = () => {

  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className="loginContainer">
      <div className="loginContainerBox">

        <div className="loginBoxLeft">
          <div className="loginBoxLeftContainer">

            <h2>Reset password</h2>
            <p>How do you want to get the code to reset your password</p>
          
          <div className="sendRestPasswordCodeContainer">
            <form className='sendRestPasswordCodeForm' action="">

            <div className="radio-group">
                <label className='radioLabel'>
                  <input type="radio" />
                  <span className="radioContent">
                    <HiOutlineMail size='35px' />
                    <div className="radioContentDetail">
                        <p>Send code Via Email</p>
                        <p>S************@*****.com</p>
                    </div>

                  </span>
                </label>
                <label className='radioLabel'>
                  <input type="radio" />
                  <span className="radioContent">
                    <HiDevicePhoneMobile  size='35px' />
                    <div className="radioContentDetail">
                        <p>Send code Via Email</p>
                        <p>S************@*****.com</p>
                    </div>

                  </span>
                </label>
                
              </div>

              
             
              <div className="resetPasswordButtons">

              <button type="submit" className="continue-button">Continue</button>
              
              <button type="submit" className="cancel-button">Cancel</button>
              </div>
            </form>
          </div>
          {/* <p>Don't have an account? <a href="">Log In</a></p> */}
          </div>


        </div>


        <div className="loginBoxRight">
              <img className='loginBoxRightImage' src={Namaste} alt="" />
        </div>

        <div className="leftBottomContainer">
          <p>© 2024 Rajasthan Pravasi All rights reserved. </p>
          <a className="termsCondition" href="">Terms & Conditions</a>
        </div>


      </div>
    </div>
    </>
  )
}

export default SendResetPassword