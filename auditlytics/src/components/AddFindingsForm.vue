<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-bold mb-4">Add Finding</h2>
      <form @submit.prevent="addFinding">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="description">
            Description
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            v-model="newFinding.description"
            placeholder="Enter the finding description"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="riskLevel">
            Risk Level
          </label>
          <select
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="riskLevel"
            v-model="newFinding.riskLevel"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="recommendation">
            Recommendation
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="recommendation"
            v-model="newFinding.recommendation"
            placeholder="Enter the recommendation"
            rows="3"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Finding
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  
  
  
  import { ref } from 'vue';
  
    const newFinding = ref({
      description: '',
      riskLevel: 'Low',
      recommendation: '',
    });
  
    const emit = defineEmits(['finding-added']);
  
    function addFinding() {
      emit('finding-added', { ...newFinding.value });
      newFinding.value = {
        description: '',
        riskLevel: 'Low',
        recommendation: '',
      };
    }
  
//   const emit = defineEmits(['add-finding'])
  
//   function addFinding() {
//     // Generate a unique id for the new finding
//     newFinding.id = Date.now()
  
//     // Emit the add-finding event with the new finding data
//     emit('add-finding', { ...newFinding })
  
//     // Reset the form fields
//     newFinding.title = ''
//     newFinding.description = ''
//   }
  </script>