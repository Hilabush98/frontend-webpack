import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 2001,
  },
  html: {
    template: 'index.html',
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'federation_consumer',
        publicPath: 'http://localhost:2001/', // desarrollo
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            federation_provider:
              'federation_provider@http://localhost:3000/mf-manifest.json', // dev

            //federation_provider:
            //'federation_provider@http://localhost:8080/proovider-component/remoteEntry.js', // prod
          },
          shared: {
            react: { singleton: true, eager: true },
            'react-dom': { singleton: true, eager: true },
          },
        }),
      ],
    },
  },
});
