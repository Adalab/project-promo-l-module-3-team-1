import '../stylesheets/App.scss';

import Header from './Header';
import Form from './Form/Form';
import Card from './Card/Card';
import Footer from './Footer';

import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [palettes, setPalette] = useState('1');

  const handleInput = (inputKey, inputValue) => {
    console.log(inputKey, inputValue);
    if (inputKey === 'name') {
      setName(inputValue);
    } else if (inputKey === 'job') {
      setJob(inputValue);
    } else if (inputKey === 'palettes') {
      setPalette(inputValue.toString());
    }
  };

  return (
    <div>
      <Header />
      <main className="main-cards">
        <div className="main-cards__sections">
          <Card name={name} job={job} palettes={palettes} />
          <Form
            name={name}
            job={job}
            palettes={palettes}
            handleInput={handleInput}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
