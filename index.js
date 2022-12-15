const { generateAsync } = require("stability-client");

const stability_generate = {
  run: async (prompt) => {
    try {
      const { res, images } = await generateAsync({
        prompt,
        apiKey: process.env.DREAMSTUDIO_API_KEY,
      });
      console.log(images);
    } catch (e) {
      // ...
    }
  },
  isAsync: true,
  description: "Generate an image",
  arguments: [{ name: "prompt", type: "String" }],
};
module.exports = {
  sc_plugin_api_version: 1,
  functions: { stability_generate },
};
