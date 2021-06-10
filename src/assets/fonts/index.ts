import { css } from 'styled-components';
import { CaveatRegular } from './caveat';
import { DawningofaNewDay } from './dawning-of-a-new-day';
import {
  PublicSansMedium,
  PublicSansRegular,
  PublicSansSemiBold,
} from './public-sans';
import { ReenieBeanieRegular } from './reenie-beanie';

export const PublicSansFontFace = css`
  @font-face {
    font-family: 'PublicSans-Medium';
    src: url('${PublicSansMedium}');
  }
  @font-face {
    font-family: 'PublicSans-Regular';
    src: url('${PublicSansRegular}');
  }
  @font-face {
    font-family: 'PublicSans-Regular';
    src: url('${PublicSansSemiBold}');
  }
`;

export const DawningofaNewDayFontFace = css`
  @font-face {
    font-family: 'DawningofaNewDay';
    src: url('${DawningofaNewDay}');
  }
`;

export const CaveatRegularFontFace = css`
  @font-face {
    font-family: 'CaveatRegular';
    src: url('${CaveatRegular}');
  }
`;

export const ReenieBeanieRegularFontFace = css`
  @font-face {
    font-family: 'ReenieBeanieRegular';
    src: url('${ReenieBeanieRegular}');
  }
`;
