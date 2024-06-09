<template>
    <div class="bg-gray-100 min-h-screen">
      <header class="bg-white shadow py-4 mb-6">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              @click="showToast('Application Forms clicked')"
            >
              Application Forms
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>
  
      <main class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card">
            <div class="card-img"></div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Job Application Form Template</h3>
              <p class="text-gray-600">A customizable template for job applications.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img"></div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Rental Application Form Template</h3>
              <p class="text-gray-600">A template for rental property applications.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img"></div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Volunteer Application Form Template</h3>
              <p class="text-gray-600">A form template for volunteer applications.</p>
            </div>
          </div>
        </div>
      </main>
  
      <footer class="bg-white shadow py-4 mt-6">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div class="text-gray-600">© 2023 Forms App</div>
          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              @click="showToast('Generate with forms.app AI clicked')"
            >
              Generate with forms.app AI
            </button>
          </div>
        </div>
      </footer>
  
      <div
        v-if="showToastMessage"
        class="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-4 rounded"
      >
      <Vue-Toastify>toastMessage</Vue-Toastify>
 
      </div>
    </div>
  </template>
  
  <script>
//   import { ref } from 'vue'
  import { useToast } from 'vue-toastify'

const toast = useToast()

const showToast = (message) => {
  toast(message, {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
  </script>
  
  <style scoped>
  .card {
    @apply bg-white rounded-lg shadow-md overflow-hidden;
  }
  .card-img {
    @apply h-48 bg-gray-300;
  }
  </style>