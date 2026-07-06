import React, { useState } from 'react';
import './App.css';

function App() {
  const [getResponse, setGetResponse] = useState('');
  const [postResponse, setPostResponse] = useState('');

  const handleGetTest = async () => {
    try {
      const response = await fetch('/test');
      const data = await response.json();
      setGetResponse(data.message);
    } catch (error) {
      setGetResponse('Error fetching data');
      console.error('Error fetching GET /test:', error);
    }
  };

  const handlePostTest = async () => {
    try {
      const response = await fetch('/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: 'test payload' })
      });
      const data = await response.json();
      setPostResponse(data.message);
    } catch (error) {
      setPostResponse('Error sending POST request');
      console.error('Error sending POST /test:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TestApp</h1>
        <button onClick={handleGetTest}>Test GET /test</button>
        <p>GET Response: {getResponse}</p>
        <button onClick={handlePostTest}>Test POST /test</button>
        <p>POST Response: {postResponse}</p>
      </header>
    </div>
  );
}

export default App;
