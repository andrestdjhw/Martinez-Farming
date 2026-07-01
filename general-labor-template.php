<?php /* Template Name: Service - General Labor */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — SERVICE PAGE: General Labor
   Patrón reutilizable para las otras 3 hijas (cambia nombre/descriptor/alcance).
   Reusa .reveal (home.js global). Nombre/descriptor aprobados; alcance = [CONFIRMAR].
   =========================================================== */ ?>

<?php
/* URL de la imagen del hero — pega la URL completa de la media library. */
$img_hero = "/wp-content/uploads/2026/06/GeneralLabors-scaled.jpeg";

/* Imágenes de las cards de estándares (opcional). Pega la URL de la media library;
   si la dejas vacía, la card muestra un degradado de marca con el ícono. */
$img_std_reliable    = '/wp-content/uploads/2026/06/Reliable-scaled.jpg';
$img_std_supervised  = '/wp-content/uploads/2026/06/Supervised-scaled.jpg';
$img_std_responsible = '/wp-content/uploads/2026/07/Responsible-scaled.jpg';
$img_std_direct      = '/wp-content/uploads/2026/06/Direct-scaled.jpg';
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
        <span class="text-white">General Labor</span>
      </nav>
      <div class="reveal mt-4 max-w-3xl">
        <span class="font-display text-sm text-olivar-vivo">01 / 04</span>
        <h1 class="mt-2 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">General Labor</h1>
        <p class="mt-5 max-w-2xl text-lg text-tierra-suave">Skilled field crews who keep your vines healthy and productive all season.</p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · OVERVIEW + SCOPE =================== -->
  <section aria-labelledby="overview-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Overview -->
      <div class="reveal lg:col-span-7">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Overview</p>
        <h2 id="overview-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">The hands on work your vineyard needs.</h2>
        <p class="mt-5 text-lg leading-relaxed text-stone-700">
          From pruning to harvest, our crews handle the hands on work your vineyard needs, with the supervision and standards to do it right. Skilled, supervised teams keep your vines healthy and productive through every stage of the season.
        </p>
        <!-- TODO(Daniel): [CONFIRMAR] descripción ampliada del servicio si hay copy aprobado. -->
      </div>

      <!-- Scope / what's included -->
      <aside class="reveal lg:col-span-5">
        <div class="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <h3 class="font-display text-xl text-raiz-profunda">The kind of work we handle</h3>
          <ul class="mt-4 space-y-3 text-stone-700">
            <?php
              // Términos aprobados (del ciclo de temporada). Ejemplos, no lista exhaustiva.
              $tasks = ['Pruning', 'Canopy and shoot work', 'Suckering and shoot thinning', 'Leaf removal', 'Trellising and wire work', 'Vineyard floor and weed management', 'Crop thinning', 'Hand harvesting'];
              foreach ($tasks as $t): ?>
              <li class="flex items-start gap-2.5">
                <svg class="mt-0.5 h-5 w-5 shrink-0 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span><?php echo esc_html($t); ?></span>
              </li>
            <?php endforeach; ?>
          </ul>
          <!-- TODO(Daniel): [CONFIRMAR] lista completa y exacta de tareas que ofrece General Labor. -->
          <p class="mt-4 border-t border-stone-200 pt-4 text-xs text-stone-400">[ CONFIRMAR: lista completa de tareas del servicio con el cliente. ]</p>
        </div>
      </aside>
    </div>
  </section>

  <!-- =================== S3 · STANDARDS =================== -->
  <section aria-labelledby="std-h" class="relative isolate overflow-hidden bg-[#090a0f] text-white">
    <!-- Fondo de estrellas animado (.season-sky, definido en index.css) -->
    <div class="season-sky -z-10" aria-hidden="true">
      <div id="season-stars"></div>
      <div id="season-stars2"></div>
      <div id="season-stars3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="max-w-3xl reveal">
        <h2 id="std-h" class="font-display text-2xl sm:text-3xl">Every crew, the same standard.</h2>
      </div>
      <div class="mt-10 reveal border-t border-white/10 pt-10">
        <div class="marquee">
          <div class="marquee-track">
            <?php
              // Estándares (copy aprobado) + ícono por cada uno.
              $points = [
                ['Reliable', 'On time, every season.', $img_std_reliable],
                ['Supervised', 'Real leadership on every team.', $img_std_supervised],
                ['Responsible', 'Respect for land and people.', $img_std_responsible],
                ['Direct', 'You talk to the people doing the work.', $img_std_direct],
              ];
              // Repetimos el set dos veces para un loop continuo y sin saltos.
              for ($rep = 0; $rep < 2; $rep++):
                foreach ($points as $p): ?>
                <article class="mr-6 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5"<?php echo $rep === 1 ? ' aria-hidden="true"' : ''; ?>>
                  <!-- Imagen (opcional, $p[3]); si está vacía muestra un degradado de marca. -->
                  <div class="aspect-[4/3] overflow-hidden bg-gradient-to-br from-noche-vinedo to-raiz-profunda bg-cover bg-center"<?php if ($p[2]): ?> style="background-image:url('<?php echo esc_url($p[2]); ?>')"<?php endif; ?>></div>
                  <div class="p-6">
                    <h3 class="font-display text-xl text-olivar-vivo"><?php echo esc_html($p[0]); ?></h3>
                    <p class="mt-1.5 text-sm leading-relaxed text-tierra-suave"><?php echo esc_html($p[1]); ?></p>
                  </div>
                </article>
              <?php endforeach; endfor; ?>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =================== S4 · OTHER SERVICES =================== -->
  <section aria-labelledby="other-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 id="other-h" class="reveal font-display text-2xl text-raiz-profunda sm:text-3xl">Other services</h2>
      <div class="mt-8 grid gap-5 sm:grid-cols-3">
        <?php
          // Las otras 3 (excluye General Labor).
          $others = [
            ['Vineyard Installations', 'From raw land to productive vineyard.', '/services/vineyard-installations'],
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

  <!-- =================== S5 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex min-h-[55svh] items-center overflow-hidden bg-noche-vinedo text-white">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl">Need skilled crews this season?</h2>
      <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-tierra-suave">Tell us about your vineyard and we'll put the right team on it.</p>
      <div class="reveal mt-10">
        <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-8 py-4 text-lg font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-[0.99]">
          Request a Consultation
        </a>
      </div>
    </div>
  </section>

</main>

<?php get_footer();