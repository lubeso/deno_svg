import { describe, it } from "testing/bdd.ts";
import { assertEquals } from "testing/asserts.ts";
import type { ElementReference } from "/types/element_reference.ts";
import type { ElementConfig } from "/types/element_config.ts";
import { createElement } from "/lib/create_element.ts";
import { SVG_NAMESPACE_URI } from "/constants";

/** Testing strategy
 * - tag name is 'svg'
 * - configuration specifies =0 attributes
 * - configuration specifies >0 attributes
 * - configuration specifies =0 children
 * - configuration specifies >0 children
 */

describe("createElement()", () => {
  it("tag name is 'svg'", () => {
    // arrange
    const tagName = "svg";
    // act
    const actual = createElement({ tagName });
    // assert
    const expected: ElementReference = {
      tagName,
      attributes: { "xmlns": SVG_NAMESPACE_URI },
      children: [],
    };
    assertEquals(actual, expected);
  });
  it("configuration specifies =0 attributes", () => {
    // arrange
    const tagName = "g";
    // act
    const actual = createElement({ tagName });
    // assert
    const expected: ElementReference = {
      tagName,
      attributes: {},
      children: [],
    };
    assertEquals(actual, expected);
  });
  it("configuration specifies >0 attributes", () => {
    // arrange
    const tagName = "g";
    const attributes = {
      "data-test": "test",
    };
    // act
    const actual = createElement({
      tagName,
      attributes,
    });
    // assert
    const expected: ElementReference = {
      tagName,
      attributes,
      children: [],
    };
    assertEquals(actual, expected);
  });
  it("configuration specifies =0 children", () => {
    // arrange
    const tagName = "g";
    // act
    const actual = createElement({ tagName });
    // assert
    const expected: ElementReference = {
      tagName,
      attributes: {},
      children: [],
    };
    assertEquals(actual, expected);
  });
  it("configuration specifies >0 children", () => {
    // arrange
    const tagName = "g";
    const children: Array<string | ElementConfig> = [
      {
        tagName: "tspan",
        children: ["Hello"],
      },
      "world!",
    ];
    // act
    const actual = createElement({ tagName, children });
    // assert
    const expected: ElementReference = {
      tagName,
      attributes: {},
      children: [
        {
          tagName: "tspan",
          attributes: {},
          children: ["Hello"],
        },
        "world!",
      ],
    };
    assertEquals(actual, expected);
  });
});
