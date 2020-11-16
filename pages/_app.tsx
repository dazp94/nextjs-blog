import { ReactElement } from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Page from "../components/Page";
import theme from "../config/theme";

const App = ({ Component, pageProps }): ReactElement => {
  const customTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={customTheme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default App;
