import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://prosanitassalud.com.ar',
  output: 'static',
  integrations: [
    sitemap(),
    icon({
      include: {
        mdi: ['whatsapp', 'facebook-box', 'instagram', 'email-outline', 'map-marker-outline'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      SITE_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      SECRET_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      ENDPOINT: envField.string({ context: 'client', access: 'public', optional: true }),
      CONTACT_EMAIL: envField.string({ context: 'client', access: 'public', optional: true }),
      CONTACT_PHONE_OPERATIONS: envField.string({ context: 'client', access: 'public', optional: true }),
      CONTACT_PHONE_ADMINISTRATION: envField.string({ context: 'client', access: 'public', optional: true }),
      CONTACT_ADDRESS: envField.string({ context: 'client', access: 'public', optional: true }),
      CONTACT_FACEBOOK_LABEL: envField.string({ context: 'client', access: 'public', optional: true }),
      CONTACT_INSTAGRAM_LABEL: envField.string({ context: 'client', access: 'public', optional: true }),
      SOCIAL_FACEBOOK_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      SOCIAL_INSTAGRAM_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      SOCIAL_WHATSAPP_URL: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
});
