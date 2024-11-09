import React, { useState } from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import './style.scss'

const faqData = [
    { question: "What is your return policy?", answer: "Our return policy is 30 days. No questions asked." },
    { question: "How do I track my order?", answer: "You can track your order by logging into your account and viewing your order history." },
    { question: "Can I purchase items in bulk?", answer: "Yes, we offer bulk purchasing options. Contact support for more details." },
    // Add more questions and answers as needed
  ];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

  return (
    <>
    <Header />
    <PageHero message='FAQ'/>
    <div className="faqContainer">

    
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <button>Need Help</button>
    </div>  
    <Footer/>
    </>
  )
}

export default Faq