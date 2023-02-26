/**
 * Indent the given text to the given depth
 * according to the given options.
 */
export function indent(
  text: string,
  currentDepth = 0,
  indentation = "  ",
): string {
  return indentation
    .repeat(currentDepth)
    .concat(text);
}
