import type { ElementReference } from "../../core/types/element_reference.ts";

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
): Promise<void> {
  throw new Error("not implemented yet");
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
  return Deno.cwd();
}
