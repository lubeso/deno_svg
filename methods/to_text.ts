import type { ElementReference } from "../types.ts";

/**
 * Return a valid SVG text representation of the given element.
 */
export function toText(element: ElementReference): string {
  // Arrange
  let text = "";
  // Act
  text += getOpeningTagText(element);
  text += getInnerText(element);
  text += getClosingTagText(element);
  // Return
  return text;
}

/**
 * Helper method.
 */
function getOpeningTagText(_element: ElementReference): string {
  throw new Error("not implemented yet");
}

/**
 * Helper method.
 */
function getInnerText(_element: ElementReference): string {
  throw new Error("not implemented yet");
}

/**
 * Helper method.
 */
function getClosingTagText(_element: ElementReference): string {
  throw new Error("not implemented yet");
}
