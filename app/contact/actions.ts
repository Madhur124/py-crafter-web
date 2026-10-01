'use server';

export type ContactState = {
  success?: boolean;
  error?: string;
};

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const company = (formData.get('company') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || !email || !message) {
    return { error: 'Name, email, and message are required.' };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  // TODO: wire up email (Resend / Nodemailer / DB).
  console.log('Contact submission:', { name, email, company, message });

  return { success: true };
}