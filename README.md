# capacitor-screen-orientation-issue-reproduction-app

A capacitor app to reproduce the following issues with the `@capacitor/screen-orientation` plugin:
- [@capacitor/screen-orientation: ScreenOrientation.lock({orientation: 'landscape'}) locks to portrait-primary](https://github.com/ionic-team/capacitor-plugins/issues/1452)
- [@capacitor/screen-orientation: iOS: orientation() and screenOrientationChange event report orientation change although orientation is locked](https://github.com/ionic-team/capacitor-plugins/issues/1446)

## Build and install
### Android
```bash
npm ci
npm run build
npx cap sync android
npx cap open android
# install through android studio
```

### iOS
```bash
npm ci
npm run build
npx cap sync ios
npx cap open ios
# install through xcode
```
