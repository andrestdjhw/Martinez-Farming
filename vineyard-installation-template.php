<?php /* Template Name: Service - Vineyard Installations */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — SERVICE PAGE: Vineyard Installations
   Mismo patrón que general-labor-template.php.
   Reusa .reveal (home.js global). Nombre/descriptor aprobados; alcance = [CONFIRMAR].
   =========================================================== */ ?>

<?php
/* URL de la imagen del hero — pega la URL completa de la media library. */
$img_hero = "/wp-content/uploads/2026/06/VineyardInstallations-scaled.jpg";

/* Imágenes de las cards del proceso (opcional). Pega la URL de la media library;
   si la dejas vacía, la card muestra un degradado de marca. */
$img_proc_1 = '/wp-content/uploads/2026/07/VineyardInstallation01.png'; // TODO(Daniel): Site evaluation & prep
$img_proc_2 = '/wp-content/uploads/2026/07/VineyardInstallation02.png'; // TODO(Daniel): Layout & design
$img_proc_3 = '/wp-content/uploads/2026/07/VineyardInstallation03.png'; // TODO(Daniel): Trellis & end-posts
$img_proc_4 = '/wp-content/uploads/2026/07/VineyardInstallation04.png'; // TODO(Daniel): Irrigation
$img_proc_5 = '/wp-content/uploads/2026/07/VineyardInstallation05.png'; // TODO(Daniel): Planting
$img_proc_6 = '/wp-content/uploads/2026/07/VineyardInstallation06.png'; // TODO(Daniel): Establishment
?>

