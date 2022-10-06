// Dependencies
import ReactDOMServer from "react-dom/server";
// Local | React-Redux
import App from "./app";
// Styles

export const render = () => {
  return ReactDOMServer.renderToString(<App />);
};
