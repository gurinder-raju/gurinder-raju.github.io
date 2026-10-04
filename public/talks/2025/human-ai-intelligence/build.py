#!/usr/bin/env python3
"""Inline slides.md into web/template.html -> index.html.

slides.md is the single source of truth: presenterm renders it in a terminal,
GitHub renders it as markdown, and index.html renders it in a browser.
No dependencies. Run after editing slides.md:  python3 build.py
"""
from pathlib import Path

here = Path(__file__).parent
md = (here / "slides.md").read_text(encoding="utf-8")
if "</script" in md.lower():
    raise SystemExit("slides.md must not contain '</script'")
template = (here / "web" / "template.html").read_text(encoding="utf-8")
marker = "/*__SLIDES_MD__*/"
assert template.count(marker) == 1, "template marker missing"
(here / "index.html").write_text(template.replace(marker, md), encoding="utf-8")
print(f"wrote index.html ({md.count('<!-- end_slide -->') + 1} slides)")
