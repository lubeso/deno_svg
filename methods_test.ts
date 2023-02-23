import { assert, assertEquals } from "@std:testing/asserts.ts";
import { describe, it } from "@std:testing/bdd.ts";
import { NAMESPACE_URI } from "./constants.ts";
import { createElement } from "./methods.ts";
import type { ElementDefinition } from "./types.ts";

/** Testing strategy
 *  - specify =0 attributes and =0 children
 *  - specify >0 attributes
 *  - specify >0 children
 *  - qualified name is "svg"
 */
describe("createElement()", () => {
  it("specify =0 attributes and =0 children", () => {
    // Arrange
    const definition = createElementDefinition({
      hasAttributes: false,
      hasChildren: false,
    });
    // Act
    const actual = createElement(definition);
    // Assert
    assertEquals(actual.tagName, "g");
    assertEquals(actual.attributes, {});
    assertEquals(actual.children, []);
  });
  it("specify >0 attributes", () => {
    // Arrange
    const definition = createElementDefinition({
      hasAttributes: true,
      hasChildren: false,
    });
    // Act
    const actual = createElement(definition);
    // Assert
    assertEquals(actual.tagName, "g");
    assertEquals(actual.attributes, EXPECTED_ATTRIBUTES);
    assertEquals(actual.children, []);
  });
  it("specify >0 children", () => {
    // Arrange
    const definition = createElementDefinition({
      hasAttributes: false,
      hasChildren: true,
    });
    // Act
    const actual = createElement(definition);
    // Assert
    assertEquals(actual.tagName, "g");
    assertEquals(actual.attributes, {});
    assert(actual.children.length === EXPECTED_NUM_CHILDREN);
    for (let i = 0; i < actual.children.length; i++) {
      assertEquals(typeof actual.children[i], "object");
      assertEquals(actual.children[i], {
        tagName: "g",
        attributes: {},
        children: [],
      });
    }
  });
  it('qualified name is "svg"', () => {
    // Arrange
    // Nothing to do here...
    // Act
    const actual = createElement({ tagName: "svg" });
    // Assert
    assertEquals(actual.tagName, "svg");
    assertEquals(actual.attributes, {
      xmlns: NAMESPACE_URI,
    });
    assertEquals(actual.children, []);
  });
});

/**
 * Options for creating a new element definition.
 *
 * For testing purposes only.
 */
interface CreateElementDefinitionOptions {
  /**
   * Whether or not to include text content or child elements.
   */
  hasChildren: boolean;
  /**
   * Whether or not to include attribute key-value pairs.
   */
  hasAttributes: boolean;
}

/**
 * Expected attributes returned from the element
 * definition fActory method for testing.
 */
const EXPECTED_ATTRIBUTES = { "data-test": "test" };

/**
 * Expected number of child elements returned from the
 * element definition fActory method for testing.
 */
const EXPECTED_NUM_CHILDREN = 3;

/**
 * Create a new element definition according to the given options.
 *
 * For testing purposes only.
 */
function createElementDefinition(
  options: CreateElementDefinitionOptions,
): ElementDefinition {
  // Arrange
  const {
    hasAttributes,
    hasChildren,
  } = options;
  // Act
  const attributes = hasAttributes ? { "data-test": "test" } : undefined;
  const children = hasChildren ? new Array<ElementDefinition>() : undefined;
  if (hasChildren) {
    for (let i = 0; i < EXPECTED_NUM_CHILDREN; i++) {
      children!.push({ tagName: "g" });
    }
  }
  // Return
  return {
    tagName: "g",
    attributes,
    children,
  };
}
