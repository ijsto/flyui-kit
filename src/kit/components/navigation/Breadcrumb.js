import React from 'react';
import styled from 'styled-components';

import { getValidChildren } from '../../utils/react';

const StyledBreadcrumbItem = styled.li`
  align-items: center;
  display: inline-flex;
  list-style: none;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const StyledBreadcrumbList = styled.ol`
  margin: 0;
  padding: 0;
`;
const StyledSeparator = styled.div`
  margin: 0 0.5rem;
`;

export const BreadcrumbItem = ({ children, isLastChild }) => (
  <StyledBreadcrumbItem>
    {children}
    {!isLastChild && <StyledSeparator>/</StyledSeparator>}
  </StyledBreadcrumbItem>
);

const Breadcrumb = props => {
  const {
    children,
    spacing = '0.5rem',
    separator = '/',
    className,
    ...rest
  } = props;

  const validChildren = getValidChildren(children);
  const count = validChildren.length;

  const clones = validChildren.map((child, index) =>
    React.cloneElement(child, {
      isLastChild: count === index + 1,
      separator,
      spacing,
    })
  );
  return (
    <nav aria-label="breadcrumb" {...rest}>
      <StyledBreadcrumbList>{clones}</StyledBreadcrumbList>
    </nav>
  );
};

export default Breadcrumb;
