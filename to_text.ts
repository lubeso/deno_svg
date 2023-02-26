import type { ElementReference } from "./types.ts";
import { indent } from "./utils.ts";

/**
 * Return a valid SVG text representation of the given element.
 */
export function toText(
  element: ElementReference,
  currentDepth = 0,
): string {
  // Arrange
  const currentLines = new Array<string>();
  // Act
  addLines(
    currentLines,
    element,
    currentDepth,
  );
  // Return
  return currentLines.join("\n");
}

function addLines(
  currentLines: Array<string>,
  element: ElementReference,
  currentDepth = 0,
): void {
  // Arrange
  const hasAttributes = Object.keys(element.attributes).length > 0;
  const hasChildren = element.children.length > 0;
  const isEmpty = !hasAttributes && !hasChildren;
  // Act
  if (isEmpty) {
    currentLines.push(
      indent(`<${element.tagName}></${element.tagName}>`, currentDepth),
    );
  } else {
    // Opening tag
    if (!hasAttributes) {
      currentLines.push(
        indent(`<${element.tagName}>`, currentDepth),
      );
    } else {
      currentLines.push(
        indent(`<${element.tagName}`, currentDepth),
      );
      for (const [key, value] of Object.entries(element.attributes)) {
        currentLines.push(
          indent(`${key}="${value}"`, currentDepth + 1),
        );
      }
      currentLines.push(
        indent(`>`, currentDepth),
      );
    }
    for (const child of element.children) {
      if (typeof child === "object") {
        addLines(currentLines, child, currentDepth + 1);
      } else {
        const lines = child.split("\n");
        for (const line of lines) {
          currentLines.push(
            indent(line, currentDepth + 1),
          );
        }
      }
    }
    // Closing tag
    currentLines.push(
      indent(`</${element.tagName}>`, currentDepth),
    );
  }
}
