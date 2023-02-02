/**
 * Represents an immutable reference to a SVG element.
 */
export interface ElementReference<TagName extends keyof SVGElementTagNameMap> {
  /**
   * Element qualified name.
   */
  tagName: TagName;
  /**
   * Element attribute key-value pairs.
   */
  attributes: Record<string, string>;
  /**
   * Child elements in order of appearance.
   */
  children: ElementReference<keyof SVGElementTagNameMap>[];
}
