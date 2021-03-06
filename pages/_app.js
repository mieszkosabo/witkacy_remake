import { ThemeProvider } from 'styled-components';
import React from 'react';
import { GlobalStyle } from '../src/globalStyles';
import { theme } from '../src/theme/index';

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
}
