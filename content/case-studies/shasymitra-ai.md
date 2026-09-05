---
title: "ShasyMitra: Deploying Vernacular AI & Human-in-the-Loop Diagnostics"
role: "Founder & Product Lead"
duration: "Mar 2022 – Jun 2024"
team: "15+ (Engineers, ML Engineers, Agronomists, Data Ops, Analyst, UX Researcher)"
heroImage: "/images/shasymitra-ai-card.png.png"
---

## Executive Summary

In low-trust, high-stakes markets like smallholder farming, an algorithmic error is not just a minor bug. It can destroy a farmer's entire seasonal yield and permanently kill product adoption. As Founder & Product Lead of ShasyMitra, I architected our applied AI and technical systems to prioritise extreme reliability over feature bloat. By implementing a Human-in-the-Loop (HITL) machine learning workflow, an offline-first local architecture, and a narrowly scoped disease MVP, we achieved high diagnostic accuracy, protected user trust, and supported a platform scaling to 21,000+ active farmers and £870K+ ARR.

## 1. Context & Scope

- **Role:** Founder & Product Lead (Led technical architecture, AI feature scoping, and engineering workflows)
- **Duration:** March 2022 – June 2024 (26 Months)
- **Scale:** 21,000+ Farmers | 5+ Indian States | £870K+ ARR
- **Team:** Cross-functional team of 15+ (Software Engineers, ML Engineers, Agronomists, Data Ops, Analyst, UX Researcher)

## 2. The Technical & Algorithmic Problem Space

Deploying AI-driven computer vision and advisory systems in rural agricultural settings introduced severe technical constraints:

| Technical Challenge | Root Cause | Systemic Risk |
|---|---|---|
| High Cost of False Positives | Inherent variance in edge-case crop disease classification | A single incorrect AI diagnosis ruins a crop, leading to catastrophic churn |
| Intermittent Infrastructure | Spotty, unpredictable cellular connectivity in rural farming belts | Complete app failure during critical in-field diagnosis moments |
| Low Baseline Literacy | Complex UI patterns and high-friction data inputs | User abandonment before completing core diagnostic flows |

**Core Technical Hypothesis:** If we couple automated computer-vision models with a Human-in-the-Loop verification layer and design for offline-first resilience, we can eliminate critical failure modes while continuously training our models on clean, ground-truth field data.

## 3. Applied AI Architecture & Technical Solutions

To balance automation efficiency with absolute risk mitigation, I designed a resilient technical framework combining automated inference with human expert verification.

### Human-in-the-Loop (HITL) Pathology Engine

**The Mechanism:** When a user uploaded an image of a diseased crop, the computer-vision model calculated a confidence score. High-confidence predictions returned instant remedies; low-confidence or ambiguous edge cases were automatically routed to our on-staff agronomists for manual verification.

**The Benefit:** Shielded farmers from algorithmic errors while creating a continuous loop of clean, expert-verified data for model retraining.

### Radical MVP Scoping (2 to 7 Diseases vs. 50+)

**The Decision:** We deliberately restricted our V1 disease catalog to the 2 to 7 most prevalent regional blights rather than attempting a comprehensive national database.

**The Rationale:** In underserved, low-trust markets, 100% reliability on core use cases beats broad, inconsistent feature coverage every time. Depth built immediate credibility.

### Offline-First Local-First Caching

**The Implementation:** Built local data caching protocols into the app architecture, allowing farmers to capture images, run local diagnostic lookups, and log crop data without active cellular connectivity, syncing automatically once a stable connection was detected.

## 4. Key Engineering & Product Trade-offs

### Trade-off 1: Latency vs. Safety in AI Diagnostics

**Decision:** Accepting slower response times (via human routing for edge cases) over instant, fully automated AI output.

**Rationale:** Speed is irrelevant if the output is wrong. Protecting crop yields required prioritising accuracy and safety flags over sub-second inference speeds.

### Trade-off 2: Soil Camps as Ground-Truth Data Engines

**Decision:** Treating physical soil health camps as a core data-ingestion mechanism rather than a traditional marketing exercise.

**Rationale:** To make our digital advisory engine accurate, we needed standardised offline soil metrics mapped to specific geographic coordinates. Integrating physical lab tests directly into our data pipeline fuelled our algorithms with high-integrity inputs.

## 5. Security, Compliance & System Execution

- **Data Privacy & DPDP Compliance:** Translated complex Digital Personal Data Protection (DPDP) compliance requirements and biometric/identity verification standards into seamless, low-friction mobile onboarding flows.
- **Engineering Velocity:** By locking down clear technical requirements and API contracts early, we reduced compliance-driven release rework by 20%.
- **Reliability Metrics:** Maintained high uptime and zero data-loss incidents across rural deployments via robust offline state management.

## 6. Measurable Impact & Technical Outcomes

| Metric / Dimension | Impact Achieved | Technical Significance |
|---|---|---|
| Diagnostic Risk Mitigation | Zero catastrophic false-positive failures in core crop cycles | HITL architecture successfully protected user trust and crop yields |
| Engineering Efficiency | 20% Reduction in Release Rework | Upfront compliance and architecture scoping minimised post-release patching |
| Platform Scale | 21,000+ Active Farmers | Validated that a hybrid offline/online technical stack can scale in low-connectivity regions |
| Business Growth | £870K+ ARR | Proved that robust technical reliability translates directly into sustainable commercial traction |

## 7. Retrospective & Technical Learnings

**What Worked Well:** The HITL model was our single best technical decision. It bought us the runway needed to improve our models safely without risking user trust.

**What I Would Do Differently:**

- **Early Telemetry:** I should have shipped granular model performance and inference-latency tracking instrumentation on Day 1 rather than retrofitting logging later, which initially slowed our ability to tune model weights against field drift.

## 8. Technical Stack & Methodology

- **AI & Machine Learning:** Computer Vision, Human-in-the-Loop Validation Workflows, Model Retraining Pipelines.
- **Architecture:** Offline-First Mobile Design, Local Caching Protocols, Scalable Data Pipelines.
- **Compliance & Security:** DPDP Standards, Secure Identity Verification, Data Privacy Frameworks.
- **Cross-Functional Execution:** Managing ML engineers, software developers, and domain-expert agronomists to bridge the gap between code and field reality.
