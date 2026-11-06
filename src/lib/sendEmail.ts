// Web3Forms forwards form submissions to info@quisiteapp.it.
// The access key is public by design (it only allows sending to the inbox it was created for).
export const WEB3FORMS_ACCESS_KEY = "709221c7-679a-428d-b8bc-b71f0f05a310";
export const CONTACT_EMAIL = "info@quisiteapp.it";

export type EmailPayload = {
  subject: string;
  name: string;
  email: string;
  message: string;
  /** Extra labelled fields shown in the email (e.g. phone, business). */
  fields?: Record<string, string>;
  /** Honeypot value: real users leave it empty. */
  botcheck?: string;
};

export async function sendEmail({ subject, name, email, message, fields = {}, botcheck = "" }: EmailPayload): Promise<void> {
  // Bots fill hidden fields: pretend success without sending anything.
  if (botcheck) return;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Sito Qui.SiteApp",
      replyto: email,
      name,
      email,
      ...fields,
      message,
    }),
  });
  const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
  if (!res.ok || !data?.success) throw new Error(data?.message ?? `HTTP ${res.status}`);
}
