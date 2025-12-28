/**
 * Generate a secure random UUID
 */
export const generateSecureRandomString = (length: number): string => {
    return crypto.randomUUID();
}