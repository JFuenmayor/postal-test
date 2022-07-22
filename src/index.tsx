import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import App from "App";

const Routes = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));

//ASUMPTIONS
//Breakpoints will be by default of the TailwindCSS framework (if required change it via tailwind.config.js)
//SEO is meaningless, thus tags such as <section/> will not be used
//Accessibility is not fully required
