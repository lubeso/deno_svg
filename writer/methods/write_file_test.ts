import type { ElementReference } from "../../core/types/element_reference.ts";
import { createElement } from "../../core/methods/create_element.ts";
import { toString } from "../../utils/methods/to_string.ts";
import { writeFile } from "./write_file.ts";
import { afterAll, beforeAll, describe, it } from "@std:testing/bdd.ts";
import { assertEquals } from "@std:testing/asserts.ts";

/** Testing strategy
 * writeFile():
 *  - output file contents are correct
 */
let directory: string;

describe("writeFile()", () => {
  beforeAll(async () => {
    directory = directory ?? await Deno.makeTempDir();
  });
  afterAll(async () => {
    await Deno.remove(directory, { recursive: true });
  });
  it("output file contents are correct", async () => {
    // arrange
    const reference = createElementReference();
    // act
    const path = await writeFile(reference, { directory });
    // assert
    const actual = await Deno.readTextFile(path);
    const expected = toString(reference);
    assertEquals(actual, expected);
  });
});

/**
 * Create a new element definition according to the specified options.
 */
function createElementReference(): ElementReference<"svg"> {
  return createElement({
    tagName: "svg",
    attributes: {
      "width": "100px",
      "height": "100px",
    },
    children: [
      {
        tagName: "rect",
        attributes: {
          "x": "0%",
          "y": "0%",
          "width": "50%",
          "height": "50%",
          "fill": "black",
        },
      },
      {
        tagName: "rect",
        attributes: {
          "x": "0%",
          "y": "50%",
          "width": "50%",
          "height": "50%",
          "fill": "white",
        },
      },
      {
        tagName: "rect",
        attributes: {
          "x": "50%",
          "y": "0%",
          "width": "50%",
          "height": "50%",
          "fill": "white",
        },
      },
      {
        tagName: "rect",
        attributes: {
          "x": "50%",
          "y": "50%",
          "width": "50%",
          "height": "50%",
          "fill": "black",
        },
      },
    ],
  });
}
