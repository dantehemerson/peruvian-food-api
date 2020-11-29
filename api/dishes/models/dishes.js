'use strict';
const marked = require('marked');
const _ = require('lodash')

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
    },
    afterFind(results) {
      results.forEach(item => {
        Object.assign(item, {
          author: item.authorName,
          imageUrl: _.get(item, 'cover.url')
        })
        delete item['cover']
      })
    },
  }
};
