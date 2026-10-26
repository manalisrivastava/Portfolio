---
title: "ShasyMitra: Deploying Vernacular AI & Human-in-the-Loop Diagnostics"
role: "Founder & Product Lead"
duration: "Mar 2022 – Jun 2024"
team: "Engineers, ML Engineers, Agronomists, Data Ops, Analyst, UX Researcher"
heroImage: "/images/shasymitra-ai-card.png.png"
---

## The problem

In smallholder farming, a wrong AI diagnosis doesn't just frustrate a user — it can destroy an entire seasonal crop. Deploying computer vision in rural India meant dealing with spotty connectivity, first-time smartphone users, and zero tolerance for error. A single bad output would kill trust permanently.

## What I did

I designed the AI architecture and scoped the product to prioritise reliability over features — combining automated computer vision with a Human-in-the-Loop (HITL) verification layer and offline-first data caching.

## How I did it

- Built a confidence-scoring system: high-confidence diagnoses returned instant remedies; low-confidence or ambiguous cases routed automatically to on-staff agronomists for review
- Scoped the V1 disease catalogue to the 7 most common regional blights, not a national database — depth over breadth in a low-trust market
- Built local caching into the app so farmers could capture images and get diagnostic lookups without cellular signal, syncing when connectivity returned
- Ran physical soil health camps as a data-ingestion mechanism, mapping offline soil metrics to GPS coordinates to improve model accuracy
- Translated DPDP compliance requirements into low-friction mobile onboarding flows, locking API contracts early to cut compliance rework

## Trade-offs

- **Slower response, safer output.** Human routing for edge cases added latency, but speed is irrelevant if the diagnosis is wrong.
- **Narrow scope, high credibility.** Restricting to 7 diseases meant we could be 100% reliable on what we covered, rather than inconsistent across 50+.
- **Camps as data pipelines.** Framing soil camps as a data operation rather than marketing was harder to resource but gave us cleaner training data.

## The result

Zero catastrophic false-positive failures across core crop cycles. The platform scaled to 21,000+ active farmers across five Indian states, reaching £870K+ ARR.

*What I'd do differently: ship model performance and inference-latency tracking from day one, rather than retrofitting logging later.*
