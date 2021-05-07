import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Who am I,what i am currently doing?',
      answer: 'Hi, Myself Prateek Varshney I am Currently Pursuing my BTECH from Institution of Engineering and Technology.',
      open: false
    },
    {
      question: 'What programming languages and Framworks you are commfortable in?',
      answer: 'I am Commfortable In HTML,CSS and Javascript and I also Have worked on FrameWorks like React.js + Redux.js + Material-UI in FrontEnd and Node.js + Express.js + MongoDB + FireBase in Backend ',
      open: false
    },
    {
      question: 'Explain how you make this project?',
      answer: 'I used React.js and Basic HTML and CSS.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
