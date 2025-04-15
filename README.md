# HorsPlace – Documentation Technique

Ce document décrit la procédure d'installation et de déploiement de l'application **HorsPlace**, qui repose sur les technologies **Next.js**, **Strapi**, et **PostgreSQL**.

## 🧾 Sommaire

- [HorsPlace – Documentation Technique](#horsplace--documentation-technique)
  - [🧾 Sommaire](#-sommaire)
  - [📦 Pré-requis](#-pré-requis)
  - [🛠️ Installation locale](#️-installation-locale)
    - [1. Cloner le dépôt](#1-cloner-le-dépôt)
    - [2. Installer les dépendances](#2-installer-les-dépendances)
    - [3. Faites la même manipulation avec le repos du backend strapi](#3-faites-la-même-manipulation-avec-le-repos-du-backend-strapi)
  - [🔐 Configuration des variables d’environnement](#-configuration-des-variables-denvironnement)
  - [▶️ Démarrage de l’application](#️-démarrage-de-lapplication)
    - [1. Lancer la base de données PostgreSQL](#1-lancer-la-base-de-données-postgresql)
    - [2. Démarrer Strapi (backend)](#2-démarrer-strapi-backend)
    - [3. Démarrer Next.js (frontend)](#3-démarrer-nextjs-frontend)
  - [🚀 Déploiement](#-déploiement)

---

## 📦 Pré-requis

Avant de commencer, assurez-vous d’avoir installé sur votre machine :

- Node.js >= 18
- npm ou yarn
- PostgreSQL >= 14
- Git

---


---

## 🛠️ Installation locale

### 1. Cloner le dépôt

```bash
git clone https://github.com/Nyttho/horseplace.git
(ou en ssh git@github.com:Nyttho/horseplace.git)
cd horsplace
```

### 2. Installer les dépendances

```bash
npm install

```

### 3. Faites la même manipulation avec le repos du backend strapi

```bash
git clone https://github.com/Nyttho/horsplace_content_manager.git
(ou en ssh git@github.com:Nyttho/horsplace_content_manager.git)
cd horsplace_content_manager
npm install
```

## 🔐 Configuration des variables d’environnement

Dans le repos frontend, créez un fichier .env.local

```bash
NEXT_PUBLIC_API_URL=http://localhost:1337/api

```

dans le repos strapi, créer un fichier .env

```bash
DATABASE_CLIENT=postgres
DATABASE_NAME=horsplace_db
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=motdepasse
APP_KEYS=clé_app_1,clé_app_2
API_TOKEN_SALT=clé_api
ADMIN_JWT_SECRET=secret_jwt_admin
JWT_SECRET=secret_jwt


```
💡 Remplacez les valeurs ci-dessus par vos propres clés.

## ▶️ Démarrage de l’application

### 1. Lancer la base de données PostgreSQL
Assurez-vous que PostgreSQL est bien lancé et que la base horsplace_db est créée.

### 2. Démarrer Strapi (backend)

```bash
npm run develop

```
Par défaut, le backend est accessible à http://localhost:1337

### 3. Démarrer Next.js (frontend)

```bash
npm run dev

```

## 🚀 Déploiement
Le déploiement dépend de votre infrastructure. Voici deux approches recommandées :

Déployer Strapi sur un serveur 

Déployer la base PostgreSQL 

Déployer Next.js sur Vercel ou un autre hébergeur

Mettre à jour les variables d’environnement pour pointer vers le bon domaine/API

Ajouter une couche HTTPS (via un proxy Nginx ou directement dans l’hébergeur)

📝 Notes importantes
Le premier utilisateur créé dans Strapi aura le rôle d’administrateur.

N'oubliez pas de configurer les permissions publiques/privées dans Strapi.

Pensez à sécuriser les accès en production (tokens, CORS, etc.).

Pour importer des données ou du contenu, vous pouvez utiliser l’interface d’administration Strapi.

