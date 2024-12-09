import {React , useState} from 'react'


import Namaste from "../../assets/namaste.png"


import './style.scss'

const ResetPassword = () => {

  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className="resetPasswordContainer">
      <div className="resetPasswordContainerBox">

        <div className="resetPasswordBoxLeft">
          <div className="resetPasswordBoxLeftContainer">

            <h2>Reset Password</h2>
            <p>Please enter your Email or Phone Number to Search
            For your Account</p>
          
          <div className="resetPasswordContainer">
            <form className='resetPasswordForm' action="">


              
              <div className="form-group">
                {/* <label htmlFor="username">Username</label> */}
                <input className='commonInput' type="text" id="username" placeholder="email or phone number" />
              </div>
             
              <div className="resetPasswordButtons">

              <button type="submit" className="search-button">Sign up</button>
              
              <button type="submit" className="cancel-button">Cancel</button>
              </div>
            </form>
          </div>
          <p>Don't have an account? <a href="">Log In</a></p>
          </div>


        </div>


        <div className="resetPasswordBoxRight">
              <img className='resetPasswordBoxRightImage' src={Namaste} alt="" />
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

export default ResetPassword