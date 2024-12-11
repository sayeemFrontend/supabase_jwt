export function parseFormData(formElement) {
  const parsedData = {};
  const formData = new FormData(formElement);
  for (const [k, v] of formData.entries()) {
    parsedData[k] = v;
  }
  return parsedData;
}
