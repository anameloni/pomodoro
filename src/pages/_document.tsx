// This file content is present at all app pages, like -app.tsx, but it's updated only at the first time the client enter the page. Used for static content
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* This content will be present at all pages */}
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>

        <body>
          {/* Will have the page content */}
          <Main />

          {/* Scripts that NextJS inject automatically */}
          <NextScript />
        </body>
      </Html>
    );
  }
}