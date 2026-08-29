# Como contribuir

Toda contribuição é bem-vinda, da correção de uma vírgula à página inteira. Este
guia mostra o caminho mais curto para cada caso.

## Correção pequena, direto pelo GitHub

Para erro de digitação, link quebrado ou ajuste de uma frase, você não precisa
instalar nada:

1. Abra a página no site.
2. Clique em **Editar esta página no GitHub**, no rodapé.
3. Edite o texto, descreva a mudança e abra o pull request.

## Alteração maior, no seu computador

```sh
git clone https://github.com/Tultra/mentoria-aberta.git
cd mentoria-aberta
npm install
npm run dev
```

Crie uma branch, faça as alterações, rode `npm run build` e abra o pull request.

## Criando uma página

Copie `src/content/docs/primeiros-passos/modelo-de-pagina.mdx` para a seção onde
a página deve ficar e renomeie o arquivo. O nome do arquivo vira a URL: use
apenas letras minúsculas, números e hífen.

Se for a primeira página de uma seção que ainda não existe, descomente o grupo
correspondente em `astro.config.mjs`.

## Padrão editorial

O que é aceito:

- **Segunda pessoa e frase curta.** Instrução no imperativo: *“Leia o cronograma
  antes do conteúdo programático.”*
- **Problema declarado na abertura.** A primeira frase diz o que a página
  resolve, sem introdução histórica.
- **Limite explícito.** Toda recomendação tem uma seção sobre quando ela não
  vale. É isso que separa material útil de conselho solto.
- **Sinal observável.** Como a pessoa sabe que está funcionando, sem depender de
  sensação.
- **Fonte para todo dado numérico.** Sem fonte, o número sai.

O que é recusado na revisão:

- promessa de aprovação, de prazo ou de resultado garantido;
- superlativo sem sustentação (“o melhor método”, “o único caminho”);
- estatística inventada ou sem origem verificável;
- opinião pessoal apresentada como regra de banca;
- indicação de material pirateado ou de acesso irregular a conteúdo pago;
- propaganda de curso, mentoria ou produto, incluindo os nossos.

## Links internos

O site é publicado em um subcaminho (`/mentoria-aberta/`), então **link interno
absoluto quebra**. Escreva sempre relativo à URL da página atual:

```md
<!-- certo, a partir de /metodos-de-estudo/revisoes/ -->
[Como ler um edital](../../primeiros-passos/como-ler-um-edital/)

<!-- errado: ignora o subcaminho e vai dar 404 em produção -->
[Como ler um edital](/primeiros-passos/como-ler-um-edital/)
```

Sempre confira o link no `npm run dev` antes de abrir o pull request. A
verificação de links quebrados também roda no CI.

## Estilo de escrita

- Títulos em frase, com apenas a primeira letra maiúscula: *“Como ler um
  edital”*, não *“Como Ler Um Edital”*.
- No máximo dois destaques (`<Aside>`) por página.
- Passos numerados só para procedimento com ordem obrigatória.
- Tabela apenas para comparação em duas ou mais dimensões, com no máximo três
  colunas — tabela larga quebra no celular.

## Revisão

Pull requests são revisados quanto à correção da informação, à aderência ao
padrão editorial e ao build. Comentário de revisão é sobre o texto, nunca sobre
quem escreveu.

Ao contribuir, você concorda em publicar o conteúdo sob a licença
[CC BY 4.0](LICENSE-CONTEUDO) e o código sob a licença [MIT](LICENSE).
