# Mentoria Aberta — Plano do Projeto

## Visão geral

O **Mentoria Aberta** será um projeto open source dedicado a reunir e organizar dicas de estudo para concursos públicos. O conteúdo será apresentado no formato de documentação, com uma landing page moderna, navegação hierárquica, busca e um fluxo simples de contribuição pelo GitHub.

## Decisão de repositório

O Mentoria Aberta será mantido em um **repositório Git independente** do repositório atual (`UltraTI`). O diretório `mentoria_aberta/` dentro de `UltraTI` será configurado como um **submódulo Git** e apontará para um commit específico do novo repositório.

Com isso:

- todo o código, conteúdo, histórico, issues, pull requests e releases pertencerá ao repositório `mentoria-aberta`;
- o repositório `UltraTI` não versionará individualmente os arquivos internos de `mentoria_aberta/`;
- `UltraTI` armazenará apenas a URL do submódulo e o commit do Mentoria Aberta que está sendo referenciado;
- atualizações no Mentoria Aberta poderão acontecer sem depender do ciclo de desenvolvimento do `UltraTI`;
- quem clonar `UltraTI` deverá inicializar os submódulos para obter o conteúdo de `mentoria_aberta/`.

Representação esperada:

```text
UltraTI (repositório atual)
├── .gitmodules
└── mentoria_aberta/  ──────► repositório independente mentoria-aberta
```

O arquivo `.gitmodules` será criado somente depois que existir uma URL definitiva para o novo repositório remoto.

## 1. Fundação

- Repositório público e independente `mentoria-aberta`.
- Referência a partir do `UltraTI` por meio de submódulo Git.
- Astro + Starlight.
- Conteúdo em Markdown e MDX.
- TypeScript para componentes personalizados.
- npm como gerenciador inicial de pacotes.
- GitHub Pages para hospedagem.
- GitHub Actions para validação e publicação automática.

O Starlight fornecerá a base da documentação, incluindo sidebar hierárquica, busca, responsividade e suporte a temas claro e escuro.

## 2. Arquitetura do repositório independente

```text
mentoria_aberta/
├── .github/
│   ├── workflows/deploy.yml
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   └── content/docs/
│       ├── index.mdx
│       ├── primeiros-passos/
│       ├── planejamento/
│       ├── metodos-de-estudo/
│       ├── disciplinas/
│       ├── ferramentas/
│       ├── saude-e-rotina/
│       └── contribuindo/
├── astro.config.mjs
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── README.md
└── package.json
```

## 3. Identidade visual

A identidade do Mentoria Aberta será um **derivado** da identidade da Ultra TI: mesma família de matiz (verde-lima/oliva) e mesma tipografia, com um acento funcional próprio. O objetivo é que o projeto seja reconhecido como parte da mesma casa sem parecer a página comercial de um curso pago.

### Restrição que orienta a paleta

A lima ácida da marca (`#e7ef6a`) tem contraste de **1.23:1** sobre fundo claro. Como o Starlight oferece tema claro e tema escuro, e a cor de acento é aplicada a links, item ativo da barra lateral e títulos, essa cor **não pode ser usada como acento funcional no tema claro**.

Regra: a lima ácida é **cor de destaque** — marca-texto, chips, botão primário, hero — e nunca cor de texto sobre fundo claro. O acento funcional do tema claro será uma versão escurecida da mesma família.

### Paleta base

| Papel | Tema claro | Tema escuro | Contraste |
| --- | --- | --- | --- |
| Fundo | `#fffef7` (paper) | `#111208` (ink) | — |
| Texto de corpo | `#111208` | `#e2e2dc` | 18.6:1 / 14.5:1 |
| Texto secundário | `#59595a` | `#9ba06a` | 6.9:1 / 6.9:1 |
| Acento (links, item ativo) | `#4a5035` (deep) | `#e7ef6a` (acid) | 8.3:1 / 15.2:1 |
| Acento em hover | `#3f4a22` | `#f0f6a0` | 9.4:1 |
| Superfície e cards | `#f4f4ee` | `#1a1c11` (panel) | — |
| Bordas | `rgba(74, 80, 53, 0.18)` | `rgba(168, 173, 88, 0.22)` | — |
| Botão primário | fundo `#e7ef6a` com texto `#111208` nos dois temas | | 15.2:1 |

Todos os pares de texto atendem ao nível AA da WCAG (mínimo de 4.5:1).

### Cores semânticas dos callouts

O amarelo convencional de "atenção" colide com a lima da marca e por isso foi deslocado para âmbar.

| Tipo | Tema claro | Tema escuro |
| --- | --- | --- |
| Nota | `#1c5a8c` | `#8cc4ea` |
| Dica | `#12695c` | `#5ad0bd` |
| Atenção | `#8a5300` | `#e6a84e` |
| Perigo | `#a5342a` | `#f0968a` |

Mínimo de 6.2:1 no tema claro e de 8.4:1 no tema escuro.

### Tipografia

- **Manrope** para títulos e elementos de interface.
- **Inter** para texto corrido.
- `ui-monospace` ou **JetBrains Mono** para blocos de código.

