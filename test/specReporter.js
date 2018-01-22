const Reporter = require('jasmine-spec-reporter').SpecReporter;
jasmine.getEnv().addReporter(new Reporter({
    spec: { displayPending: true },
    colors: { enabled: true }
}));