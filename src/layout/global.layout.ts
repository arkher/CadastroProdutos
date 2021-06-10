import { createGlobalStyle } from 'styled-components';
import {
  PublicSansFontFace,
  DawningofaNewDayFontFace,
  CaveatRegularFontFace,
  ReenieBeanieRegularFontFace,
} from '../assets/fonts';
import { tokens } from './tokens';

export default createGlobalStyle`
  ${PublicSansFontFace};
  ${DawningofaNewDayFontFace};
  ${CaveatRegularFontFace};
  ${ReenieBeanieRegularFontFace};
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  html, body {
    font-family: 'PublicSans-Medium', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 0.7em;
    padding: 40px;
  };

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    padding: 40px;
  };

  ::-webkit-scrollbar-thumb {
    background-color: ${tokens.colorNeutral.Light};
    border-radius: 25px;
    padding: 40px;
  };

  ::-webkit-scrollbar-thumb:hover {
    background: ${tokens.colorNeutral.Base};
  };
`;
