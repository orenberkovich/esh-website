import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/i18n/i18n';
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
