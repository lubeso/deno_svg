import { join } from "./deps.ts";
import { toText } from "./to_text.ts";
import type { ElementReference } from "./types.ts";

/**
 * Write the given element to a file.
 * @returns full path to exported file
 */
export async function writeFile(
  svg: ElementReference<"svg">,
  options: {
    name?: string;
    basePath?: string;
  } = {},
): Promise<string> {
  // Arrange
  const name = options.name ?? getRandomName();
  const basePath = options.basePath ?? ".";
  // Act
  const text = toText(svg);
  const path = join(basePath, `${name}.svg`);
  await Deno.writeTextFile(path, text);
  // Return
  return path;
}

/**
 * Helper method.
 */
function getRandomName(): string {
  const uuid = crypto.randomUUID();
  const [prefix, ..._] = uuid.split("-");
  return prefix.toLocaleLowerCase();
}
