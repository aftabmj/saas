<template>
    <div>
    <h2>Findings List</h2>
    <ul>
      <li v-for="finding in findings" :key="finding.id">
        <h3>{{ finding.title }}</h3>
        <p>{{ finding.description }}</p>
      </li>
    </ul>
  </div>
    <!-- <table class="table-auto w-full">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-2">Finding</th>
          <th class="px-4 py-2">Risk Level</th>
          <th class="px-4 py-2">Recommendation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="finding in findings" :key="finding.id">
          <td class="border px-4 py-2">{{ finding.description }}</td>
          <td class="border px-4 py-2">
            <span
              class="inline-block rounded-full px-3 py-1 text-sm font-semibold"
              :class="getRiskLevelClass(finding.riskLevel)"
            >
              {{ finding.riskLevel }}
            </span>
          </td>
          <td class="border px-4 py-2">{{ finding.recommendation }}</td>
        </tr>
      </tbody>
    </table> -->
  </template>


<script setup>
defineProps({
  findings: {
    type: Array,
    required: true
  }
})
</script>