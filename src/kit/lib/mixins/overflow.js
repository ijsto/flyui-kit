import { css } from 'styled-components';

export const hideScrollbar = () =>
  css`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  `;
