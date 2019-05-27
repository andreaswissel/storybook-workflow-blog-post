// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  plugins: [
    {
      // The module name
      package: 'protractor-image-comparison',
      // Some options, see the docs for more
      options: {
        baselineFolder: join(process.cwd(), './baseline/'),
        formatImageName: `{tag}-{logName}-{width}x{height}`,
        screenshotPath: join(process.cwd(), '.tmp/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        // ... more options
      },
    },
  ],
};
