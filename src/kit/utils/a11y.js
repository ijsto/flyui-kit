export const a11yClick = (event, action) => {
  if (typeof action !== 'function') return null;
  if (!event) {
    return null;
  }
  const { key } = event;

  if (event.type === 'click') {
    action();
    return true;
  }

  if (key === 'Enter' || key === ' ') {
    action();
    return true;
  }

  return false;
};