A tipografia é o vínculo de marca mais forte com a Ultra TI e deve ser preservada mesmo que a paleta evolua.

### Herança de componentes

O padrão de callout já existente na landing page da Ultra TI — borda `#323025`, fundo `#fffefa` e rótulo em chip ácido — deve ser reaproveitado nos componentes de dica e de passo do Starlight.

### Tokens do Starlight

Definição inicial para `src/styles/custom.css`:

```css
:root {
  --sl-color-accent-low: #242618;
  --sl-color-accent: #a8ad58;
  --sl-color-accent-high: #e7ef6a;
  --sl-color-white: #fffef7;
  --sl-color-gray-1: #eeeee6;
  --sl-color-gray-2: #c2c4b6;
  --sl-color-gray-3: #9ba06a;
  --sl-color-gray-4: #4a5035;
  --sl-color-gray-5: #242618;
  --sl-color-gray-6: #1a1c11;
  --sl-color-black: #111208;
}

:root[data-theme='light'] {
  --sl-color-accent-low: #e9ecd4;
  --sl-color-accent: #4a5035;
  --sl-color-accent-high: #323025;
  --sl-color-white: #111208;
  --sl-color-gray-1: #242618;
  --sl-color-gray-2: #4a5035;
  --sl-color-gray-3: #59595a;
  --sl-color-gray-4: #8a8a80;
  --sl-color-gray-5: #d8d8d0;
  --sl-color-gray-6: #eeeee6;
  --sl-color-gray-7: #f4f4ee;
  --sl-color-black: #fffef7;
}
```

No Starlight, `--sl-color-white` e `--sl-color-black` são invertidos no tema claro por definição: representam "cor de texto forte" e "cor de fundo", não valores literais.

## 4. Landing page

A página inicial deverá apresentar:

- proposta do Mentoria Aberta;
- botão **Começar a estudar**;
- botão **Contribuir**;
- cards das principais áreas de conteúdo;
- explicação resumida do processo de colaboração;
- espaço para indicadores do projeto no futuro;
- identidade visual moderna, acessível e responsiva.

## 5. Experiência de documentação

- Navegação lateral em árvore.
- Busca local com Pagefind.
- Índice automático dos tópicos de cada página.
- Navegação entre página anterior e próxima página.
- Temas claro e escuro.
- Link **Editar esta página no GitHub**.
- Componentes visuais para dicas, alertas, exemplos e passos.
- URLs organizadas, como `/metodos-de-estudo/revisoes/`.

## 6. Conteúdo inicial do MVP

O primeiro lançamento deverá conter páginas introdutórias sobre:

- como escolher um concurso;
- como interpretar um edital;
- plano e ciclo de estudos;
- revisões;
- resolução de questões;
- simulados;
- flashcards;
- constância e procrastinação;
- sono e rotina;
- ferramentas gratuitas.

Essas páginas também servirão como referência editorial para novas contribuições.

## 7. Processo de contribuição

- Guia `CONTRIBUTING.md`.
- Template para criação de páginas.
- Template de pull request.
- Instruções para correções pequenas diretamente pelo GitHub.
- Padrão editorial para títulos, fontes e linguagem.
- Código de conduta.
- Política contra informações enganosas e promessas de aprovação.

### Licenciamento sugerido

- **MIT** para código e componentes.
- **Creative Commons CC BY 4.0** para o conteúdo educacional.

A definição das licenças deverá ser confirmada antes do lançamento público.

## 8. Automação

- Validação do build em pull requests.
- Verificação de links quebrados.
- Formatação automática.
- Publicação da branch `main` no GitHub Pages.
- Deploys de preview poderão ser adicionados futuramente.

## 9. Etapas de implementação

1. Definir o proprietário e a URL do novo repositório público `mentoria-aberta`.
2. Criar ou clonar esse repositório em `UltraTI/mentoria_aberta/`.
3. Adicionar `mentoria_aberta/` ao `UltraTI` como submódulo Git.
4. Mover este plano para o histórico do repositório independente.
5. Aplicar a identidade visual da seção 3 e definir a organização editorial.
6. Inicializar Astro + Starlight no repositório independente.
7. Configurar idioma, metadados, sidebar e busca.
8. Implementar a landing page e os componentes visuais.
9. Criar o conteúdo inicial e os modelos editoriais.
10. Adicionar arquivos de governança e contribuição.
11. Configurar validações e deploy no GitHub Pages.
12. Testar build, links, acessibilidade básica e visualização móvel.

## 10. Critérios do primeiro lançamento

O MVP estará pronto quando possuir:

- landing page responsiva;
- identidade visual própria;
- pelo menos dez páginas de exemplo;
- árvore de navegação funcional;
- busca funcionando;
- fluxo documentado de contribuição;
- build validado;
- publicação automática no GitHub Pages;
- boa utilização em dispositivos móveis;
- README com instruções locais e visão do projeto;
- histórico Git próprio e independente do `UltraTI`;
- `mentoria_aberta/` registrado no `UltraTI` somente como submódulo.

## Referências técnicas

- [Starlight](https://starlight.astro.build/pt-br/getting-started/)
- [Deploy do Astro no GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
