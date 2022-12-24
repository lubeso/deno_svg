import type { ElementReference } from "./element_reference.ts";

/**
 * Convenience type for describing any SVG element configuration.
 */
export interface ElementConfig {
  /**
   * Qualified name.
   */
  tagName: ElementReference["tagName"];
  /**
   * Optional attribute key-value pairs.
   */
  attributes?: ElementReference["attributes"];
  /**
   * Optional text content or child elements.
   */
  children?: (string | ElementConfig)[];
}
