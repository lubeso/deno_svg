import type { ElementReference } from "../types.ts";

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
 */
export function writeFile(
  _svg: ElementReference<"svg">,
  _options: WriteFileOptions = getDefaultWriteFileOptions(),
) {
  throw new Error("not implemented yet");
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
