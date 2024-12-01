import root from '../root.js'
import { set_building, set_prerendering } from '__sveltekit/environment'
import { set_assets } from '__sveltekit/paths'
import { set_manifest, set_read_implementation } from '__sveltekit/server'
import {
	set_private_env,
	set_public_env,
	set_safe_public_env
} from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js'

export const options = {
	app_dir: '_app',
	app_template_contains_nonce: false,
	csp: {
		mode: 'auto',
		directives: {
			'upgrade-insecure-requests': false,
			'block-all-mixed-content': false
		},
		reportOnly: {
			'upgrade-insecure-requests': false,
			'block-all-mixed-content': false
		}
	},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: 'modulepreload',
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) =>
			'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<link\n\t\t\trel="icon"\n\t\t\ttype="image/svg+xml"\n\t\t\thref="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%230ea5e9%22></rect><path fill=%22%23fff%22 d=%22M24.98 67.77L30.86 67.77L30.86 32.23L24.95 32.23L24.90 56.59L13.43 32.23L7.47 32.23L7.47 67.77L13.40 67.77L13.43 43.31L24.98 67.77ZM35.40 32.23L40.04 67.77L45.58 67.77L49.15 46.02L49.41 44.34L49.66 46.02L53.27 67.77L58.81 67.77L63.50 32.23L58.03 32.23L55.57 54.05L55.40 55.54L55.15 54.08L51.61 32.23L47.12 32.23L43.70 53.98L43.46 55.44L43.29 54.05L40.84 32.23L35.40 32.23ZM74.22 67.77L74.22 54.22L80.25 54.22Q82.93 54.22 85.19 53.44Q87.45 52.66 89.09 51.22L89.09 51.22Q90.72 49.80 91.63 47.81Q92.53 45.83 92.53 43.36L92.53 43.36Q92.53 40.80 91.63 38.75Q90.72 36.69 89.09 35.25L89.09 35.25Q87.45 33.81 85.19 33.03Q82.93 32.25 80.25 32.23L80.25 32.23L68.36 32.23L68.36 67.77L74.22 67.77ZM80.25 49.44L74.22 49.44L74.22 37.01L80.25 37.01Q81.74 37.04 82.92 37.50Q84.11 37.96 84.94 38.82L84.94 38.82Q85.77 39.67 86.19 40.83Q86.62 41.99 86.62 43.41L86.62 43.41Q86.62 44.70 86.19 45.80Q85.77 46.90 84.94 47.71L84.94 47.71Q84.11 48.51 82.92 48.96Q81.74 49.41 80.25 49.44L80.25 49.44Z%22></path></svg>" />\n\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t' +
			head +
			'\n\t</head>\n\t<body data-sveltekit-preload-data="hover">\n\t\t<div class="sugar-root" style="display: contents">' +
			body +
			'</div>\n\t</body>\n</html>\n',
		error: ({ status, message }) =>
			'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<title>' +
			message +
			"</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" +
			status +
			'</span>\n\t\t\t<div class="message">\n\t\t\t\t<h1>' +
			message +
			'</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n'
	},
	version_hash: 'ddwjcp'
}

export async function get_hooks() {
	return {}
}

export {
	set_assets,
	set_building,
	set_manifest,
	set_prerendering,
	set_private_env,
	set_public_env,
	set_read_implementation,
	set_safe_public_env
}
