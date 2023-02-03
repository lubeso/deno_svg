import type { ElementReference } from "../../core/types/element_reference.ts";
import { toString } from "./to_string.ts";
import { describe, it } from "@std:testing/bdd.ts";
import { assertEquals } from "@std:testing/asserts.ts";

/** Testing strategy
 * toString():
 *  - reference has no attributes
 *  - reference has some attributes
 *  - reference has no children
 *  - reference has some children
 */

describe("createElement()", () => {
  it("definition specifies no attributes", () => {
    // arrange
    const reference = createElementReference({
      tagName: "g",
      hasAttributes: false,
      hasChildren: false,
    });
    // act
    const str = toString(reference);
    // assert
    assertEquals(str, `<g><g>`);
  });
  it("definition specifies some attributes", () => {
    // arrange
    const reference = createElementReference({
      tagName: "g",
      hasAttributes: true,
      hasChildren: false,
    });
    // act
    const str = toString(reference);
    // assert
    assertEquals(str, `<g\n  data-test="test"\n><g>`);
  });
  it("definition specifies no children", () => {
    // arrange
    const reference = createElementReference({
      tagName: "g",
      hasAttributes: false,
      hasChildren: false,
    });
    // act
    const str = toString(reference);
    // assert
    assertEquals(str, `<g><g>`);
  });
  it("definition specifies some children", () => {
    // arrange
    const reference = createElementReference({
      tagName: "text",
      hasAttributes: false,
      hasChildren: true,
    });
    // act
    const str = toString(reference);
    // assert
    assertEquals(str, `<text>\n  test<text>`);
  });
});

/**
 * Configuration settings for creating a new element definition.
 */
interface CreateElementReferenceOptions {
  /**
   * Element reference tag name.
   */
  tagName: keyof SVGElementTagNameMap;
  /**
   * Whether this element reference should have any attributes.
   */
  hasAttributes: boolean;
  /**
   * Whether this element reference should have any children.
   */
  hasChildren: boolean;
}

/**
 * Create a new element definition according to the specified options.
 */
function createElementReference(
  options: CreateElementReferenceOptions,
): ElementReference<keyof SVGElementTagNameMap> {
  return {
    tagName: options.tagName,
    attributes: options.hasAttributes ? { "data-test": "test" } : {},
    children: options.hasChildren ? ["test"] : [],
  };
}
