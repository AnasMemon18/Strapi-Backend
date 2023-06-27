'use strict';

/**
 * new-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-header.new-header');
