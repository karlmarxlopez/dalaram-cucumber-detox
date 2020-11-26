## Dalaram Cucumber + Detox Example

Sample automated test running on iPhone 8
![DEMO GIF](/cucumber-detox-demo.gif "DEMO GIF")

Explore the test files inside `e2e/features`

Run this before starting the test
`yarn && npx pod-install`


## Running the tests

Before running the test, you need to build the app first


### On iOS
**Debug**

`yarn detox:buildIosDebug`

`yarn detox:testIosDebug`

**Release**

`yarn detox:buildIosRelease`

`yarn detox:testIosRelease`


### On Android
**Debug**

`yarn detox:buildAndroidDebug`

`yarn detox:testAndroidDebug`

**Release**

`yarn detox:buildAndroidRelease`

`yarn detox:testAndroidRelease`