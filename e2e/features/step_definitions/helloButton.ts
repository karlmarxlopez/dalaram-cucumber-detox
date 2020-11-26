import {Given, Then, When} from '@cucumber/cucumber';
import {by, element, expect} from 'detox';

Given('a user opened the newly installed app', async () => {
  await expect(element(by.text('Hello!'))).toBeNotVisible();
});

When('I tap Hello button', async () => {
  await element(by.id('hello_button')).tap();
});

Then('I should see {string}', async (expectedGreeting: string) => {
  await expect(element(by.text(expectedGreeting))).toBeVisible();
});
