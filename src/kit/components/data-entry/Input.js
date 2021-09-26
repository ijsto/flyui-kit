import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import SVG from '../data-display/SVG';
import Text from '../data-display/Text';
import Box from '../layout/Box';

import { inputTextInputStyles } from '../../lib/mixins/inputMixins';

import InputFeedback from './InputFeedback';

const StyledInput = styled.input`
  ${inputTextInputStyles};
  ${space};
  ${layout};
`;

const StyledInputWithIcon = styled(Box)`
  position: relative;
  display: flex;
  .icon {
    left: calc(${({ textSize }) => textSize} / 2);
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 1px));
    svg {
      height: ${({ textSize }) => textSize};
      width: ${({ textSize }) => textSize};
    }
  }
`;

const InputWithIcon = ({ startIcon, size, ...rest }) => (
  <StyledInputWithIcon size={size}>
    <StyledInputWithIcon className="icon" ml={size === 'sm' ? 1 : 2}>
      <SVG icon={startIcon} />
    </StyledInputWithIcon>
    <StyledInput size={size} icon={Boolean(startIcon)} {...rest} mt={1} />
  </StyledInputWithIcon>
);

export const InputField = props => {
  const {
    startIcon,
    inputMode,
    methods,
    nativeValidate,
    required,
    validate,
    ...rest
  } = props;

  // @TODO: Improve the icon handling.
  return <InputWithIcon startIcon={startIcon || rest.type} {...props} />;
};

const Input = ({ block, description, error, label, labelVariant, ...rest }) => (
  <Box
    alignSelf={rest.alignSelf || 'flex-start'}
    flex={block ? 1 : rest.flex}
    flexBasis={rest.flexBasis}
  >
    <Text as="label" htmlFor={rest.name} variant={labelVariant || 'caption'}>
      {label}
      <InputField invalid={Boolean(error)} {...rest} />
    </Text>

    {(error || description) && (
      <InputFeedback error={error} description={description} />
    )}
  </Box>
);

export default Input;
