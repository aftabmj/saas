<script setup>
import { reactive } from 'vue'
import AddFindingsForm from '@/components/AddFindingsForm.vue'
import FindingsList from '@/components/FindingsList.vue'

const findings = reactive([])

function addFinding(newFinding) {
  findings.push(newFinding)
}
</script>

<template>
<div>
  <AddFindingsForm @add-finding="addFinding" />
  <FindingsList :findings="findings" />
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
