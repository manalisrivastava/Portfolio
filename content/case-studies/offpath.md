---
title: "Offpath: Building a Local-First AI Edge-Case Generator"
role: "Independent Product Builder / Product Manager"
duration: "Sep 2026"
scale: "0-to-1 solo build · Local-first AI architecture · Open-sourced on GitHub"
team: "Solo: product strategy, UX, validation and AI-paired development with Claude Code"
heroImage: "/images/offpath-landing.png"
---

## TL;DR

Offpath is a local-first AI edge-case generator that helps PMs and engineers identify failure modes before a feature reaches development or QA.

I built it around a simple product thesis: teams usually specify the happy path well, while edge cases such as concurrency, permission failures, invalid states and abuse scenarios are discovered later, when they are more expensive to fix.

My goal was not to prove that an LLM could brainstorm edge cases. It was to turn that capability into a structured, trustworthy product workflow.

### What I decided

I made four core product decisions:

1. **Local-first architecture:** feature specifications can stay on the user's machine, with no mandatory cloud AI dependency or inference cost.
2. **One narrow workflow, Describe → Generate → Review:** I deliberately excluded broader PRD-writing, test generation and collaboration features from the MVP.
3. **Taxonomy + schema over free-form prompting:** edge cases are classified using defined categories and severity levels, and every model response is validated before reaching the UI.
4. **Demo Mode separate from Local AI Mode:** users can understand the value immediately without weakening the local-first product proposition.

### What I validated

I ran the product end-to-end on my machine against a real local language model across multiple feature scenarios.

That testing exposed three important issues:

1. the model sometimes returned happy-path scenarios that should have been excluded,
2. it invented irrelevant security assumptions when the feature did not contain them,
3. and my original 60-second timeout was wrong, real CPU-based generation took roughly 158 to 240+ seconds.

Those findings directly changed the prompt, validation behaviour and timeout strategy.

### The key trade-off

Local inference creates more setup friction and slower performance than a hosted API. I accepted that trade-off because privacy, zero marginal inference cost and model independence were part of the product thesis, not implementation details. Rather than remove the constraint, I used Demo Mode to reduce evaluation friction.

### What I deliberately did not build

I excluded accounts, a hosted database, cloud fallbacks, team workspaces, Jira/Linear integrations and automated test generation. Those features could increase surface area, but none were required to answer the MVP question:

Can structured local AI help someone discover meaningful edge cases while a feature is still being specified?

### What comes next

The roadmap moves from generation → quality → workflow → team intelligence. Near term, I would improve output quality with duplicate detection, relevance feedback and multi-model testing. Next, I would integrate Offpath into tools such as Linear, Jira, GitHub and Notion so risk analysis happens where product specifications already live. Longer term, repeated usage could allow Offpath to identify patterns in what a team consistently misses, turning it from an edge-case generator into a product-risk intelligence layer.

## 1. Executive Summary

Offpath is a local-first AI product that turns feature descriptions into structured edge cases before those features reach engineering or QA.

I built it around a product problem I had repeatedly seen in software teams: specifications are usually strongest on the happy path and weakest around failure conditions. Authentication expiry, duplicate actions, concurrency, invalid states, permission boundaries and abuse cases often appear later in QA, code review, support tickets or production incidents, when they are more expensive to resolve.

The product bet was straightforward:

If teams can surface credible edge cases while a feature is still being specified, they can improve requirements quality before implementation begins.

The challenge was not simply generating a list with an LLM. A generic prompt could already do that.

The product challenge was making the output structured, repeatable, reviewable and trustworthy enough to become part of a product-development workflow.

I therefore made three early product decisions that shaped the MVP:

1. Offpath would be local-first, so product specifications did not need to leave the user's machine.
2. The experience would be built around one narrow workflow: Describe → Generate → Review.
3. AI output would be constrained by a defined edge-case taxonomy, severity model and response schema, rather than treating free-form prompting as the product.

I shipped and tested the product end-to-end on my machine using a real local language model, used those runs to identify defects in both the prompt and system behaviour, and iterated the MVP based on observed evidence rather than assumed model performance.

## 2. Why This Product?

### The underlying problem

The problem I wanted to address was not "people need another AI writing tool." It was a specific failure in the product-development process.

A feature specification might say:

A user can change their subscription plan.

That sentence explains the intended behaviour, but it leaves dozens of product questions unanswered. What happens if:

1. payment succeeds but the subscription update fails?
2. the user submits twice?
3. the session expires halfway through?
4. two browser tabs update the plan simultaneously?
5. the user has insufficient permissions?
6. a downgrade conflicts with an existing entitlement?

