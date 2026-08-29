# Mentoria Aberta

Dicas de estudo para concursos públicos, organizadas em documentação aberta e
mantidas pela comunidade.

O site é construído com [Astro](https://astro.build/) e
[Starlight](https://starlight.astro.build/pt-br/), publicado automaticamente no
GitHub Pages a cada alteração aceita na branch `main`.

## Rodando localmente

Requer Node.js 20 ou superior.

```sh
npm install
npm run dev      # http://localhost:4321
```

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Roda a checagem de tipos e gera o site em `dist/` |
| `npm run preview` | Serve o build de produção localmente |

## Estrutura

```text
src/
├── assets/                 imagens e a marca
├── components/             componentes personalizados
├── styles/
│   ├── tema.css            paleta e tipografia da marca
│   └── landing.css         estilos exclusivos da página inicial
└── content/docs/
    ├── index.mdx           landing page
    └── primeiros-passos/
        └── modelo-de-pagina.mdx
```

Cada arquivo `.md` ou `.mdx` dentro de `src/content/docs/` vira uma página. O
caminho do arquivo define a URL.

## Escrevendo uma página nova

Comece pelo [modelo de página](src/content/docs/primeiros-passos/modelo-de-pagina.mdx):
ele traz a estrutura esperada, o tom e todos os componentes disponíveis.

Ao criar a primeira página de uma seção nova, lembre de descomentar o grupo
correspondente em `astro.config.mjs` — grupos que apontam para diretórios vazios
quebram o build.

## Publicação

O site é publicado pelo workflow `.github/workflows/deploy.yml`. As variáveis
de repositório `SITE_URL` e `SITE_BASE` permitem configurar um domínio próprio;
sem elas, o site usa `https://Tultra.github.io/mentoria-aberta/`.

## Como contribuir

Leia o [guia de contribuição](CONTRIBUTING.md) e o
[código de conduta](CODE_OF_CONDUCT.md).

## Licenças

- Código e componentes: [MIT](LICENSE)
- Conteúdo educacional: [CC BY 4.0](LICENSE-CONTEUDO)
