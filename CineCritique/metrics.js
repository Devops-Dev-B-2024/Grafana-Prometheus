const express = require('express');
const prometheus = require('prom-client');

const app = express();

function startMetricsServer() {

    const register = new prometheus.Registry();


    prometheus.collectDefaultMetrics({
        timeout: 5000,
        register
    });


    app.get('/metrics', async (req, res) => {
        try {

            res.set('Content-Type', register.contentType);
            res.send(await register.metrics());
        } catch (error) {
            console.error('Error retrieving metrics:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Start the server
    app.listen(9100, () => {
        console.log('Metrics server is running on port 9100');
    });
}

module.exports = { startMetricsServer };
