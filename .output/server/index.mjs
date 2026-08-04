globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-17T15:59:35.212Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/ambience-RW0J7wMl.jpg": {
		"type": "image/jpeg",
		"etag": "\"258d4-8QiXouA22z1hYyGQtGlHaqM5Hlg\"",
		"mtime": "2026-07-21T20:59:33.760Z",
		"size": 153812,
		"path": "../public/assets/ambience-RW0J7wMl.jpg"
	},
	"/menu-siete-olas.pdf": {
		"type": "application/pdf",
		"etag": "\"668-ul0JDfxUO7jAMVM52wC0cUg3p6g\"",
		"mtime": "2026-07-17T15:59:38.147Z",
		"size": 1640,
		"path": "../public/menu-siete-olas.pdf"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-17T15:59:42.526Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/food-burger-Ba0JR0cI.jpg": {
		"type": "image/jpeg",
		"etag": "\"20a8b-zFZrFROaUJ6UsxOM14Q1Tg2Dp4g\"",
		"mtime": "2026-07-21T20:59:33.761Z",
		"size": 133771,
		"path": "../public/assets/food-burger-Ba0JR0cI.jpg"
	},
	"/assets/food-picada-BBFHNZC6.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b881-3zJP7x1WGee0HiFUYo329W2eWZA\"",
		"mtime": "2026-07-21T20:59:33.761Z",
		"size": 178305,
		"path": "../public/assets/food-picada-BBFHNZC6.jpg"
	},
	"/assets/Arrecife-CCPk3b1u.jpg": {
		"type": "image/jpeg",
		"etag": "\"552d9-uhX3TqqM0dT+hIVJy9jfXJ9FpJk\"",
		"mtime": "2026-07-21T20:59:33.758Z",
		"size": 348889,
		"path": "../public/assets/Arrecife-CCPk3b1u.jpg"
	},
	"/assets/Golden-sNkSWZ1X.jpg": {
		"type": "image/jpeg",
		"etag": "\"5580e-tBl+FHg+YPEpEO/Y9VE0QvrvlBk\"",
		"mtime": "2026-07-21T20:59:33.758Z",
		"size": 350222,
		"path": "../public/assets/Golden-sNkSWZ1X.jpg"
	},
	"/assets/index-DaRYVcPX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"540fc-CPoIwR8pPA8pYdRmbrIU7n2ZlhM\"",
		"mtime": "2026-07-21T20:59:33.756Z",
		"size": 344316,
		"path": "../public/assets/index-DaRYVcPX.js"
	},
	"/assets/Ipa Indian-BhtaQMDh.jpg": {
		"type": "image/jpeg",
		"etag": "\"59c67-yGcl6eQBKE9QiSYtNjjki3iFS/M\"",
		"mtime": "2026-07-21T20:59:33.759Z",
		"size": 367719,
		"path": "../public/assets/Ipa Indian-BhtaQMDh.jpg"
	},
	"/assets/Irish-Dq0uUJtS.jpg": {
		"type": "image/jpeg",
		"etag": "\"4eb4a-4/HqX5GZiEqSocEC4BTGpU01tho\"",
		"mtime": "2026-07-21T20:59:33.759Z",
		"size": 322378,
		"path": "../public/assets/Irish-Dq0uUJtS.jpg"
	},
	"/assets/routes-DC7LLOcL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8575-TLcXLcC/k1OAWQEgfy5DfcA2aBQ\"",
		"mtime": "2026-07-21T20:59:33.757Z",
		"size": 34165,
		"path": "../public/assets/routes-DC7LLOcL.js"
	},
	"/assets/Pale Ale-CoaC9atH.jpg": {
		"type": "image/jpeg",
		"etag": "\"46cdd-NIZRiG2ZkO0+I1+PJR/jpmMQ850\"",
		"mtime": "2026-07-21T20:59:33.760Z",
		"size": 290013,
		"path": "../public/assets/Pale Ale-CoaC9atH.jpg"
	},
	"/assets/waves-texture-CTffqUqT.jpg": {
		"type": "image/jpeg",
		"etag": "\"117d2-52JdqSt2rtAVPjReQRo0XqPqfhA\"",
		"mtime": "2026-07-21T20:59:33.761Z",
		"size": 71634,
		"path": "../public/assets/waves-texture-CTffqUqT.jpg"
	},
	"/assets/styles-CKXlYukk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"148b0-2cKM5/SIFGUea57Br/sdrW/Y0nA\"",
		"mtime": "2026-07-21T20:59:33.761Z",
		"size": 84144,
		"path": "../public/assets/styles-CKXlYukk.css"
	},
	"/assets/Porter-IMBY1xA6.jpg": {
		"type": "image/jpeg",
		"etag": "\"5063a-FicEhIHgFyB1afZpCnDI6nAjltI\"",
		"mtime": "2026-07-21T20:59:33.760Z",
		"size": 329274,
		"path": "../public/assets/Porter-IMBY1xA6.jpg"
	},
	"/assets/Kolsh-DkjBpMSx.jpg": {
		"type": "image/jpeg",
		"etag": "\"5aa6e-LC3QJipndpyx1GMU9tKDapE+Txc\"",
		"mtime": "2026-07-21T20:59:33.760Z",
		"size": 371310,
		"path": "../public/assets/Kolsh-DkjBpMSx.jpg"
	},
	"/assets/Cervezas-C7XbvQAv.jpg": {
		"type": "image/jpeg",
		"etag": "\"9644a-OF4Z0sNKajP8cFqJRIJDzLz/sZE\"",
		"mtime": "2026-07-21T20:59:33.758Z",
		"size": 615498,
		"path": "../public/assets/Cervezas-C7XbvQAv.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_p7Aqkf = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_p7Aqkf
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
