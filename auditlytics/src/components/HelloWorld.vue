<script setup>
import { reactive } from 'vue'
import AddFindingsForm from './components/AddFindingsForm.vue'
import FindingsList from './components/FindingsList.vue'

const findings = reactive([])

function addFinding(newFinding) {
  findings.push(newFinding)
}
</script>

<template>
  <AddFindingsForm @add-finding="addFinding" />
  <FindingsList :findings="findings" />

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
