<?php /* Template Name: Home */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — HOME
   Interacciones (count-up, season cycle, parallax, reveal) -> src/scripts/home.js
   Imágenes/video marcados con TODO: súbelos a la media library y reemplaza las rutas.
   [CONFIRMAR] = dato pendiente del cliente; se deja como placeholder, NO se inventa.
   =========================================================== */ ?>

<?php
/* -----------------------------------------------------------
   URL de la imagen de CADA servicio — edita una por una aquí.
   Pega la URL completa del archivo en la media library de WordPress
   (Biblioteca de medios -> abre la imagen -> copia la "URL del archivo").
   ----------------------------------------------------------- */
$img_general_labor          = ''; // TODO(Daniel): URL imagen General Labor
$img_vineyard_installations = ''; // TODO(Daniel): URL imagen Vineyard Installations
$img_vineyard_management    = ''; // TODO(Daniel): URL imagen Vineyard Management
$img_consulting             = ''; // TODO(Daniel): URL imagen Consulting

/* Otras imágenes del Home — pega la URL completa de la media library. */
$img_award_seal  = ''; // TODO(Daniel): URL sello/foto del premio (sección Award)
$img_legacy_bg   = ''; // TODO(Daniel): URL imagen de fondo de Legacy (parallax)
$img_legacy_side = ''; // TODO(Daniel): URL imagen del lado derecho de Legacy
?>

