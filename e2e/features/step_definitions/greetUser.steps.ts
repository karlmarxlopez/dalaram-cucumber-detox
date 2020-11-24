import {
  Given,
  Before,
  Then,
  When,
  setDefaultTimeout,
  After,
} from '@cucumber/cucumber';
import {init, beforeEach, by, device, element, expect, cleanup} from 'detox';
import detoxConfig from '../../../.detoxrc.json';

Before({timeout: 120 * 1000}, async () => {
  await init(detoxConfig, {
    launchApp: true,
  });
});

After(async () => {
  await cleanup();
});

setDefaultTimeout(60 * 1000);

// beforeEach(async () => {
//   await device.reloadReactNative();
// });

Given('name is {string}', async (givenName: string) => {
  return 'pending';
  // await element(by.label('Full name input')).atIndex(0).typeText(givenName);
});

When('I tap Greet button', async () => {
  return 'pending';

  // await element(by.label('Greet button')).tap();
});

Then('I should be greeted with {string}', async (expectedGreeting: string) => {
  return 'pending';

  // await expect(element(by.text(expectedGreeting))).toBeVisible();
});
