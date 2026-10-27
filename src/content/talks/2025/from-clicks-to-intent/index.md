---
title: "From Clicks to Intent: Emerging Interface Patterns for Agentic Applications"
event: "AWS re:Invent"
date: 2025-12-01
description: "Three emerging patterns in how end users interact with applications as agentic AI moves the interface from clicks to intent."
image: ./agentic-interface-patterns-re-invent.png
imageAlt: "A browser window with a clicking cursor, with an arrow leading to a chat bubble that connects to several applications"
youtube: https://www.youtube.com/watch?v=hp-r5tF2qJU
---
*At AWS re:Invent 2025, I spoke about the future of work. Much of the session covered AWS products; this summary sticks to my own view of how agentic AI is changing the way we work with applications. The full session is linked at the end of this post.*

Applications have gone through eras. Native applications worked deeply with the operating system and performed well, but end users had to install and update them, so distribution was never really in your control. Web and SaaS applications solved distribution: no installation, easier updates, access from almost anywhere. But in both eras, humans remained the translation layer, turning intent into menus, forms, buttons, and clicks.

Agentic AI is changing that. People will keep using their native and SaaS applications; you won't change them overnight. But I see three patterns emerging:

**1. In-app agents are the transition step:** The agent lives inside the application you already use, native or SaaS, often as a sidebar[^in-app]. It has the context of how you're using the tool and helps you use it faster. While new experiences emerge, in-app agents fill the gap and get more out of the interfaces you've already invested in.

**2. Agents replace the point-and-click translation layer:** You express the outcome you want, and an agent figures out how to accomplish it. It may work alongside you as an assistant, or have an identity of its own as a teammate. Intent doesn't have to be typed, either: talking is a great interface, and voice is a great way to express intent. Once agents do the clicking, the application's interface matters less, and many organizations are already skipping SaaS modernization, going straight from native applications to agentic ones[^saas].

**3. The operating system moves down the stack:** Most work today is create, edit, edit, edit loops, and traditional operating systems built their UI frameworks for exactly that. I believe those loops become create-and-review loops, with the experience optimized for shortening the time it takes to review work and hand it back to an agent[^review]. New experience frameworks will be shaped by those review loops, not by the legacy UI of the operating system. The OS remains critical infrastructure, but it becomes less of the experience itself[^os], which will increasingly neutralize the advantage popular operating systems built through UI familiarity and workflow stickiness.

Many organizations delay this transition because they don't know precisely how people use their applications, and not knowing adds ambiguity about how long it will take. Usually, 20% of the features serve 80% of the users. My advice: run at least one pilot that's free from your legacy choices, and invest in expanding it.

[^in-app]: Microsoft: [Agent Mode in Excel](https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/29/vibe-working-introducing-agent-mode-and-office-agent-in-microsoft-365-copilot/) (September 2025). Notion: [Notion 3.0 Agents](https://www.notion.com/releases/2025-09-18) (September 2025). Adobe: [AI Assistant in Photoshop](https://news.adobe.com/news/2025/10/adobe-max-2025-creative-cloud) (October 2025).

[^saas]: Sequoia: [Generative AI's Act o1](https://sequoiacap.com/article/generative-ais-act-o1/) (October 2024), on the shift from software-as-a-service to service-as-a-software.

[^review]: Andrej Karpathy: [Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ) (June 2025), on making the loop of AI generating and humans verifying as fast as possible.

[^os]: Written after the talk. The Register: [Whatever legitimate places AI has, inside an OS ain't one](https://www.theregister.com/software/2025/12/02/whatever-legitimate-places-ai-has-inside-an-os-aint-one/2575209) (December 2025), on why agents belong above the application layer rather than inside the OS. TechSpective: [Why Windows Just Became Disruptible in the Agentic OS Era](https://techspective.net/2025/12/23/why-windows-just-became-disruptible-in-the-agentic-os-era/) (December 2025), on an agentic layer above the OS becoming the "real" operating system.
