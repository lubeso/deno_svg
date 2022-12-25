/**
 * Provides types and methods for representing SVG elements.
 */

// Types
export type { ElementReference } from "./types/element_reference.ts";
export type { ElementConfig } from "./types/element_config.ts";

// Constants
import { NAMESPACE_URI } from "./constants/namespace_uri.ts";

// Methods
import { createElement } from "./core/create_element.ts";
import { toString } from "./core/to_string.ts";

export default {
  NAMESPACE_URI,
  createElement,
  toString,
};
