import { createGlobalStyle } from "styled-components";


const GlobalStyle=createGlobalStyle`
    *,*::before, *::after {
        box-sizing : border-box;
    }

    body{
        color : #FE5826;
    }

    .workbench-<uniquifier> {
        font-family: "Workbench", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings:
          "BLED" 0,
          "SCAN" 0;
      }

    .noto-sans-kr-<uniquifier> {
        font-family: "Noto Sans KR", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
    }

    .noto-color-emoji-regular {
        font-family: "Noto Color Emoji", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .jersey-20-charted-regular {
        font-family: "Jersey 20 Charted", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .jersey-15-regular {
        font-family: "Jersey 15", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyle;