import React from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import { inputTextInputStyles } from '../../lib/mixins/inputMixins';

const StyledTextArea = styled(ReactTextareaAutosize)`
  ${inputTextInputStyles};
  margin-top: ${({ theme }) => theme.space[2]}px;
  height: unset;
`;

export const TextareaAutosize = props => {
  const {
    className,
    dataTest,
    defaultValue,
    disabled = false,
    invalid = false,
    maxRows,
    minRows,
    onChange,
    placeholder,
    rows = 3,
    width = '100%',
  } = props;

  return (
    <StyledTextArea
      className={className}
      data-test={dataTest}
      defaultValue={defaultValue}
      invalid={invalid ? 'true' : null}
      disabled={disabled}
      maxRows={maxRows}
      minRows={minRows}
      rows={rows}
      width={width}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
