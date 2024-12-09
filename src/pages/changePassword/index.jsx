import {React , useState} from 'react'


import Namaste from "../../assets/namaste.png"


import './style.scss'

const ChangePassword = () => {

  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className="changePasswordContainer">
      <div className="changePasswordContainerBox">

        <div className="changePasswordBoxLeft">
          <div className="changePasswordBoxLeftContainer">

            <h2>Change password</h2>
            <p>Please enter new Password and Secure your account</p>
          
          <div className="changePasswordContainer">
            <form className='changePasswordForm' action="">



              <div className="form-group">
                <label htmlFor="username">Password</label>
                <input className='commonInput' type="text" id="username" placeholder="email or phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Re-Password</label>
                <input className='commonInput' type="text" id="username" placeholder="email or phone number" />
              </div>
             
              <div className="resetPasswordButtons">

              <button type="submit" className="save-button">Save</button>
              
              <button type="submit" className="cancel-button">Cancel</button>
              </div>
            </form>
          </div>
          {/* <p>Don't have an account? <a href="">Log In</a></p> */}
          </div>


        </div>


        <div className="changePasswordBoxRight">
              <img className='changePasswordBoxRightImage' src={Namaste} alt="" />
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

export default ChangePassword