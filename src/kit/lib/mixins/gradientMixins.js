import { css } from 'styled-components';

export const primaryGradientValue = ({ theme }) => `
   linear-gradient(
    80deg,
    ${theme.colors.primary},
    ${theme.colors.info}
  );
`;
export const secondaryGradientValue = ({ theme }) => `
   linear-gradient(
    80deg,
    ${theme.colors.primary},
    ${theme.colors.info}
  );
`;

export const primaryGradientText = () => css`
  background: ${primaryGradientValue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const secondaryGradientText = () => css`
  background: ${secondaryGradientValue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
