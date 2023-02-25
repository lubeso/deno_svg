import { join } from "../deps.ts";
import type { ElementReference } from "../types.ts";
import { toText } from "./to_text.ts";

/**
 * Available configuration options for SVG file export
 */
export interface WriteFileOptions {
  /**
   * Name of this file (without extension)
   */
  name: string;
  /**
   * Target directory for exporting this file
   */
  basePath: string;
}

/**
 * Write the given element to a file.
 * @returns full path to exported file
 */
export async function writeFile(
  svg: ElementReference<"svg">,
  options: Partial<WriteFileOptions> = {},
): Promise<string> {
  // Arrange
  const defaultOptions = getDefaultWriteFileOptions();
  const name = options.name ?? defaultOptions.name;
  const basePath = options.basePath ?? defaultOptions.basePath;
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
function getDefaultWriteFileOptions(): WriteFileOptions {
  const uuid = crypto.randomUUID();
  const [prefix, ..._] = uuid.split("-");
  return {
    name: prefix.toLocaleLowerCase(),
    basePath: ".",
  };
}
