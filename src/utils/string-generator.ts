/**
 * Generate a random string of a given length
 */
export const generateRandomString = (length: number): string => {
    return Math.random().toString(36).substring(2, 2 + length);
}