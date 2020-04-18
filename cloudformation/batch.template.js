'use strict';

const cf = require('@mapbox/cloudfriend');
const api = require('./api');
const batch = require('./batch');
const db = require('./db');
const schedule = require('./schedule');

const stack = {
    AWSTemplateFormatVersion: '2010-09-09',
    Description: 'OpenAddresses Batch Processing',
    Parameters: {
        GitSha: {
            Type: 'String',
            Description: 'Gitsha to Deploy'
        },
        MapboxToken: {
            Type: 'String',
            Description: '[secure] Mapbox API Token to create Slippy Maps With'
        },
        Bucket: {
            Type: 'String',
            Description: 'S3 Asset Storage'
        }
    }
};

module.exports = cf.merge(
    stack,
    db,
    api,
    batch,
    schedule
);
