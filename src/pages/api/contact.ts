export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    const { name, email, phone, message, interes, terms } = await request.json();

    if (!name || !email || !phone || !message || !terms) {
        return new Response(JSON.stringify({
            message: 'Missing required fields',
        }), { status: 400 });
    }

    const emailContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background-color: #f8f9fa; color: #212529; margin: 20px auto;">
    <h2 style="color: #0d6efd;">📬 Nueva solicitud de contacto</h2>
    <hr style="border: none; border-top: 1px solid #dee2e6; margin: 16px 0;" />
    
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Interés:</strong> ${interes}</p>
    <p><strong>Mensaje:</strong></p>
    <div style="background-color: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #dee2e6; margin-bottom: 16px;">
      ${message}
    </div>
    <p><strong>Términos aceptados:</strong> ${terms ? "✅ Sí" : "❌ No"}</p>

    <hr style="border: none; border-top: 1px solid #dee2e6; margin: 24px 0;" />
    <footer style="font-size: 12px; color: #6c757d;">
      Este correo fue generado automáticamente desde el formulario de contacto de tu sitio web.
    </footer>
  </div>
`;

    try {
        const { data, error } = await resend.emails.send({
            from: "TPC Express <gerencia@tpcxpress.com>",
            to: ["info@tpcxpress.com"],
            subject: `Nueva Solicitud de Contacto`,
            html: emailContent,
            text: emailContent,
        });

        if (error) {
            return new Response("Error sending email", { status: 400 });
        }

        return new Response(JSON.stringify(data), { status: 200, statusText: "Email sent successfully" });
    } catch (error) {
        return new Response("Error sending email", { status: 500 });
    }
}