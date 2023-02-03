import type { ElementReference } from "../../core/types/element_reference.ts";

/**
 * Return the given element reference as a string.
 */
export function toString(
  _reference: ElementReference<keyof SVGElementTagNameMap>,
): string {
  throw new Error("not implemented yet");
}