Strong teams eventually ask these questions. The problem is when they ask them.

By the time an edge case reaches QA or production, the cost of changing the behaviour may include engineering rework, design changes, migration logic, support handling and additional testing.

That suggested an earlier intervention point: the specification itself.

### Target user

For the MVP, I deliberately avoided positioning Offpath as a generic tool for "anyone building software." The primary user is someone defining software behaviour before or during implementation:

1. Product Managers
2. Product Engineers
3. Technical Product Managers
4. Engineering leads writing implementation plans

Their job-to-be-done is:

When I am defining a feature, help me identify the failure modes and ambiguous states I may have missed before the implementation becomes expensive to change.

This framing mattered because it determined what Offpath should optimise for. It did not need to write an entire PRD. It did not need to replace QA. It did not need to generate code. It needed to improve the completeness of a product decision before development moved further downstream.

## 3. Product Thesis and Principles

Before building, I translated the problem into four product principles.

### 1. Catch issues before code exists

The product belongs upstream of implementation. Offpath should therefore work from a plain-language feature description rather than requiring code, logs or an existing test suite.

### 2. Structure matters more than creativity

For this use case, twenty imaginative AI suggestions are less useful than ten clearly classified, prioritised and actionable ones. Consistency was therefore more important than open-ended generation.

### 3. Private product context should remain private by default

Feature specifications can contain unreleased product behaviour, internal workflows and security assumptions. That made local inference valuable as a product property, not simply an infrastructure preference.

### 4. A useful MVP should solve one workflow extremely clearly

I deliberately constrained the initial interaction to:

Describe → Generate → Review

I treated additional capabilities as future expansion rather than requirements for proving the core value proposition.

## 4. Defining the MVP

The biggest scope decision was determining what Offpath actually needed to prove.

The MVP did not need to prove that AI could generate edge cases. General-purpose models had already demonstrated that. It needed to prove that I could turn that capability into a reliable product workflow.

I defined four areas that were necessary for that.

### A. A repeatable edge-case framework

Before connecting a model, I created a taxonomy of eight edge-case categories, including areas such as:

1. Input & Validation
2. State & Lifecycle
3. Time & Concurrency
4. Permissions
5. Security & Abuse
6. Dependencies & Failure
7. Data & Consistency
8. User Behaviour

I also created four severity levels with explicit criteria.

This was a deliberate product choice. Without a taxonomy, every generation could return a differently shaped brainstorm. With one, Offpath could produce output that users could compare, scan, filter and discuss. The taxonomy effectively became part of the product's domain model.

### B. Structured output rather than free-form AI text

I treated the AI response schema as an executable version of the product requirements. Every generated edge case had to conform to a predictable structure before appearing in the UI.

Schema validation allowed the product to distinguish between:

1. a valid generation,
2. malformed model output,
3. connection failures,
4. request timeouts,
5. and other system errors.

That decision moved reliability from "we wrote a good prompt" to something the application could actually enforce.

### C. A review interface, not a chat interface

The product was intentionally not designed as another conversational AI experience. Edge cases are objects that need to be compared and prioritised. The output therefore supports:

1. severity ordering,
2. category filtering,
3. search,
4. summary metrics,
5. and structured cards.

The interface reflects the task the user is trying to complete: reviewing risk, not talking to a model.

### D. Demo Mode and Local AI Mode

I separated evaluation friction from product architecture.

Demo Mode lets someone understand the interaction immediately using pre-written example output. Local AI Mode performs genuine generation using a language model running on the user's machine. Both produce the same underlying result structure.

This meant I did not have to weaken the local-first architecture simply to make the product easier to evaluate.

<img src="/images/offpath-results.png" alt="Offpath results page showing severity-sorted, categorized edge cases with a metrics bar and filters" style="display:block; width:100%; max-width:680px; margin:40px auto 8px; border-radius:12px; border:1px solid var(--color-border);" />

*The results view, sorted Critical to Low, with a live metrics bar, search, and category/severity filters.*

<img src="/images/offpath-mobile.png" alt="Offpath landing page on a mobile viewport, showing responsive layout" style="display:block; width:100%; max-width:340px; margin:40px auto 8px; border-radius:12px; border:1px solid var(--color-border);" />

*The same product, responsive by default. No separate mobile build.*

## 5. Architecture: Why Local-First?

The architecture followed from the product strategy rather than the other way around.

A simplified flow is:

