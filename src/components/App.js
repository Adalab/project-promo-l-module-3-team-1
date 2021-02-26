import "../stylesheets/App.scss";

import Header from "./Header";
import Form from "./Form/Form";
import Card from "./Card/Card";
import Footer from "./Footer";

import React, { useState } from "react";

function App() {
  const [palettes, setPalettes] = useState(1);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleInput = (inputKey, inputValue) => {
    if (inputKey === "name") {
      setName(inputValue);
    } else if (inputKey === "job") {
      setJob(inputValue);
    } else if (inputKey === "palette") {
      setPalettes(inputValue);
    } else if (inputKey === "email") {
      setEmail(inputValue);
    } else if (inputKey === "phone") {
      setPhone(inputValue);
    } else if (inputKey === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputKey === "github") {
      setGithub(inputValue);
    }
  };

  return (
    <div>
      <Header />
      <main className="main-cards">
        <div className="main-cards__sections">
          <Card
            name={name}
            job={job}
            email={email}
            phone={phone}
            palettes={palettes}
            linkedin={linkedin} 
            github={github}
          />
          <Form
            name={name}
            job={job}
            email={email}
            phone={phone}
            palettes={palettes}
            linkedin={linkedin} 
            github={github}
            handleInput={handleInput}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
