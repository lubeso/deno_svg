import type { ElementReference } from "./types.ts";

export function toString<
  TagName extends keyof SVGElementTagNameMap,
>(_reference: ElementReference): string {
  throw new Error("not implemented yet");
}

/**
 * Options for configuring the `writeFile()` method.
 */
export interface WriteFileOptions {
  /**
   * Name of the file **without** extension.
   */
  name: string;
  /**
   * Base path for the new file.
   */
  basePath: string;
}

function getDefaultWriteFileOptions(): WriteFileOptions {
  const uuid = crypto.randomUUID();
  const [prefix, ..._] = uuid.split("-");
  return {
    name: prefix.toLocaleLowerCase(),
    basePath: ".",
  };
}

export async function writeFile(
  _reference: ElementReference,
  _options: WriteFileOptions = getDefaultWriteFileOptions(),
) {
  throw new Error("not implemented yet");
}
