---
title: "Trust Pink Badge: A Time-Limited E-Ink Badge for Pregnancy Support"
title_ko: "핑크뱃지: 유효기간을 표시하는 E-Ink 임산부 배려 배지"
date: 2025-04-03
portfolio_order: 20
category: Student Invention Project
category_ko: 학생 과학발명 프로젝트
summary: "An Arduino and E-Ink prototype designed to show a pregnancy support badge's valid period while using very little continuous power."
summary_ko: "Arduino와 E-Ink를 이용해 임산부 배려 배지의 유효기간을 조용하고 낮은 전력으로 표시한 발명 프로젝트입니다."
tags: [E-Ink, Arduino, Human-Centered Design]
featured: true
award: "Silver Award, Gangdong-Songpa District Office of Education"
image: "/images/projects/trust-pink-badge/research-thumbnail-v2.jpeg"
permalink: /research/trust-pink-badge/
permalink_ko: /ko/research/trust-pink-badge/
alternate_url: /ko/research/trust-pink-badge/
---

<p class="project-lead">I designed a prototype pregnancy support badge that uses an E-Ink display to show whether the badge is within its valid period. The project began with a question about how technology could support pregnant passengers while reducing doubt and misuse surrounding conventional badges.</p>

<div class="project-facts">
  <div><span>Year</span><strong>2025</strong></div>
  <div><span>Grade</span><strong>4</strong></div>
  <div><span>Tools</span><strong>Arduino UNO · 2.9-inch E-Ink</strong></div>
  <div><span>Recognition</span><strong>Silver Award</strong></div>
</div>

## The Problem

I first noticed the pink priority seats and pregnancy support badges while riding the subway. I wondered what might happen when several pregnant passengers needed support but only a small number of designated seats were available. While researching the existing system, I also found reports that badges could be acquired and misused by people who were not pregnant. This could create doubt around a symbol intended to help people who genuinely need consideration.

The goal became more specific: **could a badge communicate that it was within a valid period without publicly identifying or announcing the person wearing it?**

<figure class="project-figure project-figure--document">
  <img src="{{ '/images/projects/trust-pink-badge/research-journal-page-1.png' | relative_url }}" alt="First page of the Trust Pink Badge research journal">
  <figcaption>The research journal began with observations of the existing badge and priority seating system.</figcaption>
</figure>

## Developing the Idea

The final concept emerged after rejecting two earlier approaches.

<div class="project-iterations">
  <article><span>01</span><h3>Count badge holders</h3><p>Detect how many badge holders were in each subway car and adjust priority seating. I decided that changing seat colors would have limited practical value.</p></article>
  <article><span>02</span><h3>Play an announcement</h3><p>Notify nearby passengers when a pregnant passenger entered. I rejected this idea because a public announcement could make the person uncomfortable.</p></article>
  <article><span>03</span><h3>Show a time-limited status</h3><p>Use a quiet, low-power display that changes after a preset period. This became the Trust Pink Badge concept.</p></article>
</div>

## Why E-Ink?

E-Ink displays use electrically charged pigment particles that move when an electric field is applied. Power is mainly required when the display changes, allowing the last image to remain visible without continuous power. This made E-Ink suitable for a badge intended to display a status over a long period.

The prototype used a 2.9-inch red, black, and white E-Ink display connected to an Arduino UNO. For the demonstration, the valid period was shortened to ten seconds so the complete state change could be observed quickly.

<div class="project-flow" aria-label="Prototype operation">
  <div><span>1</span><strong>Activate</strong><small>Connect power or press reset</small></div>
  <i>→</i><div><span>2</span><strong>Valid</strong><small>Display “Pink Badge Valid”</small></div>
  <i>→</i><div><span>3</span><strong>Timer</strong><small>Wait for the preset period</small></div>
  <i>→</i><div><span>4</span><strong>Complete</strong><small>Display “Used Complete”</small></div>
</div>

## Building the Prototype

- **November-December 2024:** Identified the problem and explored three possible approaches.
- **December 2024:** Studied E-Ink principles, components, and related inventions.
- **January 2025:** Practiced Arduino circuits, text output, and timer code.
- **January-February 2025:** Connected the E-Ink display and repeatedly tested the state change.
- **February-March 2025:** Built the badge model, added a strap, and completed the research journal.

<div class="project-figure-grid">
  <figure class="project-figure"><img src="{{ '/images/projects/trust-pink-badge/early-design-sketch.png' | relative_url }}" alt="Early hand-drawn Trust Pink Badge design"><figcaption>Early design sketch and notes.</figcaption></figure>
  <figure class="project-figure"><img src="{{ '/images/projects/trust-pink-badge/how-it-works.png' | relative_url }}" alt="Trust Pink Badge prototype instructions"><figcaption>Prototype operation recorded in the research journal.</figcaption></figure>
</div>

## What I Learned

This project taught me that an invention should consider not only whether a technology works, but also how it may make people feel. My second idea could have identified a passenger, but it might also have caused discomfort. Revising the idea helped me understand the importance of designing quietly and respectfully for the intended user.

## Limitations and Next Steps

The prototype demonstrated its concept using a ten-second software timer rather than a real calendar date. A practical version would need secure activation, accurate date management, protection against unauthorized reset, a smaller and lighter enclosure, and testing with intended users. It would also require careful consideration of privacy and the administrative process for issuing and renewing a badge.

<aside class="project-award"><span>Recognition</span><strong>Silver Award</strong><p>Gangdong-Songpa District Office of Education · 2025</p></aside>
