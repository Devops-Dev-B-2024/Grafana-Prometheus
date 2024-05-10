# Projet CineCritique avec Grafana

Ce projet est une API de critiques de films développée avec Node.js et Docker, intégrant des outils de surveillance tels que Prometheus et Grafana pour la collecte et la visualisation des métriques.

## Démarrage du Projet

Pour commencer à utiliser le projet, suivez ces étapes :

1. **Cloner le Référentiel** :

```
git clone https://github.com/Devops-Dev-B-2024/Grafana-Prometheus.git
```

2. **Accéder au Répertoire du Projet** :

```
cd cinecritique
```

3. **Lancer les Conteneurs Docker** :

```
docker-compose up -d
```

Cela lancera les conteneurs Docker pour votre application, y compris la base de données MySQL, Prometheus pour la surveillance des métriques, et Grafana pour la visualisation des métriques.

4. **Accéder à Grafana** :

Dans votre navigateur ou bien avec Postman, accédez à Grafana en utilisant l'URL suivante :

```
http://localhost:3030
```

Grafana est une plateforme open source de visualisation et d'analyse de données, configurée pour se connecter à Prometheus et afficher les métriques collectées.

5. **Accéder à Prometheus** :

De même, accédez à Prometheus depuis votre navigateur ou Postman en utilisant l'URL suivante :

```
http://localhost:9090
```

Prometheus est un système de surveillance et d'alerte open source, configuré pour collecter les métriques exposées par notre application Node.js.
