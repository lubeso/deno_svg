import type { ElementReference } from "./element_reference.ts";

/**
 * Represents an immutable definition for a SVG element.
 */
export type ElementDefinition<TagName extends keyof SVGElementTagNameMap> =
  & Pick<ElementReference<TagName>, "tagName"> // tagName is required
  & Partial<Omit<ElementReference<TagName>, "tagName">>; // rest are optional
