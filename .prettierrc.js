import configAirbnb from 'prettier-airbnb-config' with { type: 'json' };

const config = {
  ...configAirbnb,
  singleQuote: true,
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        bracketSpacing: false,
        singleQuote: false,
      },
    },
  ],
};

export default config;
