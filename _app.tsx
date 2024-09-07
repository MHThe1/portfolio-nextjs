import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '607b77de-3d17-4c53-89d9-2c5043a7db68',
    clientToken: 'pub93dc0445357621e4fdf269213d132afa',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'portfolio',
    env: 'prod',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});