import {expect, device, element, by} from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.label('welcome'))).toBeVisible();
  });

  it('should toggle Hello! text visibility after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!'))).toBeVisible();

    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!'))).not.toBeVisible();
  });

  it('should toggle World! text visibility after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!'))).toBeVisible();

    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!'))).toBeNotVisible();
  });

  it('should accept user name', async () => {
    await element(by.label('Full name input')).atIndex(0).typeText('John Doe');
    await element(by.label('Greet button')).tap();
    await expect(element(by.text('Hello, John Doe!'))).toBeVisible();
  });
});
