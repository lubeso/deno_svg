import type { ElementConfig } from "../types/element_config.ts";
import type { ElementReference } from "../types/element_reference.ts";
import { NAMESPACE_URI } from "../constants/namespace_uri.ts";

/**
 * Create a new immutable SVG element reference.
 */
export function createElement(config: ElementConfig): ElementReference {
  return {
    tagName: config.tagName,
    attributes: readAttributes(config),
    children: readChildren(config),
  };
}

/**
 * Helper function for reading attribute key-value pairs from an element 
 * configuration object.
 */
function readAttributes(config: ElementConfig): Record<string, string> {
  // arrange
  const customAttributes = config.attributes ?? {};
  // act
  const defaultAttributes = (config.tagName === "svg")
    ? { xmlns: NAMESPACE_URI }
    : {};
  // return
  return Object.assign(defaultAttributes, customAttributes);
}

/**
 * Helper function for reading text content or child elements from an 
 * element configuration object.
 */
function readChildren(config: ElementConfig): (string | ElementReference)[] {
  // arrange
  const children: (string | ElementReference)[] = [];
  // act
  for (const child of config.children ?? []) {
    if (typeof child === "string") {
      children.push(child);
    } else {
      children.push(createElement(child));
    }
  }
  // return
  return children;
}
