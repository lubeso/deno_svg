import type { ElementReference } from "../types.ts";
import { indent } from "../utils.ts";

/**
 * Return a valid SVG text representation of the given element.
 */
export function toText(
  element: ElementReference,
  currentDepth = 0,
): string {
  // Arrange
  let text = "";
  // Act
  text += getOpeningTagText(element, currentDepth);
  text += getInnerText(element, currentDepth);
  text += getClosingTagText(element);
  // Return
  return text;
}

/**
 * Helper method.
 */
function getOpeningTagText(
  element: ElementReference,
  currentDepth: number,
): string {
  // Arrange
  const { tagName } = element;
  let text = "";
  // Act
  text += indent(
    `<${tagName}${getAttributesText(element, currentDepth)}>`,
    currentDepth,
  );

  // Return
  return text;
}

function getAttributesText(
  element: ElementReference,
  currentDepth: number,
): string {
  // Arrange
  const { attributes } = element;
  let text = "";
  // Act
  const entries = Object.entries(attributes);
  for (const [key, value] of entries) {
    text += "\n";
    text += indent(`${key}="${value}"`, currentDepth + 1);
  }
  if (entries.length > 0) {
    text += "\n";
  }
  // Return
  return text;
}

/**
 * Helper method.
 */
function getInnerText(
  element: ElementReference,
  currentDepth: number,
): string {
  // Arrange
  const { children } = element;
  let text = "";
  // Act
  for (const child of children) {
    text += "\n";
    text += typeof child === "object"
      ? toText(element, currentDepth + 1)
      : indent(child, currentDepth + 1);
  }
  if (children.length > 0) {
    text += "\n";
  }
  // Return
  return text;
}

/**
 * Helper method.
 */
function getClosingTagText(element: ElementReference): string {
  // Arrange
  const { tagName } = element;
  let text = "";
  // Act
  text += `</${tagName}>`;
  // Return
  return text;
}
