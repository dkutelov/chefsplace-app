module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@infrastructure": "./src/infrastructure",
            "@infrastructure/*": "./src/infrastructure/*",
            "@services": "./src/services",
            "@services/*": "./src/services/*",
            "@components": "./src/components",
            "@components/*": "./src/components/*",
            "@features": "./src/features",
            "@features/*": "./src/features/*",
          },
        },
      ],
    ],
  };
};
