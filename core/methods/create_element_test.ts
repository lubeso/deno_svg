import type { ElementDefinition } from "../types/element_definition.ts";
import { NAMESPACE_URI } from "../constants/namespace_uri.ts";
import { createElement } from "./create_element.ts";
import { describe, it } from "@std:testing/bdd.ts";
import { assertEquals } from "@std:testing/asserts.ts";

/** Testing strategy
 * createElement():
 *  - definition specifies no attributes
 *  - definition specifies some attributes
 *  - definition specifies no children
 *  - definition specifies some children
 *  - definition tag name is "svg"
 */

describe("createElement()", () => {
  it("definition specifies no attributes", () => {
    // arrange
    const definition = createElementDefinition({
      tagName: "g",
      hasAttributes: false,
      hasChildren: false,
    });
    // act
    const reference = createElement(definition);
    // assert
    assertEquals(reference.attributes, {});
  });
  it("definition specifies some attributes", () => {
    // arrange
    const definition = createElementDefinition({
      tagName: "g",
      hasAttributes: true,
      hasChildren: false,
    });
    // act
    const reference = createElement(definition);
    // assert
    assertEquals(reference.attributes, definition.attributes);
  });
  it("definition specifies no children", () => {
    // arrange
    const definition = createElementDefinition({
      tagName: "g",
      hasAttributes: false,
      hasChildren: false,
    });
    // act
    const reference = createElement(definition);
    // assert
    assertEquals(reference.children.length, 0);
  });
  it("definition specifies some children", () => {
    // arrange
    const definition = createElementDefinition({
      tagName: "g",
      hasAttributes: false,
      hasChildren: true,
    });
    // act
    const reference = createElement(definition);
    // assert
    if (definition.children) {
      assertEquals(reference.children.length, definition.children.length);
      for (let i = 0; i < reference.children.length; i++) {
        const actual = reference.children[i];
        const expected = definition.children[i];
        if (typeof expected === "string") {
          assertEquals(actual, expected);
        } else {
          assertEquals(actual, createElement(expected));
        }
      }
    } else {
      throw new Error("Should never get here!");
    }
  });
  it('definition tag name is "svg"', () => {
    // arrange
    const definition = createElementDefinition({
      tagName: "svg",
      hasAttributes: false,
      hasChildren: false,
    });
    // act
    const reference = createElement(definition);
    // assert
    assertEquals(reference.attributes, { "xmlns": NAMESPACE_URI });
  });
});

/**
 * Configuration settings for creating a new element definition.
 */
interface CreateElementDefinitionOptions<
  TagName extends keyof SVGElementTagNameMap & ("svg" | "g"),
> {
  /**
   * Desired element definition tag name.
   */
  tagName: TagName;
  /**
   * Whether this element definition should specify attributes.
   */
  hasAttributes: boolean;
  /**
   * Whether this element definition should specify children.
   */
  hasChildren: boolean;
}

/**
 * Create a new element definition according to the specified options.
 */
function createElementDefinition<
  TagName extends keyof SVGElementTagNameMap & ("svg" | "g"),
>(
  options: CreateElementDefinitionOptions<TagName>,
): ElementDefinition<TagName> {
  return {
    tagName: options.tagName,
    attributes: options.hasAttributes ? { "data-test": "test" } : undefined,
    children: options.hasChildren ? ["test"] : undefined,
  };
}
