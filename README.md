# SecretSanta
Secret Santa for LiveCampus



# Installation 


Cloner le projet à partir du repository 
`` bash
git clone https://github.com/MathiasGenibrel/SecretSanta.git
``

Installation de de docker via npm
`` bash
npm install -g docker
``

Commande pour construires les services
`` bash
docker compose build
``

Lancement de docker 
`` Bash
docker compose start
``

Executer docker
`` bash
docker exec
``

Ajout de la Base de Données
`` Bash
docker compose exec -i db mysql secretsanta < secretSanta.sql
``

# Connexion à l'application 

Comptes pour se connecter à l'application

Login / Mot de passe  :
    - Admin@liveCampus.fr / Livecampus2022.fr                                 
      - Mathias@liveCampus.fr / Livecampus2022.fr
      - Valentin@liveCampus.fr / Livecampus2022.fr                    
      - Nicolas@liveCampus.fr / Livecampus2022.fr                    
                         