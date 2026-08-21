---
title: "AI Image Detective: Is This Photo Real or AI-Generated?"
title_ko: "AI 사진 탐정: 이 사진은 진짜일까, AI가 만들었을까?"
date: 2026-07-24
portfolio_order: 35
category: AI Literacy · Team Research
category_ko: AI 리터러시 · 팀 연구
summary: "A team research project at the Seoul National University of Education Software Gifted Education Program combining an image-identification quiz with an AI agent that analyzes whether a photo may be real or AI-generated."
summary_ko: "서울교대 소프트웨어 영재원 심화과정에서 진행한 팀 연구로, 진짜·AI 사진을 비교하는 퀴즈와 이미지의 생성 가능성을 분석하는 AI 판별 에이전트를 개발했습니다."
tags: [AI literacy, image detection, learning agent, team research]
featured: true
image: "/images/projects/ai-image-detective/research-thumbnail.png"
permalink: /research/ai-image-detective/
permalink_ko: /ko/research/ai-image-detective/
alternate_url: /ko/research/ai-image-detective/
---

<p class="project-lead">AI-generated images are becoming increasingly realistic. Our team explored how software could help people notice the problem, practise critical judgment, and examine evidence before trusting an image.</p>

<div class="project-facts"><div><span>Program</span><strong>SNUE Software Gifted Education</strong></div><div><span>Type</span><strong>Advanced-course team research</strong></div><div><span>Year</span><strong>2026</strong></div><div><span>Output</span><strong>Quiz · AI detection agent</strong></div></div>

## Research Question

As generated photographs become harder to distinguish by eye, we asked: **How can an interactive quiz and an AI-assisted detector help users examine images more critically and understand the limits of automated judgment?**

## Two Connected Services

The project developed two connected experiences.

1. **AI Image Detective Quiz** — users compare real and generated images, make a choice, check the answer, and review an explanation. Stages and scores make the learning process approachable.
2. **AI Image Detection Agent** — users upload an image, receive an analysis and probability-style result, and review the evidence used in the judgment.

The quiz draws attention to the issue; the detector gives users a structured way to inspect an unfamiliar image. Together they form a cycle of learning, testing, and improved judgment.

<figure class="project-figure project-figure--wide"><img src="{{ '/images/projects/ai-image-detective/system-overview.png' | relative_url }}" alt="Overview of the AI image detective quiz and image detection agent"><figcaption>The team presented a quiz for learning and an agent for image analysis as two connected services.</figcaption></figure>

## How the Agent Examines an Image

The proposed workflow accepts an uploaded image and considers multiple signals rather than relying on a single visible clue. These include color patterns, lighting and shadow consistency, proportions and shape errors, texture, background details, metadata traces, and patterns associated with image-generation models. The service then combines the signals into an interpretable result.

This is a learning prototype, not a forensic guarantee. The percentages shown by the interface communicate the model's estimate, not unquestionable truth.

## Learning Agent Idea

Because image-generation tools keep changing, a fixed detector can become less useful. Our expanded idea was a learning agent that obtains newer examples through a learning service, studies changing features, and updates the detector. This led us to think about data quality, repeated evaluation, and the difficulty of maintaining performance over time.

## What We Learned

- Real and generated images can be difficult to distinguish by sight alone.
- A useful detector needs varied data and several kinds of evidence.
- Newer generation methods may require new detection criteria and retraining.
- AI output should be checked critically rather than accepted automatically.
- Technology is valuable only when people use it safely and responsibly.

## Limitations and Next Question

The prototype and presentation describe a promising workflow, but broader datasets and controlled testing are needed before making strong accuracy claims. Our next question is how to test performance fairly across different generators, image years, subjects, and editing conditions while showing users why the agent reached its conclusion.

