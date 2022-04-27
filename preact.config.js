const tailwind = require("preact-cli-tailwind");
const preactCliSvgLoader = require("preact-cli-svg-loader");

export default (config, env, helpers) => {
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      "process.env.APP_API_BASE_URL": JSON.stringify(
        process.env.APP_API_BASE_URL
      ),
    })
  );
  preactCliSvgLoader(config, helpers);
  tailwind(config, env, helpers);
};
