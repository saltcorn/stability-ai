const Workflow = require("@saltcorn/data/models/workflow");
const Form = require("@saltcorn/data/models/form");

const { generateAsync } = require("stability-client");

const configuration_workflow = () =>
  new Workflow({
    steps: [
      {
        name: "API key",
        form: async (context) => {
          return new Form({
            fields: [
              {
                name: "api_key",
                label: "API key",
                sublabel: "From Dreamstudio account settings",
                type: "String",
              },
            ],
          });
        },
      },
    ],
  });

const functions = ({ api_key }) => ({
  stability_generate: {
    run: async (prompt) => {
      try {
        const { res, images } = await generateAsync({
          prompt,
          apiKey: api_key,
        });
        console.log(images);
      } catch (e) {
        // ...
      }
    },
    isAsync: true,
    description: "Generate an image",
    arguments: [{ name: "prompt", type: "String" }],
  },
});
module.exports = {
  sc_plugin_api_version: 1,
  configuration_workflow,
  functions,
};
