import test from 'tape';
import Flight from './flight.js';

const flight = new Flight();
flight.init(test);
flight.takeoff(test);

test('GET: /api/nonexistant', async (t) => {
    try {
        const res = await flight.request({
            url: '/api/non-existant',
            method: 'GET',
            json: true
        }, false);

        t.equals(res.statusCode, 404, 'http: 404');
        t.deepEquals(res.body, {
            status: 404,
            message: 'API endpoint does not exist!',
            messages: []
        });

    } catch (err) {
        t.error(err, 'no error');
    }

    t.end();
});

flight.landing(test);
