import { ReactElement } from "react";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet = (): ReactElement => (
  <ReactHelmet>
    <title>NextJS blog</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
  </ReactHelmet>
);
export default Helmet;
