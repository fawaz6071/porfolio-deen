# Installation du blog — DND E-services

Site : **https://porfolio-deen.vercel.app**
Dépôt : **fawaz6071/portfolio-deen**

## 1. Placer les fichiers
Copie tout le contenu de ce dossier à la racine de ton dépôt GitHub (en conservant
la structure : `admin/`, `api/`, `content/blog/`, `blog.html`, `blog-post.html`).

## 2. App OAuth GitHub — ✅ déjà fait
- **Homepage URL** : `https://porfolio-deen.vercel.app`
- **Authorization callback URL** : `https://porfolio-deen.vercel.app/api/callback`
- Client ID et Client Secret déjà générés.

## 3. Variables d'environnement sur Vercel
Dans ton projet Vercel → Settings → Environment Variables, ajoute :
- `GITHUB_CLIENT_ID` = ton Client ID
- `GITHUB_CLIENT_SECRET` = ton Client Secret

Redéploie le projet après avoir ajouté les variables.

## 4. Placeholders dans le code — ✅ déjà remplacés
`admin/config.yml`, `blog.html` et `blog-post.html` pointent déjà vers
`fawaz6071/portfolio-deen` et `porfolio-deen.vercel.app`.

## 5. Tester
- Va sur `https://porfolio-deen.vercel.app/admin`
- Connecte-toi avec GitHub
- Modifie ou crée un article → il est commité sur ton dépôt
- Vercel redéploie automatiquement (1–2 min) → l'article apparaît sur `/blog`

## Limite à connaître
La page `/blog` liste les articles via l'API publique GitHub (sans authentification),
limitée à 60 requêtes/heure par visiteur. Largement suffisant pour un portfolio, mais
si le trafic grossit beaucoup un jour, il faudra passer à une génération statique classique.
