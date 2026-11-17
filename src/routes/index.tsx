import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cervezas from "@/assets/Cervezas.jpg";
import ipaIndian from "@/assets/Ipa Indian.jpg";
import irish from "@/assets/Irish.jpg";
import kolsh from "@/assets/Kolsh.jpg";
import porter from "@/assets/Porter.jpg";
import paleAle from "@/assets/Pale Ale.jpg";
import Arrecife from "@/assets/Arrecife.jpg";
import golden from "@/assets/Golden.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import foodPicada from "@/assets/food-picada.jpg";
import ambience from "@/assets/ambience.jpg";
import waves from "@/assets/waves-texture.jpg";
import logo from "@/assets/logo.png";
import menu from "@/assets/menu.jpg";
import burger7 from "@/assets/burger.jpg"
import carne7 from "@/assets/carnevip.jpg"
import camarones from "@/assets/camarones.jpg"
import carne from "@/assets/carne.jpg"
import arroz from "@/assets/arroz.jpg"

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_NUMBER = "573235981754";

const beers = [
  {
    name: "Cinto",
    style: "PALE ALE",
    abv: "4.3%",
    notes: "Suave, floral y refrescante como la brisa de El Rodadero.",
    image: ipaIndian,
  },
  {
    name: "Gayraca",
    style: "Red Ale",
    abv: "5.0%",
    notes: "Maltas tostadas, caramelo suave y un cierre seco.",
    image: irish,
  },
  {
    name: "Neguaje",
    style: "Con Maracuyá",
    abv: "4.0%",
    ibu: "25",
    notes: "Maltas tostadas, caramelo suave y un cierre seco.",
    image: kolsh,
  },
  {
    name: "Granate",
    style: "Café",
    abv: "6.0%",
    notes: "Café, cacao y notas de panela sobre un cuerpo sedoso.",
    image: porter,
  },
  {
    name: "Chengue",
    style: "Lulo",
    abv: "5.0%",
    notes: "Plátano y clavo, turbia y refrescante en cada sorbo.",
    image: paleAle,
  },
  {
    name: "Inca Inca",
    style: "Miel",
    abv: "4.3%",
    notes: "Nuestra rotativa. Cada mes, una nueva ola por descubrir.",
    image: golden,
  },
];

const testimonials = [
  {
    quote:
      "Sin duda, de las mejores experiencias en Santa Marta. Seis estilos bien logrados, cada uno con un sabor único. Se nota el cuidado y la calidad en cada detalle.",
    author: "Reseña Tripadvisor",
    rating: 5,
  },
  {
    quote:
      "La comida es otro nivel. Todo está pensado para hacer un maridaje perfecto: hamburguesas, picadas y alitas deliciosas y abundantes.",
    author: "Reseña Tripadvisor",
    rating: 5,
  },
  {
    quote:
      "Ambiente súper agradable, ideal para ir con amigos, relajarse y disfrutar. Un lugar al que volvería sin pensarlo.",
    author: "Reseña Tripadvisor",
    rating: 5,
  },
];

const hours = [
  ["Domingo", "Cerrado"],
  ["Lunes", "17:30 — 22:30"],
  ["Martes", "11:30 — 22:00"],
  ["Miércoles", "11:30 — 22:00"],
  ["Jueves", "10:30 — 22:00"],
  ["Viernes", "11:30 — 22:00"],
  ["Sábado", "11:30 — 22:00"],
];

function Home() {
  const [reserveOpen, setReserveOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav onReserve={() => setReserveOpen(true)} />
      <Hero onReserve={() => setReserveOpen(true)} />
      <About />
      <Beers />
      <Gastronomy />
      <Menu />
      <Experiences />
      <Franchise />
      <WhereToFind />
      <Ambience />
      <Testimonials />
      <Visit onReserve={() => setReserveOpen(true)} />
      <Footer />
      {reserveOpen && <ReservationModal onClose={() => setReserveOpen(false)} />}
    </div>
  );
}

function Nav({ onReserve }: { onReserve: () => void }) {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img src={logo} alt="CerveceríaSiete Olas" className="h-10 w-auto"/>
          <span className="font-display text-lg font-semibold tracking-tight">
            Cervecería <span className="text-primary">Siete </span>Olas
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#cervezas" className="hover:text-foreground transition">Cervezas</a>
          <a href="#cocina" className="hover:text-foreground transition">Cocina</a>
          <a href="#menu" className="hover:text-foreground transition">Menú</a>
          <a href="#experiencias" className="hover:text-foreground transition">Experiencias</a>
          <a href="#franquicia" className="hover:text-foreground transition">Franquicia</a>
          <a href="#donde" className="hover:text-foreground transition">Dónde comprar</a>
          <a href="#visitanos" className="hover:text-foreground transition">Visítanos</a>
        </nav>
        <button
          onClick={onReserve}
          className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Reservar mesa
        </button>
      </div>
    </header>
  );
}

