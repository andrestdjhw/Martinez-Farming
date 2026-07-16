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
$img_general_labor          = '/wp-content/uploads/2026/07/GeneralLaborMain-scaled.webp';
$img_vineyard_installations = '/wp-content/uploads/2026/07/VineyarInstallationsMain-1-scaled.webp';
$img_vineyard_management    = '/wp-content/uploads/2026/07/VineyardManagementMain-scaled.webp';
$img_consulting             = '/wp-content/uploads/2026/06/Consultation-scaled.jpg';

/* Otras imágenes del Home — pega la URL completa de la media library. */
$img_award_seal  = '/wp-content/uploads/2026/06/Martinez-Farming_Sello.png';
$img_legacy_bg   = '/wp-content/uploads/2026/06/Estampados-MF_4-scaled.png';
$img_legacy_side = '/wp-content/uploads/2026/06/LegacyMF-scaled.jpg';
?>

<main data-home class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HERO (con stats strip) =================== -->
  <section class="relative flex min-h-[calc(100svh-8rem)] flex-col overflow-hidden bg-raiz-profunda text-white">
    <!-- TODO(Daniel): video y poster de respaldo (media library). -->
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay muted loop playsinline
      poster="/wp-content/uploads/2026/06/HeroMartinezFarming-scaled.jpg"
      aria-hidden="true"
    >
      <source src="/wp-content/uploads/2026/07/MFHeroPlaybackRename.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-raiz-profunda/90 via-raiz-profunda/60 to-raiz-profunda/45"></div>

    <!-- Contenido principal (crece para llenar el viewport) -->
    <div class="relative z-10 flex flex-1 items-center">
      <div class="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:py-5">
      <!-- Columna izquierda: badge + texto -->
      <div class="max-w-2xl reveal">
        <!-- Badge del premio (arriba, izquierda) -->
        <div class="mb-4 inline-flex items-start gap-2.5 rounded-md border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-sm">
          <svg class="mt-0.5 h-4 w-4 shrink-0 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>
          <span class="text-xs leading-snug text-tierra-suave">2026 San Luis Obispo County <span class="font-bold text-white">Winegrape Grower of the Year</span></span>
        </div>
        <p class="text-sm font-bold uppercase tracking-[0.28em] text-olivar-vivo">Grow with honor.</p>
        <h1 class="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">We grow excellence into every cluster.</h1>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-tierra-suave sm:text-lg">
          A family owned vineyard services company rooted in Paso Robles, California. We bring skilled hands, technical precision, and real accountability to the vineyards behind California's Central Coast wines.
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-7 py-3.5 font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda active:scale-[0.99]">
            Request a Consultation
          </a>
          <a href="/services" class="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white hover:text-raiz-profunda focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda active:scale-[0.99]">
            Explore our services
          </a>
        </div>
      </div>

      <!-- Columna derecha: Contact Form flotante -->
      <div class="mx-auto flex w-full max-w-md flex-col gap-5 lg:ml-auto">
        <!-- Contact Form (flotante; se pausa al interactuar). React monta aquí. -->
        <div id="render-contact-form" class="float-card"></div>
      </div>
      </div>
    </div>

    <!-- Stats strip (integrado al hero, abajo) -->
    <div class="relative z-10 bg-raiz-profunda/50 backdrop-blur-sm">
      <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <!-- TODO(Daniel): # acres bajo manejo -->
          <div class="reveal">
            <div class="font-display text-2xl text-olivar-vivo sm:text-3xl"><span data-counter data-target="3,000">0</span></div>
            <p class="mt-0.5 text-xs text-tierra-suave sm:text-sm">Acres under management</p>
          </div>
          <!-- TODO(Daniel): # de personas en cuadrillas -->
          <div class="reveal">
            <div class="font-display text-2xl text-olivar-vivo sm:text-3xl">&mdash;</div>
            <p class="mt-0.5 text-xs text-tierra-suave sm:text-sm">People on our crews</p>
          </div>
          <!-- Real -->
          <div class="reveal">
            <div class="font-display text-2xl text-olivar-vivo sm:text-3xl"><span data-counter data-target="3">0</span></div>
            <p class="mt-0.5 text-xs text-tierra-suave sm:text-sm">Counties served</p>
          </div>
          <!-- TODO(Daniel): # años en la Central Coast -->
          <div class="reveal">
            <div class="font-display text-2xl text-olivar-vivo sm:text-3xl">&mdash;</div>
            <p class="mt-0.5 text-xs text-tierra-suave sm:text-sm">Years on the Central Coast</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =================== S2 · SERVICES =================== -->
  <section aria-labelledby="services-h" class="relative isolate overflow-hidden bg-[#090a0f] text-white">
    <!-- Fondo de estrellas animado (.season-sky, definido en index.css) -->
    <div class="season-sky -z-10" aria-hidden="true">
      <div class="season-stars"></div>
      <div class="season-stars2"></div>
      <div class="season-stars3"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our services</p>
        <h2 id="services-h" class="mt-2 font-display text-3xl text-white sm:text-4xl">Vineyard expertise at every stage, from raw land to harvest.</h2>
        <p class="mt-4 text-lg text-tierra-suave">Skilled crews and seasoned field leadership across four core services.</p>
      </div>

      <div class="mt-12 marquee reveal">
        <div class="marquee-track">
          <?php
            $services = [
              ['General Labor', 'Skilled field crews who keep your vines healthy and productive all season.', '/services/general-labor', $img_general_labor],
              ['Vineyard Installations', 'From raw land to productive vineyard, built right from day one.', '/services/vineyard-installations', $img_vineyard_installations],
              ['Vineyard Management', 'Hands on stewardship from dormancy through harvest.', '/services/vineyard-management', $img_vineyard_management],
              ['Consulting', 'Practical, site specific guidance backed by real vineyard experience.', '/services/consulting', $img_consulting],
            ];
            // Repetimos el set dos veces para un loop continuo y sin saltos.
            for ($rep = 0; $rep < 2; $rep++):
              foreach ($services as $i => $s): ?>
              <a href="<?php echo esc_url($s[2]); ?>" class="group relative mr-6 block h-[28rem] w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0f]"<?php echo $rep === 1 ? ' aria-hidden="true" tabindex="-1"' : ''; ?>>
                <!-- Foto del servicio (URL desde la variable $img_* definida arriba). -->
                <div class="absolute inset-0 bg-gradient-to-br from-noche-vinedo to-raiz-profunda bg-cover bg-center transition-transform duration-500 group-hover:scale-105"<?php if ($s[3]): ?> style="background-image:url('<?php echo esc_url($s[3]); ?>')"<?php endif; ?>></div>
                <!-- Degradado para legibilidad del texto -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
                <!-- Texto encima de la foto -->
                <div class="relative flex h-full flex-col justify-end p-6">
                  <span class="font-display text-5xl leading-none text-olivar-vivo"><?php echo sprintf('%02d', $i + 1); ?></span>
                  <h3 class="mt-3 font-display text-2xl text-white"><?php echo esc_html($s[0]); ?></h3>
                  <p class="mt-2 text-sm leading-relaxed text-white/85"><?php echo esc_html($s[1]); ?></p>
                  <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-olivar-vivo">
                    Learn more
                    <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </div>
              </a>
            <?php endforeach; endfor; ?>
        </div>
      </div>

      <div class="mt-10 reveal">
        <a href="/services" class="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:border-olivar-vivo hover:text-olivar-vivo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0f]">
          View all services
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- =================== S4 · SEASON CYCLE (firma) =================== -->
  <section aria-labelledby="season-h" class="relative isolate overflow-hidden bg-raiz-profunda text-white" data-season>
    <!-- Estampado de fondo (mismo tono que el bg -> mix-blend screen). -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.3; mix-blend-mode:screen"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">All year</p>
        <h2 id="season-h" class="mt-2 font-display text-3xl text-white sm:text-4xl">We are with your vineyard all year.</h2>
        <p class="mt-4 text-tierra-suave">From dormancy to harvest, every stage gets the same attention and the same standard.</p>
      </div>

      <div class="mt-12 reveal">
        <div id="season-blades" class="season-blades flex h-[26rem] gap-2 sm:h-[32rem]">
          <?php
            $stages = [
              ['01', 'Dormancy', 'Winter is when the next vintage is shaped. We prune with intent, choosing the wood that will carry the crop and balancing vigor with yield, so every vine starts the season set up to perform.', '/wp-content/uploads/2026/07/DormancyManagement01.png'],
              ['02', 'Bud break', 'As the vines wake, timing is everything. We manage canopy and shoot growth, suckering and positioning for airflow and light, so the vine spends its energy on healthy, balanced growth and even fruit set.', '/wp-content/uploads/2026/07/BudbreakManagement02.png'],
              ['03', 'Veraison', 'When the fruit begins to color and soften, precision matters most. We dial irrigation to what the vines need and watch pest and disease pressure closely, protecting the crop as it ripens toward its peak.', '/wp-content/uploads/2026/07/VeraisonManagement03.png'],
              ['04', 'Harvest', 'The payoff for a year of care. We hand harvest with attention to fruit quality and timing, then move fast on clean post harvest work so the vineyard is ready to rest and begin again.', '/wp-content/uploads/2026/07/HarvestManagement04.png'],
            ];
            foreach ($stages as $i => $st): ?>
            <button type="button" data-blade class="blade group relative overflow-hidden rounded-2xl border border-white/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo <?php echo $i === 0 ? 'is-active' : ''; ?>" aria-expanded="<?php echo $i === 0 ? 'true' : 'false'; ?>" aria-label="<?php echo esc_attr($st[1]); ?>">
              <!-- Imagen de fondo de la estación -->
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image:url('<?php echo esc_url($st[3]); ?>')"></div>
              <!-- Degradado para legibilidad -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20"></div>

              <!-- Etiqueta vertical (estado colapsado) -->
              <div class="blade-tab absolute inset-0 flex flex-col items-center justify-center gap-4 p-3">
                <span class="font-display text-lg text-olivar-vivo"><?php echo $st[0]; ?></span>
                <span class="blade-vlabel font-display text-lg text-white"><?php echo esc_html($st[1]); ?></span>
              </div>

              <!-- Contenido completo (estado activo) -->
              <div class="blade-content absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <span class="font-display text-sm text-olivar-vivo"><?php echo $st[0]; ?> / 04</span>
                <h3 class="mt-2 font-display text-3xl text-white sm:text-4xl lg:text-5xl"><?php echo esc_html($st[1]); ?></h3>
                <p class="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base"><?php echo esc_html($st[2]); ?></p>
              </div>
            </button>
          <?php endforeach; ?>
        </div>

        <!-- Indicadores -->
        <div class="mt-5 flex justify-center gap-2">
          <?php foreach ($stages as $i => $st): ?>
          <span data-blade-dot class="h-1.5 w-7 rounded-full transition-colors <?php echo $i === 0 ? 'bg-olivar-vivo' : 'bg-white/20'; ?>"></span>
          <?php endforeach; ?>
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
        <div class="grid aspect-square w-full place-items-center overflow-hidden rounded-2xl border border-raiz-profunda/10 bg-raiz-profunda p-8 text-center sm:p-10">
          <?php if ( $img_award_seal ) : ?>
            <img src="<?php echo esc_url($img_award_seal); ?>" alt="2026 San Luis Obispo County Winegrape Grower of the Year — Martinez Farming" class="h-full w-full object-contain" loading="lazy" />
          <?php else : ?>
            <div class="px-8 text-tierra-suave">
              <svg class="mx-auto h-12 w-12 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>
              <p class="mt-3 text-sm">[ TODO: sello oficial del premio<br/>o foto de la entrega ]</p>
            </div>
          <?php endif; ?>
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
      <!-- Mapa de Google Maps del área de servicio (izquierda).
           TODO(Daniel): reemplaza el src por el embed real (Maps -> Compartir -> Insertar un mapa). -->
      <div class="reveal">
        <div class="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=Paso+Robles,+CA&z=8&output=embed"
            title="Martinez Farming service area — Central Coast, California"
            class="aspect-[4/3] w-full"
            style="border:0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Texto (derecha) -->
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
    </div>
  </section>

  <!-- =================== S8 · LEGACY (parallax) =================== -->
  <section aria-labelledby="legacy-h" class="relative isolate overflow-hidden bg-raiz-profunda text-white">
    <!-- Fondo (estampado/parallax). URL desde $img_legacy_bg. -->
    <div class="parallax-bg absolute inset-0 -z-10 scale-110 bg-cover bg-center" data-parallax style="background-image:url('<?php echo esc_url($img_legacy_bg); ?>')"></div>
    <div class="absolute inset-0 -z-10 bg-raiz-profunda/70"></div>

    <!-- Imagen a sangre en la mitad derecha (desktop). URL desde $img_legacy_side. -->
    <div class="absolute inset-y-0 right-0 hidden w-1/2 bg-noche-vinedo/30 bg-cover bg-center lg:block" style="background-image:url('<?php echo esc_url($img_legacy_side); ?>')" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <!-- Texto (mitad izquierda) -->
      <div class="py-14 lg:flex lg:min-h-[32rem] lg:w-1/2 lg:flex-col lg:justify-center lg:py-16 lg:pr-12">
        <div class="max-w-xl reveal">
          <h2 id="legacy-h" class="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">We grow a legacy, one harvest at a time.</h2>
          <p class="mt-5 text-lg leading-relaxed text-tierra-suave">We put our name behind the work. Honor the land, do it right, and earn the trust of the growers who depend on us. That is how we believe great wine begins, in a vineyard cultivated with pride.</p>
          <p class="mt-6 font-display text-2xl text-white">From the earth, a legacy is born.</p>
          <?php /* TODO(Daniel): [CONFIRMAR] año real de fundación e historia de origen de Octavio Garcia para profundizar esta sección. */ ?>
          <a href="/about" class="mt-8 inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-raiz-profunda focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda">
            Read our story
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>

      <!-- Imagen en móvil (en desktop se usa la versión a sangre de arriba). -->
      <div class="reveal pb-14 lg:hidden">
        <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-noche-vinedo/40 bg-cover bg-center" style="background-image:url('<?php echo esc_url($img_legacy_side); ?>')"></div>
      </div>
    </div>
  </section>

  <!-- =================== S9 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex items-center overflow-hidden bg-noche-vinedo text-white">
    <!-- Estampado — el asset es casi del mismo color que el fondo, así que usamos
         mix-blend screen para que el patrón aclare sobre el azul y se note.
         TODO(Daniel): ajusta opacity / mix-blend-mode / background-size. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>

    <div class="relative z-10 mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:py-16">
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