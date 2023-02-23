/**
 * Options for configuring the `indent()` method
 */
interface IndentOptions {
  /**
   * Indentation string.
   */
  indentation: string;
}

const DEFAULT_INDENT_OPTIONS: IndentOptions = {
  indentation: "  ",
};

/**
 * Indent the given text to the given depth
 * according to the given options.
 */
export function indent(
  text: string,
  currentDepth = 0,
  options: IndentOptions = DEFAULT_INDENT_OPTIONS,
): string {
  return options.indentation
    .repeat(currentDepth)
    .concat(text);
}
