---
layout: single
permalink: /archive/
title: Archive
author_profile: false
---
<div class="lab-page-header"><p class="lab-kicker">ALL RECORDS</p><h1>The complete archive.</h1><p>Browse every record in one place. Tags reveal connections between interests across subjects and years.</p></div>

{% assign all_items = site.research | concat: site.activities | concat: site.projects | concat: site.achievements | concat: site.memories | concat: site.gallery | sort: "date" | reverse %}
<div class="lab-list">
{% for item in all_items %}<a href="{{ item.url | relative_url }}"><time>{{ item.date | date: "%Y.%m.%d" }}</time><strong>{{ item.title }}</strong><span>{{ item.collection | capitalize }}</span></a>{% endfor %}
</div>
