<template>
  <section>
    <h1>Welcome to UA Dining Etiquette</h1>

  <div class="content-card content-card--hero" style="text-align:center;">
      <img src="../assets/logo.svg" alt="Dining Etiquette logo" class="home-logo" />

  <p style="margin-top:0.5rem; color:#ffffff; font-size: 1.1rem;">A quick introduction and multimedia resources to help you prepare for professional meals. For campus-specific career preparation resources, see <a href="https://career.arizona.edu/" target="_blank" rel="noopener" style="color:#ffffff; text-decoration-color:rgba(255,255,255,0.8);">UA Career & Internship Services</a>.</p>

      <div class="video-wrapper" aria-hidden="false">
        <!-- Embedded: Business Dining Etiquette — selected from YouTube search results -->
        <iframe src="https://www.youtube.com/embed/z3sIqUlkkWo" title="Business Dining Etiquette: 5 Tips That Will Save Your Career" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <p class="muted" style="font-size:0.95rem; margin-top:0.5rem; color:#ffffff; opacity:0.9;">Video source: <a href="https://www.youtube.com/watch?v=z3sIqUlkkWo" target="_blank" rel="noopener" style="color:#ffffff; text-decoration-color:rgba(255,255,255,0.8);">Business Dining Etiquette: 5 Tips That Will Save Your Career — YouTube</a></p>

      <p style="margin-top:0.5rem; color:#ffffff;">
        Useful external resource: <a href="https://www.arizona.edu/" target="_blank" rel="noopener" style="color:#ffffff; text-decoration-color:rgba(255,255,255,0.8);">University of Arizona homepage</a>
      </p>

      <div class="quick-links">
        <router-link to="/table-basics" class="primary-button">Start Learning</router-link>
        <router-link to="/survey" class="primary-button">Take Survey</router-link>
      </div>
    </div>

    <div class="content-card">
      <h3>What You'll Learn</h3>
      <ul>
        <li>Essential preparation before professional meals</li>
        <li>Proper table manners and dining etiquette</li>
        <li>Navigating drink orders and alcohol etiquette</li>
        <li>Professional networking during meals</li>
        <li>Handling payment and follow-up gracefully</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.home-logo {
  width: 120px;
  height: auto;
  display: inline-block;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 1rem auto;
  aspect-ratio: 16/9;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.quick-links {
  margin: var(--spacing-unit) 0;
  text-align: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.quick-links .primary-button {
  background: #ffffff;
  color: var(--primary-color);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
}

.quick-links .primary-button:hover {
  background: rgba(255,255,255,0.9);
  transform: translateY(-2px);
}

/* Primary button uses global styles from main.css */

ul { list-style-type: none; padding: 0; }

li { margin: calc(var(--spacing-unit) / 2) 0; padding-left: var(--spacing-unit); position: relative; }

li::before { content: "→"; position: absolute; left: 0; color: var(--secondary-color); }
</style>