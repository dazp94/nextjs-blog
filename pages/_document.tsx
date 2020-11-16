import Document from "next/document";
import { ReactElement } from "react";

import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): ReactElement =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          <ColorModeScript initialColorMode="dark" />
          {initialProps.styles}
        </>
      ),
    };
  }
}
