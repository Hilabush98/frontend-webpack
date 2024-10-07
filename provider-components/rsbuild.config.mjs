import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'federation_provider',
        publicPath: 'auto',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider',
          filename: 'remoteEntry.js',
          exposes: {
            './components': './src/components/index.js',
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
