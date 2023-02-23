/**
 * An immutable element definition.
 */
export interface ElementDefinition<
  TagName extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
> {
  /**
   * Qualified name for the element.
   */
  tagName: TagName;
  /**
   * Optional attribute key-value pairs.
   */
  attributes?: Record<string, string>;
  /**
   * Optional text content and child elements in
   * order of appearance.
   */
  children?: (string | ElementDefinition)[];
}

/**
 * An immutable reference to an SVG element.
 */
export interface ElementReference<
  TagName extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap,
> {
  /**
   * Qualified name for this element.
   */
  tagName: TagName;
  /**
   * Attribute key-value pairs.
   */
  attributes: Record<string, string>;
  /**
   * Text content and child elements in order of appearance.
   */
  children: (string | ElementReference)[];
}
