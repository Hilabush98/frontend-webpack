/*const consume = async () => {
  const info = {
    grant_type: 'client_credentials',
    client_id: 'acxell.gonzalez',
    client_secret: 'Farma2027!',
    scope: '*',
  };
  const API_URL =
    'https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt';
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  })
    .then((response) => {
      console.log('responsee', response);
      return response.json();
    })
    .then((data) => {
      console.log('DATA', data);
    });
  return response;
};

const Execute = async () => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: 'acxell.gonzalez',
      client_secret: 'Farma2027!',
      scope: '*',
    }),
  };
  const red = await fetch(
    'https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt',
    requestOptions,
  )
    .then((response) => {
      console.log('responsee', response);
      return response.json();
    })
    .then((data) => {
      console.log('DATA', data);
    })
    .catch((error) => {
      console.log('ERROR', error.stack);
    });
  console.log(red);
};*/
import http from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Crear el middleware de proxy
const proxy = createProxyMiddleware('/api', {
  target: 'https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx', // Dirección del servidor de destino
  changeOrigin: true, // Cambia el origen de la solicitud a la URL de destino
  secure: false, // Si necesitas desactivar la validación SSL
  pathRewrite: { '^/api': '' }, // Opcional: reescribe la ruta, eliminando '/api' al hacer la solicitud
});

// Crear el servidor HTTP que utilizará el proxy
const server = http.createServer((req, res) => {
  proxy(req, res); // Redirigir todas las solicitudes que pasen por '/api' al proxy
});

// Hacer que el servidor escuche en el puerto 3001
server.listen(3001, () => {
  console.log('Proxy server running on http://localhost:3001');
});
