import { NAMESPACE_URI } from "./constants.ts";
import type { ElementDefinition, ElementReference } from "./types.ts";

/**
 * Create a new element according to the given definition.
 */
export function createElement<
  TagName extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
>(
  definition: ElementDefinition<TagName>,
): ElementReference<TagName> {
  // Arrange
  const { tagName } = definition;
  // Act
  const attributes = createAttributes(definition);
  const children = createChildren(definition);
  // Return
  return { tagName, attributes, children };
}

/**
 * Create a new attribute key-value mapping according to the given definition.
 */
function createAttributes<
  TagName extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
>(
  definition: ElementDefinition<TagName>,
): ElementReference<TagName>["attributes"] {
  // Arrange
  const {
    tagName,
    attributes,
  } = definition;
  // Act
  const baseAttributes = tagName === "svg" ? { xmlns: NAMESPACE_URI } : {};
  // Return
  return Object.assign(baseAttributes, attributes ?? {});
}

/**
 * Create a new list of child elements according to the given definition.
 */
function createChildren<
  TagName extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
>(
  definition: ElementDefinition<TagName>,
): ElementReference<TagName>["children"] {
  // Arrange
  const { children } = definition;
  const _children = [];
  // Act
  if (children) {
    for (const child of children) {
      const _child = typeof child === "object" ? createElement(child) : child;
      _children.push(_child);
    }
  }
  // Assert
  return _children;
}
