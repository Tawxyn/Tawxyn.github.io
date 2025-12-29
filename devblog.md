---
layout: base
title: Devblog
permalink: /devblog/
---

<section class="bio-section">
  <div class="bio-text">
    <h1 class="fade-in-name">Devblog</h1>
    <p class="title fade-in-name">Notes from projects, experiments, and bug hunts.</p>
  </div>
</section>

<section class="spinner-row fade-in" aria-hidden="true">
  <code class="spinner">|</code>
</section>

<div class="section-divider-wrapper"><hr class="section-divider" /></div>

{% assign posts = site.posts %}
{% if posts.size == 0 %}
<p class="fade-in">wow very much empty</p>
{% else %}
  <ul class="fade-in" style="list-style:none; padding-left:0;">
    {% for post in posts %}
      <li style="margin:1.1rem 0;">
        <a href="{{ post.url | relative_url }}" style="font-weight:700; color: var(--primary-text);">
          {{ post.title }}
        </a>
        <div class="title" style="margin-top:.1rem;">
          {{ post.date | date: "%B %-d, %Y" }}
          {% if post.tags %} • {{ post.tags | join: ", " }}{% endif %}
        </div>
        {% if post.excerpt %}
          <p style="margin:.25rem 0 0; color: var(--secondary-text);">
            {{ post.excerpt | strip_html | truncate: 160 }}
          </p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endif %}