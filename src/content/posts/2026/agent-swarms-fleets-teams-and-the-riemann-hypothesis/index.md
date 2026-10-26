---
title: "Agent Swarms, Fleets, Teams, and the Riemann Hypothesis"
date: 2026-10-13
description: "As agents scale, coordination becomes a distributed-systems problem. Three patterns are emerging: swarms, fleets, and teams."
image: ./agent-swarm-riemann.png
imageAlt: "A lead chat bubble delegating to three agent bubbles beside a glowing wave-shaped surface, set on stone pedestals with an oak leaf and a fir sprig"
---
As agentic adoption grows, the conversation is moving beyond how to build an effective agent to how agents can operate at scale and coordinate effectively. Decision-making authority is a familiar problem in distributed systems. Except now we're applying it to autonomous, non-deterministic decision-makers, not deterministic software. There are many ways to categorize multi-agent architectures, but I see three broad patterns:

**1/ Agent Swarms — Emergent Coordination:** More aligned with research and exploration, where the solution isn't known upfront (mathematical research, more on this below). Agents work independently, share findings, and converge toward promising solutions without a central orchestrator. Coordination emerges from the agents and their shared state, much like <u>gossip protocols and eventual convergence</u>[^gossip] in distributed systems. AWS's recent kiro-flock is an interesting implementation, with agents coordinating through shared S3 logs[^kiro-flock].

**2/ Agent Fleets — Shared Constraints:** More aligned with large-scale production workloads. Think thousands of customer-service or sales agents independently serving customers while operating under common budgets, quotas, and business policies. Agents make their own decisions, but shared infrastructure arbitrates what is permissible. The distributed-systems parallel is <u>transactions and concurrency control</u>[^concurrency]. AWS's recent Dogwood is an interesting building block, with authorization policies that remember what an agent has already done, so limits like "no more than $5,000 per hour" can be enforced at runtime[^dogwood].

**3/ Agent Teams — Explicit Orchestration:** More aligned with workflows requiring specialized responsibilities. Think of a company operating with Sales, Finance, Legal, and IT agents collaborating on shared goals. Coordination happens through delegation, handoffs, or a supervisor agent. The parallel is <u>leader–worker coordination</u>[^leader-worker] and workflow orchestration, where responsibilities and dependencies are explicitly managed. Anthropic's multi-agent research system, where a lead agent plans and delegates to specialized subagents, is a good example[^research-system].

**The Riemann Hypothesis:** Last month, OpenAI used a swarm of about 10,000 agents to attack hard open math problems, including Navier–Stokes. I'm no mathematician, and fluid dynamics isn't my area of expertise, but I've long been fascinated by the Riemann Hypothesis. At its heart is a mystery: how often do prime numbers appear as numbers grow larger? In August, Claude raised the proven share of cases that follow Riemann's prediction from at least 42% to at least 67%. More recently, OpenAI published a claimed proof that rules out counterexamples beyond a certain boundary, significantly narrowing the space where they might exist. The full Riemann Hypothesis remains unproven, and my instinct tells me it's true, but who knows? We built much of our understanding of fluid dynamics around Navier–Stokes, but OpenAI's claimed Navier–Stokes result suggests that understanding is incomplete[^math].

[^gossip]: Wikipedia: [Gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol). Amazon S3 uses it to spread server state.

[^kiro-flock]: AWS Architecture Blog: [Scaling patterns for self-organizing multi-agent clusters with Kiro](https://aws.amazon.com/blogs/architecture/scaling-patterns-for-self-organizing-multi-agent-clusters-with-kiro/) (kiro-flock, August 2026).

[^concurrency]: Wikipedia: [Concurrency control](https://en.wikipedia.org/wiki/Concurrency_control). Databases handle it with two-phase locking or multiversion concurrency control.

[^dogwood]: AWS Open Source Blog: [Introducing Dogwood: runtime verification for AI agents](https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents/) (August 2026).

[^leader-worker]: Wikipedia: [Leader election](https://en.wikipedia.org/wiki/Leader_election). MapReduce is the classic leader–worker example, and workflow engines handle the orchestration.

[^research-system]: Anthropic Engineering: [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) (June 2025).

[^math]: Wikipedia: [Navier–Stokes equations](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations) and [Riemann hypothesis](https://en.wikipedia.org/wiki/Riemann_hypothesis). Recent results from the labs: [1](https://openai.com/index/navier-stokes-solution/), [2](https://www.anthropic.com/research/riemann-zeta), [3](https://github.com/openai/math/tree/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026).
