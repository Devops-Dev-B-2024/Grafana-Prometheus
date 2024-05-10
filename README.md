# Projet CineCritique avec Grafana
Réalisé par Lucas Guerra

Ce projet est une API de critiques de films développée avec Node.js et Docker, intégrant des outils de surveillance tels que Prometheus et Grafana pour la collecte et la visualisation des métriques.

## Démarrage du Projet

Pour commencer à utiliser le projet, suivez ces étapes :

1. **Cloner le Référentiel** :

```
git clone https://github.com/Devops-Dev-B-2024/Grafana-Prometheus.git
```

2. **Accéder au Répertoire du Projet** :

```
cd Grafana-Prometheus
```

3. **Lancer les Conteneurs Docker** :

```
docker-compose up -d
```

Cela lancera les conteneurs Docker pour votre application, y compris la base de données MySQL, Prometheus pour la surveillance des métriques, et Grafana pour la visualisation des métriques.

4. **Accéder à Prometheus** :

De même, accédez à Prometheus depuis votre navigateur ou Postman en utilisant l'URL suivante :

```
http://localhost:9090
```

Prometheus est un système de surveillance et d'alerte open source, configuré pour collecter les métriques exposées par notre application Node.js.

L'onglet Status est particulièrement important :

- Targets : Sous cet onglet, vous trouverez les endpoints que Prometheus scrute pour collecter les métriques. Cette section vous permet de vérifier que les endpoints sont correctement configurés et actifs, assurant ainsi une collecte de données fiable et en continu.
  
![image](https://github.com/Dayql/FormulaireAPI/assets/94311330/d5061c44-267a-4dce-b869-ede3c51972ba)


5. **Accéder à Grafana** :

Dans votre navigateur ou bien avec Postman, accédez à Grafana en utilisant l'URL suivante :

```
http://localhost:3030
```

Grafana est une plateforme open source de visualisation et d'analyse de données, configurée pour se connecter à Prometheus et afficher les métriques collectées.

Pour accéder à Grafana, utilisez le nom d'utilisateur admin et le mot de passe admin. 

![image](https://github.com/Dayql/FormulaireAPI/assets/94311330/ed859560-ec23-4ba1-8ea1-08b4ff3439da)

Une fois connecté, vous serez dirigé vers la page d'accueil de Grafana. Deux onglets sont essentiels :

![image](https://github.com/Dayql/FormulaireAPI/assets/94311330/dc29c0e6-f1a2-472e-a3af-b643327744a0)

- Data Sources : Vous trouverez ici les données récupérées par Prometheus. La source de données a été configurée pour être intégrée automatiquement dans ce projet.
  
![image](https://github.com/Dayql/FormulaireAPI/assets/94311330/8334e220-f42f-413c-9266-3e3b73a8d237)

- Dashboards : Cet onglet vous permet de visualiser les données collectées. J'ai préconfiguré un tableau de bord nommé Docker Containers. Il sert d'exemple de ce que vous pouvez réaliser avec Grafana et vous permet de visualiser immédiatement les métriques des conteneurs de l'application.

![image](https://github.com/Dayql/FormulaireAPI/assets/94311330/24863b84-44db-4a76-8c9b-10d14159191b)

## Contact
Pour plus d'informations, contactez lucas.guerra@ynov.com.
