import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests', 
  workers:2,
  reporter: 'html',
  use: {
    trace: 'on', //zip
    screenshot:'on',
    headless:false
    },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  ],

});
