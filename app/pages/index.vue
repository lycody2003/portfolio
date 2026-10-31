<script setup lang="ts">
import { ref } from 'vue'
import profileImage from '~/assets/images/profile.jpg'

const menuOpen = ref(false)

const skills = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    items: ['Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    description: 'Developing APIs and server-side application logic.',
    items: ['Node.js', 'Express.js', 'REST API', 'Authentication', 'API Integration'],
  },
  {
    title: 'Database & Tools',
    description: 'Working with data, source control, and development tools.',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'GitLab', 'Postman'],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Building practical skills in deployment and infrastructure.',
    items: ['Docker', 'Linux', 'CI/CD', 'AWS', 'Google Cloud', 'Kubernetes', 'Terraform'],
  },
]

const projects = [
  {
    number: '01',
    title: 'TaskNest',
    category: 'PROJECT MANAGEMENT',
    description:
      'A project management application developed to organize tasks and project workflows. Frontend and backend source code are maintained in one repository.',
    stack: ['Web Application', 'Frontend', 'Backend', 'Git'],
    accent: 'lime',
    repositories: [
      {
        label: 'View GitHub Repository',
        url: 'https://github.com/lycody2003/tasknest',
      },
    ],
  },
  {
    number: '02',
    title: 'Me',
    subtitle: 'AI Document Assistant',
    category: 'AI / FULL-STACK',
    description:
      'An AI-powered document Q&A application designed to let users upload documents and ask questions about their content.',
    stack: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Ollama'],
    accent: 'purple',
    repositories: [
      {
        label: 'Frontend — GitLab',
        url: 'https://gitlab.com/project5285951/me/mefrontend',
      },
      {
        label: 'Backend — GitLab',
        url: 'https://gitlab.com/project5285951/me/mebackend',
      },
    ],
  },
  {
    number: '03',
    title: 'Lychat',
    subtitle: 'Chat Application',
    category: 'FULL-STACK / REAL-TIME COMMUNICATION',
    description:
      'A chat application with separate frontend and backend repositories.',
    stack: ['Frontend', 'Backend', 'API Integration'],
    accent: 'blue',
    repositories: [
      {
        label: 'View GitHub Repository',
        url: 'https://github.com/lycody2003/lychat.git',
      },
    ],
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/lycody2003',
    handle: 'lycody2003',
  },
  {
    label: 'GitLab',
    url: 'https://gitlab.com/lycody2003',
    handle: 'lycody2003',
  },
  {
    label: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~01d94f97670c205fc9',
    handle: 'Freelance profile',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chhunly-chory-650465219',
    handle: 'Professional profile',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/Lycody2003',
    handle: '@Lycody2003',
  },
]

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Chhunly home">
        L<span>.</span>
      </a>

      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'CLOSE −' : 'MENU +' }}
      </button>

      <nav class="nav-links" :class="{ 'nav-open': menuOpen }">
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a class="nav-contact" href="#contact" @click="closeMenu">
          Let's talk <span>↗</span>
        </a>
      </nav>
    </header>

    <section id="home" class="hero section-wrap">
      <div class="hero-copy">
        <p class="eyebrow">
          <span class="status-dot"></span>
          WEB DEVELOPER · PHNOM PENH, CAMBODIA
        </p>

        <h1>
          Building digital<br />
          experiences that<br />
          <span class="text-accent">work beautifully.</span>
        </h1>

        <p class="hero-description">
          I'm Chory, a web developer focused on Vue.js, Nuxt.js,
          Node.js, and building practical web applications.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#projects">
            Explore my work <span>↗</span>
          </a>
          <a class="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>

        <div class="hero-meta">
          <span>FRONTEND</span>
          <span class="meta-separator"></span>
          <span>BACKEND</span>
          <span class="meta-separator"></span>
          <span>API INTEGRATION</span>
        </div>
      </div>

      <div class="hero-art" aria-label="Abstract developer graphic">
        <div class="art-orbit orbit-one"></div>
        <div class="art-orbit orbit-two"></div>
        <div class="art-core">
          <span class="code-mark">&lt;/&gt;</span>
          <span class="core-caption">DESIGN · BUILD · IMPROVE</span>
        </div>
        <div class="floating-tag tag-top">Vue.js <span>●</span></div>
        <div class="floating-tag tag-bottom">Node.js <span>↗</span></div>
        <div class="floating-tag tag-devops">
          DevOps <span>+</span>
        </div>
        <div class="art-cross cross-one">+</div>
        <div class="art-cross cross-two">+</div>
      </div>

      <div class="scroll-note">
        <span class="scroll-line"></span>
        SCROLL TO EXPLORE
      </div>
    </section>

    <section id="about" class="section-wrap content-section about-section">
      <div class="section-heading">
        <p class="eyebrow">01 / ABOUT ME</p>
        <h2>
          Curious by nature.<br />
          <span class="muted">Developer by choice.</span>
        </h2>
      </div>

      <div class="about-content">
        <p>
          I'm Chhunly, also known as Lycody online. I'm a web developer
          with experience working with Vue.js, Nuxt.js, Node.js, and
          backend APIs.
        </p>

        <p>
          I enjoy investigating bugs, building useful features,
          integrating APIs, and improving existing applications.
          I am also expanding my practical knowledge of DevOps,
          deployment, containers, and CI/CD.
        </p>

        <div class="about-facts">
          <div>
            <span class="fact-number">01</span>
            <span class="fact-label">Frontend development</span>
          </div>
          <div>
            <span class="fact-number">02</span>
            <span class="fact-label">Backend APIs</span>
          </div>
          <div>
            <span class="fact-number">03</span>
            <span class="fact-label">DevOps learning</span>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section-wrap content-section">
      <div class="section-heading">
        <p class="eyebrow">02 / MY TOOLKIT</p>
        <h2>
          Tools I use to<br />
          <span class="muted">make things work.</span>
        </h2>
      </div>

      <div class="skill-groups">
        <article v-for="(group, index) in skills" :key="group.title" class="skill-group">
          <div class="skill-group-header">
            <span class="skill-index">0{{ index + 1 }}</span>
            <h3>{{ group.title }}</h3>
          </div>

          <p>{{ group.description }}</p>

          <div class="skills-panel">
            <span v-for="skill in group.items" :key="skill" class="skill-chip">
              {{ skill }}
              <span>↗</span>
            </span>
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="section-wrap content-section">
      <div class="projects-heading">
        <div class="section-heading">
          <p class="eyebrow">03 / SELECTED WORK</p>
          <h2>
            Projects with<br />
            <span class="muted">a purpose.</span>
          </h2>
        </div>

        <p class="projects-intro">
          A selection of my actual projects. Explore the source code
          to learn more about their implementation.
        </p>
      </div>

      <div class="project-list">
        <article v-for="project in projects" :key="project.number" class="project-card"
          :class="`accent-${project.accent}`">
          <div class="project-topline">
            <span>{{ project.number }} / 03</span>
            <span>{{ project.category }}</span>
          </div>

          <div class="project-visual" aria-hidden="true">
            <div class="visual-grid"></div>
            <span class="visual-symbol">&lt; / &gt;</span>
            <span class="visual-number">{{ project.number }}</span>
            <span class="visual-orb"></span>
            <span class="visual-caption">LYCODY / PROJECT</span>
          </div>

          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p v-if="project.subtitle" class="project-subtitle">
              {{ project.subtitle }}
            </p>

            <p>{{ project.description }}</p>

            <div class="project-stack">
              <span v-for="tech in project.stack" :key="tech">
                {{ tech }}
              </span>
            </div>

            <div class="project-links">
              <a v-for="repo in project.repositories" :key="repo.url" :href="repo.url" target="_blank"
                rel="noopener noreferrer">
                {{ repo.label }} ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="experience" class="section-wrap content-section experience-section">
      <div class="section-heading">
        <p class="eyebrow">04 / EXPERIENCE & EDUCATION</p>
        <h2>
          Growing through<br />
          <span class="muted">work and learning.</span>
        </h2>
      </div>

      <div class="timeline">
        <article class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-date">JULY 2024 — PRESENT</div>
          <div class="timeline-content">
            <h3>Web Developer</h3>
            <p class="timeline-company">First Cambodia</p>
            <p>
              Working in a web development agency environment.
              My work includes web application development and
              related technical tasks.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-date">2023 — 2024</div>
          <div class="timeline-content">
            <h3>Game Developer</h3>
            <p class="timeline-company">Phoenix Media</p>
            <p>
              Experience in game development, UI implementation,
              and building game-related features.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-date">2022 — 2025</div>
          <div class="timeline-content">
            <h3>Bachelor of Computer Science</h3>
            <p class="timeline-company">
              Royal University of Phnom Penh
            </p>
            <p>
              Computer Science studies covering foundations
              relevant to software development.
            </p>
          </div>
        </article>
      </div>

      <p class="experience-note">
        DevOps, cloud infrastructure, and deployment are ongoing
        learning areas. This portfolio does not claim production
        infrastructure experience that has not been established.
      </p>
    </section>

    <section class="section-wrap content-section connect-section">
      <div class="section-heading">
        <p class="eyebrow">05 / FIND ME ONLINE</p>
        <h2>
          Let's connect<br />
          <span class="muted">and build something.</span>
        </h2>
      </div>

      <div class="social-list">
        <a v-for="social in socialLinks" :key="social.label" class="social-card" :href="social.url" target="_blank"
          rel="noopener noreferrer">
          <span class="social-name">{{ social.label }}</span>
          <span class="social-handle">{{ social.handle }}</span>
          <span class="social-arrow">↗</span>
        </a>
      </div>
    </section>

    <section id="contact" class="section-wrap contact-section">
      <p class="eyebrow">06 / CONTACT</p>

      <h2>
        Have a problem<br />
        to <span class="text-accent">solve?</span>
      </h2>

      <p>
        Need help with a web application, bug fixing, or API integration?
        Let's discuss what you're building.
      </p>

      <div class="contact-actions">
        <a class="button button-primary" href="https://www.upwork.com/freelancers/~01d94f97670c205fc9" target="_blank"
          rel="noopener noreferrer">
          Hire me on Upwork ↗
        </a>

        <a class="button button-secondary" href="https://t.me/Lycody2003" target="_blank" rel="noopener noreferrer">
          Message me on Telegram
        </a>
      </div>
    </section>

    <footer class="site-footer">
      <a class="brand" href="#home">L<span>.</span></a>
      <p>Designed & built by Chhunly · Lycody</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  </main>
</template>
