export default (config, env, helpers) => {
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      "process.env.APP_API_BASE_URL": JSON.stringify(
        process.env.APP_API_BASE_URL
      ),
    })
  );
};

const tailwind = require("preact-cli-tailwind");

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  return config;
};
