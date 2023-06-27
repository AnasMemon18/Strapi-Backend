'use strict';

/**
 * new-header router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::new-header.new-header');
