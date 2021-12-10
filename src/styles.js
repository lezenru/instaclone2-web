import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


export const lightTheme = {
    fontColor: "2c2c2c",
    bgColor: "lightgray",

};

export const darkTheme = {
    fontColor: "lightgray",
    bgColor: "darkgray",
};


export const GlobalStyles = createGlobalStyle`
     ${reset}
     input {
       all:unset;
     }
     * {
       box-sizing:border-box;
     }
     body {
         background-color: ${(props) => props.theme.bgColor};
         font-size:14px;
         font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
         color: ${(props) => props.theme.fontColor};
     }
     a {
       color: inherit;
       text-decoration: none;
     }
 `;
