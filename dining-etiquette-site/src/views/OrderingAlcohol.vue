<template>
  <section>
    <h1>Ordering & Alcohol Etiquette</h1>
    
    <div class="content-card">
      <h2>General Ordering Guidelines</h2>
      <ul>
        <li>Wait for the host to initiate ordering</li>
        <li>Choose items in a similar price range as others</li>
        <li>Ask questions about unfamiliar menu items discreetly</li>
        <li>Be prepared with a backup order</li>
        <li>Avoid messy or difficult-to-eat foods</li>
      </ul>
    </div>

    <div class="content-card">
      <h2>Alcohol Guidelines</h2>
      <div class="alcohol-rules">
        <h3>Key Considerations</h3>
        <ul>
          <li>Follow the host's lead on alcohol ordering</li>
          <li>It's always acceptable to not drink alcohol</li>
          <li>Limit yourself to one drink if you choose to drink</li>
          <li>Never feel pressured to consume alcohol</li>
          <li>Consider ordering a non-alcoholic alternative</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Professional Tips</h2>
      <ul>
        <li>Keep your order simple and straightforward</li>
        <li>Avoid special modifications unless necessary</li>
        <li>Learn basic wine etiquette if appropriate</li>
        <li>Stay focused on the business/social aspect</li>
        <li>Maintain professional composure throughout</li>
      </ul>
    </div>

    <div class="navigation-buttons">
      <router-link to="/table-basics" class="nav-button">← Table Basics</router-link>
      <router-link to="/conversation-networking" class="nav-button">Conversation →</router-link>
    </div>
  </section>
</template>

<style scoped>
.alcohol-rules {
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
