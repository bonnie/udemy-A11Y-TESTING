import { configureAxe } from "jest-axe";

export const axe = configureAxe({
  globalOptions: {
    // checks are actual tests that run on the code
    checks: [
      {
        id: "img-alt-redundant",
        // function that return true for pass, false if check fails
        evaluate(node) {
          const altAttribute = node.getAttribute("alt");
          if (!altAttribute) return true;
          return !altAttribute.match(/(photo|image|logo)/i);
        },
        metadata: {
          impact: "minor",
          messages: {
            pass: "img alt tag does not contain redundant words",
            fails:
              "img alt tag contains one or more redundant words: photo, image, logo",
          },
        },
      },
    ],
    // rules enable checks, group them, define what to check
    rules: [
      {
        id: "img-alt-redundant",
        enabled: true,
        selector: "img", // css selector to filter elements to which rule applies
        any: ["img-alt-redundant"],
        metadata: {
          description: "img alt tag cannot contain redundant words",
          help: "img alt tag cannot contain redundant words",
        },
      },
    ],
  },
});
