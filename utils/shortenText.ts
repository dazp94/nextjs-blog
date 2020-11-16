const shortenText = (
  text: string,
  startingPoint: number,
  maxLength: number
): string =>
  text.length > maxLength
    ? text.slice(startingPoint, maxLength - 3) + "..."
    : text;

export default shortenText;
