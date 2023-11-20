# React + Vite + Capacitor

Cette application démontre la capacité d'utiliser Capacitor pour créer une application web / moobile : Android et Ios
Avec un environnement React + Vite + Material ui + Tailwind.

Pour avoir acces à la géolocalisation il est nécessaire de gérér les autorisations / capacités.
android: https://capacitorjs.com/docs/apis/geolocation
ios: https://capacitorjs.com/docs/ios/configuration#configuring-infoplist

Quelques commandes utiles:

## Ios

npx cap add Ios : créer le dossier Ios avec les fichiers prêts à être compilés pour XCODE
npx cap open Ios: ouvre XCODE avec le projet platform Ios de VSCODE
npx cap run Ios: dans le terminal, permet de compiler l'application et de la lancer avec une cible de simulation précise

Quelques commandes utiles:
sudo xcode-select --reset
gem cleanup
gem list
curl -L https://get.rvm.io | bash -s stable
brew reinstall ruby
sudo gem update --system
gem install bundler
sudo gem install -n /usr/local/bin cocoapods --user-install

## Android
npx cap add android : créer le dossier android avec les fichiers prêts à être compilés pour android studio
npx cap open ios: ouvre android studio avec le projet platform ios de VSCODE

## Mise à jour au cours du développement
npm run build pour reconstruire le projet
npx cap sync pour synchroniser les modifications (reload from disk si besoin dans android studio)