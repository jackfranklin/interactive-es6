import babel from 'babel';

const Evaluator = {
  run(code, expected) {
    const transpiled = this.transpile(code);

    if (transpiled.error) {
      return {
        error: true,
        message: transpiled.error
      }
    }

    const actual = this.execute(transpiled.code);

    if (actual.error) {
      return {
        error: true,
        message: actual.error
      }
    }

    if (expected) {
      const results = this.checkResults(actual.actual, expected);

      return results;
    } else {
      return {
        passed: [],
        failed: []
      }
    }
  },

  checkResults(actual, expected) {
    let result = {
      passed: [],
      failed: []
    }

    Object.keys(expected).forEach(function(key) {
      const expectedVal = expected[key];
      const actualVal = actual[key];
      if (actualVal == expectedVal) {
        result.passed.push({ key, expected: expectedVal, actual: actualVal });
      } else {
        result.failed.push({ key, expected: expectedVal, actual: actualVal });
      }
    });

    return result;
  },

  execute(transpiled) {
    const codeToRun = `${transpiled} return result`;
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
