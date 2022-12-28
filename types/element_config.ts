/**
 * Convenience interface type describing a SVG element.
 */
export interface ElementConfig {
  /**
   * Qualified name.
   */
  tagName: keyof SVGElementTagNameMap;
  /**
   * Optional attribute key-value pairs.
   */
  attributes?: Record<string, string>;
  /**
   * Optional text content or child elements.
   */
  children?: (string | ElementConfig)[];
}

