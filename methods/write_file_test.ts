import { assertEquals } from "@std:testing/asserts.ts";
import { afterAll, beforeAll, describe, it } from "@std:testing/bdd.ts";
import { createElement } from "./create_element.ts";
import { writeFile } from "./write_file.ts";

let basePath: string;

/** Testing strategy
 *  - file contents are correct
 */

describe("writeFile()", () => {
  beforeAll(async () => {
    basePath = basePath ?? await Deno.makeTempDir();
  });
  afterAll(async () => {
    await Deno.remove(basePath, { recursive: true });
  });
  it("file contents are correct", async () => {
    // Arrange
    const svg = createElement({
      tagName: "svg",
      attributes: {
        width: "10px",
        height: "10px",
      },
      children: [
        {
          tagName: "text",
          attributes: {
            x: "50%",
            y: "50%",
            "text-anchor": "middle",
          },
          children: ["test"],
        },
      ],
    });
    // Act
    const path = await writeFile(svg, { basePath });
    const actual = await Deno.readTextFile(path);
    // Assert
    const expected = [
      `<svg`,
      `  width="10px"`,
      `  height="10px"`,
      `>`,
      `  <text`,
      `    x="50%"`,
      `    y="50%"`,
      `    text-anchor="middle"`,
      `  >`,
      `    test`,
      `  </text>`,
    ].join("\n");
    assertEquals(actual, expected);
  });
});
