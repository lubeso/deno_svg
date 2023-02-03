import type { ElementReference } from "../../core/types/element_reference.ts";

/**
 * Return the given element reference as a string.
 */
export function toString(
  reference: ElementReference<keyof SVGElementTagNameMap>,
  currentIndent = 0,
): string {
  // arrange
  let str = "";
  // act
  str += getOpeningTag(reference, currentIndent);
  str += getBody(reference, currentIndent);
  str += getClosingTag(reference);
  // return
  return str;
}

function getOpeningTag(
  reference: ElementReference<keyof SVGElementTagNameMap>,
  currentIndent: number,
): string {
  // arrange
  let str = "";
  // act
  str += `<${reference.tagName}${getAttributes(reference, currentIndent)}>`;
  // return
  return str;
}

function getAttributes(
  reference: ElementReference<keyof SVGElementTagNameMap>,
  currentIndent: number,
): string {
  // arrange
  const entries = Object.entries(reference.attributes);
  let str = "";
  // act
  for (const [key, value] of entries) {
    str += "\n";
    str += "  ".repeat(currentIndent + 1);
    str += `${key}="${value}"`;
  }
  if (entries.length > 0) {
    str += "\n";
    str += "  ".repeat(currentIndent);
  }
  // return
  return str;
}

function getBody(
  reference: ElementReference<keyof SVGElementTagNameMap>,
  currentIndent: number,
): string {
  // arrange
  let str = "";
  // act
  for (const child of reference.children) {
    str += "\n";
    str += "  ".repeat(currentIndent + 1);
    if (typeof child === "string") {
      str += child;
    } else {
      str += toString(child, currentIndent + 1);
    }
  }
  if (reference.children.length > 0) {
    str += "\n";
    str += "  ".repeat(currentIndent);
  }
  // return
  return str;
}

function getClosingTag(
  reference: ElementReference<keyof SVGElementTagNameMap>,
): string {
  // arrange
  let str = "";
  // act
  str += `</${reference.tagName}>`;
  // return
  return str;
}
