const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./results",
  reportPath: "./results/",
  reportName: "Polestar UI Automation",
  pageTitle: "Polestar UI Automation Test Report",
  metadata:{
    browser: {
        name: 'chrome',
        version: 'latest'
    },
    device: 'Windows PC',
    platform: {
        name: 'ubuntu',
        version: 'latest'
    }
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "Polestar" },
      { label: "Release", value: "1.1" }
    ],
  },
});