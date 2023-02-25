import { assertEquals } from "@std:testing/asserts.ts";
import { describe, it } from "@std:testing/bdd.ts";
import type { ElementReference } from "../types.ts";
import { toText } from "./to_text.ts";

/** Testing strategy
 *  - element has =0 attributes and =0 children
 *  - element has >0 attributes
 *  - element has >0 children
 */

describe("toText()", () => {
  it("element has =0 attributes and =0 children", () => {
    // Arrange
    const element = createElementReference({
      hasAttributes: false,
      hasChildren: false,
    });
    // Act
    const text = toText(element);
    // TODO
    const expected = "<text></text>";
    assertEquals(text, expected);
  });
  it("element has >0 attributes", () => {
    // Arrange
    const element = createElementReference({
      hasAttributes: true,
      hasChildren: false,
    });
    // Act
    const text = toText(element);
    // TODO
    const expected = [
      `<text`,
      `  data-test="test"`,
      `></text>`,
    ].join("\n");
    assertEquals(text, expected);
  });
  it("element has >0 children", () => {
    // Arrange
    const element = createElementReference({
      hasAttributes: true,
      hasChildren: false,
    });
    // Act
    const text = toText(element);
    // TODO
    const expected = [
      `<text>`,
      `  test`,
      `</text>`,
    ].join("\n");
    assertEquals(text, expected);
  });
});

/**
 * Options for creating a new element definition.
 *
 * For testing purposes only.
 */
interface CreateElementReferenceOptions {
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
const EXPECTED_CHILDREN = ["test"];

/**
 * Create a new element definition according to the given options.
 *
 * For testing purposes only.
 */
function createElementReference(
  options: CreateElementReferenceOptions,
): ElementReference {
  return {
    tagName: "text",
    attributes: options.hasAttributes ? EXPECTED_ATTRIBUTES : {},
    children: options.hasChildren ? EXPECTED_CHILDREN : [],
  };
}
