# SVG

![Tests](https://github.com/lubeso/deno-svg/actions/workflows/tests.yml/badge.svg)

Provides types and methods for representing SVG elements.

## Example

```ts
import * as SVG from "https://raw.githubusercontent.com/lubeso/deno_svg/main/mod.ts";

const svg = SVG.createElement({
  tagName: "svg",
  attributes: {
    "width": "1200px",
    "height": "1200px",
  },
  children: [
    {
      tagName: "style",
      children: [
        `text {`,
        `  font-size: 10rem;`,
        `}`,
      ],
    },
    {
      tagName: "text",
      attributes: {
        "x": "50%",
        "y": "50%",
        "text-anchor": "middle",
      },
      children: ["Hello world!"],
    },
  ],
});

const text = SVG.toString(svg);
console.info({ text });

const path = await SVG.writeFile(svg);
console.info({ path });
```

The contents of the output SVG file should match the following codeblock:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1200px"
  height="1200px"
>
  <style>
    text {
      font-size: 30rem;
    }
  </style>
  <text
    x="50%"
    y="50%"
    text-anchor="middle"
  >
    Hello world!
  </text>
</svg>
```
