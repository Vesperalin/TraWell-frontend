import Keycloak from 'keycloak-js';

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