function Hero({ onReserve }: { onReserve: () => void }) {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={cervezas}
        alt="Las seis cervezas artesanales de Siete Olas: IPA Indian, Irish, Köls, Negra Tayrona, Trigo Bahía y Séptima Ola, sobre una barra al atardecer caribeño"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl w-full px-6 pb-20 md:pb-32 pt-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.3em] text-primary/90">
            <span className="h-px w-10 bg-primary/70" />
            Santa Marta · Caribe Colombiano
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
            Los buenos momentos
            <span className="block italic font-normal text-gradient-amber">nunca terminan.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
            Siete olas, seis cervezas artesanales propias y el auténtico sabor del Caribe en cada plato.
             Aquí no vienes solo a comer: vienes a crear historias.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cervezas"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition"
            >
              Descubre nuestras cervezas →
            </a>
            <button
              onClick={onReserve}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-foreground/10 transition"
            >
              Reservar mesa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative py-28 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <img
            src={Arrecife}
            alt="Botella de Agua tratada Arrecife, agua purificada y mineralizada con minerales esenciales para la salud, en botella de vidrio de 500ml"
            loading="lazy"
            width={900}
            height={1200}
            className="rounded-lg shadow-card w-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="md:col-span-7 md:pl-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Nuestra historia</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Siete olas.<br />
            <span className="italic font-normal text-muted-foreground">Un mismo mar.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              En Cervecería Siete Olas creemos que cada cerveza cuenta una historia. 
              Nacimos en Santa Marta, donde el mar Caribe se encuentra con la Sierra Nevada, 
              inspirados por la riqueza natural y cultural de nuestra tierra para crear cervezas artesanales con identidad propia.
            </p>
            <p>
              Cocinamos con producto local, servimos con calma y creemos que
              el mejor maridaje siempre es la buena compañía.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["6", "Estilos propios"],
              ["5.0★", "Tripadvisor"],
              ["100%", "Artesanal"],
            ].map(([n, l]) => (
              <div key={l as string}>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Beers() {
  return (
    <section id="cervezas" className="relative py-28 md:py-40 bg-card/40 border-y border-border/40 overflow-hidden">
      <img src={waves} alt="" aria-hidden className="absolute inset-x-0 top-0 h-24 w-full object-cover opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">La carta</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl leading-[1.05]">
              Seis cervezas.<br />
              <span className="italic font-normal text-sm=14px">
                La esencia más pura del sabor caribeño.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Pequeños lotes, gran carácter. Cerveza artesanal
            recién salida de nuestra sala de cocción, sin filtros ni atajos. Caribe en estado puro.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {beers.map((b, i) => (
            <article
              key={b.name}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-background/40 to-card/60 border border-border/40">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-primary)/25,transparent_70%)] opacity-40" />
                <img
                  src={b.image}
                  alt={`Botella de cerveza artesanal ${b.name}`}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="relative h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105 drop-shadow-2xl"
                />
                <span className="absolute top-4 left-4 font-display text-xs tracking-widest text-primary/80">
                  0{i + 1}
                </span>
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/60 backdrop-blur px-2 py-1 rounded-full border border-border/40">
                  {b.abv}  {b.ibu}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{b.name}</h3>
              <p className="mt-1 text-sm text-primary/90 uppercase tracking-widest">{b.style}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xs">{b.notes}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gastronomy() {
  return (
    <section id="cocina" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Cocina</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Siete Olas<br />
            <span className="italic font-normal">un arte cotidiano.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Cada plato nace para potenciar el carácter de nuestras cervezas.
            Hamburguesas de autor, picadas para compartir y alitas con el auténtico sello del Caribe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FoodCard
            image={burger7}
            title="Hamburguesas"
            desc="Carne fresca, brioche artesanal, quesos fundidos y toque de casa. El clásico que no falla."
            tag="Personal"
          />
          <FoodCard
            image={carne7}
            title="Carnes"
            desc="Entraña de res, sazonada con especias locales y servida con nuestra salsa especial."
            tag="Personal"
          />
          <FoodCard
            image={camarones}
            title="Ceviches"
            desc="Camarones de la costa, aliñados con limón, ají y cebolla roja. Un clásico del Caribe."
            tag="Peersonal"
          />
          <FoodCard
            image={menu}
            title="Picadas para compartir"
            desc="Una selección de cortes de carne, pollo y embutidos para disfrutar en compañía."
            tag="Para compartir"
          />
        </div>
      </div>
    </section>
  );
}

function FoodCard({
  image,
  title,
  desc,
  tag,
}: {
  image: string;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <article className="group relative rounded-2xl overflow-hidden shadow-card">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-[420px] md:h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
        <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-primary mb-3 border border-primary/40 rounded-full px-3 py-1">
          {tag}
        </span>
        <h3 className="font-display text-3xl md:text-4xl font-bold">{title}</h3>
        <p className="mt-3 text-muted-foreground max-w-md">{desc}</p>
      </div>
    </article>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-card/40 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Menú</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
            Nuestra carta<br />
            <span className="italic font-normal text-muted-foreground">al alcance de un clic.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Descarga o consulta nuestro menú completo en PDF: cervezas artesanales,
            hamburguesas, picadas para compartir y más.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://menu.pirpos.com/menu/699f817611792336c05a9a21"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition"
            >
              Ver menú →
            </a>
          </div>
        </div>
        <div className="relative rounded-2xl border border-border/60 bg-background/60 p-10 md:p-14 text-center shadow-card">
          <img
            src={arroz}
            alt="Menú de Cervecería Siete Olas"
            className="h-auto w-full rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  const standIncludes = [
    "Transporte y logística",
    "Vasos de 14 oz",
    "Mobiliario incluido",
  ];

  const items = [
    {
      tag: "Cursos",
      title: "Domina el arte de la cerveza artesanal",
      desc: "Talleres prácticos donde vivirás el proceso de principio a fin: molienda, cocción, fermentación y cata. No necesitas experiencia, solo ganas de aprender.",
      cta: "Quiero inscribirme al curso",
      subject: "Curso de elaboración de cerveza",
    },
    {
      tag: "Tour",
      title: "Visita nuestra planta",
      desc: "Recorre nuestra sala de cocción y bodega de fermentación en Santa Marta en un tour guiado, con cata de las seis cervezas al finalizar.",
      cta: "Reservar visita a la planta",
      subject: "Visita guiada a la planta",
    },
    {
      tag: "Eventos",
      title: "Nuestra cerveza en tu evento",
      desc: "Organiza un evento con nosotros y disfruta de nuestra selección de cervezas artesanales y del servicio de catering.",
      cta: "Solicitar información",
      subject: "Servicio de catering para eventos",
    },
    {
      tag: "Stand 01",
      title: "Stand con una persona",
      desc: "Llevamos nuestra cerveza artesanal de barril y una persona para atender el stand en tu evento.",
      includes: [
        "1 persona para atender el stand",
        "2 barriles de cerveza",
        ...standIncludes,
      ],
      price: "$2.000.000",
      cta: "Cotizar este stand",
      subject: "Stand 01 con una persona",
    },
    {
      tag: "Stand 02",
      title: "Stand de autoservicio",
      desc: "Tus invitados pueden servirse nuestra cerveza artesanal de barril durante el evento.",
      includes: ["2 barriles de cerveza", ...standIncludes],
      price: "$2.200.000",
      cta: "Cotizar este stand",
      subject: "Stand 02 de autoservicio",
    },
    {
      tag: "Stand 03",
      title: "Barra Siete Olas",
      desc: "Una barra de cerveza artesanal de barril con dos personas para atender a tus invitados.",
      includes: [
        "2 personas para atender la barra",
        "3 barriles de cerveza",
        ...standIncludes,
      ],
      price: "$3.500.000",
      cta: "Cotizar esta barra",
      subject: "Stand 03 Barra Siete Olas",
    },
  ];

  return (
    <section id="experiencias" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            Experiencias
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl">
            Vive la cerveza
            <br />
            <span className="font-normal italic text-muted-foreground">
              desde adentro.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const message = encodeURIComponent(
              `Hola Siete Olas, me interesa ${item.subject}. ¿Me pueden dar más información y confirmar disponibilidad?`,
            );

            return (
              <article
                key={item.subject}
                className="flex flex-col rounded-2xl border border-primary/30 bg-card p-8 transition-colors hover:border-primary/70"
              >
                <span className="mb-4 self-start rounded-full border border-primary/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
                  {item.tag}
                </span>

                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>

                {item.includes && (
                  <>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {item.includes.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Rendimiento por barril: 70 vasos de 14 oz.
                    </p>
                  </>
                )}

                <div className="mt-auto pt-6">
                  {item.price && (
                    <p className="mb-4 font-display text-2xl font-bold text-primary">
                      {item.price}{" "}
                      <span className="text-sm font-normal">COP</span>
                    </p>
                  )}

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:shadow-glow"
                  >
                    {item.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Franchise() {
  const msg = encodeURIComponent(
    "Hola Siete Olas, me interesa la franquicia / crear mi propia cerveza. ¿Podemos conversar?",
  );
  return (
    <section id="franquicia" className="relative py-24 md:py-32 overflow-hidden border-y border-border/40">
      <img src={waves} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Franquicia · Marca propia</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
          ¿Quieres crear<br />
          <span className="italic font-normal text-gradient-amber">tu propia cerveza?</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Impulsamos tu proyecto cervecero.
          Aliados estratégicos para emprendedores, restaurantes y marcas que desean operar una franquicia 
          Siete Olas o crear su propia cerveza artesanal con todo nuestro respaldo técnico. Cuéntanos tu idea y construyamos el siguiente paso juntos.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Contactar por WhatsApp
          </a>
          <a
            href="mailto:cerveceriasieteolas@gmail.com?subject=Interés en franquicia Siete Olas"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-3.5 text-sm font-semibold hover:bg-foreground/5 transition"
          >
            Escribir por correo
          </a>
        </div>
      </div>
    </section>
  );
}

function WhereToFind() {
  const points = [
    { name: "Cervecería Siete Olas", detail: "Calle 19 #4-12, Santa Marta", tag: "Punto principal" },
    { name: "Club Siete Olas", detail: "Calle 29b #8-20 Esquina, Santa Marta", tag: "Placeholder" },
    { name: "Distribuidores", detail: "Si tienes un bar o restaurante y quieres ofrecer nuestras cervezas, escríbenos.", tag: "B2B" },
  ];
  const msg = encodeURIComponent(
    "Hola Siete Olas, quiero saber dónde puedo conseguir sus cervezas.",
  );
  return (
    <section id="donde" className="py-24 md:py-32 bg-card/40 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Dónde conseguirla</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
            Puntos de venta<br />
            <span className="italic font-normal text-muted-foreground">y distribución.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border/60 bg-background/60 p-8 flex flex-col">
              <span className="inline-block self-start text-[10px] uppercase tracking-[0.25em] text-primary mb-3 border border-primary/40 rounded-full px-3 py-1">
                {p.tag}
              </span>
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{p.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}

function Ambience() {
  return (
    <section id="ambiente" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">El lugar</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Un rincón del Caribe
            <span className="block italic font-normal text-muted-foreground">
              para quedarse.
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Luces cálidas, música que abraza y el aroma inconfundible de la cerveza
            recién servida. Nuestro espacio en Santa Marta está pensado para
            que la tarde se estire hasta la noche sin darte cuenta.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {[
              "Cerveza en tanque",
              "Terraza abierta",
              "Eventos privados",
              "Música en vivo",
              "Grupos y celebraciones",
              "Ambiente Fresco",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={ambience}
            alt="Ambiente interior de Siete Olas Cervecería con luces cálidas"
            loading="lazy"
            width={1600}
            height={1100}
            className="rounded-2xl w-full object-cover aspect-[4/5] md:aspect-[5/6] shadow-card"
          />
          <div className="hidden md:block absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl max-w-[220px] shadow-glow">
            <p className="font-display text-2xl font-bold leading-tight">
              "Los buenos momentos nunca terminan."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 md:py-40 bg-card/40 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Reseñas</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            5.0 sobre 5.0<span className="text-primary"></span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Lo que dicen quienes ya vinieron a compartir su ola.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-border/60 bg-background/60 p-8 flex flex-col"
            >
              <div className="text-primary text-sm tracking-widest mb-4">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
              <footer className="mt-6 text-sm text-muted-foreground">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit({ onReserve }: { onReserve: () => void }) {
  return (
    <section id="visitanos" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Visítanos</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Te esperamos<br />
            <span className="italic font-normal">con la cerveza fría.</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg">
            <InfoRow label="Dirección">
              Calle 19 #4-12<br />
              Santa Marta, Magdalena — Colombia
            </InfoRow>
            <InfoRow label="Teléfono">
              <a href="tel:+573235981754" className="hover:text-primary transition">
                +57 323 598 1754
              </a>
            </InfoRow>
            <InfoRow label="Correo">
              <a href="mailto:cerveceriasieteolas@gmail.com" className="hover:text-primary transition">
                cerveceriasieteolas@gmail.com
              </a>
            </InfoRow>
            <InfoRow label="Redes">
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/sieteolascerveceria/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Siete Olas"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-border/60 text-foreground/80 hover:text-primary hover:border-primary/60 transition"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/Losbueosmomentosnuncaterminan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Siete Olas"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-border/60 text-foreground/80 hover:text-primary hover:border-primary/60 transition"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </InfoRow>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={onReserve}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition"
            >
              Reservar mesa →
            </button>
            <a
              href="https://maps.google.com/maps?daddr=Calle+19+%234-12+Santa+Marta+Colombia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-semibold hover:bg-foreground/5 transition"
            >
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-10">
          <h3 className="font-display text-2xl font-semibold mb-6">Horario</h3>
          <ul className="divide-y divide-border/60">
            {hours.map(([day, time]) => {
              const closed = time === "Cerrado";
              return (
                <li key={day} className="flex items-center justify-between py-4">
                  <span className="text-foreground/90">{day}</span>
                  <span
                    className={
                      closed
                        ? "text-muted-foreground text-sm"
                        : "text-primary font-medium tabular-nums"
                    }
                  >
                    {time}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Recomendamos reservar con al menos 24 horas de anticipación para grupos de más de 6 personas.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">{label}</div>
      <div className="text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}

function ReservationModal({ onClose }: { onClose: () => void }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: today,
    time: "19:00",
    people: "2",
    occasion: "",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Hola, quisiera realizar una reserva en Siete Olas Cervecería:\n\n` +
      `• Nombre: ${form.name}\n` +
      `• Teléfono: ${form.phone}\n` +
      `• Fecha: ${form.date}\n` +
      `• Hora: ${form.time}\n` +
      `• Personas: ${form.people}\n` +
      (form.occasion ? `• Ocasión: ${form.occasion}\n` : "") +
      (form.notes ? `• Notas: ${form.notes}\n` : "") +
      `\nQuedo atento(a) a la confirmación. ¡Muchas gracias!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border/60 bg-card shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition"
        >
          ✕
        </button>
        <div className="p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Reserva formal</p>
          <h3 id="reservation-title" className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Reserva tu mesa
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Completa los datos y confirmaremos tu reserva por WhatsApp en breve.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <Field label="Nombre completo" required>
              <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Tu nombre" />
            </Field>
            <Field label="Teléfono de contacto" required>
              <input required type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+57 300 000 0000" />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Fecha" required>
                <input required type="date" min={today} value={form.date} onChange={update("date")} className={inputClass} />
              </Field>
              <Field label="Hora" required>
                <input required type="time" value={form.time} onChange={update("time")} className={inputClass} />
              </Field>
            </div>
            <Field label="Número de personas" required>
              <select value={form.people} onChange={update("people")} className={inputClass}>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                  <option key={n} value={n}>{n} {n === "1" ? "persona" : "personas"}</option>
                ))}
              </select>
            </Field>
            <Field label="Ocasión (opcional)">
              <input value={form.occasion} onChange={update("occasion")} className={inputClass} placeholder="Cumpleaños, aniversario, cena de trabajo..." />
            </Field>
            <Field label="Notas adicionales (opcional)">
              <textarea value={form.notes} onChange={update("notes")} rows={3} className={inputClass + " resize-none"} placeholder="Alergias, ubicación preferida, etc." />
            </Field>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enviar solicitud por WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">
              La reserva se confirma una vez recibas nuestra respuesta.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="CerveceríaSiete Olas" className="h-10 w-auto"/>
          <span className="font-display font-semibold">
            Siete Olas Cervecería Artesanal
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/sieteolascerveceria/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Siete Olas"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com/Losbueosmomentosnuncaterminan/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Siete Olas"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Siete Olas · Santa Marta — Beba con moderación.
        </p>
      </div>
    </footer>
  );
}

function WavesLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M2 14c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4 3 4 6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 22c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4 3 4 6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M2 30c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4 3 4 6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2C16.4 4.1 15.5 4 14.5 4c-2.2 0-3.7 1.3-3.7 3.8v3H8v3.2h2.8V22h2.7z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
    </svg>
  );
}
