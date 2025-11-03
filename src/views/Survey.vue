<template>
  <section>
    <h1>Student Survey: What did you learn?</h1>

    <div class="content-card">
      <p>Please answer the short questions below about what you learned from this site. This is a simple, local form used for demonstration — responses are not submitted to a server.</p>

      <form @submit.prevent="onSubmit">
        <ol>
          <li>
            <label for="q1">Before attending a professional meal, do you feel more prepared?</label>
            <select id="q1" v-model="answers.q1">
              <option value="">-- choose --</option>
              <option value="yes">Yes</option>
              <option value="somewhat">Somewhat</option>
              <option value="no">No</option>
            </select>
          </li>

          <br />

          <li>
            <label>Which topic was most helpful? (choose one)</label>
            <label><input type="radio" name="q2" value="table" v-model="answers.q2" /> Table Basics</label>
            <label><input type="radio" name="q2" value="ordering" v-model="answers.q2" /> Ordering & Alcohol</label>
            <label><input type="radio" name="q2" value="networking" v-model="answers.q2" /> Conversation/Networking</label>
            <label><input type="radio" name="q2" value="paying" v-model="answers.q2" /> Paying & Follow-up</label>
          </li>

          <br />

          <li>
            <label for="q3">Are you likely to use these tips in a real interview or professional meal?</label>
            <select id="q3" v-model="answers.q3">
              <option value="">-- choose --</option>
              <option value="yes">Yes</option>
              <option value="maybe">Maybe</option>
              <option value="no">No</option>
            </select>
          </li>

          <br />

          <li>
            <label for="q4">What additional resources would make this site more valuable to you?</label>
            <input id="q4" type="text" v-model="answers.q4" placeholder="e.g., short video briefs, concise playbooks, interactive scenarios" />
          </li>

          <br />

          <li>
            <label for="q5">Any final comments?</label>
            <textarea id="q5" v-model="answers.q5" rows="4" placeholder="Your feedback"></textarea>
          </li>
        </ol>

        <div style="margin-top:1rem;">
          <button type="submit" class="primary-button">Submit (demo)</button>
          <router-link to="/" class="nav-button">Back to Home</router-link>
        </div>
      </form>

      <div v-if="submitted" class="content-card" style="margin-top:1rem;">
        <h3>Thanks — demo response</h3>
        <pre>{{ answers }}</pre>
        <p>Note: This demo does not send data to a server.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const answers = reactive({ q1: '', q2: '', q3: '', q4: '', q5: '' })
const submitted = ref(false)

function onSubmit() {
  submitted.value = true
  // for a real deployment we'd POST this to an endpoint or wire to a form provider
  console.log('Survey (demo) answers:', JSON.parse(JSON.stringify(answers)))
}
</script>

<style scoped>
.primary-button { margin-right: 0.5rem; }
ol { margin-left: 1rem; }
label { display:block; margin: 0.25rem 0; }
</style>
