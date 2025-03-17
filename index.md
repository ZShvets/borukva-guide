---
layout: home

hero:
  name: "Майнкрафт Сервер Боруква"
  text: "Найбільший український VANILLA+ сервер"
  tagline: Коли всі цебулі сходяться на небі.
  image:
    src: /images/logo.avif  # Replace with your server logo
    alt: Borukva Server Logo
  actions:
    - theme: brand
      text: Як зайти?
      link: /get-started/sign-up

features:
  - title: Як почати грати
    icon: 🚩
    details: Хочете почати грати на нашому чудовому сервері? Ці гайди Вам в цьому допоможуть.
    link: /get-started/
    linkText: Почати грати
  - title: Нові механіки
    icon: ⚙️
    details: Величезна кількість унікального контенту зробленого спеціально для борукви.
    link: /mechanics/
    linkText: Читати далі
  - title: Ком'юніті
    icon: 👬
    details: Приєднуйся до нашого дружнього та активного ком'юніті серверу!
    link: /get-started/channels # Replace with your community page link (e.g., Discord link)
    linkText: Приєднатись до Ком'юніті

#serverInfo:
#  ip: your.server.ip.address # Replace with your server IP address
#  description:  "Borukva is a friendly Minecraft server focused on community, building, and having fun! We offer a unique experience with custom plugins and active staff."
---

<style>
.home .features .details p {
  font-size: 1rem;
  line-height: 1.6;
}

.server-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.server-info h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.server-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.server-info .ip {
  font-weight: bold;
  color: var(--vp-c-brand);
  font-size: 1.2rem;
}

.server-info .register-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    background-color: var(--vp-c-brand);
    color: var(--vp-c-text-light);
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
}

.server-info .register-button:hover {
    background-color: var(--vp-c-brand-dark);
}
</style>

[//]: # (<div class="server-info">)
[//]: # (  <h2>Server Information</h2>)
[//]: # (  <p>{{ $frontmatter.serverInfo.description }}</p>)
[//]: # (  <p>Server IP: <span class="ip">{{ $frontmatter.serverInfo.ip }}</span></p>)
[//]: # (  <a class="register-button" href="/registration/">Go to Registration Page</a>)
[//]: # (</div>)