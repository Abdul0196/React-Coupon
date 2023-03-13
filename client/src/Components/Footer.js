import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

	<div className="container">

		<div className="fRow d-flex j-sb">

			<nav className="fNav">
				<a href="">
					<img src="http://localhost:3000/images/Logo.svg" alt="" className="ftlgo" width="160" height="40"/>
				</a>
				<p>
					DiscountCode2023 is the ultimate coliseum for the shoppers, where they can easily find the latest voucher codes, promotional offers and deals of their favourite brands.
				</p>
			</nav>

			<nav className="fNav">
				<h3>Browse</h3>

				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Categories</a>
					</li>
					<li>
						<a href="#">Stores</a>
					</li>
					<li>
						<a href="#">All Event</a>
					</li>
				</ul>

			</nav>

			<nav className="fNav">

				<h3>About us</h3>

				<ul>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">Contact us</a>
					</li>
					<li>
						<a href="#">Sitemap</a>
					</li>
				</ul>

			</nav>

			<nav className="fNav fSocial">

				<h3>Social Links</h3>

				<a href="" className="icon-facebook"></a>
				<a href="" className="icon-twitter"></a>
				<a href="" className="icon-instagram"></a>

			</nav>

		</div>

		<div className="cpyrght">
      @ 2023 DiscountCode2023, All rights reserved.
		</div>

	</div>

</footer>
  )
}

export default Footer