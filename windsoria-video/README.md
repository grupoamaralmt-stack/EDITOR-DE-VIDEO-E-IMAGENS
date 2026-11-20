# Windsoria — vídeo promocional (Remotion)

Projeto de edição de vídeo em React com [Remotion](https://www.remotion.dev/).
A composição principal é `Windsoria`: 1920×1080, 30 fps, 555 frames (18,5 s).

## Estrutura da composição

| Cena | Frames | Conteúdo |
| --- | --- | --- |
| Intro | 0–119 | Marca "Windsoria" com entrada letra a letra |
| Beat 1 | 120–224 | "Ideias viram vídeo." |
| Beat 2 | 225–329 | "Imagem nítida, ritmo firme." |
| Beat 3 | 330–434 | "Um projeto, todas as telas." |
| Outro | 435–554 | "Crie. Edite. Publique." |

Arquivos principais:

- `src/theme.ts` — dimensões, paleta, fonte, área segura e escala tipográfica.
  **A paleta é um placeholder:** troque `COLORS` pelas cores reais da marca.
- `src/animations.ts` — helpers de animação (`spring` com `damping: 200`).
- `src/components/Scene.tsx` — layout de cada cena dentro da área segura e fade-out.
- `src/scenes/` — `Intro`, `Beat` (kicker + título + linha + texto) e `Outro`.
- `src/WindsoriaPromo.tsx` — ordem e duração das cenas (`DURATIONS`).
- `src/Composition.tsx` / `src/Root.tsx` — registro da composição `Windsoria`.

Para mudar duração de uma cena, edite `DURATIONS` em `src/WindsoriaPromo.tsx`;
a duração total da composição é recalculada automaticamente.

## Comandos

```console
npm i --loglevel=error     # instalar dependências
npm run dev                # abrir o Remotion Studio (preview)
npm run lint               # eslint + tsc
npx remotion render Windsoria out/windsoria.mp4   # renderizar o vídeo final
```

Para renderizar só um frame de conferência:

```console
npx remotion still Windsoria --frame=60 out/frame-60.png
```

## Textos e marca

Os textos estão em português e são placeholders. Para trocar a mensagem, edite as
props de `<Beat>` e os textos de `Intro`/`Outro` em `src/`.

## Docs

- [Fundamentos do Remotion](https://www.remotion.dev/docs/the-fundamentals)
- [Referência de APIs](https://www.remotion.dev/docs)
