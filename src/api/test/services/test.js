'use strict';

/**
 * test service
 */

// test comment

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test.test');
