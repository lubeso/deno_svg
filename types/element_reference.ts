/**
 * Interface type for describing any SVG element.
 */
export interface ElementReference {
  /**
   * Qualified name.
   */
  tagName: keyof SVGElementTagNameMap;
  /**
   * Attribute key-value pairs.
   */
  attributes: Record<string, string>;
  /**
   * Inner text content and/or child elements.
   */
  children: (string | ElementReference)[];
}
