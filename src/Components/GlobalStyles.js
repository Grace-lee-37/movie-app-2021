import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        background-color: coral; 
    }
`;


export default globalStyles;