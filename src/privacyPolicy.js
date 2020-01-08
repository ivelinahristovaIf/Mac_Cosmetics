import React, { Component } from 'react';
import "./privacyPolicy.css";

class PrivacyPolicy extends Component {

    render(){
        return (
            <React.Fragment>
            <div className="title-container">
            <h1>Privacy Policy</h1>
            </div>
            <div className="our-mission">
				<p>	</p>
                <h3 className="title">Pivacy Policy Declaration</h3>
                It's important for us to save your personal data. Thats why our web site is processing your information based on applied law-making or GDPR. The law about saveing personal data and the law about e-commerce.
                <hr className="border"/>
                <br/><br/>
                <h3 className="title">Cookies Policy</h3>
                <span>To be sure that you are taking the best information and the best services, when you are on our online shop <a href="/" title="Home Page">Mac Cosmetics</a> which is called also a web site or online shop. The information will be save by cookies. This will help us to make your personal experience better. Cookies are also helping us to make sure that you can easily find this thing which are you looking for. Thats why we are going to tell you in the next paragraph what represents cookies. <p></p>
				</span><br/><br/>
                <h3 className="title">What represents cookies?</h3>
                <span>Cookies are small bit of data, which are sending to your browser from web server and they are storeing on your device. We need to do this because the second time when you come to our web site the site will recognice your device. There are two types of cookies the first one are called fixed and the second one are called temporary or session cookies. The fixed cookies are stored on your device like file for a log period of time. The session cookies are stored on your device when you are surfing on our web site but in the moment when you close the window the cookie is gone. The most of the web sites are using cookies to make your user experience better. Using cookies we are not going to damage your files with viruses. <p></p>
				</span>
                <br/><br/><h3>Analysis of Internet Traffic</h3>
				<span></span>Our web site is analysing users internet traffic with Google Analysis. Thats why we are using Cookies, which helps us to analys how our users are using our web sait. This is how the received information is sending to the server were the information is stored. You can stop this by makeing your browser settings not to saving cookies. The processing of users data for analys of internet traffic is making based on article 6, paragraph 1, word (a) and / or (e) GDPR. The legitimate interest of GDPR is based on making our web site functionality better. Our clients are important about us thats why we appreciate our clients's personal information and this data which we are taking for the analys of our web site traffic, were anonymized. In our web site we save this data for 5 years.
				<br/><br/><h3>Your rights</h3>
                <span>You have the right to your data, which we processing, and the right to correct, delete (the right to be forgotten), the right to restrict the processing, portability of data, withdrawal of the agreement and protest<p></p>
				</span>
				<br/><br/>
			</div>
            </React.Fragment>
        );
    }
}

export default PrivacyPolicy;
