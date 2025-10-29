<template>
  <section>
    <h1>Conversation & Networking</h1>
    
    <div class="content-card">
      <h2>Conversation Guidelines</h2>
      <ul>
        <li>Focus on professional and neutral topics</li>
        <li>Listen actively and ask thoughtful questions</li>
        <li>Avoid controversial subjects</li>
        <li>Share the conversation equally</li>
        <li>Be mindful of others speaking</li>
      </ul>
    </div>

    <div class="content-card">
      <h2>Professional Topics</h2>
      <div class="topic-examples">
        <h3>Safe Conversation Starters</h3>
        <ul>
          <li>"What aspects of your work do you find most interesting?"</li>
          <li>"How did you get started in your field?"</li>
          <li>"What trends are you seeing in your industry?"</li>
          <li>"What brought you to Tucson/UA?"</li>
          <li>"Have you attended any interesting conferences lately?"</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Networking Tips</h2>
      <ul>
        <li>Exchange business cards at appropriate moments</li>
        <li>Remember and use people's names in conversation</li>
        <li>Connect others with common interests</li>
        <li>Follow up within 48 hours after the meal</li>
        <li>Take mental notes for future reference</li>
      </ul>
    </div>

    <div class="navigation-buttons">
      <router-link to="/ordering-alcohol" class="nav-button">← Ordering & Alcohol</router-link>
      <router-link to="/paying-followup" class="nav-button">Paying & Follow-up →</router-link>
    </div>
  </section>
</template>

<style scoped>
.topic-examples {
  margin: var(--spacing-unit) 0;
}

.topic-examples ul li {
  font-style: italic;
  color: var(--text-color);
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