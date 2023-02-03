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
    assertEquals(reference.attributes, { "data-test": "test" });
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
    assertEquals(reference.children.length, 1);
    for (const child of reference.children) {
      assertEquals(typeof child, "string");
      assertEquals(child, "test");
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
  _options: CreateElementDefinitionOptions<TagName>,
): ElementDefinition<TagName> {
  throw new Error("not implemented yet");
}
