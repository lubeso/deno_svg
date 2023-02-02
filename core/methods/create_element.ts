import type { ElementReference } from "../types/element_reference.ts";
import type { ElementDefinition } from "../types/element_definition.ts";

/**
 * Create a new SVG element reference from the given definition.
 */
export function createElement<
  TagName extends keyof SVGElementTagNameMap,
>(_definition: ElementDefinition<TagName>): ElementReference<TagName> {
  throw new Error("not implemented yet");
}
