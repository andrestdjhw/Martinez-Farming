<?php /* Template Name: Service - Vineyard Management */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — SERVICE PAGE: Vineyard Management
   Mismo patrón que las otras hijas. Las etapas son las del ciclo de temporada
   aprobado en el Home (dormancy→harvest). Reusa .reveal (home.js global).
   =========================================================== */ ?>

<?php
/* URL de la imagen del hero — pega la URL completa de la media library. */
$img_hero = "/wp-content/uploads/2026/06/VineyardManagement-scaled.jpg";
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
        <span class="text-white">Vineyard Management</span>
      </nav>
      <div class="reveal mt-4 max-w-3xl">
        <span class="font-display text-sm text-olivar-vivo">03 / 04</span>
        <h1 class="mt-2 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Vineyard Management</h1>
        <p class="mt-5 max-w-2xl text-lg text-tierra-suave">Hands on stewardship from dormancy through harvest.</p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · OVERVIEW =================== -->
  <section aria-labelledby="overview-h" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Overview</p>
        <h2 id="overview-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">Season round care, the same standard at every stage.</h2>
        <p class="mt-5 text-lg leading-relaxed text-stone-700">
          Season round care that follows your vineyard through every stage, from dormancy and bud break to veraison and harvest. The same crews, the same standards, and the same accountability, all year.
        </p>
        <!-- TODO(Daniel): [CONFIRMAR] descripción ampliada del servicio si hay copy aprobado. -->
      </div>
    </div>
  </section>

  <!-- =================== S3 · SEASON STAGES =================== -->
  <section aria-labelledby="stages-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 id="stages-h" class="reveal font-display text-2xl text-raiz-profunda sm:text-3xl">Through every stage of the season</h2>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <?php
          // Etapas aprobadas (ciclo de temporada del Home).
          $stages = [
            ['Dormancy', 'Pruning strategy that sets the season up right.'],
            ['Bud break', 'Canopy and shoot work for healthy, balanced growth.'],
            ['Veraison', 'Irrigation and pest monitoring dialed to the fruit.'],
            ['Harvest', 'Careful hand harvesting and clean post harvest work.'],
          ];
          foreach ($stages as $i => $st): ?>
          <div class="reveal rounded-xl border border-stone-200 bg-white p-6">
            <span class="font-display text-sm text-olivar-vivo"><?php echo sprintf('%02d', $i + 1); ?></span>
            <h3 class="mt-2 font-display text-xl text-raiz-profunda"><?php echo esc_html($st[0]); ?></h3>
            <p class="mt-1.5 text-sm text-stone-600"><?php echo esc_html($st[1]); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
      <!-- TODO(Daniel): [CONFIRMAR] tareas específicas de manejo dentro de cada etapa si hay copy aprobado. -->
    </div>
  </section>

  <!-- =================== S4 · STANDARDS =================== -->
  <section aria-labelledby="std-h" class="bg-raiz-profunda text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="max-w-3xl reveal">
        <h2 id="std-h" class="font-display text-2xl sm:text-3xl">Year round, the same standard.</h2>
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
          // Las otras 3 (excluye Vineyard Management).
          $others = [
            ['General Labor', 'Skilled field crews all season.', '/services/general-labor'],
            ['Vineyard Installations', 'From raw land to productive vineyard.', '/services/vineyard-installations'],
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
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl">Looking for a partner through harvest?</h2>
      <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-tierra-suave">We'll steward your vineyard all year, with the same standard at every stage.</p>
      <div class="reveal mt-10">
        <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-8 py-4 text-lg font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-[0.99]">
          Request a Consultation
        </a>
      </div>
    </div>
  </section>

</main>

<?php get_footer();