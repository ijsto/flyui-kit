// Sizes
// 1. "3px" - pixels string
// 3. "1em" / "1rem" - CSS Unit string
// 4. 3 - number
// 4. 33 - big number (goes to pixels)
// 5. "sm" - named size string
// 7. randomString - unsupported string

const namedSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
const namedRadii = [
  'full',
  'round',
  'rounded',
  'base',
  'squared',
  'square',
  ...namedSizes,
];

export const getSize = ({ size, theme }) => {
  const isCssString =
    typeof size === 'string' && size.match(/^[0-9]*(px|em|rem|%)$/);
  const isNumber = typeof size === 'number';
  const isNamedSize = typeof size === 'string' && namedSizes.includes(size);

  if (!isCssString && !isNumber && !isNamedSize) {
    throw new Error(`Received invalid size value [${size}]`);
  }

  if (isCssString) {
    return size;
    // // Check if is Pixels unit
    // const isPixelString = size.match(/^[0-9]*px$/);
    // // Check if is Em unit
    // const isEmString = size.match(/^[0-9]*em$/);
    // // Check if is Rem unit
    // const isRemString = size.match(/^[0-9]*rem$/);
    // // Check if is Percentage unit
    // const isPercentageString = size.match(/^[0-9]*%$/);

    // if (isPixelString) {
    //   return { px: size, pxUnit: parseInt(size.replace('px', ''), 10) };
    // }

    // if (isEmString) {
    //   return { em: size, emUnit: parseInt(size.replace('em', ''), 10) };
    // }
    // if (isRemString) {
    //   return { rem: size, remUnit: parseInt(size.replace('rem', ''), 10) };
    // }
    // if (isPercentageString) {
    //   return {
    //     pct: size,
    //     pctUnit: parseInt(size.replace('%', ''), 10),
    //   };
    // }
  }

  if (isNamedSize) {
    const cssVar = `--fly-sizes-${size}`;
    const pxValue = `${theme.space[size] || 16}px`;
    const cssVarValue = `var(--${cssVar}, ${pxValue})`;

    return cssVarValue;
  }

  throw new Error(`Received invalid size value [${size}]`);
};

export const getRadius = ({ borderRadius, radius: propsRadius, theme }) => {
  const radius = propsRadius || borderRadius;

  if (!radius) return null;

  const isCssString =
    typeof radius === 'string' && radius.match(/^[0-9]*(px|em|rem|%)$/);
  const isNumber = typeof radius === 'number';
  const isNamedRadius =
    typeof radius === 'string' && namedRadii.includes(radius);

  if (isCssString) {
    return radius;
    // // Check if is Pixels unit
    // const isPixelString = radius.match(/^[0-9]*px$/);
    // // Check if is Em unit
    // const isEmString = radius.match(/^[0-9]*em$/);
    // // Check if is Rem unit
    // const isRemString = radius.match(/^[0-9]*rem$/);
    // // Check if is Percentage unit
    // const isPercentageString = radius.match(/^[0-9]*%$/);

    // if (isPixelString) {
    //   return { px: radius, pxUnit: parseInt(radius.replace('px', ''), 10) };
    // }

    // if (isEmString) {
    //   return { em: radius, emUnit: parseInt(radius.replace('em', ''), 10) };
    // }
    // if (isRemString) {
    //   return { rem: radius, remUnit: parseInt(radius.replace('rem', ''), 10) };
    // }
    // if (isPercentageString) {
    //   return {
    //     pct: radius,
    //     pctUnit: parseInt(radius.replace('%', ''), 10),
    //   };
    // }
  }

  if (isNamedRadius) {
    // @TODO: Improve fly variable handling
    const cssVar = `--fly-radius-${radius}`;
    const pxValue = `${theme.radii[radius]}px`;
    const cssVarValue = `var(${cssVar}, ${pxValue})`;

    return cssVarValue;

    // return {
    //   cssVar,
    //   cssVarValue,
    //   px: pxValue,
    // };
  }

  if (!isCssString && !isNumber && !isNamedRadius) {
    throw new Error(`Received invalid radius value [${radius}]`);
  }

  return radius;
};
