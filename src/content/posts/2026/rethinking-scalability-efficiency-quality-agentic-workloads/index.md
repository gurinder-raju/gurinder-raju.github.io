---
title: "Rethinking Scalability, Efficiency, and Quality for Agentic Workloads"
date: 2026-09-30
description: "Scalability, efficiency, and quality all need new approaches in fast evolving AI workloads."
image: ./builders_attention_green_fir.png
imageAlt: "Three stacked layers (training, inference, and agentic runtimes) connected by a glowing thread"
---
Scalability, efficiency, and quality all need new approaches in fast evolving AI workloads. This holds whether you use managed services or self-host open-weight systems. Across three layers (training, inference, and agentic runtimes) these three patterns stand out to me as increasingly important:

**1/ Rethink Your Planes:** Training needs all or nothing (gang) scheduling and topology-aware placement matched to the model architecture. Disaggregated inference needs fast page-level key value (KV) cache transfer from prefill to decode workers. Agentic runtimes must trade responsiveness against cost when agents spend most of their time idle. Kubernetes now needs a layer on top to adapt.

The control/data plane autonomy boundary is shifting. Routing has to know which replica already holds this prefix's KV blocks, so replicas are not interchangeable. And agent micro-VMs need to provision in large volumes without waiting on control-plane orchestration. You need to rethink your control and data planes for your scalability.

**2/ Understand The Interplays:** Needs of one layer are heavily influencing decisions in another. Latent attention (MLA) improves inference by shrinking the KV cache, but it's an architecture choice that has to be locked in at pretraining. Mixture of expert (MoE) models optimize for inference compute by taking on a higher memory floor and network topology constraints for expert parallelism. Agentic runtimes mask tool availability rather than editing context, because touching the prefix invalidates the KV cache, and parallelize tool calls to collapse inference passes.

Cost optimization requires understanding all three layers. MoE models won’t yield benefits unless your traffic keeps batches full. An idle agent that resumes after its KV cache was evicted pays for a full re-prefill, unless the runtime aligns snapshot and restore with the cache lifecycle. These interplays decide your efficiency.

**3/ Own Your Evals:** Public benchmarks do not represent your use case. A newer model scoring better on those does not automatically mean your workflow improves. You need your own evals, built around the real tasks, tools, data and constraints of your users. This pattern is already emerging in leading AI products, and serious enterprise AI deployments will converge on the same path: workload-specific evals become part of the application architecture, not an optional testing layer.

Once your workload defines ‘better’, that definition can do more than grade a model. It can be the reward signal to train one. Frontier labs already train new model checkpoints with reinforcement learning (RL) in the same environment, harness, and tools their products serve users with. Training and inference operate as a feedback loop centered on the real workload. Your workload, not the leaderboard, defines your quality.
