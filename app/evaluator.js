import babel from 'babel';

import getJsonCode from './evaluator-get-json.js!text';

const Evaluator = {
  run(code, expected) {
    const transpiled = this.transpile(code);

    if (transpiled.error) {
      return Promise.reject({
        error: true,
        message: transpiled.error
      })
    }

    const actual = this.execute(transpiled.code);

    if (actual.error) {
      return Promise.reject({
        error: true,
        message: actual.error
      })
    }

    if (expected) {
      const results = this.checkResults(actual.actual, expected);

      return results.then((promises) => {
        return Promise.all(promises).then((outcomes) => {
          return outcomes;
        });
      });

    } else {
      return Promise.resolve({
        passed: [],
        failed: []
      });
    }
  },

  checkResults(actual, expected) {
    return Promise.resolve({
      passed: [],
      failed: []
    }).then((result) => {
      return Object.keys(expected).map(function(key) {
        const expectedVal = expected[key];
        const actualVal = actual[key];

        if (actualVal && actualVal.then) {
          return actualVal.then((resolvedVal) => {
            return {
              key,
              expected: expectedVal,
              actual: resolvedVal,
              success: resolvedVal == expectedVal
            }
          });
        } else {
          // not a promise, but pretend it is
          return Promise.resolve({
            key,
            expected: expectedVal,
            actual: actualVal,
            success: actualVal == expectedVal
          });
        }
      });
    });
  },

  execute(transpiled) {
    const codeToRun = `${getJsonCode}\n${transpiled} return result`;
    let result = { error: false, actual: undefined };
    try {
      result.actual = new Function(codeToRun)();
    } catch(e) {
      result.error = e.message;
    }
    return result;
  },

  transpile(code) {
    let result = {};
    try {
      result.code = babel.transform(code, {}).code;
    } catch(e) {
      result.error = e.message;
    }

    return result;
  }
}
export default Evaluator;
