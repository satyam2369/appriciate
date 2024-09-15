import React, { useState } from 'react';

const fruits = [
  { name: 'Apple', details: 'Apples are rich in fiber and vitamin C.' },
  { name: 'Banana', details: 'Bananas are high in potassium and help digestion.' },
  { name: 'Orange', details: 'Oranges are an excellent source of vitamin C.' }
];

function ChatbotPage() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div>
      <h2>Chatbot Page</h2>
      <div>
        {fruits.map((fruit, index) => (
          <div key={index} onClick={() => setSelectedFruit(fruit)}>
            <h3>{fruit.name}</h3>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div>
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.details}</p>
        </div>
      )}
    </div>
  );
}

export default ChatbotPage;
