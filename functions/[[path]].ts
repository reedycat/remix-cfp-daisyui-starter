import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'

import { getLoadContext } from '../load-context'

export const onRequest = createPagesFunctionHandler({
	// @ts-ignore - the server build file is generated by `remix vite:build`
	build: () => import('../build/server/index.js'),
	getLoadContext,
})
