import './Footer.css'
export default function Footer(){
    return (
        <div className='footer'>
            <div className="promotion">
                <p className='intro'>Let's talk</p>
                <p className='subtext'>Planning a trip to a foreign land at the right time is never easy. Sign up for our newsletter to stay in tune for future updates.</p>
                <div className="email">                
                    <input type='text' placeholder='    Send us your Email'/>
                    <button className='send-email'>Submit</button>
                </div>
                <div className="terms-and-conditions">
                    <input type="checkbox" id="tickbox" name="terms-and-conditions"/>
                    <label for="tickbox"> I have read the terms and conditions</label>
                </div>
            </div>
            <div className="contacts">
                <div className="item">
                    <span>Email</span>
                    <a href="www.google.com">wunlimzhe@gmail.com</a>
                </div>
                <div className="item">
                    <span>Contact</span>
                    +60175927250
                </div>
                <div className="item">
                    <span>Fax</span>
                    123456789
                </div>
            </div>
            <p className='copyright'>Copyright &#169; 2025 - All rights reserved by WLZ Systems & Solutions LLC</p>
        </div>
    );
}