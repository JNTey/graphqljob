# Apollo GraphQL App - Janie Tey

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

## 🚀 How to use

- Install with `yarn` or `npm install`.
- Run `expo start` to try it out.

## 🚀 How to run
1) Run "npx react-native start" in terminal 1
2) Run "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res" in terminal 2
3) Connect device/start up virtual device
4) Run  "react-native run-android --no-jetifier"

## 📝 Notes

- The Apollo configuration lies in the `apollo.js` file.
- The file also contains an option (with commented code) to pass an authorization token to the API.
- [Apollo Client Docs](https://www.apollographql.com/docs/react/v3.0-beta/)


## Packages needed:
1) sync-storage
2) mobx-react
3) mobx-state-tree
4) apollo / @apollo/client

## Features:
1) Search engine - Search job by their title (Input is case sensitive)
2) Favourite button - Favourite your jobs by pressing the heart icon (icon toggles between red and black when it's pressed)

