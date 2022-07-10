import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../@types/page';
import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
    );
}

export default MyApp;
