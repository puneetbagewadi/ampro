import '../sass/main.scss';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <link href="//fonts.googleapis.com/css?family=Google+Sans:400,500%7CRoboto:400,500%7C&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese&amp;display=swap" rel="preconnect stylesheet" crossorigin></link>
        </Head>
        <Component {...pageProps} />
    </>;
}
