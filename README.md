# SecretSanta
Secret Santa for LiveCampus

# Prérequis
Cloner le projet à partir du repository 
```bash
git clone https://github.com/MathiasGenibrel/SecretSanta.git
```

Installation de de docker via npm
```bash
npm install -g docker
```

# Configuration .env

Dans le dossier racine du projet 
``
/.env 
``
``` bash
DATABASE="secretsanta"
```

Dans le dossier environment du projet 
``
backend/src/environment/.env
``
``` bash
SECRET_TOKEN="secrettoken"

HOSTNAME_DB="172.18.0.1"
DATABASE_DB="secretsanta"
USER_DB= "root"
PORT_DB="3307"
```

# Installation 

Commande pour construires les services
```bash
docker compose up
```

Lancement de docker 
```Bash
docker compose start
```

Ajout de la Base de Données
```
docker compose exec -T db mysql secretsanta < secretsanta.sql
```

# Connexion à l'application 

Comptes pour se connecter à l'application

Login / Mot de passe  :
```
- Admin@liveCampus.fr / Livecampus2022.fr                                 
- Mathias@liveCampus.fr / Livecampus2022.fr
- Valentin@liveCampus.fr / Livecampus2022.fr                    
- Nicolas@liveCampus.fr / Livecampus2022.fr   
```

# Exécution des tests

Commande pour éxécuter les tests en backend
```bash
docker compose exec -i api npm test
```

Commande pour éxécuter les tests en frontend
```bash
docker compose exec -i web npm test
```
