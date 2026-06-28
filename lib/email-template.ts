export interface EmailTemplateProps {
  name: string;
  organization?: string;
  email: string;
  phone: string;
  industry?: string;
  message: string;
}

const baseFont = "font-family:Arial,Helvetica,sans-serif;";

/* =======================================
   🧠 ADMIN EMAIL (CRM / INTERNAL ALERT)
======================================= */
export function adminEnquiryTemplate(data: EmailTemplateProps) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>

<body style="margin:0;padding:30px;background:#eef5f9;${baseFont}">

<table width="680" align="center" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

<!-- HEADER -->
<tr>
<td style="background:#04151f;padding:26px;text-align:center;">
<h2 style="margin:0;color:#22d3ee;">Rakshak Secure Tech</h2>
<p style="margin-top:6px;color:#94a3b8;font-size:13px;">
Internal Lead Notification
</p>
</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:26px;">

<h3 style="margin-top:0;color:#0f172a;">New Enquiry Received</h3>

<table width="100%" cellpadding="8" style="font-size:14px;color:#334155;">
<tr><td><b>Name</b></td><td>${data.name}</td></tr>
<tr><td><b>Organization</b></td><td>${data.organization || "-"}</td></tr>
<tr><td><b>Email</b></td><td>${data.email}</td></tr>
<tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
<tr><td><b>Industry</b></td><td>${data.industry || "-"}</td></tr>
</table>

<div style="margin-top:18px;padding:16px;background:#f8fafc;border-radius:10px;">
<h4 style="margin:0 0 8px 0;color:#0891b2;">Customer Message</h4>
<p style="white-space:pre-line;line-height:1.6;color:#374151;margin:0;">
${data.message}
</p>
</div>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#04151f;padding:12px;text-align:center;color:#94a3b8;font-size:12px;">
CRM System • Rakshak Secure Tech
</td>
</tr>

</table>

</body>
</html>
`;
}

/* =======================================
   👤 CLIENT EMAIL (AUTO REPLY - FINAL POLISHED)
======================================= */
export function clientEnquiryTemplate(data: EmailTemplateProps) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>

<body style="margin:0;padding:0;background:#f1f5f9;${baseFont}">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.08);">

<!-- HEADER -->
<tr>
<td style="background:linear-gradient(135deg,#04151f,#0b2a3a);padding:30px;text-align:center;">

<img src="https://rakshaksecuretech.com/logo.png" width="140" style="margin-bottom:10px;" />

<h2 style="margin:0;color:#22d3ee;">Rakshak Secure Tech</h2>
<p style="margin-top:6px;color:#cbd5e1;font-size:13px;">
AI-Powered Security & Surveillance Solutions
</p>

</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:30px;color:#0f172a;">

<!-- GREETING (STANDARDIZED + PROFESSIONAL) -->
<h2 style="margin-top:0;">Dear ${data.name},</h2>

<p style="color:#374151;line-height:1.7;">
We acknowledge the receipt of your enquiry submitted to <b>Rakshak Secure Tech</b>.
</p>

<p style="color:#374151;line-height:1.7;">
Thank you for showing interest in our security and surveillance solutions.
Our team has successfully recorded your requirements and will review them in detail.
</p>

<!-- SUMMARY -->
<h3 style="margin-top:22px;">Enquiry Summary</h3>

<div style="background:#f8fafc;padding:16px;border-radius:12px;">

<p><b>Name:</b> ${data.name}</p>
<p><b>Organization:</b> ${data.organization || "-"}</p>
<p><b>Email:</b> ${data.email}</p>
<p><b>Phone:</b> ${data.phone}</p>
<p><b>Industry:</b> ${data.industry || "-"}</p>

</div>

<!-- REQUIREMENT -->
<h3 style="margin-top:22px;color:#0891b2;">Project Requirement</h3>

<div style="border:1px solid #e5e7eb;padding:16px;border-radius:12px;">
<p style="white-space:pre-line;line-height:1.7;color:#374151;margin:0;">
${data.message}
</p>
</div>

<!-- RESPONSE TIME -->
<div style="margin-top:20px;padding:14px;background:#ecfeff;border-left:4px solid #22d3ee;border-radius:8px;">
<p style="margin:0;color:#0f172a;">
We will respond within <b>24–48 business hours</b> with a suitable solution tailored to your requirements.
</p>
</div>

<!-- CLOSING -->
<p style="margin-top:20px;color:#374151;">
If your enquiry is urgent, you may reply directly to this email.
</p>

<p style="color:#6b7280;line-height:1.6;">
Warm Regards,<br/>
<b>Rakshak Secure Tech Team</b><br/>
Protection Through Technology
</p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#04151f;padding:12px;text-align:center;color:#94a3b8;font-size:12px;">
© ${new Date().getFullYear()} Rakshak Secure Tech
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}