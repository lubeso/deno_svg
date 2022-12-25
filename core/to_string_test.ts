import { describe, it } from "testing/bdd";
import { assertStrictEquals } from "testing/asserts";
import type { ElementReference } from "../types/element_reference.ts";
import { join } from "../utils/join.ts";
import { indent } from "../utils/indent.ts";
import { toString } from "./to_string.ts";

const TAG_NAME = "text";
const NEWLINE = "\n";

/** Testing strategy
 * - element has =0 attributes
 * - element has >0 attributes
 * - element has =0 children
 * - element has >0 children
 */

describe("toString()", () => {
  it("element has =0 attributes and =0 children", () => {
    // arrange
    const numAttributes = 0;
    const numChildren = 0;
    const ref = generateElement({ numAttributes, numChildren });
    // act
    const actual = toString(ref);
    // assert
    const expected = `<${TAG_NAME}></${TAG_NAME}>`;
    assertStrictEquals(actual, expected);
  });
  it("element has >0 attributes and =0 children", () => {
    // arrange
    const numAttributes = 2;
    const numChildren = 0;
    const ref = generateElement({ numAttributes, numChildren });
    // act
    const actual = toString(ref);
    // assert
    const expected = join(
      NEWLINE,
      `<${TAG_NAME}`,
      indent(`data-test-0="0"`, 1),
      indent(`data-test-1="1"`, 1),
      `></${TAG_NAME}>`,
    );
    assertStrictEquals(actual, expected);
  });
  it("element has >0 attributes and >0 children", () => {
    // arrange
    const numAttributes = 1;
    const numChildren = 2;
    const ref = generateElement({ numAttributes, numChildren });
    // act
    const actual = toString(ref);
    // assert
    const expected = join(
      NEWLINE,
      `<${TAG_NAME}`,
      indent(`data-test-0="0"`, 1),
      `>`,
      indent("Hello", 1),
      indent("<tspan>", 1),
      indent(" world!", 2),
      indent("</tspan>", 1),
      `</${TAG_NAME}>`,
    );
    assertStrictEquals(actual, expected);
  });
  it("element has =0 attributes and >0 children", () => {
    // arrange
    const numAttributes = 0;
    const numChildren = 1;
    const ref = generateElement({ numAttributes, numChildren });
    // act
    const actual = toString(ref);
    // assert
    const expected = join(
      NEWLINE,
      `<${TAG_NAME}>`,
      indent("Hello", 1),
      `</${TAG_NAME}>`,
    );
    assertStrictEquals(actual, expected);
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
function generateElement(options: GeneratorOptions): ElementReference {
  // arrange
  const { numAttributes, numChildren } = options;
  const entries: [string, string][] = [];
  const children: (string | ElementReference)[] = [];
  // act
  // generate attributes
  for (let i = 0; i < numAttributes; i++) {
    entries.push([`data-test-${i}`, `${i}`]);
  }
  const attributes = Object.fromEntries(entries);
  // generate children
  for (let j = 0; j < numChildren; j++) {
    if (j === 1) {
      children.push({
        tagName: "tspan",
        attributes: {},
        children: [" world!"],
      });
    } else {
      children.push("Hello");
    }
  }
  // return
  return {
    tagName: TAG_NAME,
    attributes,
    children,
  };
}
