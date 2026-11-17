import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-BqLtMgzl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Cervezas_default = "/assets/Cervezas-C7XbvQAv.jpg";
var Ipa_Indian_default = "/assets/Ipa%20Indian-BhtaQMDh.jpg";
var Irish_default = "/assets/Irish-Dq0uUJtS.jpg";
var Kolsh_default = "/assets/Kolsh-DkjBpMSx.jpg";
var Porter_default = "/assets/Porter-IMBY1xA6.jpg";
var Pale_Ale_default = "/assets/Pale%20Ale-CoaC9atH.jpg";
var Arrecife_default = "/assets/Arrecife-CCPk3b1u.jpg";
var Golden_default = "/assets/Golden-sNkSWZ1X.jpg";
var ambience_default = "/assets/ambience-RW0J7wMl.jpg";
var waves_texture_default = "/assets/waves-texture-CTffqUqT.jpg";
var logo_default = "/assets/logo-C6XGXCbe.png";
var menu_default = "/assets/menu-8UL6FNTJ.jpg";
var burger_default = "/assets/burger-DA0kyklo.jpg";
var carnevip_default = "/assets/carnevip-_-fYlAFZ.jpg";
var camarones_default = "/assets/camarones-CczbItg6.jpg";
var arroz_default = "/assets/arroz-BSp7ZbBE.jpg";
var WHATSAPP_NUMBER = "573235981754";
var beers = [
	{
		name: "Cinto",
		style: "PALE ALE",
		abv: "4.3%",
		notes: "Suave, floral y refrescante como la brisa de El Rodadero.",
		image: Ipa_Indian_default
	},
	{
		name: "Gayraca",
		style: "Red Ale",
		abv: "5.0%",
		notes: "Maltas tostadas, caramelo suave y un cierre seco.",
		image: Irish_default
	},
	{
		name: "Neguaje",
		style: "Con Maracuyá",
		abv: "4.0%",
		ibu: "25",
		notes: "Maltas tostadas, caramelo suave y un cierre seco.",
		image: Kolsh_default
	},
	{
		name: "Granate",
		style: "Café",
		abv: "6.0%",
		notes: "Café, cacao y notas de panela sobre un cuerpo sedoso.",
		image: Porter_default
	},
	{
		name: "Chengue",
		style: "Lulo",
		abv: "5.0%",
		notes: "Plátano y clavo, turbia y refrescante en cada sorbo.",
		image: Pale_Ale_default
	},
	{
		name: "Inca Inca",
		style: "Miel",
		abv: "4.3%",
		notes: "Nuestra rotativa. Cada mes, una nueva ola por descubrir.",
		image: Golden_default
	}
];
var testimonials = [
	{
		quote: "Sin duda, de las mejores experiencias en Santa Marta. Seis estilos bien logrados, cada uno con un sabor único. Se nota el cuidado y la calidad en cada detalle.",
		author: "Reseña Tripadvisor",
		rating: 5
	},
	{
		quote: "La comida es otro nivel. Todo está pensado para hacer un maridaje perfecto: hamburguesas, picadas y alitas deliciosas y abundantes.",
		author: "Reseña Tripadvisor",
		rating: 5
	},
	{
		quote: "Ambiente súper agradable, ideal para ir con amigos, relajarse y disfrutar. Un lugar al que volvería sin pensarlo.",
		author: "Reseña Tripadvisor",
		rating: 5
	}
];
var hours = [
	["Domingo", "Cerrado"],
	["Lunes", "17:30 — 22:30"],
	["Martes", "11:30 — 22:00"],
	["Miércoles", "11:30 — 22:00"],
	["Jueves", "10:30 — 22:00"],
	["Viernes", "11:30 — 22:00"],
	["Sábado", "11:30 — 22:00"]
];
function Home() {
	const [reserveOpen, setReserveOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { onReserve: () => setReserveOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onReserve: () => setReserveOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gastronomy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experiences, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Franchise, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhereToFind, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ambience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, { onReserve: () => setReserveOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			reserveOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationModal, { onClose: () => setReserveOpen(false) })
		]
	});
}
function Nav({ onReserve }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "CerveceríaSiete Olas",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: [
							"Cervecería ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Siete "
							}),
							"Olas"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-6 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cervezas",
							className: "hover:text-foreground transition",
							children: "Cervezas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cocina",
							className: "hover:text-foreground transition",
							children: "Cocina"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#menu",
							className: "hover:text-foreground transition",
							children: "Menú"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#experiencias",
							className: "hover:text-foreground transition",
							children: "Experiencias"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#franquicia",
							className: "hover:text-foreground transition",
							children: "Franquicia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#donde",
							className: "hover:text-foreground transition",
							children: "Dónde comprar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#visitanos",
							className: "hover:text-foreground transition",
							children: "Visítanos"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onReserve,
					className: "hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition",
					children: "Reservar mesa"
				})
			]
		})
	});
}
function Hero({ onReserve }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: Cervezas_default,
				alt: "Las seis cervezas artesanales de Siete Olas: IPA Indian, Irish, Köls, Negra Tayrona, Trigo Bahía y Séptima Ola, sobre una barra al atardecer caribeño",
				width: 1920,
				height: 1280,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl w-full px-6 pb-20 md:pb-32 pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.3em] text-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-primary/70" }), "Santa Marta · Caribe Colombiano"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight",
							children: ["Los buenos momentos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block italic font-normal text-gradient-amber",
								children: "nunca terminan."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed",
							children: "Siete olas, seis cervezas artesanales propias y el auténtico sabor del Caribe en cada plato. Aquí no vienes solo a comer: vienes a crear historias."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#cervezas",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition",
								children: "Descubre nuestras cervezas →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onReserve,
								className: "inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-foreground/10 transition",
								children: "Reservar mesa"
							})]
						})
					]
				})
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 md:py-40 border-t border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: Arrecife_default,
					alt: "Botella de Agua tratada Arrecife, agua purificada y mineralizada con minerales esenciales para la salud, en botella de vidrio de 500ml",
					loading: "lazy",
					width: 900,
					height: 1200,
					className: "rounded-lg shadow-card w-full object-cover aspect-[3/4]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:pl-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-primary mb-5",
						children: "Nuestra historia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-6xl font-bold leading-[1.05]",
						children: [
							"Siete olas.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-muted-foreground",
								children: "Un mismo mar."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "En Cervecería Siete Olas creemos que cada cerveza cuenta una historia. Nacimos en Santa Marta, donde el mar Caribe se encuentra con la Sierra Nevada, inspirados por la riqueza natural y cultural de nuestra tierra para crear cervezas artesanales con identidad propia." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cocinamos con producto local, servimos con calma y creemos que el mejor maridaje siempre es la buena compañía." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8",
						children: [
							["6", "Estilos propios"],
							["5.0★", "Tripadvisor"],
							["100%", "Artesanal"]
						].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl md:text-4xl font-bold text-primary",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: l
						})] }, l))
					})
				]
			})]
		})
	});
}
function Beers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cervezas",
		className: "relative py-28 md:py-40 bg-card/40 border-y border-border/40 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: waves_texture_default,
			alt: "",
			"aria-hidden": true,
			className: "absolute inset-x-0 top-0 h-24 w-full object-cover opacity-20"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
					children: "La carta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-6xl font-bold max-w-2xl leading-[1.05]",
					children: [
						"Seis cervezas.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-normal text-sm=14px",
							children: "La esencia más pura del sabor caribeño."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground max-w-sm",
					children: "Pequeños lotes, gran carácter. Cerveza artesanal recién salida de nuestra sala de cocción, sin filtros ni atajos. Caribe en estado puro."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10",
				children: beers.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-background/40 to-card/60 border border-border/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-primary)/25,transparent_70%)] opacity-40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.image,
									alt: `Botella de cerveza artesanal ${b.name}`,
									loading: "lazy",
									width: 900,
									height: 1200,
									className: "relative h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105 drop-shadow-2xl"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute top-4 left-4 font-display text-xs tracking-widest text-primary/80",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/60 backdrop-blur px-2 py-1 rounded-full border border-border/40",
									children: [
										b.abv,
										"  ",
										b.ibu
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-2xl font-semibold",
							children: b.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-primary/90 uppercase tracking-widest",
							children: b.style
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed max-w-xs",
							children: b.notes
						})
					]
				}, b.name))
			})]
		})]
	});
}
function Gastronomy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cocina",
		className: "py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
						children: "Cocina"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-6xl font-bold leading-[1.05]",
						children: [
							"Siete Olas",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal",
								children: "un arte cotidiano."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: "Cada plato nace para potenciar el carácter de nuestras cervezas. Hamburguesas de autor, picadas para compartir y alitas con el auténtico sello del Caribe."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, {
						image: burger_default,
						title: "Hamburguesas",
						desc: "Carne fresca, brioche artesanal, quesos fundidos y toque de casa. El clásico que no falla.",
						tag: "Personal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, {
						image: carnevip_default,
						title: "Carnes",
						desc: "Entraña de res, sazonada con especias locales y servida con nuestra salsa especial.",
						tag: "Personal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, {
						image: camarones_default,
						title: "Ceviches",
						desc: "Camarones de la costa, aliñados con limón, ají y cebolla roja. Un clásico del Caribe.",
						tag: "Peersonal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodCard, {
						image: menu_default,
						title: "Picadas para compartir",
						desc: "Una selección de cortes de carne, pollo y embutidos para disfrutar en compañía.",
						tag: "Para compartir"
					})
				]
			})]
		})
	});
}
function FoodCard({ image, title, desc, tag }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative rounded-2xl overflow-hidden shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title,
				loading: "lazy",
				className: "h-[420px] md:h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-[10px] uppercase tracking-[0.25em] text-primary mb-3 border border-primary/40 rounded-full px-3 py-1",
						children: tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl md:text-4xl font-bold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground max-w-md",
						children: desc
					})
				]
			})
		]
	});
}
function Menu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "py-24 md:py-32 bg-card/40 border-y border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
					children: "Menú"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-5xl font-bold leading-[1.05]",
					children: [
						"Nuestra carta",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-normal text-muted-foreground",
							children: "al alcance de un clic."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground leading-relaxed",
					children: "Descarga o consulta nuestro menú completo en PDF: cervezas artesanales, hamburguesas, picadas para compartir y más."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://menu.pirpos.com/menu/699f817611792336c05a9a21",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition",
						children: "Ver menú →"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative rounded-2xl border border-border/60 bg-background/60 p-10 md:p-14 text-center shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: arroz_default,
					alt: "Menú de Cervecería Siete Olas",
					className: "h-auto w-full rounded-xl",
					loading: "lazy"
				})
			})]
		})
	});
}
function Experiences() {
	const standIncludes = [
		"Transporte y logística",
		"Vasos de 14 oz",
		"Mobiliario incluido"
	];
	const items = [
		{
			tag: "Cursos",
			title: "Domina el arte de la cerveza artesanal",
			desc: "Talleres prácticos donde vivirás el proceso de principio a fin: molienda, cocción, fermentación y cata. No necesitas experiencia, solo ganas de aprender.",
			cta: "Quiero inscribirme al curso",
			subject: "Curso de elaboración de cerveza"
		},
		{
			tag: "Tour",
			title: "Visita nuestra planta",
			desc: "Recorre nuestra sala de cocción y bodega de fermentación en Santa Marta en un tour guiado, con cata de las seis cervezas al finalizar.",
			cta: "Reservar visita a la planta",
			subject: "Visita guiada a la planta"
		},
		{
			tag: "Eventos",
			title: "Nuestra cerveza en tu evento",
			desc: "Organiza un evento con nosotros y disfruta de nuestra selección de cervezas artesanales y del servicio de catering.",
			cta: "Solicitar información",
			subject: "Servicio de catering para eventos"
		},
		{
			tag: "Stand 01",
			title: "Stand con una persona",
			desc: "Llevamos nuestra cerveza artesanal de barril y una persona para atender el stand en tu evento.",
			includes: [
				"1 persona para atender el stand",
				"2 barriles de cerveza",
				...standIncludes
			],
			price: "$2.000.000",
			cta: "Cotizar este stand",
			subject: "Stand 01 con una persona"
		},
		{
			tag: "Stand 02",
			title: "Stand de autoservicio",
			desc: "Tus invitados pueden servirse nuestra cerveza artesanal de barril durante el evento.",
			includes: ["2 barriles de cerveza", ...standIncludes],
			price: "$2.200.000",
			cta: "Cotizar este stand",
			subject: "Stand 02 de autoservicio"
		},
		{
			tag: "Stand 03",
			title: "Barra Siete Olas",
			desc: "Una barra de cerveza artesanal de barril con dos personas para atender a tus invitados.",
			includes: [
				"2 personas para atender la barra",
				"3 barriles de cerveza",
				...standIncludes
			],
			price: "$3.500.000",
			cta: "Cotizar esta barra",
			subject: "Stand 03 Barra Siete Olas"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experiencias",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs uppercase tracking-[0.3em] text-primary",
					children: "Experiencias"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-bold leading-[1.05] md:text-5xl",
					children: [
						"Vive la cerveza",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-normal italic text-muted-foreground",
							children: "desde adentro."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => {
					const message = encodeURIComponent(`Hola Siete Olas, me interesa ${item.subject}. ¿Me pueden dar más información y confirmar disponibilidad?`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-2xl border border-primary/30 bg-card p-8 transition-colors hover:border-primary/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-4 self-start rounded-full border border-primary/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary",
								children: item.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold md:text-3xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted-foreground",
								children: item.desc
							}),
							item.includes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground",
								children: item.includes.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: detail }, detail))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: "Rendimiento por barril: 70 vasos de 14 oz."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto pt-6",
								children: [item.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-4 font-display text-2xl font-bold text-primary",
									children: [
										item.price,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-normal",
											children: "COP"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:shadow-glow",
									children: [
										item.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "→"
										})
									]
								})]
							})
						]
					}, item.subject);
				})
			})]
		})
	});
}
function Franchise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "franquicia",
		className: "relative py-24 md:py-32 overflow-hidden border-y border-border/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: waves_texture_default,
			alt: "",
			"aria-hidden": true,
			className: "absolute inset-0 h-full w-full object-cover opacity-10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
					children: "Franquicia · Marca propia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-6xl font-bold leading-[1.05]",
					children: [
						"¿Quieres crear",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-normal text-gradient-amber",
							children: "tu propia cerveza?"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
					children: "Impulsamos tu proyecto cervecero. Aliados estratégicos para emprendedores, restaurantes y marcas que desean operar una franquicia Siete Olas o crear su propia cerveza artesanal con todo nuestro respaldo técnico. Cuéntanos tu idea y construyamos el siguiente paso juntos."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Siete Olas, me interesa la franquicia / crear mi propia cerveza. ¿Podemos conversar?")}`,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), "Contactar por WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:cerveceriasieteolas@gmail.com?subject=Interés en franquicia Siete Olas",
						className: "inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-3.5 text-sm font-semibold hover:bg-foreground/5 transition",
						children: "Escribir por correo"
					})]
				})
			]
		})]
	});
}
function WhereToFind() {
	const points = [
		{
			name: "Cervecería Siete Olas",
			detail: "Calle 19 #4-12, Santa Marta",
			tag: "Punto principal"
		},
		{
			name: "Club Siete Olas",
			detail: "Calle 29b #8-20 Esquina, Santa Marta",
			tag: "Placeholder"
		},
		{
			name: "Distribuidores",
			detail: "Si tienes un bar o restaurante y quieres ofrecer nuestras cervezas, escríbenos.",
			tag: "B2B"
		}
	];
	const msg = encodeURIComponent("Hola Siete Olas, quiero saber dónde puedo conseguir sus cervezas.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "donde",
		className: "py-24 md:py-32 bg-card/40 border-y border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
						children: "Dónde conseguirla"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-5xl font-bold leading-[1.05]",
						children: [
							"Puntos de venta",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-muted-foreground",
								children: "y distribución."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border/60 bg-background/60 p-8 flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block self-start text-[10px] uppercase tracking-[0.25em] text-primary mb-3 border border-primary/40 rounded-full px-3 py-1",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground leading-relaxed flex-1",
								children: p.detail
							})
						]
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition",
						children: "Consultar disponibilidad"
					})
				})
			]
		})
	});
}
function Ambience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ambiente",
		className: "relative py-28 md:py-40 border-t border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
					children: "El lugar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-6xl font-bold leading-[1.05]",
					children: ["Un rincón del Caribe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic font-normal text-muted-foreground",
						children: "para quedarse."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground leading-relaxed",
					children: "Luces cálidas, música que abraza y el aroma inconfundible de la cerveza recién servida. Nuestro espacio en Santa Marta está pensado para que la tarde se estire hasta la noche sin darte cuenta."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-2 gap-4 text-sm",
					children: [
						"Cerveza en tanque",
						"Terraza abierta",
						"Eventos privados",
						"Música en vivo",
						"Grupos y celebraciones",
						"Ambiente Fresco"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), f]
					}, f))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ambience_default,
					alt: "Ambiente interior de Siete Olas Cervecería con luces cálidas",
					loading: "lazy",
					width: 1600,
					height: 1100,
					className: "rounded-2xl w-full object-cover aspect-[4/5] md:aspect-[5/6] shadow-card"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl max-w-[220px] shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold leading-tight",
						children: "\"Los buenos momentos nunca terminan.\""
					})
				})]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 md:py-40 bg-card/40 border-y border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
						children: "Reseñas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-6xl font-bold leading-[1.05]",
						children: ["5.0 sobre 5.0", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-primary" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "Lo que dicen quienes ya vinieron a compartir su ola."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-2xl border border-border/60 bg-background/60 p-8 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-primary text-sm tracking-widest mb-4",
							children: "★".repeat(t.rating)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-foreground/90 leading-relaxed flex-1",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-6 text-sm text-muted-foreground",
							children: ["— ", t.author]
						})
					]
				}, i))
			})]
		})
	});
}
function Visit({ onReserve }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "visitanos",
		className: "py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-primary mb-4",
					children: "Visítanos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-6xl font-bold leading-[1.05]",
					children: [
						"Te esperamos",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-normal",
							children: "con la cerveza fría."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-6 text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoRow, {
							label: "Dirección",
							children: [
								"Calle 19 #4-12",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Santa Marta, Magdalena — Colombia"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Teléfono",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+573235981754",
								className: "hover:text-primary transition",
								children: "+57 323 598 1754"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Correo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:cerveceriasieteolas@gmail.com",
								className: "hover:text-primary transition",
								children: "cerveceriasieteolas@gmail.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Redes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/sieteolascerveceria/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram Siete Olas",
									className: "inline-flex items-center justify-center h-11 w-11 rounded-full border border-border/60 text-foreground/80 hover:text-primary hover:border-primary/60 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/Losbueosmomentosnuncaterminan/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Facebook Siete Olas",
									className: "inline-flex items-center justify-center h-11 w-11 rounded-full border border-border/60 text-foreground/80 hover:text-primary hover:border-primary/60 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, { className: "h-5 w-5" })
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onReserve,
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition",
						children: "Reservar mesa →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://maps.google.com/maps?daddr=Calle+19+%234-12+Santa+Marta+Colombia",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-semibold hover:bg-foreground/5 transition",
						children: "Cómo llegar"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/60 bg-card p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold mb-6",
						children: "Horario"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border/60",
						children: hours.map(([day, time]) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: day
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: time === "Cerrado" ? "text-muted-foreground text-sm" : "text-primary font-medium tabular-nums",
									children: time
								})]
							}, day);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-muted-foreground",
						children: "Recomendamos reservar con al menos 24 horas de anticipación para grupos de más de 6 personas."
					})
				]
			})]
		})
	});
}
function InfoRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-foreground/90 leading-relaxed",
		children
	})] });
}
function ReservationModal({ onClose }) {
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		date: today,
		time: "19:00",
		people: "2",
		occasion: "",
		notes: ""
	});
	const update = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	const handleSubmit = (e) => {
		e.preventDefault();
		const message = `Hola, quisiera realizar una reserva en Siete Olas Cervecería:\n\n• Nombre: ${form.name}\n• Teléfono: ${form.phone}\n• Fecha: ${form.date}\n• Hora: ${form.time}\n• Personas: ${form.people}\n` + (form.occasion ? `• Ocasión: ${form.occasion}\n` : "") + (form.notes ? `• Notas: ${form.notes}\n` : "") + `\nQuedo atento(a) a la confirmación. ¡Muchas gracias!`;
		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank", "noopener,noreferrer");
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "reservation-title",
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border/60 bg-card shadow-card",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				"aria-label": "Cerrar",
				className: "absolute top-4 right-4 h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition",
				children: "✕"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-primary mb-3",
						children: "Reserva formal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "reservation-title",
						className: "font-display text-3xl md:text-4xl font-bold leading-tight",
						children: "Reserva tu mesa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Completa los datos y confirmaremos tu reserva por WhatsApp en breve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-8 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nombre completo",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: form.name,
									onChange: update("name"),
									className: inputClass,
									placeholder: "Tu nombre"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Teléfono de contacto",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "tel",
									value: form.phone,
									onChange: update("phone"),
									className: inputClass,
									placeholder: "+57 300 000 0000"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Fecha",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "date",
										min: today,
										value: form.date,
										onChange: update("date"),
										className: inputClass
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Hora",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "time",
										value: form.time,
										onChange: update("time"),
										className: inputClass
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Número de personas",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.people,
									onChange: update("people"),
									className: inputClass,
									children: [
										"1",
										"2",
										"3",
										"4",
										"5",
										"6",
										"7",
										"8",
										"9",
										"10+"
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: n,
										children: [
											n,
											" ",
											n === "1" ? "persona" : "personas"
										]
									}, n))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Ocasión (opcional)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.occasion,
									onChange: update("occasion"),
									className: inputClass,
									placeholder: "Cumpleaños, aniversario, cena de trabajo..."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Notas adicionales (opcional)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.notes,
									onChange: update("notes"),
									rows: 3,
									className: inputClass + " resize-none",
									placeholder: "Alergias, ubicación preferida, etc."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), "Enviar solicitud por WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground text-center",
								children: "La reserva se confirma una vez recibas nuestra respuesta."
							})
						]
					})
				]
			})]
		})
	});
}
var inputClass = "w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition";
function Field({ label, required, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "*"
				})
			]
		}), children]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "CerveceríaSiete Olas",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-semibold",
						children: "Siete Olas Cervecería Artesanal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/sieteolascerveceria/",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram Siete Olas",
						className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.facebook.com/Losbueosmomentosnuncaterminan/",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Facebook Siete Olas",
						className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground text-center",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Siete Olas · Santa Marta — Beba con moderación."
					]
				})
			]
		})
	});
}
function InstagramIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "6.5",
				r: "1",
				fill: "currentColor"
			})
		]
	});
}
function FacebookIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2C16.4 4.1 15.5 4 14.5 4c-2.2 0-3.7 1.3-3.7 3.8v3H8v3.2h2.8V22h2.7z" })
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" })
	});
}
export { Home as component };
