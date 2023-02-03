/**
 * Represents an immutable definition for a SVG element.
 */
export interface ElementDefinition<TagName extends keyof SVGElementTagNameMap> {
  /**
   * Desired element tag name.
   */
  tagName: TagName;
  /**
   * Desired element attributes.
   */
  attributes?: Record<string, string>;
  /**
   * Desired element children.
   */
  children?: (string | ElementDefinition<keyof SVGElementTagNameMap>)[];
}
