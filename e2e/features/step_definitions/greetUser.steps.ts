import {
  Before,
  Given,
  setDefaultTimeout,
  Then,
  When,
  After,
  BeforeAll,
} from '@cucumber/cucumber';
import {by, device, element, expect, init, cleanup} from 'detox';
import detoxConfig from '../../../.detoxrc.js';

setDefaultTimeout(120 * 1000);

BeforeAll({timeout: 120 * 1000}, async () => {
  await init(detoxConfig, {
    launchApp: true,
  });
});

After(async () => {
  await cleanup();
});

Before(async () => {
  await device.reloadReactNative();
});

Given('name is {string}', async (givenName: string) => {
  // I need to call atIndex(0) because it's finding multiple nodes on iOS
  await element(by.label('Full name input')).atIndex(0).typeText(givenName);
});

When('I tap Greet button', async () => {
  await element(by.label('Greet button')).tap();
});

Then('I should be greeted with {string}', async (expectedGreeting: string) => {
  await expect(element(by.text(expectedGreeting))).toBeVisible();
});
