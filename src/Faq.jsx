import "./Faq.css";
import faqArrow from "./img/faqArrow.png";
import faqDot from "./img/faqDot.png";



const Faq = () => {
  return (
    <div className="faq-container" id="faq">
        <div className="MainContainer">
            <h2>FAQs</h2>
            <div className="faq">
                <div className="faq-item faq-question">
                    <div className="faq-item-bullet">
                        <img src={faqArrow} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="question">How can I join The Motivational Leopard?</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-item-bullet">
                        <img className="faqDot" src={faqDot} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="">Owing The Motivational Leopard NFT automatically makes you a member of the community. Minting date to be announced soon on social media. Stay tuned.</p>
                    </div>
                </div>

                <div className="faq-item faq-question">
                    <div className="faq-item-bullet">
                        <img src={faqArrow} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="question">Are there any additional fees when i resell?</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-item-bullet">
                        <img className="faqDot" src={faqDot} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="">There is 5% Royalties used for operational cost, remaining 50% of the Royalties will be distributed to you guys and 50% will be used to reduce the supply.</p>
                    </div>
                </div>

                <div className="faq-item faq-question">
                    <div className="faq-item-bullet">
                        <img src={faqArrow} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="question">Why would I want one?</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-item-bullet">
                        <img className="faqDot" src={faqDot} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="">We are creating Passive Income Source for our investors till The Lifetime.</p>
                    </div>
                </div>

                <div className="faq-item faq-question">
                    <div className="faq-item-bullet">
                        <img src={faqArrow} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="question">Have further inquiries?</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-item-bullet">
                        <img className="faqDot" src={faqDot} alt="" />
                    </div>
                    <div className="faq-item-text">
                        <p className="">Please join our Discord Community and our moderators will be available for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Faq;