Feature description → Offpath prompt + taxonomy → OpenAI-compatible local model endpoint → Structured response → Schema validation → Normalisation and severity ordering → Review UI

Offpath itself does not need to host the model. Instead, it communicates with an OpenAI-compatible local inference server, which makes it compatible with tools such as Ollama, LM Studio and similar local runtimes.

That gave the product several useful properties.

### Privacy

Feature descriptions can remain on the user's machine rather than being sent to an external AI provider.

### Zero marginal inference cost

There is no API bill created every time someone generates a result. That matters both for the user and for the economics of distributing an early product.

### Model flexibility

Offpath is not structurally tied to one model vendor. As local models improve, the product can benefit without requiring its application architecture to be rewritten.

### Offline potential

Once the model is installed locally, the core workflow does not depend on a hosted AI service.

### The trade-off

Local-first does introduce friction. Users need a compatible local AI runtime and model, and generation speed depends heavily on their hardware. That is a real adoption cost.

I accepted it for the MVP because the objective was not maximum top-of-funnel conversion. The objective was to validate whether a private, structured edge-case workflow was useful enough to justify that setup. Demo Mode was my solution to the onboarding problem without compromising the architecture.

## 6. What I Deliberately Did Not Build

Senior product work is as much about exclusion as inclusion. Several features were attractive but did not help answer the MVP question.

I deferred:

**Accounts and authentication.** There was no server-side user state that justified introducing them.

**A hosted database.** The core workflow did not require persistent cloud storage.

**Cloud model fallbacks.** They would improve convenience but weaken the local-first product proposition and introduce variable inference cost.

**Team workspaces.** Useful later, but premature before proving that individuals find the generated output valuable.

**Jira, Linear and GitHub integrations.** Distribution and workflow integrations are valuable once the core output is trusted. Building them first would optimise distribution before validating utility.

**Automated test generation.** This would move the product downstream into engineering execution. I wanted the MVP to remain focused on requirements quality.

The result was a much smaller product surface with a clear question:

Can structured local AI materially improve how someone reviews a feature specification for missed edge cases?

## 7. Development Method: Treating the Build as Product Delivery

Because I was building alone with an AI coding agent, I wanted to avoid an increasingly common failure mode: generating a large amount of code quickly without maintaining control over product behaviour.

I broke the implementation into nine sequential stages. Each stage had:

1. a defined outcome,
2. acceptance criteria,
3. a verification step,
4. and a stop condition before the next stage began.

The method was deliberately similar to how I would de-risk delivery with an engineering team. The AI coding tool could accelerate implementation, but it did not decide:

1. what belonged in the MVP,
2. what the taxonomy meant,
3. what constituted valid output,
4. which failure states mattered,
5. what should be tested,
6. or whether a result was good enough to ship.

Those remained product decisions.

## 8. Validation: Replacing Assumption With Evidence

Because this was an MVP without an existing user base, I separated two questions:

**Product-risk question:** is this workflow potentially useful?

**Execution-risk question:** does the system actually produce credible, usable results under real conditions?

The MVP allowed me to test the second question directly.

I ran Offpath locally against a real local language model on my machine and pushed multiple feature descriptions through the complete workflow. That testing changed the product in several ways.

### Finding 1: The model sometimes violated the product's own definition

The model occasionally returned happy-path scenarios even though the instructions explicitly excluded them. That demonstrated an important limitation of prompt-only control.

Decision: strengthen both the prompting and downstream validation rather than assuming instruction-following would be perfect.

### Finding 2: The model invented irrelevant context

For a feature with no authentication requirement, the model introduced an "unauthorised access" scenario. Technically, that was an edge case. Product-wise, it was noise.

Decision: tighten the prompt around evidence present in the feature description and avoid rewarding edge cases simply because they sound severe. This was an important distinction between model correctness and product usefulness.

### Finding 3: My latency assumption was wrong

The original request timeout was 60 seconds. Real local generation took approximately 158 to 240+ seconds on the tested CPU-based setup.

Rather than assuming the requests had stalled, I reran the same request without a timeout and confirmed that it eventually completed successfully.

Decision: increase the timeout based on observed behaviour and make the waiting/error states explicit in the product.

The important lesson was not that generation was slow. It was that the initial timeout had been a product assumption disguised as a technical constant. Testing exposed it.

<img src="/images/offpath-error-state.png" alt="Offpath showing a friendly, specific error message when the local AI server is unreachable" style="display:block; width:100%; max-width:680px; margin:40px auto 8px; border-radius:12px; border:1px solid var(--color-border);" />

