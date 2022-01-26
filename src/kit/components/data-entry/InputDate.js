import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import NumberFormat from 'react-number-format';

import Text from '../data-display/Text';
import Box from '../layout/Box';

import { inputTextInputStyles } from '../../lib/mixins/inputMixins';

import InputFeedback from './InputFeedback';

const StyledDateNumberFormat = styled(NumberFormat)`
  ${inputTextInputStyles};
  ${space};
  ${layout};
`;

export const InputDate = ({
  alignItems,
  block,
  className,
  dataTest,
  description,
  error,
  gap,
  inputStyles,
  label,
  labelFont,
  labelSize = 'sm',
  labelWeight = 'bold',
  labelWrap,
  orientation,
  format = '+1 (###) ###-####',
  mask = '_',
  ...rest
}) => {
  const horizontalWrapperLayoutProps = {
    alignItems: alignItems || 'center',
    display: 'flex',
    gap: gap || '12px',
  };

  const horizontalInputLayoutProps = {
    inputStyles,
    width: '55px',
  };
  const verticalInputLayoutProps = {
    mt: 1,
  };

  const inputWrapperLayoutProps =
    orientation === 'horizontal' ? horizontalWrapperLayoutProps : {};

  const inputLayoutInputProps =
    orientation === 'horizontal'
      ? horizontalInputLayoutProps
      : verticalInputLayoutProps;

  return (
    <Box
      alignSelf={rest.alignSelf || (block ? 'stretch' : 'flex-start')}
      flex={block ? 1 : rest.flex}
      flexBasis={rest.flexBasis}
    >
      <Text
        as="label"
        htmlFor={rest.name}
        font={labelFont}
        size={labelSize}
        weight={labelWeight}
        wrap={labelWrap}
        {...inputWrapperLayoutProps}
      >
        {label}
        <StyledDateNumberFormat
          allowNegative={false}
          allowEmptyFormatting
          data-test={dataTest}
          decimalScale={0}
          format={format}
          invalid={rest.invalid ? 'true' : null}
          mask={mask}
          type="tel"
          {...inputLayoutInputProps}
          {...rest}
        />
      </Text>

      {(error || description) && (
        <InputFeedback error={error} description={description} />
      )}
    </Box>
  );
};
