'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */


module.exports = {
  lifecycles: {
    beforeCreate: async data => {

      strapi.log.info('JHOHOIHOHOHOHOHOHOHOHOHO')
      console.log('Estamos aca chavallllllllllll', model.body)
    },
    beforeUpdate: async (_, data) => {
      data.title = 'HOLA'
    }
  }
};
