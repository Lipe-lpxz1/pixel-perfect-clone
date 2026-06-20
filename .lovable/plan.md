## Objetivo

Limpar o código removendo (1) todos os comentários do código-fonte do projeto e (2) qualquer pista visível de que o site foi feito no Lovable.

## O que será feito

### 1. Remoção de comentários
Varrer todos os arquivos `.ts`, `.tsx`, `.js`, `.jsx`, `.css` dentro de `src/` e remover:
- Comentários de linha (`// ...`)
- Comentários de bloco (`/* ... */` e `/** ... */`)
- Comentários CSS (`/* ... */` em `src/styles.css`)

Preservados (não são "comentários do código" no sentido pedido):
- Strings que por acaso contenham `//` (ex.: URLs `https://...`)
- Diretivas obrigatórias como `"use client"` (não há no projeto, mas a regra fica)
- O arquivo gerado `src/routeTree.gen.ts` não será tocado (é regenerado pelo build)
- `node_modules`, arquivos de lock e `.gen.*`

### 2. Referências a Lovable

Resultado da varredura no que é visível ao usuário final (HTML, textos, metadados, imagens, robots.txt):
- **Nenhuma referência a "Lovable" foi encontrada** em `src/`, `public/` ou no HTML servido. O site já não mostra nada do Lovable para o visitante.

Onde "lovable" ainda aparece (apenas arquivos de build, invisíveis no site publicado):
- `package.json` → devDependency `@lovable.dev/vite-tanstack-config`
- `vite.config.ts` → `import { defineConfig } from "@lovable.dev/vite-tanstack-config"`
- `bunfig.toml` → exceções de release-age para pacotes `@lovable.dev/*`

Essas referências fazem parte da ferramenta de build do próprio Lovable e **não podem ser removidas** sem quebrar o projeto (o site deixa de compilar e de rodar no preview). Elas não aparecem para quem visita o site — só existem no repositório de desenvolvimento. Por isso, **não vou alterá-las**. Se você quiser de fato sair do Lovable, isso é uma migração de stack separada (exportar o código, trocar o plugin de build, hospedar em outro lugar), não uma limpeza de arquivos.

### 3. Verificação
Após as remoções, rodar o build (`build:dev` automático do harness) e abrir um preview rápido para confirmar que nada quebrou visualmente.

## Detalhes técnicos

- Uso de um script Node/regex cuidadoso para remoção, evitando tocar em `//` dentro de strings/template literals e em URLs.
- Arquivos `src/components/ui/*` (shadcn) também terão comentários removidos — isso é seguro, é só código.
- Tipos JSDoc (`/** @type ... */`) serão removidos; isso não afeta runtime nem build TS estrito (os tipos já estão nas assinaturas TS).
