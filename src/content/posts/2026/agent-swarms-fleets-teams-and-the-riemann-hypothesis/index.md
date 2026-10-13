---
title: "Agent Swarms, Fleets, Teams, and the Riemann Hypothesis"
date: 2026-10-13
description: "As agents scale, coordination becomes a distributed-systems problem. Three patterns are emerging: swarms, fleets, and teams."
image: ./agent-swarm-riemann.png
imageAlt: "A lead chat bubble delegating to three agent bubbles beside a glowing wave-shaped surface, set on stone pedestals with an oak leaf and a fir sprig"
---
As agentic adoption grows, the conversation is moving beyond how to build an effective agent to how agents can operate at scale and coordinate effectively. Decision-making authority is a familiar problem in distributed systems. Except now we're applying it to autonomous, non-deterministic decision-makers, not deterministic software. There are many ways to categorize multi-agent architectures, but I see three broad patterns:

**1/ Agent Swarms — Emergent Coordination:** More aligned with research and exploration, where the solution isn't known upfront (mathematical research, more on this below). Agents work independently, share findings, and converge toward promising solutions without a central orchestrator. Coordination emerges from the agents and their shared state, much like <u>gossip protocols and eventual convergence</u> in distributed systems. AWS's recent kiro-flock is an interesting implementation, with agents coordinating through shared S3 logs [[1]](https://aws.amazon.com/blogs/architecture/scaling-patterns-for-self-organizing-multi-agent-clusters-with-kiro/).

**2/ Agent Fleets — Shared Constraints:** More aligned with large-scale production workloads. Think thousands of customer-service or sales agents independently serving customers while operating under common budgets, quotas, and business policies. Agents make their own decisions, but shared infrastructure arbitrates what is permissible. The distributed-systems parallel is <u>transactions and concurrency control</u>. AWS's recent Dogwood is an interesting building block, with authorization policies that remember what an agent has already done, so limits like "no more than $5,000 per hour" can be enforced at runtime [[2]](https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents/).

**3/ Agent Teams — Explicit Orchestration:** More aligned with workflows requiring specialized responsibilities. Think of a company operating with Sales, Finance, Legal, and IT agents collaborating on shared goals. Coordination happens through delegation, handoffs, or a supervisor agent. The parallel is <u>leader–worker coordination</u> and workflow orchestration, where responsibilities and dependencies are explicitly managed. Anthropic's multi-agent research system, where a lead agent plans and delegates to specialized subagents, is a good example [[3]](https://www.anthropic.com/engineering/multi-agent-research-system).

**The Riemann Hypothesis:** Last month, OpenAI used a swarm of about 10,000 agents to attack hard open math problems, including Navier–Stokes [[4]](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations). I'm no mathematician, and fluid dynamics isn't my area of expertise, but I've long been fascinated by the Riemann Hypothesis [[5]](https://en.wikipedia.org/wiki/Riemann_hypothesis). At its heart is a mystery: how often do prime numbers appear as numbers grow larger? In August, Claude raised the proven share of cases that follow Riemann's prediction from at least 42% to at least 67%. More recently, OpenAI published a claimed proof that rules out counterexamples beyond a certain boundary, significantly narrowing the space where they might exist. The full Riemann Hypothesis remains unproven, and my instinct tells me it's true, but who knows? We built much of our understanding of fluid dynamics around Navier–Stokes, but OpenAI's claimed result suggests that understanding is incomplete.

---

**References**

1. AWS Architecture Blog: [Scaling patterns for self-organizing multi-agent clusters with Kiro](https://aws.amazon.com/blogs/architecture/scaling-patterns-for-self-organizing-multi-agent-clusters-with-kiro/) (kiro-flock)
2. AWS Open Source Blog: [Introducing Dogwood: runtime verification for AI agents](https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents/)
3. Anthropic Engineering: [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
4. Wikipedia: [Navier–Stokes equations](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations)
5. Wikipedia: [Riemann hypothesis](https://en.wikipedia.org/wiki/Riemann_hypothesis)
