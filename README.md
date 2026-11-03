# Algo Smile — Dental Clinic Website

Static Next.js website for Algo Smile, Dr Hazem Tahoun, chirurgien-dentiste in Taza, Maroc.

- Phone / WhatsApp: +20 100 800 0172 (wa.me/201008000172)
- Address: Résidence Salam, Avenue Allal Ben Abdellah, 3ème étage, Taza
- Coordinates (Google Maps, verified): 34.221255, -4.0067704
- Languages: French (default), Arabic (RTL), English
- Booking form opens WhatsApp with the form details prefilled in the selected language
- Social: Instagram (instagram.com/drhazemtahoun_algosmileclinic) verified; Facebook links to a Facebook search, clearly marked as a placeholder (no verified page URL supplied)
- Before/after section shows two real cases from the clinic, each with its own slider (AFTER layer clipped on top of BEFORE), captioned as real results published by the clinic
- Chatbot: instant FAQ layer in French, Arabic and English, plus a guarded AI layer (GEMINI_API_KEY, server-side only). Prices and medical questions are deflected to WhatsApp.
- Logo: the clinic's own HD tooth+H mark (logo-mark-hd.png) in the header and footer, with the matching HD mark on white as the site icon (logo-favicon-hd.png)
- Placeholders the clinic must still confirm: opening hours (shown as Lun–Sam 09:00–19:00), hero stats, testimonials, doctor portrait (about section uses a clinic interior photo)
- Build: pnpm install, then pnpm run build (static export in out/).
