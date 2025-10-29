<script>
export default {
  name: 'App'
}
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/before-meal">Before Meal</router-link>
        <router-link to="/table-basics">Table Basics</router-link>
        <router-link to="/ordering-alcohol">Ordering & Alcohol</router-link>
        <router-link to="/conversation-networking">Conversation</router-link>
        <router-link to="/paying-followup">Paying & Follow-up</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>