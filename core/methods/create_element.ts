import type { ElementReference } from "../types/element_reference.ts";
import type { ElementDefinition } from "../types/element_definition.ts";
import { NAMESPACE_URI } from "../constants/namespace_uri.ts";

/**
 * Create a new SVG element reference from the given definition.
 */
export function createElement<
  TagName extends keyof SVGElementTagNameMap,
>(definition: ElementDefinition<TagName>): ElementReference<TagName> {
  return {
    tagName: definition.tagName,
    attributes: createAttributes(definition),
    children: createChildren(definition),
  };
}

/**
 * Helper function for creating attributes from an element definition.
 */
function createAttributes<
  TagName extends keyof SVGElementTagNameMap,
>(
  definition: ElementDefinition<TagName>,
): ElementReference<TagName>["attributes"] {
  if (definition.tagName === "svg") {
    return Object.assign({ "xmlns": NAMESPACE_URI }, definition.attributes);
  } else {
    return Object.assign({}, definition.attributes);
  }
}

/**
 * Helper function for creating children from an element definition.
 */
function createChildren<
  TagName extends keyof SVGElementTagNameMap,
>(
  definition: ElementDefinition<TagName>,
): ElementReference<TagName>["children"] {
  if (definition.children) {
    return definition.children.map(createChild);
  } else {
    return [];
  }
}

/**
 * Helper function for creating a child.
 */
function createChild<
  TagName extends keyof SVGElementTagNameMap,
>(
  child: string | ElementDefinition<TagName>,
): string | ElementReference<TagName> {
  if (typeof child === "object") {
    return createElement(child);
  } else {
    return child;
  }
}
