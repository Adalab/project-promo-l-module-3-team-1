import "../stylesheets/App.scss";

import Header from "./Header";
import Form from "./Form";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="main-cards">
        <div className="main-cards__sections">
          <Card />
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
