// @ts-check

function fuck({ namespace }) {
  console.log(namespace);

  return {
    postcssPlugin: 'fuck',
    Rule: (rule) => {
      if (rule.parent.type === 'atrule') {
        return;
      }
      const selectors = rule.selector.split(',');
      rule.selector = selectors
        .map((item) => `${namespace} ${item}`)
        .join(',');
    },
  };
}

module.exports = fuck;
