/**
 * Helper function for concatenating a collection of strings.
 * @param glue string to put in between each piece
 * @param pieces the strings to join
 */
export function join(glue: string, ...pieces: string[]): string {
  return pieces.join(glue);
}
