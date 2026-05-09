export function validateEmail(email: string) {
  const cleanEmail = email.trim();

  if (!cleanEmail) {
    return "Ingresá un email.";
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanEmail)) {
    return "Ingresá un email válido.";
  }

  return "";
}