import {Before, BeforeAll, AfterAll} from '@cucumber/cucumber';
import {cleanup, device, init} from 'detox';
import detoxConfig from '../../../.detoxrc.js';

BeforeAll(async () => {
  await init(detoxConfig);
});

AfterAll(async () => {
  await cleanup();
});

Before(async () => {
  await device.reloadReactNative();
});
