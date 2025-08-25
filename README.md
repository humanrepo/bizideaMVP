# 🚀 Bizidea by HumanOS

**Plateforme SaaS intelligente pour générer, analyser et valider des idées business**

## 📋 Description

Bizidea by HumanOS est une plateforme SaaS complète qui aide les entrepreneurs, étudiants et citoyens à :
- 🎯 **Générer** des idées business innovantes avec l'IA
- 📊 **Analyser** la viabilité et le potentiel marché
- ⚡ **Valider** rapidement vos concepts business
- 👥 **Partager** et collaborer avec une communauté

## 🛠️ Stack Technique

### Frontend
- **React 18** + **TypeScript**
- **TailwindCSS** + **Framer Motion**
- **React Query** + **Zustand**
- **React Hook Form** + **React Router**

### Backend  
- **FastAPI** (Python)
- **PostgreSQL** + **Redis**
- **Celery** (tâches async)
- **JWT Authentication**
- **GPT-4 Integration**

### DevOps
- **GitFlow** workflow
- **GitHub Actions** CI/CD
- **Docker** + **Docker Compose**
- **Vercel** (Frontend) + **Heroku** (Backend)

## 🚀 Roadmap Agile

### Sprint 1 ✅ - Initialisation
- [x] Structure du repository Git
- [x] Configuration GitFlow
- [x] Setup GitHub Actions CI/CD
- [x] Documentation initiale

### Sprint 2 ✅ - Frontend de base
- [x] Setup React + TypeScript + Tailwind
- [x] Navigation + Layout de base (Navbar, Footer)
- [x] Thème clair/sombre avec TailwindCSS
- [x] Pages principales : Accueil, Générateur, Analyse, Communauté, Dashboard, Connexion/Inscription
- [x] Design responsive mobile-first

### Sprint 3 - Backend de base  
- [ ] Setup FastAPI + PostgreSQL
- [ ] Authentication JWT
- [ ] Documentation Swagger
- [ ] Endpoints utilisateurs de base

### Sprint 4 - Générateur d'idées
- [ ] Intégration GPT-4
- [ ] Formulaire de génération
- [ ] Sauvegarde des résultats
- [ ] Interface utilisateur complète

### Sprint 5 - Analyse & Scoring
- [ ] Module d'analyse IA
- [ ] Système de scoring (0-100)
- [ ] Dashboard des résultats
- [ ] Visualisation des données

### Sprint 6 - Communauté
- [ ] Forum avec threads et commentaires
- [ ] Profils utilisateurs
- [ ] Notifications temps réel
- [ ] Système de votes et interactions

### Sprint 7 - Optimisation & QA
- [ ] Tests unitaires frontend/backend
- [ ] Accessibilité WCAG 2.1
- [ ] Sécurité renforcée
- [ ] Performance optimization

### Sprint 8 - Déploiement
- [ ] Dockerisation complète
- [ ] Déploiement production (Vercel + Heroku)
- [ ] Monitoring et analytics
- [ ] Mise en ligne MVP : https://bizidea.humanos.app

## 🏃‍♂️ Pour commencer

### Prérequis
- Node.js 18+
- Python 3.9+
- PostgreSQL
- Docker (optionnel)

### Installation
```bash
# Clone le repository
git clone https://github.com/humanos/bizidea.git
cd bizidea

# Installation frontend
cd frontend
npm install

# Installation backend  
cd ../backend
pip install -r requirements.txt
```

### Exécution avec Docker
Pour exécuter le projet avec Docker, assurez-vous d'avoir Docker et Docker Compose installés, puis exécutez les commandes suivantes :

```bash
# Lancer les services
docker-compose up --build
```

Cela construira et démarrera les conteneurs pour le frontend et le backend, ainsi que les bases de données nécessaires.

## 📞 Support

Pour toute question ou support :
- 📧 Email : support@humanos.app
- 🐛 Issues : GitHub Issues
- 💬 Discord : Comunauté HumanOS

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ par l'équipe HumanOS**
