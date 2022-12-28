import type { ElementReference } from "../types/element_reference.ts";
import { indent } from "../utils/indent.ts";

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

 /**
  * Helper function for creating a string representation of the 
  * opening tag for the SVG element represented by the given 
  * reference object.
  */
function parseOpeningTag(ref: ElementReference, depth: number): string {
  // arrange
  const { tagName } = ref;
  let str = indent("", depth);
  // act
  str += `<${tagName}`;
  str += parseAttributes(ref, depth);
  str += ">";
  // return
  return str;
}

 /**
  * Helper function for creating a string representation of the 
  * closing tag for the SVG element represented by the given 
  * reference object.
  */
function parseAttributes(ref: ElementReference, depth: number): string {
  // arrange
  const { attributes } = ref;
  const entries = Object.entries(attributes);
  let str = "";
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

 /**
  * Helper function for creating a string representation of the 
  * text content or nested child elements for the SVG element 
  * represented by the given reference object.
  */
function parseChildren(ref: ElementReference, depth: number): string {
  // arrange
  const { children } = ref;
  let str = "";
  // act
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    str += "\n";
    str += (typeof child === "string")
      ? indent(child, depth + 1)
      : toString(child, depth + 1);
  }
  if (children.length > 0) {
    // move to new line
    str += "\n";
    str += indent("", depth);
  }
  // return
  return str;
}

 /**
  * Helper function for creating a string representation of the 
  * attribute key-value pairs for the SVG element represented 
  * by the given reference object.
  */
function parseClosingTag(ref: ElementReference): string {
  return `</${ref.tagName}>`;
}
