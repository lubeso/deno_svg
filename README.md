# SVG

![Tests](https://github.com/lubeso/deno-svg/actions/workflows/tests.yml/badge.svg)

Provides types and methods for representing SVG elements.

## Example

```ts
import SVG from "https://raw.githubusercontent.com/lubeso/deno-svg/main/mod.ts";

const svg = SVG.createElement({
  tagName: "svg",
  attributes: {
    "width": "800px",
    "height": "800px",
  },
  children: [
    {
      tagName: "text",
      attributes: {
        "text-anchor": "middle",
        "x": "400px",
        "y": "400px",
      },
      children: ["Hello world!"];
    }
  ]
});

const text = SVG.toString(svg);

await Deno.writeTextFile("output.svg", text);
```

The contents of the output SVG file should match the following codeblock:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="800px"
  height="800px"
>
  <text
    text-anchor="middle"
    x="400px"
    y="400px"
  >
    Hello world!
  </text>
</svg>
```
