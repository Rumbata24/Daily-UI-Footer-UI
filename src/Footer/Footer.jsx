import "../Footer/Footer.css";
import searchIconWhite from "../assets/searchIconWhite.png";
import searchIconBlack from "../assets/searchIconBlack.png";
import socialMedia from "../assets/socialMedia.png";
import cro from "../assets/cro.png";
const Footer = () => {
  return (
    <footer>
      <div className="top-section-footer">
        <div className="text-box search1">
          <div className="header">
            <img src={searchIconWhite} alt="" />
            <h3>Search</h3>
          </div>
          <p>SEO/Google Ads</p>
          <p>Youtube Ads</p>
          <p>Google shopping</p>
        </div>

        <div className="text-box cro">
          <div className="header">
            <img src={cro} alt="" />
            <h3>CRO</h3>
          </div>
          <p>Analysis</p>
          <p>Multi variant testing</p>
          <p>Landing pages</p>
        </div>

        <div className="text-box soc-med">
          <div className="header">
            <img src={socialMedia} alt="" />
            <h3>Social Media</h3>
          </div>
          <p>Facebook</p>
          <p>LinkedIn</p>
          <p>TikTok</p>
        </div>
      </div>

      <div className="bottom-section-footer">
        <div className="text-box search2">
          <div className="header">
            <img src={searchIconBlack} alt="" />
            <h3>Other services</h3>
          </div>
          <p>Marketing</p>
          <p>Digital tools</p>
          <p>Banner advertising</p>
        </div>

        <div className="text-box sales ">
          <h3>Do you want to increase your sales and reach your goals?</h3>
          <p>
            Schedule a free, no-obligation conversation with one of our experts
            to quickly improve the results of your business.
          </p>
          <button>Book a conversation</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
