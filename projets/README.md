# COVO Pro — dépôt unique

COVO Pro et tous ses satellites réunis dans **un seul dépôt**, comme Restauration Pro.

```
/
├── index.html      ← redirige vers app/
├── app/            ← COVO Pro (application principale)
├── caisse/         ← Caisse Pro
├── fidelite/       ← Fidélité Pro
├── gestion/        ← Gestion Pro
├── appro/          ← Approvisionnement Pro
├── finances/       ← Finances Pro
├── historique/     ← Historique Pro
├── clotures/       ← Clôtures Pro
├── projets/        ← Projets Pro (+ icônes, manifest, service worker)
├── admin/          ← Admin Pro
├── visites/        ← Visites Pro
├── reception/      ← Réception Pro (téléphone : achats et intégration des bons de commande)
└── .nojekyll
```

## Mises à jour incluses (novembre 2026)

- **Caisse Pro** : vue Produits + Panier côte à côte (ordinateur), rayons, tri, favoris, vue liste ;
  panier avec quantité au clavier, remises ligne / panier, note de vente, tuiles de paiement, billets rapides ;
  Historique en tableau de bord (périodes, indicateurs, modes de règlement, cartes, export CSV, réimpression) ;
  étiquette de ticket (58/80 mm ou étiquettes) ; raccourcis F2 F3 F4 F8 F9, + / −, Suppr.
- **COVO Pro** : envoi automatique du montant CB (ou part CB) vers le terminal SumUp, mêmes réglages que Caisse Pro.
- **Mode consultation seule** : avertissement affiché une seule fois (COVO Pro et satellites).
- **Performances** : COVO Pro ≈ 9 fois moins de travail au repos (animations allégées, boucle « Promos fidélité »
  supprimée, boîte à outils), validation d'une vente ≈ 8 fois plus rapide, sauvegarde complète en fichier au plus
  toutes les 5 min ; Historique Pro paginé (100 tickets puis chargement au défilement) ; Gestion Pro allégée.
- Précédemment : journal des articles annulés et alarme panier oublié, garde-fou montant, codes-barres créés,
  assistant vocal et lecture des guides, inventaire papier daté + DLC, alertes de sécurité de connexion (Licence Pro).

Les fichiers du dépôt **licences** (Licence Pro, règles Firebase) se mettent à jour séparément.

## Mise en ligne dans le dépôt **Covo-pro**

1. Dans le dépôt `Covo-pro`, **remplacez** `index.html` à la racine par celui de ce dossier.
2. Ajoutez les dossiers `app/`, `caisse/`, `fidelite/`, `gestion/`, `appro/`, `finances/`,
   `historique/`, `clotures/`, `projets/`, `admin/`, `visites/`, `reception/` et le fichier `.nojekyll`.
3. Ne supprimez rien d'autre (CNAME, images… s'il y en a).
4. Après 1–2 min :
   - COVO Pro : `https://aliand0810.github.io/Covo-pro/` (→ `app/`, l'ancienne adresse marche toujours)
   - Caisse Pro : `https://aliand0810.github.io/Covo-pro/caisse/`
   - Fidélité Pro : `…/Covo-pro/fidelite/`, Gestion Pro : `…/Covo-pro/gestion/`, etc.

L'ancienne adresse `…/Covo-pro/` redirige vers `app/` en gardant les paramètres et les `#…`
(liens des anciens satellites, application COVO Pro déjà installée).
Les liens entre applications sont relatifs : le dossier marche aussi dans un autre dépôt.

## Réception Pro (téléphone)

`…/reception/` : achats et intégration des bons de commande créés dans COVO Pro (Prévisions → 🖨️ Bon de commande).
Le téléphone n’a pas besoin d’être connecté à COVO Pro : le bon arrive par son QR code et la réception repart par un QR code.
1. 🛒 Achats : COVO Pro → Prévisions → 📲 Envoyer au téléphone, visez le QR avec l’appareil photo du téléphone (l’appli s’ouvre avec le bon) ; puis, cochez les articles, notez les prix de vente boutique et le montant payé.
2. 📥 Vérification (appli) : au retour, ouvrez le bon et scannez chaque article ; justifiez les anomalies ; l’appli affiche le QR de réception.
3. 📥 Intégration (COVO Pro) : Prévisions → 📥 Intégrer, présentez le QR à la webcam : stock, prix de vente et achat dans Approvisionnement Pro sont mis à jour.

## Données, Drive, licence

Même site (`aliand0810.github.io`) : les données de chaque appareil sont retrouvées sans migration.
Google Drive, Firebase et la licence : rien à changer.

## Mettre à jour une application

Remplacez le fichier `index.html` du dossier concerné (ex. `caisse/index.html`).
