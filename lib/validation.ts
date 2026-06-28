export interface ContactFormData {
  name: string;
  organization?: string;
  email: string;
  phone: string;
  industry?: string;
  message: string;

  // Honeypot
  website?: string;
}

export function validateContact(data: ContactFormData) {
  if (!data.name.trim()) {
    return "Full Name is required.";
  }

  if (!data.email.trim()) {
    return "Email is required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    return "Please enter a valid email.";
  }

  if (!data.phone.trim()) {
    return "Phone Number is required.";
  }

  if (!/^[0-9+\-\s()]{8,20}$/.test(data.phone.trim())) {
    return "Please enter a valid phone number.";
  }

  if (!data.message.trim()) {
    return "Project details are required.";
  }

  return null;
}