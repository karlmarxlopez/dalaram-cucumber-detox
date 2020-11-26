import {Given, Then, When} from '@cucumber/cucumber';
import {by, element, expect} from 'detox';

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
