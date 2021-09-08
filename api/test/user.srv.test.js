'use strict';

const test = require('tape');
const Flight = require('./flight');
const { sql } = require('slonik');

const flight = new Flight();
flight.init(test);
flight.takeoff(test);

test('GET: api/user (no auth)', async (t) => {
    try {
        const res = await flight.request({
            url: 'http://localhost:4999/api/user',
            method: 'GET',
            json: true,
        });
        t.equals(res.statusCode, 403, 'http: 403');
    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

test('POST: api/user', async (t) => {
    try {
        const res = await flight.request({
            url: 'http://localhost:4999/api/user',
            method: 'POST',
            json: true,
            body: {
                username: 'ingalls',
                password: 'password123',
                email: 'ingalls@example.com'
            }
        }, t);

        t.deepEquals(res.body, {
            id: 1,
            level: 'basic',
            username: 'ingalls'    ,
            email: 'ingalls@example.com',
            access: 'user',
            flags: {}
        }, 'user');

    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

test('POST: api/login (failed)', async (t) => {
    try {
        const res = await flight.request({
            url: 'http://localhost:4999/api/login',
            method: 'POST',
            json: true,
            body: {
                username: 'ingalls',
                password: 'password124'
            }
        });

        t.equals(res.statusCode, 403, 'http: 403');
    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

test('POST: api/login (not confirmed)', async (t) => {
    try {
        const res = await flight.request({
            url: 'http://localhost:4999/api/login',
            method: 'POST',
            json: true,
            body: {
                username: 'ingalls',
                password: 'password123'
            }
        });

        t.equals(res.statusCode, 403, 'http: 403');
        t.deepEquals(res.body, {
            status: 403, message: 'User has not confirmed email', messages: []
        });

    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

test('META: Validate User', async (t) => {
    try {
        await flight.config.pool.query(sql`
            UPDATE users SET validated = True;
        `);
    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

let token;
test('POST: api/login (success)', async (t) => {
    try {
        const res = await flight.request({
            url: 'http://localhost:4999/api/login',
            method: 'POST',
            json: true,
            body: {
                username: 'ingalls',
                password: 'password123'
            }
        }, t);

        t.ok(res.body.token);
        token = res.body.token;
        delete res.body.token;

        t.deepEquals(res.body, {
            uid: 1,
            username: 'ingalls',
            level: 'basic',
            email: 'ingalls@example.com',
            access: 'user',
            flags: {}
        });

    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

test('GET: api/login', async (t) => {
    try {
        const res = await flight.request({
            url: 'http://localhost:4999/api/login',
            auth: {
                bearer: token
            },
            method: 'GET',
            json: true,
        }, t);

        t.deepEquals(res.body, {
            uid: 1,
            username: 'ingalls'    ,
            level: 'basic',
            email: 'ingalls@example.com',
            access: 'user',
            flags: {}
        }, 'user');

    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

flight.landing(test);
