import type { ElementReference } from "/types/element_reference.ts";

/**
 * Convenience type for describing any SVG element configuration.
 */
type ElementConfig =
  & Pick<ElementReference, "tagName"> // tag name is required
  & Partial<Omit<ElementReference, "tagName">>; // attributes and children are optional

/**
 * Create a new immutable SVG element reference.
 */
export function createElement(_config: ElementConfig): ElementReference {
  throw new Error("not implemented yet");
}
