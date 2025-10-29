<template>
  <section>
    <h1>Table Basics</h1>
    
    <div class="content-card">
      <h2>Place Setting Guide</h2>
      <div class="place-setting-guide">
        <ul>
          <li>Forks on the left: salad fork outside, dinner fork inside</li>
          <li>Spoons and knives on the right: soup spoon outside, dinner knife inside</li>
          <li>Dessert spoon and fork above the plate</li>
          <li>Bread plate and butter knife at top left</li>
          <li>Drinking glasses at top right</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Basic Table Manners</h2>
      <div class="etiquette-rules">
        <h3>Essential Rules</h3>
        <ul>
          <li>Wait for all to be served before eating</li>
          <li>Place napkin on lap when seated</li>
          <li>Use utensils from outside in</li>
          <li>Cut food one piece at a time</li>
          <li>Chew with mouth closed</li>
          <li>Don't reach across the table</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Speaking with food in mouth</li>
        <li>Using phone at the table</li>
        <li>Blowing on hot food</li>
        <li>Gesturing with utensils</li>
        <li>Starting before the host</li>
      </ul>
    </div>

    <div class="navigation-buttons">
      <router-link to="/before-meal" class="nav-button">← Before the Meal</router-link>
      <router-link to="/ordering-alcohol" class="nav-button">Ordering & Alcohol →</router-link>
    </div>
  </section>
</template>

<style scoped>
.place-setting-guide, .etiquette-rules {
  margin: var(--spacing-unit) 0;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--spacing-unit) * 2);
}

.nav-button {
  background: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) / 2) var(--spacing-unit);
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background: var(--secondary-color);
  color: white;
}

@media (max-width: 768px) {
  .navigation-buttons {
    flex-direction: column;
    gap: var(--spacing-unit);
    text-align: center;
  }
}
</style>
