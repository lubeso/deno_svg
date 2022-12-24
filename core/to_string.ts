import type { ElementReference } from "/types/element_reference.ts";
import { indent } from "/utils/indent.ts";

/**
 * Create a valid SVG string representation of the given element.
 * @param ref element to represent as a string
 * @param depth indent level
 */
export function toString(ref: ElementReference, depth = 0): string {
  let str = "";
  str += parseOpeningTag(ref, depth);
  str += parseChildren(ref, depth);
  str += parseClosingTag(ref);
  return str;
}

function parseOpeningTag(ref: ElementReference, depth: number): string {
  // arrange
  let str = indent("", depth);
  // act
  str += `<${ref.tagName}`;
  str += parseAttributes(ref, depth);
  str += ">";
  // return
  return str;
}

function parseAttributes(ref: ElementReference, depth: number): string {
  // arrange
  let str = "";
  const { attributes } = ref;
  const entries = Object.entries(attributes);
  // act
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    str += "\n";
    str += indent(`${key}="${value}"`, depth + 1);
  }
  if (entries.length > 0) {
    // move to new line
    str += "\n";
    str += indent("", depth);
  }
  // return
  return str;
}

function parseChildren(ref: ElementReference, depth: number): string {
  // arrange
  let str = "";
  const { children } = ref;
  // act
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    str += "\n";
    if (typeof child === "string") {
      str += indent(child, depth + 1);
    } else {
      str += toString(child, depth + 1);
    }
  }
  if (children.length > 0) {
    // move to new line
    str += "\n";
    str += indent("", depth);
  }
  // return
  return str;
}

function parseClosingTag(ref: ElementReference): string {
  return `</${ref.tagName}>`;
}
