import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'SearchAndRescue',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44360/',
    redirectUri: baseUrl,
    clientId: 'SearchAndRescue_App',
    responseType: 'code',
    scope: 'offline_access SearchAndRescue',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44360',
      rootNamespace: 'SearchAndRescue',
    },
  },
} as Environment;