<main data-home class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HERO =================== -->
  <section class="relative flex min-h-[calc(100svh-7rem)] items-center overflow-hidden bg-raiz-profunda text-white">
    <!-- TODO(Daniel): video y poster de respaldo (media library). -->
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay muted loop playsinline
      poster="/wp-content/uploads/2026/06/HeroMartinezFarming-scaled.jpg"
      aria-hidden="true"
    >
      <source src="/wp-content/uploads/2026/06/hero-video.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-raiz-profunda/90 via-raiz-profunda/60 to-raiz-profunda/45"></div>

    <div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
      <!-- Columna izquierda: texto -->
      <div class="max-w-2xl reveal">
        <p class="text-sm font-bold uppercase tracking-[0.28em] text-olivar-vivo">Grow with honor.</p>
        <h1 class="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">We grow excellence into every cluster.</h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-tierra-suave sm:text-lg">
          A family owned vineyard services company rooted in Paso Robles, California. We bring skilled hands, technical precision, and real accountability to the vineyards behind California's Central Coast wines.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-7 py-3.5 font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda active:scale-[0.99]">
            Request a Consultation
          </a>
          <a href="/services" class="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white hover:text-raiz-profunda focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda active:scale-[0.99]">
            Explore our services
          </a>
        </div>
      </div>

      <!-- Columna derecha: badge del premio + Contact Form flotante -->
      <div class="mx-auto flex w-full max-w-md flex-col gap-5 lg:ml-auto">
        <!-- Badge del premio -->
        <div class="flex items-start gap-2.5 self-center rounded-md border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-sm lg:self-end">
          <svg class="mt-0.5 h-4 w-4 shrink-0 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>
          <span class="text-xs leading-snug text-tierra-suave">2026 San Luis Obispo County <span class="font-bold text-white">Winegrape Grower of the Year</span></span>
        </div>
        <!-- Contact Form (flotante; se pausa al interactuar). React monta aquí. -->
        <div id="render-contact-form" class="float-card"></div>
      </div>
    </div>
  </section>

  <!-- =================== S2 · CAPACITY =================== -->
  <section aria-labelledby="capacity-h" class="relative overflow-hidden bg-raiz-profunda text-white">
    <!-- Estampado decorativo — cubre toda la sección (hasta el heading), patrón en mosaico
         a escala fija para que no se agrande. TODO(Daniel): ajusta opacity/background-size. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_8-scaled.png'); background-size:auto 180px; opacity:0.1"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <h2 id="capacity-h" class="font-display text-3xl sm:text-4xl">Built to deliver, season after season.</h2>
        <p class="mt-4 text-tierra-suave">Premium results take more than good intentions. They take the people, the equipment, and the standards to execute at scale, every harvest.</p>
      </div>

      <!-- Counters. data-counter + data-target numérico anima; los [CONFIRMAR] quedan como placeholder. -->
      <div class="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
        <!-- TODO(Daniel): # acres bajo manejo -->
        <div class="reveal">
          <div class="font-display text-5xl text-olivar-vivo sm:text-6xl">&mdash;</div>
          <p class="mt-2 text-sm text-tierra-suave">Acres under management<span class="mt-0.5 block text-xs text-tierra-suave/50">figure to confirm</span></p>
        </div>
        <!-- TODO(Daniel): # de personas en cuadrillas -->
        <div class="reveal">
          <div class="font-display text-5xl text-olivar-vivo sm:text-6xl">&mdash;</div>
          <p class="mt-2 text-sm text-tierra-suave">People on our crews<span class="mt-0.5 block text-xs text-tierra-suave/50">figure to confirm</span></p>
        </div>
        <!-- Real -->
        <div class="reveal">
          <div class="font-display text-5xl text-olivar-vivo sm:text-6xl"><span data-counter data-target="3">0</span></div>
          <p class="mt-2 text-sm text-tierra-suave">Counties served</p>
        </div>
        <!-- TODO(Daniel): # años en la Central Coast -->
        <div class="reveal">
          <div class="font-display text-5xl text-olivar-vivo sm:text-6xl">&mdash;</div>
          <p class="mt-2 text-sm text-tierra-suave">Years on the Central Coast<span class="mt-0.5 block text-xs text-tierra-suave/50">figure to confirm</span></p>
        </div>
      </div>
    </div>
  </section>

  <!-- =================== S3 · SERVICES =================== -->
  <section aria-labelledby="services-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our services</p>
        <h2 id="services-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">Vineyard expertise at every stage, from raw land to harvest.</h2>
        <p class="mt-4 text-stone-600">Skilled crews and seasoned field leadership across four core services.</p>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2">
        <?php
          $services = [
            ['General Labor', 'Skilled field crews who keep your vines healthy and productive all season.', '/services/general-labor', $img_general_labor],
            ['Vineyard Installations', 'From raw land to productive vineyard, built right from day one.', '/services/vineyard-installations', $img_vineyard_installations],
            ['Vineyard Management', 'Hands on stewardship from dormancy through harvest.', '/services/vineyard-management', $img_vineyard_management],
            ['Consulting', 'Practical, site specific guidance backed by real vineyard experience.', '/services/consulting', $img_consulting],
          ];
          foreach ($services as $s): ?>
          <a href="<?php echo esc_url($s[2]); ?>" class="reveal group relative block overflow-hidden rounded-xl bg-raiz-profunda focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2">
            <!-- Foto del servicio (URL desde la variable $img_* definida arriba). -->
            <div class="aspect-[16/10] w-full bg-noche-vinedo/40 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image:url('<?php echo esc_url($s[3]); ?>')"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-raiz-profunda via-raiz-profunda/35 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 p-6">
              <h3 class="font-display text-2xl text-white"><?php echo esc_html($s[0]); ?></h3>
              <p class="mt-1 max-w-md text-sm text-tierra-suave opacity-0 transition-all duration-300 group-hover:opacity-100 sm:max-h-0 sm:translate-y-1 sm:overflow-hidden sm:group-hover:max-h-24 sm:group-hover:translate-y-0"><?php echo esc_html($s[1]); ?></p>
              <span class="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-olivar-vivo">
                Learn more
                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </span>
            </div>
          </a>
        <?php endforeach; ?>
      </div>

      <div class="mt-10 reveal">
        <a href="/services" class="inline-flex items-center gap-2 rounded-md border border-raiz-profunda/25 px-6 py-3 font-bold text-raiz-profunda transition-colors hover:border-olivar-vivo hover:text-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2">
          View all services
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- =================== S4 · SEASON CYCLE (firma) =================== -->
  <section aria-labelledby="season-h" class="bg-white" data-season>
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">All year</p>
        <h2 id="season-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">We are with your vineyard all year.</h2>
        <p class="mt-4 text-stone-600">From dormancy to harvest, every stage gets the same attention and the same standard.</p>
      </div>

      <div class="mt-12">
        <!-- Track horizontal con scroll-snap controlado por el usuario -->
        <div id="season-track" class="season-track flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl border border-stone-200">
          <?php
            $stages = [
              ['01', 'Dormancy', 'Pruning strategy that sets the season up right.'],
              ['02', 'Bud break', 'Canopy and shoot work for healthy, balanced growth.'],
              ['03', 'Veraison', 'Irrigation and pest monitoring dialed to the fruit.'],
              ['04', 'Harvest', 'Careful hand harvesting and clean post harvest work.'],
            ];
            foreach ($stages as $st): ?>
            <article class="season-stage w-full shrink-0 snap-center bg-gradient-to-br from-raiz-profunda to-noche-vinedo p-10 text-white sm:p-16">
              <span class="font-display text-sm text-olivar-vivo"><?php echo $st[0]; ?> / 04</span>
              <h3 class="mt-3 font-display text-3xl sm:text-5xl"><?php echo esc_html($st[1]); ?></h3>
              <p class="mt-4 max-w-xl text-base text-tierra-suave sm:text-lg"><?php echo esc_html($st[2]); ?></p>
            </article>
          <?php endforeach; ?>
        </div>

        <!-- Control deslizador -->
        <div class="mt-6">
          <input id="season-range" type="range" min="0" max="3" step="1" value="0" aria-label="Scrub through the growing season" class="w-full accent-olivar-vivo" />
          <div class="mt-3 flex justify-between text-xs font-medium uppercase tracking-wider text-stone-500">
            <span>Dormancy</span><span>Bud break</span><span>Veraison</span><span>Harvest</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =================== S5 · AWARD SPOTLIGHT =================== -->
  <section aria-labelledby="award-h" class="overflow-hidden bg-tierra-suave/20">
    <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Visual del premio (sello/foto) -->
      <div class="reveal lg:col-span-5">
        <!-- TODO(Daniel): sello oficial del premio o foto de la entrega -->
        <div class="grid aspect-square w-full place-items-center rounded-2xl border border-raiz-profunda/10 bg-raiz-profunda bg-cover bg-center text-center" style="background-image:url('<?php echo esc_url($img_award_seal); ?>')">
          <div class="px-8 text-tierra-suave">
            <svg class="mx-auto h-12 w-12 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>
            <p class="mt-3 text-sm">[ TODO: sello oficial del premio<br/>o foto de la entrega ]</p>
          </div>
        </div>
      </div>
      <!-- Frase fuerte -->
      <div class="reveal lg:col-span-7 lg:pl-6">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Recognition</p>
        <h2 id="award-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl lg:text-5xl">Recognized for the work we put in the ground.</h2>
        <p class="mt-5 max-w-xl text-lg text-stone-700">We are proud to be named the 2026 San Luis Obispo County Winegrape Grower of the Year. It reflects the honest work, the skilled hands, and the standards we bring to every vineyard we touch.</p>
      </div>
    </div>
  </section>

  <!-- =================== S6 · WHY GROWERS TRUST US =================== -->
  <section aria-labelledby="trust-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Encabezado sticky -->
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-32">
          <h2 id="trust-h" class="font-display text-3xl text-raiz-profunda sm:text-4xl lg:text-5xl">Why growers trust us with their vines.</h2>
          <p class="mt-6 border-l-2 border-olivar-vivo pl-5 font-display text-xl text-noche-vinedo">We don't just grow grapes. We grow trust.</p>
        </div>
      </div>
      <!-- Pruebas -->
      <div class="lg:col-span-7">
        <dl class="divide-y divide-stone-200">
          <?php
            $proofs = [
              ['Flawless reliability.', 'On time, every season.'],
              ['Skilled, supervised crews.', 'Technical and human leadership on every team.'],
              ['Respect for land and people.', 'Responsible farming and ethical crew management.'],
              ['A direct relationship.', 'You talk to the people doing the work.'],
            ];
            foreach ($proofs as $p): ?>
            <div class="reveal flex gap-4 py-6">
              <svg class="mt-1 h-5 w-5 shrink-0 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <div>
                <dt class="font-display text-xl text-raiz-profunda"><?php echo esc_html($p[0]); ?></dt>
                <dd class="mt-1 text-stone-600"><?php echo esc_html($p[1]); ?></dd>
              </div>
            </div>
          <?php endforeach; ?>
          <?php /* TODO(Daniel): [CONFIRMAR si es real] — descomenta solo si es verificable:
          <div class="reveal flex gap-4 py-6">
            <svg ...check.../>
            <div>
              <dt class="font-display text-xl text-raiz-profunda">Documented processes and quality control you can see.</dt>
              <dd class="mt-1 text-stone-600"></dd>
            </div>
          </div>
          */ ?>
        </dl>
      </div>
    </div>
  </section>

  <!-- =================== S7 · SERVICE AREA =================== -->
  <section aria-labelledby="area-h" class="relative overflow-hidden bg-stone-50">
    <!-- Estampado de fondo (sección clara). TODO(Daniel): ajusta opacity / background-size.
         Si NO es patrón continuo, cambia bg-repeat por bg-no-repeat bg-center. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_7-scaled.png'); background-size:auto 200px; opacity:0.1; mix-blend-mode:multiply"
    ></div>

    <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-24">
      <div class="reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Service area</p>
        <h2 id="area-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">Rooted in Paso Robles. Serving the Central Coast.</h2>
        <p class="mt-4 text-stone-600">From our home in Paso Robles, we serve vineyards across San Luis Obispo, Monterey, and Santa Barbara Counties, with the same crews, the same standards, and the same accountability.</p>
        <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-raiz-profunda">
          <li class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-olivar-vivo"></span> San Luis Obispo County</li>
          <li class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-olivar-vivo"></span> Monterey County</li>
          <li class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-olivar-vivo"></span> Santa Barbara County</li>
        </ul>
      </div>

      <!-- Mapa estilizado interactivo (hover ilumina cada condado + pin en Paso Robles).
           TODO(Daniel): si quieres precisión geográfica, reemplaza estos paths por un SVG real de los condados. -->
      <div class="reveal">
        <svg viewBox="0 0 320 360" class="county-map w-full" role="img" aria-label="Central Coast service area: San Luis Obispo, Monterey, and Santa Barbara counties">
          <g class="counties" fill="#bdbba6" fill-opacity="0.35" stroke="#543167" stroke-opacity="0.25" stroke-width="1.5">
            <path class="county" data-name="Monterey" d="M40 20 L210 30 L190 120 L150 140 L60 130 Z"><title>Monterey County</title></path>
            <path class="county" data-name="San Luis Obispo" d="M60 130 L150 140 L190 120 L240 170 L210 250 L90 240 Z"><title>San Luis Obispo County</title></path>
            <path class="county" data-name="Santa Barbara" d="M90 240 L210 250 L260 300 L240 345 L110 330 Z"><title>Santa Barbara County</title></path>
          </g>
          <!-- Pin en Paso Robles (aprox., dentro de SLO County) -->
          <g class="pin" transform="translate(150 195)">
            <circle r="16" fill="#a5a83d" fill-opacity="0.18"/>
            <path d="M0 -11 C6 -11 10 -7 10 -1 C10 6 0 14 0 14 C0 14 -10 6 -10 -1 C-10 -7 -6 -11 0 -11 Z" fill="#543167"/>
            <circle cy="-1" r="3.4" fill="#fff"/>
            <text x="16" y="2" font-size="11" font-weight="700" fill="#543167">Paso Robles</text>
          </g>
        </svg>
      </div>
    </div>
  </section>

  <!-- =================== S8 · LEGACY (parallax) =================== -->
  <section aria-labelledby="legacy-h" class="relative isolate overflow-hidden bg-raiz-profunda text-white">
    <!-- Imagen de fondo (parallax). URL desde $img_legacy_bg. -->
    <div class="parallax-bg absolute inset-0 -z-10 scale-110 bg-cover bg-center" data-parallax style="background-image:url('<?php echo esc_url($img_legacy_bg); ?>')"></div>
    <div class="absolute inset-0 -z-10 bg-raiz-profunda/70"></div>
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-36">
      <!-- Texto (izquierda) -->
      <div class="max-w-2xl reveal">
        <h2 id="legacy-h" class="font-display text-3xl leading-tight sm:text-5xl">We grow a legacy, one harvest at a time.</h2>
        <p class="mt-6 text-lg leading-relaxed text-tierra-suave">We put our name behind the work. Honor the land, do it right, and earn the trust of the growers who depend on us. That is how we believe great wine begins, in a vineyard cultivated with pride.</p>
        <p class="mt-8 font-display text-2xl text-white">From the earth, a legacy is born.</p>
        <?php /* TODO(Daniel): [CONFIRMAR] año real de fundación e historia de origen de Octavio Garcia para profundizar esta sección. */ ?>
        <a href="/about" class="mt-9 inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-raiz-profunda focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda">
          Read our story
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
      <!-- Imagen (derecha). URL desde $img_legacy_side. -->
      <div class="reveal">
        <div class="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 bg-noche-vinedo/40 bg-cover bg-center shadow-2xl" style="background-image:url('<?php echo esc_url($img_legacy_side); ?>')"></div>
      </div>
    </div>
  </section>

  <!-- =================== S9 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex min-h-[80svh] items-center overflow-hidden bg-noche-vinedo text-white">
    <!-- Estampado — el asset es casi del mismo color que el fondo, así que usamos
         mix-blend screen para que el patrón aclare sobre el azul y se note.
         TODO(Daniel): ajusta opacity / mix-blend-mode / background-size. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>

    <div class="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Let's grow something worth remembering.</h2>
      <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-tierra-suave">Whether you are evaluating raw land or looking for a reliable partner through harvest, we would be glad to talk.</p>
      <div class="reveal mt-10">
        <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-8 py-4 text-lg font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-[0.99]">
          Request a Consultation
        </a>
      </div>
      <!-- TODO(Daniel): [CONFIRMAR] correo de dominio en lugar de martinezfarming@yahoo.com -->
      <p class="reveal mt-8 text-sm text-tierra-suave/80">
        <a href="tel:+18054239303" class="hover:text-white">805-423-9303</a>
        <span class="mx-2 text-white/30">·</span>
        <a href="mailto:martinezfarming@yahoo.com" class="hover:text-white">martinezfarming@yahoo.com</a>
        <span class="mx-2 text-white/30">·</span>
        Paso Robles, California
      </p>
    </div>
  </section>

</main>

<?php get_footer();