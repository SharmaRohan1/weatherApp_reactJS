import { useState } from "react";
import InputForm from "./components/InputForm";
import Footer from "./components/Footer";
import weatherSearch from "./components/api";

function App() {
  const [content, setContent] = useState("");

  const handleSubmit = async (location) => {
    console.log(location);
    const response = await weatherSearch(location);
    console.log(response);
    console.log(response.statusText);

    if (response.statusText === "") {
      setContent('Something went wrong! Could not fetch the details. :"(');
    } else if (response.statusText === "OK") {
      const msg = `The weather in ${location} is currently 
      ${response.data.current.temperature} degrees 
      ${response.data.current.humidity} % humidity`;

      setContent(msg);
    }
  };

  return (
    <div className="container">
      <h1>Weather</h1>
      <InputForm onSubmit={handleSubmit} />
      <div className="content">{content}</div>
      <Footer />
    </div>
  );
}

export default App;
