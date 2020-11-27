
// This is the workaround for the cucumber CLI args pass through issue
function setConfiguration() {
  const PLATFORM = process.env.DETOX_PLATFORM || 'ios'; //ios | android
  const FLAVOR = process.env.DETOX_BUILD_FLAVOR || 'release'; // debug | release

  const configurations = {
    ios_debug: {
      'ios.sim.debug': {
        type: 'ios.simulator',
        build: 'xcodebuild -workspace ios/rnsandbox.xcworkspace -scheme rnsandbox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
        binaryPath: './ios/build/Build/Products/Debug-iphonesimulator/rnsandbox.app',
        device: {
          type: 'iPhone 8'
        }
      }
    },
    ios_release: {
      'ios.sim.release': {
        type: 'ios.simulator',
        build: 'xcodebuild -workspace ios/rnsandbox.xcworkspace -scheme rnsandbox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
        binaryPath: './ios/build/Build/Products/Debug-iphonesimulator/rnsandbox.app',
        device: {
          type: 'iPhone 8'
        }
      }
    },
    android_debug: {
      'android.emu.debug': {
        type: 'android.emulator',
        binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
        build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
        device: {
          'avdName': 'Pixel_API_29_AOSP'
        }
      },
    },
    android_release: {
      'android.emu.release': {
        type: 'android.emulator',
        build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..',
        binaryPath: './android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
        device: {
          'avdName': 'Pixel_API_29_AOSP'
        }
      }
    }
  };

  return configurations[`${PLATFORM}_${FLAVOR}`];
}


module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  detox: {
    behavior: {
      init: {
        exposeGlobals: false,
        reuse: true,
      },
    },
  },
  configurations: setConfiguration(),
}