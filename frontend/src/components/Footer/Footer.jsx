import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer" id="footer">
			<div className="footer-content">
				<div className="footer-content-left">
					<img src={assets.logo} alt="" className="logo-img"/>

					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur explicabo nostrum nemo optio voluptate quidem tempora, aspernatur vel sapiente dolor provident corporis nisi, vitae modi dolorum. Non, dignissimos numquam.</p>

					<div className="footer-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
					</div>
				</div>
				<div className="footer-content-center">
					<h2>COMPANY</h2>

					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>

					<ul>
						<li> +234567890</li>
						<li>contact@company.com</li>
					</ul>
				</div>
			</div>

			<hr />

			<p className="footer-copyright">&copy; {currentYear} Tomato.com - All rights reserved.</p>
		</div>
	);
}

export default Footer;
