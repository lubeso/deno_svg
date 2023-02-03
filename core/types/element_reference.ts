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
   * A list of child elements or text content in order of appearance.
   */
  children: (string | ElementReference<keyof SVGElementTagNameMap>)[];
}
