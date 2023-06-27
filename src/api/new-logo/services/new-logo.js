'use strict';

/**
 * new-logo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-logo.new-logo');