<main data-service class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HERO =================== -->
  <section class="relative flex min-h-[55svh] items-end overflow-hidden bg-raiz-profunda text-white">
    <!-- Imagen del hero (URL desde $img_hero, definido arriba). -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image:url('<?php echo esc_url($img_hero); ?>')"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-raiz-profunda via-raiz-profunda/70 to-raiz-profunda/40"></div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="reveal text-sm text-tierra-suave">
        <a href="/" class="hover:text-white">Home</a>
        <span class="mx-2 text-white/40">/</span>
        <a href="/services" class="hover:text-white">Services</a>
        <span class="mx-2 text-white/40">/</span>
        <span class="text-white">Vineyard Installations</span>
      </nav>
      <div class="reveal mt-4 max-w-3xl">
        <span class="font-display text-sm text-olivar-vivo">02 / 04</span>
        <h1 class="mt-2 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Vineyard Installations</h1>
        <p class="mt-5 max-w-2xl text-lg text-tierra-suave">From raw land to productive vineyard, built right from day one.</p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · OVERVIEW + SCOPE =================== -->
  <section aria-labelledby="overview-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Overview -->
      <div class="reveal lg:col-span-7">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Overview</p>
        <h2 id="overview-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">Built right from day one.</h2>
        <p class="mt-5 text-lg leading-relaxed text-stone-700">
          A new vineyard is a decades long investment, and the choices made at installation shape every harvest that follows. We take sites from raw ground to planted vineyard, handling ground preparation, row layout, trellis and irrigation, and planting, so the vines start on a foundation built to last.
        </p>
        <!-- TODO(Daniel): [CONFIRMAR] descripción ampliada del servicio si hay copy aprobado. -->
      </div>

      <!-- Por qué importa -->
      <aside class="reveal lg:col-span-5">
        <div class="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <h3 class="font-display text-xl text-raiz-profunda">Why the install matters</h3>
          <ul class="mt-4 space-y-4 text-stone-700">
            <?php
              $why = [
                'Layout, trellis, and irrigation are set for decades the day they go in.',
                'A solid foundation gives young vines their best start.',
                'Skilled crews and real supervision on site, from first pass to first vine.',
              ];
              foreach ($why as $w): ?>
              <li class="flex items-start gap-3">
                <svg class="mt-0.5 h-5 w-5 shrink-0 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span><?php echo esc_html($w); ?></span>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </aside>
    </div>
  </section>

  <!-- =================== S3 · PROCESO DE INSTALACIÓN =================== -->
  <section aria-labelledby="proc-h" class="relative isolate overflow-hidden bg-[#090a0f] text-white">
    <!-- Fondo de estrellas animado (.season-sky, definido en index.css) -->
    <div class="season-sky -z-10" aria-hidden="true">
      <div id="season-stars"></div>
      <div id="season-stars2"></div>
      <div id="season-stars3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">The process</p>
        <h2 id="proc-h" class="mt-2 font-display text-3xl text-white sm:text-4xl">How an installation comes together.</h2>
        <p class="mt-4 text-lg text-tierra-suave">From bare ground to a planted, trellised vineyard, each phase done in order and done right.</p>
      </div>
      <div class="mt-12 marquee reveal">
        <div class="marquee-track">
          <?php
            // Fases del proceso. TODO(Daniel): [CONFIRMAR] pasos y descripciones exactas con el cliente.
            $phases = [
              ['Site evaluation & prep', 'We assess the land and prepare the ground so the vineyard starts on solid footing.', $img_proc_1],
              ['Layout & design', 'Row orientation and spacing set to fit the site and the goals for the fruit.', $img_proc_2],
              ['Trellis & end-posts', 'Installing the structure that will carry the canopy for years to come.', $img_proc_3],
              ['Irrigation', 'Lines and emitters put in to keep young vines supplied from day one.', $img_proc_4],
              ['Planting', 'Vines go in the ground with care, at the right time for the site.', $img_proc_5],
              ['Establishment', 'Early training and attention while the young vines take hold.', $img_proc_6],
            ];
            // Repetimos el set dos veces para un loop continuo y sin saltos.
            for ($rep = 0; $rep < 2; $rep++):
              foreach ($phases as $i => $ph): ?>
              <article class="relative mr-6 h-[28rem] w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10"<?php echo $rep === 1 ? ' aria-hidden="true"' : ''; ?>>
                <!-- Foto de fondo (opcional, $ph[2]); si está vacía muestra un degradado de marca. -->
                <div class="absolute inset-0 bg-gradient-to-br from-noche-vinedo to-raiz-profunda bg-cover bg-center"<?php if ($ph[2]): ?> style="background-image:url('<?php echo esc_url($ph[2]); ?>')"<?php endif; ?>></div>
                <!-- Degradado para legibilidad del texto -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
                <!-- Texto encima de la foto -->
                <div class="relative flex h-full flex-col justify-end p-6">
                  <span class="font-display text-5xl leading-none text-olivar-vivo"><?php echo sprintf('%02d', $i + 1); ?></span>
                  <h3 class="mt-3 font-display text-2xl text-white"><?php echo esc_html($ph[0]); ?></h3>
                  <p class="mt-2 text-sm leading-relaxed text-white/85"><?php echo esc_html($ph[1]); ?></p>
                </div>
              </article>
            <?php endforeach; endfor; ?>
        </div>
      </div>
      <p class="mt-6 reveal text-xs text-tierra-suave/50">[ CONFIRMAR: alcance y pasos exactos de instalación con el cliente. ]</p>
    </div>
  </section>

  <!-- =================== S4 · STANDARDS =================== -->
  <section aria-labelledby="std-h" class="bg-raiz-profunda text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="max-w-3xl reveal">
        <h2 id="std-h" class="font-display text-2xl sm:text-3xl">A foundation you can build on.</h2>
      </div>
      <div class="mt-10 grid gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        <?php
          $points = [
            ['Reliable', 'On time, every season.'],
            ['Supervised', 'Real leadership on every team.'],
            ['Responsible', 'Respect for land and people.'],
            ['Direct', 'You talk to the people doing the work.'],
          ];
          foreach ($points as $p): ?>
          <div class="reveal">
            <h3 class="font-display text-lg text-olivar-vivo"><?php echo esc_html($p[0]); ?></h3>
            <p class="mt-1 text-sm text-tierra-suave"><?php echo esc_html($p[1]); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- =================== S5 · OTHER SERVICES =================== -->
  <section aria-labelledby="other-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 id="other-h" class="reveal font-display text-2xl text-raiz-profunda sm:text-3xl">Other services</h2>
      <div class="mt-8 grid gap-5 sm:grid-cols-3">
        <?php
          // Las otras 3 (excluye Vineyard Installations).
          $others = [
            ['General Labor', 'Skilled field crews all season.', '/services/general-labor'],
            ['Vineyard Management', 'Hands on stewardship through harvest.', '/services/vineyard-management'],
            ['Consulting', 'Practical, site specific guidance.', '/services/consulting'],
          ];
          foreach ($others as $o): ?>
          <a href="<?php echo esc_url($o[2]); ?>" class="reveal group rounded-xl border border-stone-200 bg-white p-6 transition-colors hover:border-olivar-vivo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2">
            <h3 class="font-display text-xl text-raiz-profunda group-hover:text-noche-vinedo"><?php echo esc_html($o[0]); ?></h3>
            <p class="mt-1.5 text-sm text-stone-600"><?php echo esc_html($o[1]); ?></p>
            <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-olivar-vivo">
              Learn more
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- =================== S6 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex min-h-[55svh] items-center overflow-hidden bg-noche-vinedo text-white">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl">Planning a new vineyard?</h2>
      <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-tierra-suave">From raw land to first harvest, let's build it right from day one.</p>
      <div class="reveal mt-10">
        <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-8 py-4 text-lg font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-[0.99]">
          Request a Consultation
        </a>
      </div>
    </div>
  </section>

</main>

<?php get_footer();