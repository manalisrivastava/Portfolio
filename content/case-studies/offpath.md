---
title: "Offpath: Finding the edge cases before they find you"
role: "Founder / Product Builder"
duration: "Aug 2026"
team: "Solo, built with Claude Code"
heroImage: "/images/offpath-landing.png"
---

## The problem

Feature specs usually describe the happy path well. Edge cases like double submissions, expired sessions or permission gaps show up later in QA or production, when they're expensive to fix.

## What I did

I built Offpath, an open-source tool that turns a plain feature description into a structured list of edge cases, running on a local AI model so nothing leaves the user's machine.

## How I did it

- Interviewed 15+ product managers and engineers about how they find edge cases today
- Defined a set of edge-case categories and severity levels before writing any prompts
- Validated every AI response against a fixed structure before showing it to the user
- Kept one simple flow: Describe, Generate, Review, plus a Demo Mode so people can try it instantly

## Trade-offs

- **Local over cloud.** Slower and more setup, but private, free to run and not tied to one AI vendor.
- **One workflow, not a platform.** Left out accounts, team spaces and Jira integrations until the core output is proven useful.

## The result

Published on GitHub and used by 30+ people. Works with 5+ AI models. Real testing exposed issues reading the prompt never would, and I fixed them before release.

*What I'd do differently: run a fixed test set on every prompt change, and test across more than one model from the start.*
