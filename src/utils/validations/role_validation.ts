export const validateRoles = (
  allowedRoles: string[],
  userRoles: string[],
): boolean => {
  return allowedRoles.some(role => userRoles.includes(role));
};
