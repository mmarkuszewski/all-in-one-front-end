import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-color: #003366;
    color: #ffffcc;
  }
`;
//TODO: style globalne gdzie indziej bo za wolno wczytuje
export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
            <Head>
                {/* Step 5: Output the styles in the head  */}
                {this.props.styleTags}
                <GlobalStyle/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}