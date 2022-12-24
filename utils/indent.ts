/**
 * Helper function for indenting text by a certain amount.
 * @param text text to indent
 * @param depth indent level
 * @param indentation indentation string (defaults to two whitespace characters)
 */
export function indent(
  text: string,
  depth: number,
  indentation = "  ",
): string {
  return `${indentation.repeat(depth)}${text}`;
}