*One of several distinct failure states: this one for when the local AI server isn't reachable, rather than one generic error for everything.*

## 9. Key Product Decisions and Trade-offs

### Decision 1: Local-first rather than cloud-first

**Options considered**

**Cloud API**

1. simpler onboarding
2. faster inference
3. less hardware dependency

**Local inference**

1. additional setup
2. performance varies by hardware
3. no external inference cost
4. stronger privacy
5. model-provider independence

**Decision:** keep local inference as the core architecture.

**Why:** a cloud API would have made the first-run experience easier, but it would also have removed one of the strongest reasons for Offpath to exist as a separate product rather than a well-written ChatGPT prompt. Local-first created meaningful differentiation around privacy, control and cost.

## 10. Decision 2: Build a taxonomy before optimising the prompt

It would have been faster to start prompt-engineering immediately. I deliberately did the opposite.

I first defined what a good result should contain. The taxonomy and severity rubric gave me a stable product contract against which prompts and model outputs could be evaluated.

This meant that when the model produced bad output, I could ask:

Which product rule did this violate?

rather than:

Do I personally like this answer?

This transformed subjective prompt iteration into a more systematic product-quality process.

## 11. Decision 3: Schema validation over trusting model behaviour

LLMs are probabilistic. The UI should not be.

I therefore treated model output as untrusted input. The application validates the response before displaying it and provides explicit error states when the contract is not met.

The trade-off is that strict validation can reject an answer that is semantically useful but incorrectly formatted. For the MVP, I preferred predictable failure over unpredictable UI behaviour.

## 12. Decision 4: Demo Mode rather than weakening Local Mode

The obvious way to reduce local-AI setup friction would have been to introduce a hosted model. Instead, I separated the two problems.

Demo Mode solves: "Can I understand what this product does immediately?"

Local AI Mode solves: "Can I actually use this privately with my own model?"

Keeping those experiences separate let me optimise onboarding without compromising the product thesis.

## 13. Decision 5: Make limitations visible

The product explicitly acknowledges that:

1. local generation can take minutes on CPU-only hardware,
2. output varies between runs,
3. different local models may perform differently,
4. and generated edge cases still require human judgement.

I considered this part of the product, not a disclaimer. For a tool designed to help people reason about failure modes, pretending that the tool itself has none would undermine trust.

## 14. How I Would Measure Product Success

For the MVP, technical correctness was necessary but not sufficient. The next stage would shift measurement toward whether Offpath changes user behaviour.

I would evaluate three layers.

### Activation

Can a new user reach a useful result? Measures could include:

1. percentage completing their first generation,
2. time to first useful result,
3. Demo → Local Mode conversion,
4. local-model connection success rate.

### Output quality

Are the generated cases actually valuable? I would measure:

1. percentage of generated cases users keep,
2. duplicates removed,
3. irrelevant cases rejected,
4. edge cases edited before export,
5. user rating of result usefulness.

A particularly useful metric would be:

Useful Edge Case Rate = retained edge cases / generated edge cases

This would tell me more about product quality than raw generation volume.

### Behavioural value

Does the product affect the development process? Eventually I would want to know whether users:

1. add generated edge cases to acceptance criteria,
2. turn them into QA scenarios,
3. attach them to tickets,
4. return for another feature,
5. or share results with engineering/design.

That is the point where Offpath moves from an interesting AI utility into a workflow product.

## 15. Distribution Strategy

I would not initially distribute Offpath as a broad consumer AI application. The first audience should be users already experiencing the problem and comfortable with local developer tooling. That points toward:

1. Product Managers working closely with engineering
2. Technical PMs
3. Product Engineers
4. Indie hackers and small software teams
5. Local-AI users

The initial distribution loop would be product-led.

**Step 1 · Zero-friction demonstration**

Use Demo Mode and concrete before/after examples:

Feature description → risks you probably missed

The value proposition needs to be visible before asking someone to install a model.

**Step 2 · Developer-native distribution**

Because the product is local-first and open source, GitHub is part of the acquisition strategy rather than simply the code host. Documentation, example features and model setup guides become distribution assets.

**Step 3 · Workflow integrations**

Once retention demonstrates value, move Offpath closer to where specifications already live. The highest-value integrations would likely include:

1. Linear
2. Jira
3. GitHub Issues
4. Notion
5. Markdown / PRD export

Rather than asking users to adopt another destination, Offpath should eventually become a risk-analysis layer inside an existing product workflow.

## 16. Product Roadmap

The roadmap would move from generation → quality → workflow → team intelligence.

