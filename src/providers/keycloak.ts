import Keycloak from 'keycloak-js';

// export const keycloakInitConfig: Keycloak.KeycloakInitOptions = {
//   onLoad: 'check-sso',
// };

// export const keycloakEventLogger = (event: unknown, error: unknown): void => {
//   console.log('onKeycloakEvent', event, error);
// };

// // keycloakTokenLogger(tokens: unknown)
// export const keycloakTokenLogger = (tokens: unknown): void => {
//   console.log('onKeycloakTokens', tokens);
// };

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloakConfig = {
  realm: 'TraWell',
  url: 'http://localhost:8403/auth',
  clientId: 'react',
  'ssl-required': 'external',
  resource: 'react',
  'public-client': true,
  'verify-token-audience': true,
  'use-resource-role-mappings': true,
  'confidential-port': 0,
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
