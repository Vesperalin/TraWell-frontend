import { useKeycloak } from '@react-keycloak/web';

export const Test = () => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
    // return <div>Jesteś niezalogowany gnoju</div>;
  } else {
    console.log(keycloak.token);
    return <div>Gud dzob debilu</div>;
  }
  return <div>ds</div>;
};
