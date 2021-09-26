import { createGlobalStyle } from 'styled-components';

const FlyGlobalStyle = createGlobalStyle` 
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: 2px solid ${({ theme }) => theme.colors.info};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.white} inset;
    }

    :root {
        --shadow-opacity: 0.25;
        --color-shadow-shadowColorRGB: rgba(255,0,0, var(--shadow-opacity));
        --color-shadow-innerShineColorRGB: rgba(56,184,240, var(--shadow-opacity));
    }

    .spin {
      @keyframes spin {
          to {
              transform: rotate(359deg); /* some browsers don't display spin when it is 360 deg */
          }
      }
      @keyframes spin-rev {
          to {
              transform: rotate(-359deg); /* reverse direction rotate */
          }
      }
      animation: spin 2s infinite linear;
    }
`;

export default FlyGlobalStyle;
