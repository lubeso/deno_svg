import { describe, it } from "@std:testing/bdd.ts";
import type { ElementReference } from "../types.ts";

/** Testing strategy
 *  - element has =0 attributes and =0 children
 *  - element has >0 attributes
 *  - element has >0 children
 */

describe("toText()", () => {
  it("element has =0 attributes and =0 children", () => {
    // TODO
  });
  it("element has >0 attributes", () => {
    // TODO
  });
  it("element has >0 children", () => {
    // TODO
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
