<template>
  <div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Add Finding</h2>
    <form @submit.prevent="addFinding" class="space-y-4">
      <div>
        <label class="block text-gray-700 font-semibold mb-2" for="description">
          Description
        </label>
        <textarea
          class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          id="description"
          v-model="newFinding.description"
          placeholder="Enter the finding description"
          rows="3"
        ></textarea>
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-2" for="riskLevel">
          Risk Level
        </label>
        <div class="relative">
          <select
            class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md outline-none appearance-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            id="riskLevel"
            v-model="newFinding.riskLevel"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-2" for="recommendation">
          Recommendation
        </label>
        <textarea
          class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          id="recommendation"
          v-model="newFinding.recommendation"
          placeholder="Enter the recommendation"
          rows="3"
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          class="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
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