'use strict';
const marked = require('marked');

marked.setOptions({
  headerIds: false
})

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      if(data.body) {
        data.bodyHTML = marked(data.body)
      }
    },
    beforeUpdate: async (_, data) => {
      if(data.body) {
        data.bodyHTML = marked(data.body)
      }
    }
  }
};
