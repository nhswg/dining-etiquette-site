<template>
  <section>
    <h1>Before the Meal</h1>
    
    <div class="content-card">
      <h2>Preparation Checklist</h2>
      <div class="checklist">
        <ul>
          <li>Confirm the date, time, and location</li>
          <li>Research the restaurant and menu</li>
          <li>Plan to arrive 10-15 minutes early</li>
          <li>Dress appropriately for the venue</li>
          <li>Bring business cards if appropriate</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Professional Attire</h2>
      <div class="dress-code">
        <h3>Business Professional</h3>
        <ul>
          <li>Clean, pressed clothing</li>
          <li>Conservative colors and styles</li>
          <li>Minimal jewelry and accessories</li>
          <li>Polished dress shoes</li>
          <li>Well-groomed appearance</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Initial Introductions</h2>
      <ul>
        <li>Stand when being introduced</li>
        <li>Make eye contact and smile</li>
        <li>Firm, brief handshake</li>
        <li>Repeat names to remember them</li>
        <li>Exchange business cards if appropriate</li>
      </ul>
    </div>

    <div class="navigation-buttons">
      <router-link to="/" class="nav-button">← Home</router-link>
      <router-link to="/table-basics" class="nav-button">Table Basics →</router-link>
    </div>
  </section>
</template>

<style scoped>
.checklist, .dress-code {
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
