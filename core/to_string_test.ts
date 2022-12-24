import { describe, it } from "testing/bdd";
import { assertEquals } from "testing/asserts";
import type { ElementReference } from "/types/element_reference.ts";
import { createElement } from "/core/create_element.ts";

/** Testing strategy
 * - element has =0 attributes
 * - element has >0 attributes
 * - element has =0 children
 * - element has >0 children
 */

describe("toString()", () => {
  it("element has =0 attributes and =0 children", () => {
    // TODO
  });
  it("element has >0 attributes and =0 children", () => {
    // TODO
  });
  it("element has >0 attributes and >0 children", () => {
    // TODO
  });
  it("element has =0 attributes and >0 children", () => {
    // TODO
  });
});

/**
 * Configuration object for use when generating new element references.
 */
interface GeneratorOptions {
  /**
   * Number of attributes.
   */
  numAttributes: number;
  /**
   * Number of children.
   */
  numChildren: number;
}

/**
 * Helper method for creating new element references.
 */
function _elementGenerator(_options: GeneratorOptions): ElementReference {
  throw new Error("not implemented yet");
}
