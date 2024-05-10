import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import remixConfig from './remix.config'
import { getLoadContext } from './load-context'

export default defineConfig({
	plugins: [
		remixCloudflareDevProxy({ getLoadContext }),
		remix(remixConfig),
		tsconfigPaths(),
	],
})
