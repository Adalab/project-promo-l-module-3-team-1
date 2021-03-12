import "../stylesheets/_app.scss";
import Header from "./Header";
import Form from "./Form/Form";
import Card from "./Card/Card";
import Footer from "./Footer";
import ls from "../services/LocalStorage";
import sendToApi from "../services/api";

import React, { useEffect, useState } from "react";
function CardGenerator() {
  const localStorageData = ls.get("data") || {};
  const [palettes, setPalettes] = useState(localStorageData.palettes || 1);
  const [name, setName] = useState(localStorageData.name);
  const [job, setJob] = useState(localStorageData.job);
  const [email, setEmail] = useState(localStorageData.email);
  const [phone, setPhone] = useState(localStorageData.phone);
  const [linkedin, setLinkedin] = useState(localStorageData.linkedin);
  const [github, setGithub] = useState(localStorageData.github);
  const [image, setImage] = useState(localStorageData.image || "");
  const [serverData, setServerData] = useState({});
  const [hiddenClass, setHiddenClass] = useState("hidden");

  useEffect(() => {
    ls.set("data", {
      palettes: palettes,
      name: name,
      job: job,
      email: email,
      phone: phone,
      linkedin: linkedin,
      github: github,
      image: image,
    });
  });

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

  const resetInputs = () => {
    setName("");
    setJob("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
    setPalettes(1);
    setImage("");
    setHiddenClass("hidden");
  };

  const updateAvatar = (image) => {
    setImage(image);
  };

  const handleShare = () => {
    setHiddenClass("");
    const userData = {
      palette: parseInt(palettes),
      name: name,
      job: job,
      email: email,
      phone: phone,
      linkedin: linkedin,
      github: github,
      photo: image,
    };
    sendToApi(userData).then((serverData) => {
      setServerData(serverData);
    });
  };

  return (
    <div className="page-cards">
      <Header />
      <main className="main-cards">
        <div className="main-cards__sections">
          <Card
            getToApp={resetInputs}
            name={name}
            job={job}
            email={email}
            phone={phone}
            palettes={palettes}
            linkedin={linkedin}
            github={github}
            image={image}
          />
          <Form
            name={name}
            job={job}
            email={email}
            phone={phone}
            palettes={palettes}
            linkedin={linkedin}
            github={github}
            image={image}
            handleInput={handleInput}
            updateAvatar={updateAvatar}
            handleShare={handleShare}
            serverData={serverData}
            hiddenClass={hiddenClass}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default CardGenerator;
