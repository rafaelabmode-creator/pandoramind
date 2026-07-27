# PandoraMind — Plataforma de Cursos de Psicologia 💜

Plataforma de cursos de Psicologia da **Ráfa Modè**: formação clínica direta ao ponto,
ética e baseada em evidências — para psicólogos e para todos.

Construída com **Vite + React + TypeScript + Tailwind CSS**. Identidade visual roxa.

## Rodar localmente

```sh
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

Para gerar a versão de produção:

```sh
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build
```

## Como adicionar um novo curso (é só preencher uma ficha!)

Toda a plataforma é alimentada por **um único arquivo**:
[`src/data/courses.ts`](src/data/courses.ts).

Para publicar um curso novo, copie um dos objetos existentes no array `courses`,
troque os dados e pronto — a **home**, o **catálogo** e a **página do curso** se
atualizam sozinhos. Você não precisa mexer no layout.

Campos principais da ficha de curso:

| Campo | Para que serve |
|---|---|
| `slug` | Endereço do curso (`/cursos/seu-slug`) |
| `title`, `subtitle` | Nome e subtítulo |
| `audience` | `"psicologos"` ou `"todos"` (usado no filtro do catálogo) |
| `status` | `"inscricoes-abertas"`, `"lista-de-espera"` ou `"em-breve"` |
| `featured` | Se aparece na home |
| `shortDescription` | Texto do card |
| `longParagraphs` | Descrição completa (um item por parágrafo) |
| `highlights` | "O que você vai dominar" |
| `targetAudience` | "Para quem é" |
| `includes` | "O que está incluído" |
| `ficha` | Ficha técnica (formato, carga horária, datas...) |
| `priceLots` | Lotes de preço |
| `paymentConditions`, `priceNote` | Observações de pagamento |

Dados de marca e contato (WhatsApp, e-mail) ficam em
[`src/data/site.ts`](src/data/site.ts).

## Estrutura

```
src/
  data/        courses.ts (catálogo) · site.ts (marca/contato)
  components/  Header, Footer, CourseCard, Logo, ScrollToTop
  pages/       Home, Courses, CourseDetail, NotFound
```

## Publicação

O projeto gera um site estático (pasta `dist/`), pronto para hospedar em Vercel,
Netlify, Cloudflare Pages ou similar, e apontar para o domínio `pandoramind.com.br`.
