<template>
  <section>
    <h1>Paying & Follow-up</h1>
    
    <div class="content-card">
      <h2>Bill Payment Etiquette</h2>
      <ul>
        <li>Let the host handle the bill if you're invited</li>
        <li>Be prepared to pay if you initiated the meal</li>
        <li>Never argue over the bill in public</li>
        <li>Have payment method ready when bill arrives</li>
        <li>Consider appropriate tip (typically 18-20%)</li>
      </ul>
    </div>

    <div class="content-card">
      <h2>When to Split the Bill</h2>
      <div class="bill-splitting">
        <h3>Guidelines</h3>
        <ul>
          <li>Discuss splitting before ordering if with peers</li>
          <li>Be prepared with cash or payment apps</li>
          <li>Split evenly unless significant disparity exists</li>
          <li>Handle payment discussions discreetly</li>
          <li>Always include tax and tip in calculations</li>
        </ul>
      </div>
    </div>

    <div class="content-card">
      <h2>Professional Follow-up</h2>
      <ul>
        <li>Send a thank-you note within 24-48 hours</li>
        <li>Reference specific conversation points</li>
        <li>Connect on LinkedIn if appropriate</li>
        <li>Follow through on any commitments made</li>
        <li>Keep contact information for future networking</li>
      </ul>
    </div>

    <div class="navigation-buttons">
      <router-link to="/conversation-networking" class="nav-button">← Conversation</router-link>
      <router-link to="/" class="nav-button">Back to Home →</router-link>
    </div>
  </section>
</template>

<style scoped>
.bill-splitting {
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