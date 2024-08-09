const parser = {
  parserOpts: {
    headerPattern: /^(\w+)\(\w+\):[ ]{1}(\w{1}.+\w{1})[ ]{1}\[(\w+-{1}\d+)\]$/,
    headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  },
};
export default parser;
