<?php /* Template Name: Services */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — SERVICES (página padre / índice)
   Resumen de los 4 servicios + enlace a cada página individual.
   Reusa .reveal (home.js global). Copy = nombres/descriptores aprobados.
   El alcance detallado de cada servicio vive en sus páginas hijas.
   =========================================================== */ ?>

<?php
/* -----------------------------------------------------------
   URL de la imagen de CADA servicio — edita una por una aquí.
   Pega la URL completa del archivo en la media library de WordPress
   (Biblioteca de medios -> abre la imagen -> copia la "URL del archivo").
   ----------------------------------------------------------- */
$img_general_labor          = '/wp-content/uploads/2026/06/GeneralLabors-scaled.jpeg'; // TODO(Daniel): URL imagen General Labor
$img_vineyard_installations = '/wp-content/uploads/2026/06/VineyardInstallations-scaled.jpg'; // TODO(Daniel): URL imagen Vineyard Installations
$img_vineyard_management    = '/wp-content/uploads/2026/06/VineyardManagement-scaled.jpg'; // TODO(Daniel): URL imagen Vineyard Management
$img_consulting             = '/wp-content/uploads/2026/06/Consultation-scaled.jpg'; // TODO(Daniel): URL imagen Consulting
?>

<main data-services class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HEADER =================== -->
  <section aria-labelledby="services-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our services</p>
        <h1 id="services-h" class="mt-3 font-display text-4xl leading-[1.08] text-raiz-profunda sm:text-5xl lg:text-6xl">Vineyard expertise at every stage, from raw land to harvest.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          Skilled crews and seasoned field leadership across four core services. Each one is built on the same standards and the same accountability.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · SERVICES DETAIL =================== -->
  <section aria-label="Services detail" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <?php
        // 4 servicios — nombre, descriptor aprobado, encuadre breve, enlace e imagen.
        $services = [
          [
            'num' => '01',
            'name' => 'General Labor',
            'desc' => 'Skilled field crews who keep your vines healthy and productive all season.',
            'frame' => 'From pruning to harvest, our crews handle the hands on work your vineyard needs, with the supervision and standards to do it right.',
            'href' => '/services/general-labor',
            'img' => $img_general_labor,
          ],
          [
            'num' => '02',
            'name' => 'Vineyard Installations',
            'desc' => 'From raw land to productive vineyard, built right from day one.',
            'frame' => 'We take new and established sites from the ground up, setting a solid foundation for healthy, productive vines.',
            'href' => '/services/vineyard-installations',
            'img' => $img_vineyard_installations,
          ],
          [
            'num' => '03',
            'name' => 'Vineyard Management',
            'desc' => 'Hands on stewardship from dormancy through harvest.',
            'frame' => 'Season round care that follows your vineyard through every stage, from dormancy and bud break to veraison and harvest.',
            'href' => '/services/vineyard-management',
            'img' => $img_vineyard_management,
          ],
          [
            'num' => '04',
            'name' => 'Consulting',
            'desc' => 'Practical, site specific guidance backed by real vineyard experience.',
            'frame' => 'When you need an expert read on your site, we bring practical guidance grounded in real field experience.',
            'href' => '/services/consulting',
            'img' => $img_consulting,
          ],
        ];
        foreach ($services as $i => $s):
          $reverse = ($i % 2 === 1);
      ?>
        <article class="reveal grid items-center gap-8 border-t border-stone-200 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <!-- Imagen -->
          <div class="<?php echo $reverse ? 'lg:order-2' : ''; ?>">
            <!-- Foto del servicio (URL desde la variable $img_* definida arriba). -->
            <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-noche-vinedo/30 bg-cover bg-center" style="background-image:url('<?php echo esc_url($s['img']); ?>')"></div>
          </div>
          <!-- Texto -->
          <div class="<?php echo $reverse ? 'lg:order-1' : ''; ?>">
            <span class="font-display text-sm text-olivar-vivo"><?php echo $s['num']; ?> / 04</span>
            <h2 class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl"><?php echo esc_html($s['name']); ?></h2>
            <p class="mt-3 text-lg text-stone-700"><?php echo esc_html($s['desc']); ?></p>
            <p class="mt-3 text-stone-600"><?php echo esc_html($s['frame']); ?></p>
            <a href="<?php echo esc_url($s['href']); ?>" class="mt-6 inline-flex items-center gap-2 font-bold text-raiz-profunda transition-colors hover:text-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 rounded-sm">
              Learn more about <?php echo esc_html($s['name']); ?>
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- =================== S3 · STANDARDS BAND =================== -->
  <section aria-labelledby="std-h" class="bg-raiz-profunda text-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">The same standard, every service</p>
        <h2 id="std-h" class="mt-2 font-display text-3xl sm:text-4xl">Whatever the job, the standard doesn't change.</h2>
      </div>
      <div class="mt-12 grid gap-x-8 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <?php
          $points = [
            ['Reliable', 'On time, every season.'],
            ['Supervised', 'Skilled crews with real leadership.'],
            ['Responsible', 'Respect for land and people.'],
            ['Direct', 'You talk to the people doing the work.'],
          ];
          foreach ($points as $p): ?>
          <div class="reveal">
            <h3 class="font-display text-xl text-olivar-vivo"><?php echo esc_html($p[0]); ?></h3>
            <p class="mt-1 text-sm text-tierra-suave"><?php echo esc_html($p[1]); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- =================== S4 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex min-h-[60svh] items-center overflow-hidden bg-noche-vinedo text-white">
    <!-- Estampado (mismo tratamiento que el Home). TODO(Daniel): ajusta opacity. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl">Not sure which service you need?</h2>
      <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-tierra-suave">Tell us about your vineyard and we'll point you in the right direction.</p>
      <div class="reveal mt-10">
        <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-8 py-4 text-lg font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-[0.99]">
          Request a Consultation
        </a>
      </div>
    </div>
  </section>

</main>

<?php get_footer();