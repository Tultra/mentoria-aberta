// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const OWNER = process.env.SITE_OWNER?.trim() || 'Tultra';
const REPO = process.env.SITE_REPO?.trim() || 'mentoria-aberta';
const CUSTOM_SITE = process.env.SITE_URL?.trim();
const CUSTOM_BASE = process.env.SITE_BASE?.trim();

const SITE = CUSTOM_SITE || `https://${OWNER}.github.io`;
const BASE = CUSTOM_BASE || (CUSTOM_SITE ? '/' : `/${REPO}`);

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Mentoria Aberta',
      description:
        'Dicas de estudo para concursos públicos, organizadas em documentação aberta e mantidas pela comunidade.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Português (Brasil)', lang: 'pt-BR' },
      },
      logo: {
        src: './src/assets/marca.svg',
        alt: 'Mentoria Aberta',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: `https://github.com/${OWNER}/${REPO}`,
        },
      ],
      editLink: {
        baseUrl: `https://github.com/${OWNER}/${REPO}/edit/main/`,
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: [
        '@fontsource-variable/manrope',
        '@fontsource-variable/inter',
        '@fontsource-variable/jetbrains-mono',
        './src/styles/tema.css',
        './src/styles/landing.css',
      ],
      sidebar: [
        {
          label: 'Primeiros passos',
          items: [{ autogenerate: { directory: 'primeiros-passos' } }],
        },
        // Descomente cada grupo conforme o conteúdo for sendo escrito.
        // Um grupo que aponta para diretório vazio quebra o build.
        // { label: 'Planejamento', items: [{ autogenerate: { directory: 'planejamento' } }] },
        // { label: 'Métodos de estudo', items: [{ autogenerate: { directory: 'metodos-de-estudo' } }] },
        // { label: 'Disciplinas', items: [{ autogenerate: { directory: 'disciplinas' } }] },
        // { label: 'Ferramentas', items: [{ autogenerate: { directory: 'ferramentas' } }] },
        {
          label: 'Saúde e rotina',
          items: [{ autogenerate: { directory: 'saude-e-rotina' } }],
        },
        // { label: 'Contribuindo', items: [{ autogenerate: { directory: 'contribuindo' } }] },
      ],
    }),
  ],
});
