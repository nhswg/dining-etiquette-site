<template>
  <section>
    <h1>Welcome to UA Dining Etiquette</h1>
    
    <div class="content-card">
      <h2>Professional Dining Made Simple</h2>
      <p>Master the art of business dining and social etiquette with our comprehensive guide designed specifically for University of Arizona students.</p>
      
      <div class="quick-links">
        <router-link to="/table-basics" class="primary-button">Start Learning</router-link>
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
.quick-links {
  margin: var(--spacing-unit) 0;
  text-align: center;
}

.primary-button {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) / 2) var(--spacing-unit);
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.primary-button:hover {
  background: var(--secondary-color);
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: calc(var(--spacing-unit) / 2) 0;
  padding-left: var(--spacing-unit);
  position: relative;
}

li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}
</style>