import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #22254b;
}
.App{
    display: flex;
    flex-direction: column;
    align-items: center; 
}
header {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 7vh;
  background-color: #373b69;
  margin-bottom: 2%;
}
`

export default GlobalStyles;