### V1 · Current MVP: Generate

Objective: prove the core interaction.

Capabilities:

1. feature description input,
2. structured edge-case generation,
3. local-model execution,
4. taxonomy and severity classification,
5. schema validation,
6. search and filtering,
7. Demo Mode,
8. explicit system/error states.

### V1.1 · Improve Quality

Objective: increase trust in each generation.

I would add:

1. duplicate detection,
2. generic-output detection,
3. explicit confidence or rationale,
4. regenerate individual edge cases,
5. "irrelevant" feedback,
6. prompt regression tests,
7. comparison across multiple local models.

The key metric would become Useful Edge Case Rate, rather than number of generated items.

### V1.5 · Add Product Context

A feature rarely exists in isolation. The next step would allow users to provide lightweight context such as:

1. user type,
2. platform,
3. permissions model,
4. relevant business rules,
5. dependencies,
6. existing constraints.

The product could then distinguish between generic software risks and risks that actually apply to that product.

### V2 · Move Into the Workflow

The next major product bet would be distribution through existing tools. Examples:

**Linear/Jira:** run Offpath against a ticket before it moves into development.

**GitHub:** analyse issue descriptions or implementation plans.

**Notion/PRDs:** review product specifications directly.

**Markdown export:** turn selected edge cases into acceptance criteria or QA scenarios.

At this stage, the product changes from:

"Come to Offpath and generate edge cases."

to:

"Offpath appears when your feature is ready for risk review."

### V3 · Team Risk Intelligence

With enough repeated usage, the taxonomy itself could become more valuable than individual generations. A team could start to answer questions such as:

1. Which categories of edge cases do we repeatedly miss?
2. Which kinds of features produce the most critical risks?
3. Which failure modes regularly reach QA?
4. Which product areas have recurring concurrency or permission issues?

Offpath could then evolve from an edge-case generator into a product-risk intelligence layer. That is the longer-term opportunity. The individual generation is useful. The accumulated pattern of what a team repeatedly overlooks could be significantly more valuable.

## 17. What I Would Validate Next

The MVP reduced technical and execution risk. The next uncertainty is behavioural.

The highest-priority questions are now:

1. Do PMs discover edge cases they genuinely had not considered?
2. Are the results specific enough to add to a real ticket or specification?
3. Which categories consistently produce useful versus generic output?
4. Does privacy/local execution matter enough to influence adoption?
5. Is local setup acceptable to the intended early adopter?
6. Where in the development workflow does this interaction create the most value?

I would test these with a small group of PMs and engineers using their own recent feature specifications. Instead of asking whether they "like" Offpath, I would compare:

their original specification → Offpath output → what they actually chose to add or change.

That behavioural delta is the evidence I would use to decide what to build next.

## 18. Reflections & Stack

### What I Learned

1. **Constraints are product inputs, not just engineering limitations.** Running the product locally made hardware performance, model variability and setup friction visible early. Rather than hiding those constraints, they shaped better decisions around onboarding, architecture and error handling.
2. **Testing beats re-reading the prompt.** The most useful defects I found, including a model generating entries it effectively admitted should not be there, were invisible from reading the prompt or the code. They only surfaced by actually running the product.
3. **Transparency about limitations reads as competence, not weakness**, especially to a technical audience who will notice whether something has actually been tested.

### What I'd Do Differently

1. **Run the full test matrix, not a sample.** I tested most, but not every, scenario I'd originally defined against the real model before calling the prompt "done." A fixed, repeatable test suite run on every prompt change would catch regressions I currently only find by chance.
2. **Compare more than one local model.** All real-model testing ran on a single model. Testing against a second would separate "this is a prompt problem" from "this is a model-size problem" more clearly.
3. **Instrument quality over time, not just correctness.** Schema validation catches malformed output; it doesn't catch a subtly duplicated or generic result. A lightweight quality-scoring pass would close that gap.

### Stack & Methods

1. **Product definition:** Taxonomy design, severity rubrics, schema-as-acceptance-criteria, staged scope across nine independently shippable development stages.
2. **Technical stack:** Next.js, TypeScript, Tailwind CSS, Zod, local LLM integration via an OpenAI-compatible chat API compatible with Ollama, LM Studio and similar tools.
3. **Validation method:** Live end-to-end testing on my machine against a real local model across multiple feature scenarios, evidence-based prompt iteration, and production-build verification before calling the MVP shipped.
4. **Distribution & trust:** Open-sourced under MIT, documentation with an explicit limitations section, architecture written for a technical reader.
