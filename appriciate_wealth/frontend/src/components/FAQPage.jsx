import React, { useState, useEffect } from 'react';

function FAQPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Simulating an API call with dummy data
    const fetchedFaqs = [
      { id: 1, question: 'What is an apple?', answer: 'An apple is a fruit.' },
      { id: 2, question: 'What is a banana?', answer: 'A banana is a fruit.' }
    ];
    setFaqs(fetchedFaqs);
  }, []);

  return (
    <div>
      <h2>FAQ Page</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;
