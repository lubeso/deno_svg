import type { ElementConfig } from "../types/element_config.ts";
import type { ElementReference } from "../types/element_reference.ts";
import { SVG_NAMESPACE_URI } from "../constants/svg_namespace_uri.ts";

/**
 * Create a new immutable SVG element reference.
 */
export function createElement(config: ElementConfig): ElementReference {
  // arrange
  const { tagName } = config;
  // act
  const attributes = parseAttributes(config);
  const children = parseChildren(config);
  // return
  return {
    tagName,
    attributes,
    children,
  };
}

/**
 * Helper function for parsing attribute key-value pairs from an element configuration object.
 */
function parseAttributes(
  config: ElementConfig,
): ElementReference["attributes"] {
  // arrange
  const { tagName } = config;
  // act
  const attributes: ElementReference["attributes"] = (tagName === "svg")
    ? { xmlns: SVG_NAMESPACE_URI }
    : {};
  // return
  return (config.attributes)
    ? Object.assign(attributes, config.attributes)
    : attributes;
}

/**
 * Helper function for parsing text content or child elements from an element configuration object.
 */
function parseChildren(config: ElementConfig): ElementReference["children"] {
  // arrange
  const children: ElementReference["children"] = [];
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
