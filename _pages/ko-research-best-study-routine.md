---
layout: curiosity-item
title: "나에게 가장 잘 맞는 공부 루틴 찾기"
date: 2026-08-20
category: 학습과학 · AI 에이전트
summary: "야구선수의 타격 루틴에서 출발해, 한 달간 공부 전 행동과 실제 집중시간을 기록하고 나에게 맞는 루틴을 찾는 AI 에이전트 탐구입니다."
tags: [루틴, 집중, 데이터 기록, AI 에이전트]
permalink: /ko/research/best-study-routine/
collection_url: /#research
back_label: 연구 목록으로
alternate_url: /research/best-study-routine/
alternate_label: English
---

<p class="project-lead">야구선수들이 타격 전에 같은 동작을 반복하는 모습을 보며, 공부를 시작하기 전의 작은 행동도 집중 상태로 전환하는 데 도움이 되는지 궁금해졌습니다. 직접 만든 웹에서 한 달간 데이터를 모으고, 나에게 맞는 루틴을 제안하는 AI 에이전트를 만드는 것이 목표입니다.</p>

## 탐구 질문

**공부 전 루틴과 실제 집중시간 사이에는 어떤 관계가 있으며, AI가 나에게 더 잘 맞는 루틴을 제안할 수 있을까?**

## 첫 번째 웹 프로그램

Google AI Studio에서 대화를 통해 코드를 만들고 수정하는 방식으로 첫 버전을 제작했습니다. 공부 전에 다음 네 가지 중 한 가지를 선택합니다.

- 바로 시작하기
- 책상 정리하기
- 2분 복습하기
- 가벼운 스트레칭하기

선택 후 실제 집중시간, 공부 과목, 시작 시각, 피로도와 세션 느낌을 기록하도록 발전시킬 예정입니다.

<figure class="project-figure project-figure--wide"><img src="{{ '/images/projects/best-study-routine/app-preview.png' | relative_url }}" alt="베스트 공부 루틴 찾기 웹 프로그램 첫 화면"><figcaption>Google AI Studio로 만든 첫 번째 웹 프로그램입니다.</figcaption></figure>

<p class="project-action"><a href="https://service-347925119974.asia-east1.run.app" target="_blank" rel="noopener noreferrer">앱 실행하기</a></p>

## 한 달간의 방법

1. 공부 전 피로도와 시작 시각을 기록합니다.
2. 네 가지 루틴 중 하나를 선택합니다.
3. 실제로 집중한 시간과 공부 과목을 기록합니다.
4. 세션이 끝난 뒤 집중 정도를 간단히 평가합니다.
5. 충분한 기록이 쌓이면 루틴별 평균과 조건별 차이를 비교합니다.

## AI 에이전트의 역할

AI는 무조건 한 가지 루틴을 정답으로 말하는 대신, 과목·시간대·피로도와 함께 누적 기록을 살펴보고 다음 세션에서 시험할 루틴을 제안하게 할 계획입니다. 표본이 적을 때는 결론을 단정하지 않고 더 많은 기록이 필요하다고 알려 주도록 설계합니다.

## 개인정보와 한계

이름이나 학교생활의 민감한 정보는 저장하지 않고, 공개 포트폴리오에는 원자료가 아니라 익명화한 표와 그래프만 제시할 예정입니다. 한 사람의 한 달 기록이므로 모든 학생에게 적용되는 결론이 아니라, 개인에게 맞는 루틴을 탐색하는 사례 연구로 정리합니다.

## 다음 단계

데이터 저장 기능, 기록 수정 기능, 루틴별 비교 그래프와 AI 추천 이유를 추가한 뒤 한 달 동안 실제 사용해 결과를 분석할 예정입니다.
