import { type PlatformProxy } from 'wrangler'

// When using `wrangler.toml` to configure bindings,
// `wrangler types` will generate types for those bindings
// into the global `Env` interface.
// Need this empty interface so that typechecking passes
// even if no `wrangler.toml` exists.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Env {}

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>
type LoadContext = {
	cloudflare: Cloudflare
}

declare module '@remix-run/cloudflare' {
	interface AppLoadContext {
		env: Cloudflare['env']
		cf: Cloudflare['cf']
		ctx: Cloudflare['ctx']
		cache: Cloudflare['caches']
	}
}

export function getLoadContext({
	context,
}: {
	request: Request
	context: LoadContext
}) {
	return {
		env: context.cloudflare.env,
		cf: context.cloudflare.cf,
		ctx: context.cloudflare.ctx,
		cache: context.cloudflare.caches,
	}
}
