import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    apiUrl: 'http://localhost:5001',
    experimentalMemoryManagement: true,
    numTetsKeptInMemory: 0,
    projectId: "4kqx5i",
  },
})
