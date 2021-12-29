/* eslint-disable no-unused-vars */
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// eslint-disable-next-line import/no-extraneous-dependencies
const ReportGenerator = require("lighthouse/report/generator/report-generator");
const fs = require("fs");
const path = require("path");

const outDir = "cypress/reports";

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse((lighthouseReport) => {
      try {
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

        // to rotate logs, uncomment the code below
        /* const lighthouseReports = fs
          .readdirSync(outDir)
          .filter((file) => file.search(/^lighthouse-report.*\.html$/) === 0);
        lighthouseReports
          .reverse()
          .slice(10) // replace 10 with the number of reports to keep
          .forEach((file) => {
            console.log("---- INFO: deleted old lighthouse report file", file);
            fs.unlinkSync(path.join(outDir, file));
          });
        */

        const dateString = new Date().toISOString();
        const fileName = path.join(
          outDir,
          `lighthouse-report-${dateString}.html`
        );

        fs.writeFileSync(
          fileName,
          ReportGenerator.generateReport(lighthouseReport.lhr, "html")
        );
        console.log("---- INFO: wrote lighthouse report to", fileName);
      } catch (error) {
        console.error(
          "---- ERROR: failed to generate lighthouse report",
          error
        );
      }
    }),
  });
};
