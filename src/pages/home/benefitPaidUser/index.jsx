import React from 'react'
import './style.scss'
import Compliant from '../../../assets/compliant.png'

const BenefitPaidUser = () => {
  return (
    <>
    <div className="benefitPaiduserContainer">
        <div className="benefitPaiduser">
            <h2>Benefit of Paid User</h2>
            <p>Create an account to access exclusive features like ₹5 lakh insurance, business directory, and user chat. Enhance your Pravasi Rajasthan experience with these premium benefits!</p>
            <div className="benefitContainer">
                <div className="benefitBox">
                    <img src={Compliant} alt="" />
                    <h3>Claim your policy of INR 5 Lac</h3>
                    <p>Receive financial security with a coverage of ₹5 lakh in case of an untimely passing.</p>
                </div>

                <div className="benefitBox">
                    <img src={Compliant} alt="" />
                    <h3>Claim your policy of INR 5 Lac</h3>
                    <p>Receive financial security with a coverage of ₹5 lakh in case of an untimely passing.</p>
                </div>

                <div className="benefitBox">
                    <img src={Compliant} alt="" />
                    <h3>Claim your policy of INR 5 Lac</h3>
                    <p>Receive financial security with a coverage of ₹5 lakh in case of an untimely passing.</p>
                </div>

                <div className="benefitBox">
                    <img src={Compliant} alt="" />
                    <h3>Claim your policy of INR 5 Lac</h3>
                    <p>Receive financial security with a coverage of ₹5 lakh in case of an untimely passing.</p>
                </div>
            </div>
            <button className='joinNowButton'>Join Now</button>
        </div>
    </div>
    </>
  )
}

export default BenefitPaidUser