# 🏦 Société Générale - Application Bancaire Web

Application web moderne de banque en ligne pour la Société Générale avec interface fluide et fonctionnalités complètes.

## ✨ Fonctionnalités

### 🔐 Système de Connexion
- Interface de login sécurisée avec design Société Générale
- Validation des identifiants
- Option "Se souvenir de moi"
- Gestion des comptes bloqués
- Basculement visibilité du mot de passe

### 📊 Dashboard Principal
- Vue d'ensemble des comptes (Compte courant, Livret A, Carte Gold)
- Soldes et disponibilités en temps réel
- Cartes bancaires visuelles (Gold et Classic) avec puce, numéro, et réseau
- Navigation latérale intuitive
- Notifications et messages

### 💳 Cartes Bancaires
- Représentation visuelle réaliste des cartes
- Détails : numéro, titulaire, date d'expiration
- Options de blocage/déblocage
- Support Visa et Mastercard

### 📜 Historique des Transactions
- Liste complète des opérations
- Filtres : Tout, Virements, Prélèvements, Cartes
- Catégorisation automatique (revenus/dépenses)
- Dates et montants détaillés
- Click pour plus de détails

### 🚫 Gestion Compte Bloqué
- Page dédiée au compte bloqué
- Informations sur le blocage (date, raison)
- Options de déblocage :
  - Contact téléphonique 24/7
  - Localisation d'agence
  - Déblocage en ligne avec questions de sécurité
- Conseils de sécurité

## 🎨 Design

- **Couleurs officielles SG** : Rouge (#E60028) et Noir (#000000)
- **Interface moderne** : Design flat avec effets glassmorphism
- **Responsive** : Compatible mobile, tablette et desktop
- **Animations fluides** : Transitions CSS3
- **UX optimisée** : Navigation intuitive

## 📁 Structure du Projet

```
appBank/
│
├── index.html              # Page de connexion
├── dashboard.html          # Tableau de bord principal
├── blocked.html            # Page compte bloqué
│
├── styles/
│   ├── login.css          # Styles page login
│   ├── dashboard.css      # Styles dashboard
│   └── blocked.css        # Styles page bloqué
│
├── scripts/
│   ├── login.js           # Logique connexion
│   ├── dashboard.js       # Logique dashboard
│   └── blocked.js         # Logique compte bloqué
│
└── README.md              # Documentation
```

## 🚀 Installation et Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation requise !

### Lancement
1. Ouvrez le fichier `index.html` dans votre navigateur
2. Utilisez un des comptes de démonstration :

#### Comptes de Test

| Type | Identifiant | Mot de passe | Description |
|------|-------------|--------------|-------------|
| ✅ Actif | `user123` | `password` | Compte normal avec accès complet |
| 🔒 Bloqué | `blocked` | `password` | Compte bloqué - accès à la page de déblocage |

## 🎯 Scénarios d'Utilisation

### Scénario 1 : Connexion Normal
1. Entrez `user123` / `password`
2. Accédez au dashboard complet
3. Consultez vos comptes et transactions
4. Filtrez l'historique des opérations
5. Interagissez avec les cartes bancaires

### Scénario 2 : Compte Bloqué
1. Entrez `blocked` / `password`
2. Redirection automatique vers page bloqué
3. Consultez les informations du blocage
4. Choisissez une option de déblocage :
   - Appelez le service client
   - Trouvez une agence
   - Lancez le processus de déblocage en ligne

## 🔧 Fonctionnalités Techniques

### Technologies Utilisées
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec animations
- **JavaScript (Vanilla)** : Logique sans framework
- **Font Awesome 6** : Icônes
- **SessionStorage/LocalStorage** : Gestion de session

### Fonctionnalités JavaScript
- Validation des formulaires
- Gestion des sessions utilisateur
- Filtrage dynamique des transactions
- Animations et notifications
- Modal de déblocage
- Persistance des préférences

### Sécurité
- Validation côté client
- Gestion des états de compte
- Protection contre les accès non autorisés
- Messages d'erreur informatifs

## 📱 Responsive Design

L'application s'adapte automatiquement à tous les écrans :

- **Desktop** (> 1024px) : Sidebar complète, grille 3 colonnes
- **Tablette** (768px - 1024px) : Sidebar compacte, grille 2 colonnes
- **Mobile** (< 768px) : Menu masqué, grille 1 colonne

## 🎨 Personnalisation

### Modifier les Couleurs
Les couleurs principales sont définies dans les fichiers CSS :
- Rouge SG : `#E60028`
- Noir SG : `#000000`
- Arrière-plans : `#f5f7fa`, `#f8f9fa`

### Ajouter des Transactions
Dans `dashboard.html`, section `.transactions-list`, ajoutez :

```html
<div class="transaction-item income">
    <div class="transaction-icon">
        <i class="fas fa-arrow-down"></i>
    </div>
    <div class="transaction-details">
        <span class="transaction-name">Nom de l'opération</span>
        <span class="transaction-date">Date</span>
    </div>
    <div class="transaction-amount positive">+100,00 €</div>
</div>
```

## 📞 Contact & Support

- **Service Client** : 09 69 36 96 96 (24h/24 - 7j/7)
- **Agences** : Bouton "Trouver une agence" sur la page bloqué

## 🔄 Améliorations Futures

- [ ] Backend avec API REST
- [ ] Base de données pour les transactions
- [ ] Double authentification (2FA)
- [ ] Export PDF des relevés
- [ ] Graphiques de dépenses
- [ ] Paiements par QR Code
- [ ] Chat en ligne avec conseiller
- [ ] Application mobile native

## 📄 Licence

Ce projet est une démonstration à but éducatif. Les logos et la marque Société Générale appartiennent à leurs propriétaires respectifs.

## 👨‍💻 Développement

Créé avec ❤️ pour démontrer les capacités du développement web moderne.

---

**Note** : Ceci est une application de démonstration. Ne pas utiliser avec de vraies données bancaires.
