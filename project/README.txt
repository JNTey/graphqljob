GRAPHQL JOBS Search App - Janie Tey

1) Run "npx react-native start" in terminal 1
2) Run "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res" in terminal 2
3) Connect device/start up virtual device
4) Run  "react-native run-android --no-jetifier"

Packages needed:
1) sync-storage
2) mobx-react
3) mobx-state-tree
4) apollo / @apollo/client

Features:
1) Search engine - Search job by their title (Input is case sensitive)
2) Favourite button - Favourite your jobs by pressing the heart icon (icon toggles between red and black when it's pressed)
