<script>
export default {
  name: 'App'
}
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="brand" exact>
          <img src="./assets/logo.svg" alt="UA Dining Etiquette" class="nav-logo" />
          <span class="brand-text">UA Dining Etiquette</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/before-meal">Before Meal</router-link>
          <router-link to="/table-basics">Table Basics</router-link>
          <router-link to="/ordering-alcohol">Ordering & Alcohol</router-link>
          <router-link to="/conversation-networking">Conversation</router-link>
          <router-link to="/paying-followup">Paying & Follow-up</router-link>
          <router-link to="/survey">Survey</router-link>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="site-footer">
      <small>UA Dining Etiquette • Created for SIE415 assignment • Resources: <a href="https://career.arizona.edu/" target="_blank" rel="noopener">UA Career & Internship Services</a></small>
    </footer>
  </div>
</template>