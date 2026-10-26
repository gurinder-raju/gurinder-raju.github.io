---
title: "Rethinking Scalability, Efficiency, and Quality for Agentic Workloads"
date: 2026-09-30
description: "Scalability, efficiency, and quality all need new approaches in fast evolving AI workloads."
image: ./builders_attention_green_fir.png
imageAlt: "Three stacked layers (training, inference, and agentic runtimes) connected by a glowing thread"
---
Scalability, efficiency, and quality all need new approaches in fast evolving AI workloads. This holds whether you use managed services or self-host open-weight systems. Across three layers (training, inference, and agentic runtimes) these three patterns stand out to me as increasingly important:

**1/ Rethink Your Planes:** Training needs all or nothing (gang) scheduling and topology-aware placement matched to the model architecture. Disaggregated inference needs fast page-level key value (KV) cache transfer from prefill to decode workers[^kv-cache]. Agentic runtimes must trade responsiveness against cost when agents spend most of their time idle. Kubernetes now needs a layer on top to adapt[^slurm].

The control/data plane autonomy boundary is shifting. Routing has to know which replica already holds this prefix's KV blocks, so replicas are not interchangeable. And agent micro-VMs need to provision in large volumes without waiting on control-plane orchestration[^sandboxes]. You need to rethink your control and data planes for your scalability.

**2/ Understand The Interplays:** Needs of one layer are heavily influencing decisions in another. Latent attention (MLA) improves inference by shrinking the KV cache, but it's an architecture choice that has to be locked in at pretraining. Mixture of expert (MoE) models optimize for inference compute by taking on a higher memory floor and network topology constraints for expert parallelism[^deepseek]. Agentic runtimes mask tool availability rather than editing context, because touching the prefix invalidates the KV cache[^manus], and parallelize tool calls to collapse inference passes.

Cost optimization requires understanding all three layers. MoE models won’t yield benefits unless your traffic keeps batches full. An idle agent that resumes after its KV cache was evicted pays for a full re-prefill, unless the runtime aligns snapshot and restore with the cache lifecycle[^kv-ttl]. These interplays decide your efficiency.

**3/ Own Your Evals:** Public benchmarks do not represent your use case. A newer model scoring better on those does not automatically mean your workflow improves. You need your own evals, built around the real tasks, tools, data and constraints of your users. This pattern is already emerging in leading AI products, and serious enterprise AI deployments will converge on the same path: workload-specific evals become part of the application architecture, not an optional testing layer.

Once your workload defines ‘better’, that definition can do more than grade a model. It can be the reward signal to train one. Frontier labs already train new model checkpoints with reinforcement learning (RL) in the same environment, harness, and tools their products serve users with[^cursor]. Training and inference operate as a feedback loop centered on the real workload. Your workload, not the leaderboard, defines your quality.

[^kv-cache]: Perplexity: [Disaggregated prefill and decode](https://www.perplexity.ai/hub/blog/disaggregated-prefill-and-decode) (August 2025), which copies KV cache pages straight into the decode server's memory as each layer is written. Moonshot AI: [Mooncake](https://arxiv.org/abs/2407.00079) (June 2024), the KV-cache-centric serving architecture behind Kimi.

[^slurm]: Wikipedia: [Slurm](https://en.wikipedia.org/wiki/Slurm_Workload_Manager), a job scheduler that many cloud providers now run on top of Kubernetes, like CoreWeave's [SUNK](https://coreweave.com/blog/sunk-slurm-on-kubernetes-implementations) (2023) and Nebius's [Soperator](https://nebius.com/blog/posts/introducing-soperator) (2024).

[^sandboxes]: Modal: [Scaling to 1 million concurrent sandboxes in seconds](https://modal.com/blog/scaling-to-1-million-concurrent-sandboxes-in-seconds) (July 2026). They started a million sandboxes in under a minute by taking central coordination out of the creation path.

[^deepseek]: DeepSeek: [DeepSeek-V2](https://arxiv.org/abs/2405.04434) (May 2024) introduced MLA, shrinking the KV cache by 93.3%. The [DeepSeek-V3 technical report](https://arxiv.org/abs/2412.19437) (December 2024) pairs MLA with a 671B-parameter MoE that activates 37B parameters per token.

[^manus]: Manus: [Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) (July 2025). KV-cache hit rate is their most important production metric, so they mask tools instead of removing them.

[^kv-ttl]: arXiv: [Continuum](https://arxiv.org/abs/2511.02230) (November 2025). Keeps an agent's KV cache in GPU memory for a set time during tool calls, so it isn't rebuilt when the agent resumes.

[^cursor]: Cursor: [Composer 2 technical report](https://cursor.com/blog/composer-2-technical-report) (March 2026). Composer is trained with RL inside real Cursor sessions, using the same tools and harness as the shipped product. Phil Schmid compares [how Kimi, Cursor, and Chroma train agentic models with RL](https://www.philschmid.de/kimi-composer-context) (March 2026).
