import type { ElementReference } from "../../core/types/element_reference.ts";
import { toString } from "../../utils/methods/to_string.ts";
import { join } from "https://deno.land/std@0.170.0/path/mod.ts";

/**
 * Required options for writing an element reference to a file
 */
export interface WriteFileOptions {
  /**
   * Name of output file.
   */
  filename: string;
  /**
   * Name of directory for output file.
   */
  directory: string;
}

/**
 * Export the given element reference as an SVG file.
 */
export async function writeFile(
  reference: ElementReference<"svg">,
  options?: Partial<WriteFileOptions>,
): Promise<string> {
  // arrange
  const defaultOptions = getDefaultWriteFileOptions();
  const { directory, filename } = Object.assign(defaultOptions, options);
  // act
  const text = toString(reference);
  const path = join(directory, filename);
  await Deno.writeTextFile(path, text);
  // return
  return path;
}

/**
 * Helper function for creating default file writing options.
 */
function getDefaultWriteFileOptions(): WriteFileOptions {
  return {
    filename: getDefaultFilename(),
    directory: getDefaultDirectory(),
  };
}

/**
 * Helper function for creating a default file name.
 */
function getDefaultFilename(): string {
  const uuid = crypto.randomUUID();
  const [prefix, ..._rest] = uuid.split("-");
  return prefix;
}

/**
 * Helper function for creating a default output directory.
 */
function getDefaultDirectory(): string {
  return ".";
}
