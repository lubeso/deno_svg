import type { ElementDefinition, ElementReference } from "./types.ts";

/**
 * Create a new element according to the given definition.
 */
export function createElement<
  TagName extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
>(
  _definition: ElementDefinition<TagName>,
): ElementReference<TagName> {
  throw new Error("not implemented yet");
}
