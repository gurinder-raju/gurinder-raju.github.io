---
title: "Beyond Computer Use: What Agents Need to Accomplish Real Work"
date: 2026-10-04
description: "Frontier models are failing most of a new benchmark called Agents' Last Exam (ALE)."
image: ./computer_use_green_fir.png
imageAlt: "A browser window with a cursor clicking a button, flanked by an app list and a checklist of completed tasks"
---
Frontier models are failing most of a new benchmark called Agents' Last Exam (ALE).

ALE and OSWorld are both computer-use agent (CUA) benchmarks, testing whether agents can operate a computer environment to achieve an outcome. OSWorld focuses on operating the computer itself, and frontier success rates have climbed from ~12% in 2024 to over 80% in 2026. I saw this progress up close when the team built Amazon WorkSpaces for AI agents, giving agents the ability to operate enterprise applications through MCP. Microsoft's Windows 365 for Agents converged on the same approach. ALE adds what real work demands on top of that: long-horizon reasoning across professional workflows. There, the best agents pass only ~30% of tasks today, and on the hardest tier the average pass rate was under 3% at launch.

Broad adoption across consumers and enterprises depends on agents reliably and efficiently completing that real work, not just on the ability to operate computers. Two surfaces matter most:

**1/ The Web Is The First Consumer Surface:** A large share of useful consumer agent work happens on websites: researching and booking travel, requesting quotes, filling forms, monitoring sites for updates, or completing transactions. That's most of what I use Meta’s Muse for. Today this usually requires a visual loop: capture the page, interpret it, decide, click or type, repeat. Every step adds visual inference, latency, and chances for error.

That's why new approaches like WebMCP and NLWeb matter. WebMCP lets sites expose actions as tools, so one tool call can replace dozens of inferred clicks. NLWeb takes a related approach, making site content and capabilities accessible through natural-language interfaces.

**2/ Native Applications Are The Enterprise Surface:** Enterprise workflows span browsers, productivity suites, ERP systems, proprietary software, internal tools, and decades of applications that may never expose clean APIs. Structured tools and APIs still win where they exist; computer use covers the long tail where they don't.

But operating these applications is only part of the job, and that's the gap ALE measures. The challenge is no longer whether a model can find a button. Real enterprise work means reasoning across applications, holding constraints and state over long workflows, producing artifacts, and verifying the work was actually done. Teams compensate today with skills and recipes that encode the procedure for the agent. That works for well-defined workflows, but ambiguous tasks need the base model itself to get better.

Across both surfaces, there's still enormous headroom in efficiency and reliability. Watch progress on benchmarks like ALE closely. To me, it's the best proxy for when agents are truly ready for real work.
