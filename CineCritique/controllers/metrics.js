const prometheus = require('prom-client');

// Activer la collecte des métriques par défaut
require('prom-client').collectDefaultMetrics();

// Définir les métriques
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.003, 0.03, 0.1, 0.3, 1.5, 10]
});

const httpRequestCounter = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

const memoryUsageGauge = new prometheus.Gauge({
  name: 'process_memory_usage_bytes',
  help: 'Memory usage of the Node.js process in bytes',
  collect() {
    this.set(process.memoryUsage().heapUsed);
  }
});

// Fonction pour exposer les métriques
exports.getMetrics = (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(prometheus.register.metrics());
};

// Middleware pour enregistrer les métriques
exports.recordMetrics = (req, res, next) => {
  const start = process.hrtime();
  res.on('finish', () => {
    const duration = process.hrtime(start);
    const durationSec = duration[0] + duration[1] / 1e9; // Convertir en secondes
    httpRequestDuration.labels(req.method, req.path, res.statusCode).observe(durationSec);
    httpRequestCounter.labels(req.method, req.path, res.statusCode).inc();
  });
  next();
};
