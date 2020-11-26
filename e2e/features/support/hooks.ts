import {Before, BeforeAll, AfterAll} from '@cucumber/cucumber';
import {cleanup, device, init} from 'detox';
import detoxConfig from '../../../.detoxrc.js';

BeforeAll({timeout: 120 * 1000}, async () => {
  await init(detoxConfig, {
    launchApp: true,
    initGlobals: false,
    reuse: true,
  });
});

AfterAll(async () => {
  await cleanup();
});

Before(async () => {
  await device.reloadReactNative();
});
