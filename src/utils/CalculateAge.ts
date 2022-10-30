export const calculateAge = (dateOfBirth: Date): number => {
  const monthDiff = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(monthDiff);
  const year = ageDate.getUTCFullYear();
  return Math.abs(year - 1970);
};
