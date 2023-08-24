import "./App.scss";
import { Footer } from "./components/Footers/Footer";
import { Header } from "./components/Headers/Header";
import { HeaderMain } from "./components/Headers/HeaderMain";
import { MobileHeader } from "./components/Headers/MobileHeader";
import { Main } from "./components/Main";
import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  let width = window.innerWidth;
  console.log(width);
  const getHeader = () => {
    if (width <= 500) {
      return <MobileHeader />;
    }
    return <Header />;
  };
  return (
    <div className="App">
      {getHeader()}
      <HeaderMain width={width} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
