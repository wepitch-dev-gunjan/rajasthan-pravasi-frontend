import {React , useState} from 'react'
import Namaste from "../../assets/namaste.png"





import './style.scss'

const Otp = () => {

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

            <h2>Please wait, we’ll auto-confirm the OTP.</h2>
            <p>An OTP has been to <b>+91********36</b></p>
            <div className="loginSelection">
              


              {/* Tab Section */}
            <div style={{ marginTop: "20px" }}>
              
                <div className='signInEmailContainer'>
                  <form className="signInForm" action="">
                    <div className="otpInputContainer">
                        <input className='otpInput' type="text" />
                        <input className='otpInput' type="text" />
                        <input className='otpInput' type="text" />
                        <input className='otpInput' type="text" />
                    </div>

                    <a href="" className='verifyButton'>Verify</a>
                  </form>
                </div>
              
              
            </div>
              <span  className='loginWithOther'>Auto verifying your OTP in <b>(00:15)</b> </span>
              
              <span  className='resendOtp'><a href="">Resend OTP</a></span>

{/* Tab Section End */}
            </div>
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

export default Otp