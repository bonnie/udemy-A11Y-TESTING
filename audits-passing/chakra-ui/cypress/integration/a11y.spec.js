import "@cypress-audit/lighthouse/commands";

it("should pass the audits", () => {
  cy.visit("http://localhost:3000");
  cy.lighthouse({
    performance: 0,
    accessibility: 100,
    "best-practices": 0,
    seo: 0,
    pwa: 0,
  });
});
