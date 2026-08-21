---
title: "Finding My Best Study Routine"
title_ko: "나에게 가장 잘 맞는 공부 루틴 찾기"
date: 2026-08-20
portfolio_order: 40
category: Learning Science
category_ko: 학습과학 · AI 에이전트
summary: "Inspired by baseball players' batting routines, I am building an AI agent that uses a month of pre-study routines and focused-time data to find the conditions that help me concentrate."
summary_ko: "야구선수의 타격 루틴에서 출발해, 한 달간 공부 전 행동과 실제 집중시간을 기록하고 나에게 맞는 루틴을 찾는 AI 에이전트 탐구입니다."
tags: [routine, focus, data log]
featured: true
image: "/images/projects/best-study-routine/thumbnail-routine-options.png"
permalink: /research/best-study-routine/
permalink_ko: /ko/research/best-study-routine/
alternate_url: /ko/research/best-study-routine/
app_url: "https://service-347925119974.asia-east1.run.app"
---
## Question

Baseball players repeat small actions before batting to prepare their attention and body. I wondered whether a pre-study routine could work as a similar mental switch. **How are pre-study routines related to actual focused time, and can an AI agent suggest a routine that fits my own data?**

## Hypothesis

I predict that the most useful routine will depend on conditions such as subject, time of day, and tiredness. Organizing my desk or reviewing for two minutes may help on some days, while starting immediately may work better on others.

## The First Web App

I used Google AI Studio to build and revise the first version through conversational, vibe-coding-style development. Before studying, I choose one of four routines:

- Start immediately.
- Organize the desk.
- Review for two minutes.
- Do light stretching.

<figure class="project-figure project-figure--wide"><img src="{{ '/images/projects/best-study-routine/app-preview.png' | relative_url }}" alt="First version of the Best Study Routine web app"><figcaption>The first version lets me choose a routine before starting a timed study session.</figcaption></figure>

<p class="project-action"><a href="https://service-347925119974.asia-east1.run.app" target="_blank" rel="noopener noreferrer">Try the App</a></p>

## Method

- Record the date, subject, starting time, and tiredness.
- Select one pre-study routine.
- Use the timer to record actual focused time.
- Rate the session briefly afterward.
- Repeat for one month and compare routines under similar conditions.

## Planned AI Agent

The agent should not declare one routine universally best. It will examine the accumulated records together with subject, time, and tiredness, then recommend a routine to test in the next session and explain which observations support that suggestion. When the dataset is too small, it should say that more evidence is needed.

## Evidence

Data collection is still in progress. The public portfolio will show only anonymized summaries, tables, and graphs rather than raw personal study logs.

## Reflection

A useful routine may not be long or complicated. The project is also teaching me to separate an attractive app interface from a reliable conclusion: the recommendation must be supported by repeated observations rather than a single good day.

## Next Question

Will the same routine remain effective when my tiredness, study subject, and time of day change? How should the agent balance trying a promising routine with testing alternatives?
