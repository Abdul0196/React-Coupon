import React from 'react'

const Newsletter = () => {
  return (
    <div className="nwsbx container">
      <div className="nwsltr">
        <h2>Sign-up For Newsletter</h2>
        <p>Subscribe to get latest vouchers, promotional codes and more offers</p>
        <div className="subsbx">
          <input type="text" id="email_news" placeholder="Enter Your Email Address" />
          <button onclick="subscribeBrands('email_news','http://www.discountcode2023.com')">Subscribe</button>
        </div>
        <span>
          By signing-up, I agree to DiscountCode2023 <a href="">terms &amp; conditions</a> , <a href="">privacy policy</a> and consent to receive emails about offers.
        </span>
      </div>
    </div>
  )
}

export default Newsletter