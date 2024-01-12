export const validateInput = (inputValue) => {
  const trimmedValue = inputValue.trim();
  const singleSpacesOnly = trimmedValue.replace(/\s+/g, ' ');
  const sanitizedValue = singleSpacesOnly.replace(/[<>{}[\]()/\\&;:"'`=+*%$^!@#]/g, '');
  return sanitizedValue.length > 0 ? sanitizedValue : null;
}