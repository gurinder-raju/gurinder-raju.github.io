# Human Intelligence In The Age Of AI

Talk at **TPM Basecamp**, November 2025 · Gurinder Raju

> What I mean by human intelligence is your ability to work with others. And your efficacy in being able to work with others.

You've had plenty of advice on using AI to move faster. This talk is about the other half: while AI supercharges your productivity, don't leave human intelligence behind. It's aimed at TPMs, whose hardest work is aligning humans, and it closes with twelve practical tips.

<!-- After recording: `vhs demo.tape`, then uncomment the next line. -->
<!-- ![The deck running in a terminal with presenterm](demo.gif) -->

## View it

| | |
|---|---|
| **Browser** | [Open the deck](https://YOUR-DOMAIN/talks/2025/human-ai-intelligence/). Arrow keys or swipe to move, `?` for keys, `t` for light/dark, `p` to save as PDF. |
| **Terminal** | `brew install presenterm` (or `cargo install --locked presenterm`), then `presenterm slides.md`. Best at 100×30 or larger, i.e. full screen. |
| **Plain text** | [`slides.md`](slides.md) reads fine right here on GitHub. |

## The twelve tips

1. Meet lots of humans
2. Ask about goals
3. Align goals
4. Segment your work
5. Use AI to construct your arguments
6. Use AI as a conversational assistant
7. Personalize your AI artifacts
8. Be aware of your adeptness
9. Use AI for change management
10. Use AI for creating KPIs
11. Automate a segment
12. Be more inclusive

## How this was made

I gave this talk at TPM Basecamp in November 2025 and am publishing it here in October 2026.

`slides.md` is the single source. [presenterm](https://github.com/mfontanini/presenterm) renders it in a terminal with the theme in `kanagawa.yaml`. `build.py` inlines the same file into `index.html`, which renders it in the browser with a ~170-line script and no framework. Every slide carries a box-drawing diagram built from the slide's own words, and heavy lines mark what matters. Both renderers use the [Kanagawa](https://github.com/rebelot/kanagawa.nvim) palette.

```
slides.md          source of truth (presenterm markdown)
kanagawa.yaml      terminal theme
web/template.html  browser renderer
build.py           slides.md + template -> index.html (no dependencies)
index.html         built output, committed so Pages can serve it
demo.tape          vhs script for the terminal GIF
```

After editing `slides.md`, run `python3 build.py`.
