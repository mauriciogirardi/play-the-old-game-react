import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #1f162d;
  }

  body, html {
    height: 100%
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
