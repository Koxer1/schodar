import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../components/theme/MainTheme';
import GlobalStyle from '../components/theme/GlobalStyle';
import Bar from '../components/molecules/Bar';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Bar />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;