export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

export function validateContact(data: ContactFormData) {
  if (!data.name.trim())
    return "Full Name is required.";

  if (!data.email.trim())
    return "Email is required.";

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  )
    return "Please enter a valid email.";

  if (!data.phone.trim())
    return "Phone Number is required.";

  if (data.phone.length < 8)
    return "Phone Number is invalid.";

  if (!data.message.trim())
    return "Project details are required.";

  return null;
}