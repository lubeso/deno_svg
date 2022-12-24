import { describe, it } from "testing/bdd";
import { assertStrictEquals } from "testing/asserts";
import type { ElementReference } from "/types/element_reference.ts";
import { toString } from "/core/to_string.ts";

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
    const expected = `<${TAG_NAME}></${TAG_NAME}`;
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
      indent(`data-test="0"`, 1),
      indent(`data-test="1"`, 1),
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
      indent(`data-test="0"`, 1),
      `>`,
      indent("Hello", 1),
      indent(`<tspan> world!</tspan>`, 1),
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
      `</${TAG_NAME}`,
    );
    assertStrictEquals(actual, expected);
  });
});

/**
 * Helper function for concatenating a collection of strings.
 * @param glue string to put in between each piece
 * @param pieces the strings to join
 */
function join(glue: string, ...pieces: string[]): string {
  return pieces.join(glue);
}

/**
 * Helper function for indenting text by a certain amount.
 * @param text text to indent
 * @param depth indent level
 * @param indentation indentation string (defaults to two whitespace characters)
 */
function indent(text: string, depth: number, indentation = "  "): string {
  return `${indentation.repeat(depth)}${text}`;
}

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
  throw new Error("not implemented yet");
}
