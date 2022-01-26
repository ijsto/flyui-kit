import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// import { getInputHeightPx, getInputTextSize } from '@/lib/mixins/inputMixins';
import { getInputHeightPx } from '@/lib/mixins/inputMixins';

const borderWidth = 0.5;
const borderRadius = 4;

export const useNormalizedSelectStyles = props => {
  const theme = useContext(ThemeContext);
  const { alert, border, primary, surface, background, text, white } =
    theme.colors;

  const invalid = props?.invalid || null;
  const size = props?.size || null;

  const customStyles = {
    control: (provided, state) => {
      return {
        ...provided,
        background: white,
        borderColor: invalid ? alert : border,
        borderRadius,
        borderWidth,

        boxShadow:
          state.isFocused &&
          `${theme.colors.surface} 0px 0px 0px 4px,
        ${theme.colors.text} 0px 0px 0px 6px`,

        // fontSize: getInputTextSize({ size }),
        height: getInputHeightPx({ size }),
        lineHeight: 1,
        minHeight: 'unset',
        outline: 'none',
        padding: '0 0.5rem',
        zIndex: 0,
        // eslint-disable-next-line sort-keys
        '&:hover': state.isFocused ? {} : { borderColor: 'black' },
      };
    },
    // eslint-disable-next-line sort-keys
    clearIndicator: provided => {
      return {
        ...provided,
        padding: 0,
      };
    },
    dropdownIndicator: provided => {
      return {
        ...provided,
        borderLeft: 'none',
        padding: 0,
      };
    },
    indicatorSeparator: () => {
      return {
        display: 'none',
      };
    },
    menu: provided => {
      return {
        ...provided,
        background: white,
        border: `${borderWidth}px solid ${primary}`,
        color: text,
        textAlign: 'center',
        zIndex: 4,
      };
    },
    option: (provided, state) => {
      return {
        ...provided,
        background: white,
        borderBottom: `${borderWidth}px dashed ${
          state.isFocused ? primary : 'transparent'
        }`,
        borderTop: `${borderWidth}px dashed ${
          state.isFocused ? primary : 'transparent'
        }`,
        color: text,
        cursor: 'pointer',
        // eslint-disable-next-line sort-keys
        '&:hover': {
          background: surface,
          borderBottom: `${borderWidth}px dashed ${primary}`,
          borderTop: `${borderWidth}px dashed ${primary}`,
          color: primary,
        },
      };
    },
    singleValue: provided => {
      return {
        ...provided,
        color: text,
      };
    },
    valueContainer: provided => {
      return {
        ...provided,
        padding: 0,
        zIndex: 10,
      };
    },
  };

  return { customStyles };
};
