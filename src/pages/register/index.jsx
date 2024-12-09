import {React , useState} from 'react'


import Namaste from "../../assets/namaste.png"


import './style.scss'

const Register = () => {

  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className="registerContainer">
      <div className="registerContainerBox">

        <div className="registerBoxLeft">
          <div className="registerBoxLeftContainer">

            <h2>Register Account</h2>
            <p>A Membership Fee is Required to Unlock Exclusive Benefits</p>
          
          <div className="registerFormContainer">
            <form className='registerForm' action="">


              
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input className='commonInput' type="text" id="username" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className='commonInput' type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className='commonInput' type="password" id="password" placeholder="********" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Re-enter Password</label>
                <input className='commonInput' type="password" id="confirm-password" placeholder="********" />
              </div>
              <div className="form-group">
                <label htmlFor="aadharNumber">Aadhar Number</label>
                <input className='commonInput' type="text" id="confirm-password" placeholder="********" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input className='commonInput' type="date" id="confirm-password" placeholder="********" />
              </div>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <label>
                  <input type="checkbox" />
                  I agree to all the <a href="/">Terms</a> and <a href="/">Privacy policy</a>
                </label>
              </div>
              <button type="submit" className="signup-button">Sign up</button>
            </form>
          </div>
          <p>Don't have an account? <a href="">Log In</a></p>
          </div>
          <div className="leftBottomContainer">
          <p>© 2024 Rajasthan Pravasi All rights reserved. </p>
          <a className="termsCondition" href="">Terms & Conditions</a>
        </div>

        </div>


        <div className="registerBoxRight">
              <img className='registerBoxRightImage' src={Namaste} alt="" />
        </div>

       


      </div>
    </div>
    </>
  )
}

export default Register