<?php /* Template Name: Service - Consulting */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — SERVICE PAGE: Consulting
   Cuarta/última página hija. Mismo patrón. Servicio de asesoría (no labor de campo).
   Reusa .reveal (home.js global). Nombre/descriptor aprobados; alcance = [CONFIRMAR].
   =========================================================== */ ?>

<?php
/* URL de la imagen del hero — pega la URL completa de la media library. */
$img_hero = "/wp-content/uploads/2026/06/Consultation-scaled.jpg";

/* Imágenes de las cards de áreas de asesoría (opcional). Pega la URL de la media library;
   si la dejas vacía, la card muestra un degradado de marca. */
$img_adv_1 = '/wp-content/uploads/2026/07/Consulting01.png'; // TODO(Daniel): Site & varietal assessment
$img_adv_2 = '/wp-content/uploads/2026/07/Consulting02.png'; // TODO(Daniel): Replant & redevelopment
$img_adv_3 = '/wp-content/uploads/2026/07/Consulting03.png'; // TODO(Daniel): Canopy & irrigation
$img_adv_4 = '/wp-content/uploads/2026/07/Consulting04.png'; // TODO(Daniel): Pest & disease pressure
$img_adv_5 = '/wp-content/uploads/2026/07/Consulting05.png'; // TODO(Daniel): Harvest timing & prep
$img_adv_6 = '/wp-content/uploads/2026/07/Consulting06.png'; // TODO(Daniel): Labor & operations
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
        <span class="text-white">Consulting</span>
      </nav>
      <div class="reveal mt-4 max-w-3xl">
        <span class="font-display text-sm text-olivar-vivo">04 / 04</span>
        <h1 class="mt-2 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Consulting</h1>
        <p class="mt-5 max-w-2xl text-lg text-tierra-suave">Practical, site specific guidance backed by real vineyard experience.</p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · OVERVIEW + SCOPE =================== -->
  <section aria-labelledby="overview-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Overview -->
      <div class="reveal lg:col-span-7">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Overview</p>
        <h2 id="overview-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">An expert read on your site.</h2>
        <p class="mt-5 text-lg leading-relaxed text-stone-700">
          When you need an expert read on your site, we bring practical guidance grounded in real field experience. Site specific advice from people who do this work every season, not just talk about it.
        </p>
        <p class="mt-4 text-lg leading-relaxed text-stone-700">
          Whether you're planning a new block, working through an underperforming vineyard, or just want a second opinion before a big decision, we walk the ground with you and give you a straight answer, not a sales pitch.
        </p>
        <!-- TODO(Daniel): [CONFIRMAR] descripción ampliada del servicio si hay copy aprobado. -->
      </div>

      <!-- Scope -->
      <aside class="reveal lg:col-span-5">
        <div class="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <h3 class="font-display text-xl text-raiz-profunda">How we help</h3>
          <ul class="mt-4 space-y-3 text-stone-700">
            <?php
              // Encuadre del servicio (cómo trabajamos). Ejemplos, no lista exhaustiva.
              $tasks = ['A walk of your site with people who farm it for a living', 'A straight, honest assessment, no sales pitch', 'Practical recommendations you can act on this season', 'Guidance grounded in real experience, not theory'];
              foreach ($tasks as $t): ?>
              <li class="flex items-start gap-2.5">
                <svg class="mt-0.5 h-5 w-5 shrink-0 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span><?php echo esc_html($t); ?></span>
              </li>
            <?php endforeach; ?>
          </ul>
          <!-- TODO(Daniel): [CONFIRMAR] áreas específicas de consultoría que ofrece el cliente. -->
          <p class="mt-4 border-t border-stone-200 pt-4 text-xs text-stone-400">[ CONFIRMAR: áreas específicas de consultoría con el cliente. ]</p>
        </div>
      </aside>
    </div>
  </section>

  <!-- =================== S3 · ÁREAS DE ASESORÍA =================== -->
  <section aria-labelledby="adv-h" class="relative isolate overflow-hidden bg-[#090a0f] text-white">
    <!-- Fondo de estrellas animado (.season-sky, definido en index.css) -->
    <div class="season-sky -z-10" aria-hidden="true">
      <div id="season-stars"></div>
      <div id="season-stars2"></div>
      <div id="season-stars3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">What we advise on</p>
        <h2 id="adv-h" class="mt-2 font-display text-3xl text-white sm:text-4xl">Common questions we help answer.</h2>
        <p class="mt-4 text-lg text-tierra-suave">Bring us the problem you're wrestling with, and we'll give you a straight, site specific answer.</p>
      </div>
      <div class="mt-12 marquee reveal">
        <div class="marquee-track">
          <?php
            // Áreas comunes de asesoría. TODO(Daniel): [CONFIRMAR] las áreas reales que ofrece el cliente.
            $areas = [
              ['Site & varietal assessment', 'A read on your ground, your vines, and what will actually thrive.', $img_adv_1],
              ['Replant & redevelopment', 'Planning for tired blocks and the next generation of the vineyard.', $img_adv_2],
              ['Canopy & irrigation', 'Strategy to balance growth and dial water to the fruit.', $img_adv_3],
              ['Pest & disease pressure', 'Monitoring and a plan to stay ahead of problems.', $img_adv_4],
              ['Harvest timing & prep', 'Reading the fruit and getting ready for a clean harvest.', $img_adv_5],
              ['Labor & operations', 'Planning the crews and the calendar so the work gets done right.', $img_adv_6],
            ];
            // Repetimos el set dos veces para un loop continuo y sin saltos.
            for ($rep = 0; $rep < 2; $rep++):
              foreach ($areas as $i => $a): ?>
              <article class="relative mr-6 h-[28rem] w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10"<?php echo $rep === 1 ? ' aria-hidden="true"' : ''; ?>>
                <!-- Foto de fondo (opcional, $a[2]); si está vacía muestra un degradado de marca. -->
                <div class="absolute inset-0 bg-gradient-to-br from-noche-vinedo to-raiz-profunda bg-cover bg-center"<?php if ($a[2]): ?> style="background-image:url('<?php echo esc_url($a[2]); ?>')"<?php endif; ?>></div>
                <!-- Degradado para legibilidad del texto -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
                <!-- Texto encima de la foto -->
                <div class="relative flex h-full flex-col justify-end p-6">
                  <span class="font-display text-5xl leading-none text-olivar-vivo"><?php echo sprintf('%02d', $i + 1); ?></span>
                  <h3 class="mt-3 font-display text-2xl text-white"><?php echo esc_html($a[0]); ?></h3>
                  <p class="mt-2 text-sm leading-relaxed text-white/85"><?php echo esc_html($a[1]); ?></p>
                </div>
              </article>
            <?php endforeach; endfor; ?>
        </div>
      </div>
      <p class="mt-6 reveal text-xs text-tierra-suave/50">[ CONFIRMAR: áreas específicas de consultoría con el cliente. ]</p>
    </div>
  </section>

  <!-- =================== S4 · STANDARDS =================== -->
  <section aria-labelledby="std-h" class="bg-raiz-profunda text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="max-w-3xl reveal">
        <h2 id="std-h" class="font-display text-2xl sm:text-3xl">Honest advice, the same standard.</h2>
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
          // Las otras 3 (excluye Consulting).
          $others = [
            ['General Labor', 'Skilled field crews all season.', '/services/general-labor'],
            ['Vineyard Installations', 'From raw land to productive vineyard.', '/services/vineyard-installations'],
            ['Vineyard Management', 'Hands on stewardship through harvest.', '/services/vineyard-management'],
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

  <!-- =================== S6 · REQUEST A CONSULTATION (form) =================== -->
  <section aria-labelledby="req-h" class="relative isolate overflow-hidden bg-raiz-profunda text-white">
    <!-- Estampado de fondo -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_8-scaled.png'); background-size:auto 180px; opacity:0.1"
    ></div>
    <div class="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <!-- Texto -->
      <div class="reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Let's talk</p>
        <h2 id="req-h" class="mt-2 font-display text-3xl leading-tight sm:text-4xl">Need an expert read on your site?</h2>
        <p class="mt-5 max-w-md text-lg text-tierra-suave">Tell us what you're working with and we'll give you a straight answer, grounded in real field experience.</p>
        <div class="mt-8 space-y-2 text-sm">
          <a href="tel:+18054239303" class="block text-tierra-suave hover:text-white">805-423-9303</a>
          <!-- TODO(Daniel): [CONFIRMAR] correo de dominio en lugar de Yahoo -->
          <a href="mailto:martinezfarming@yahoo.com" class="block text-tierra-suave hover:text-white">martinezfarming@yahoo.com</a>
          <p class="text-tierra-suave">Paso Robles, CA</p>
        </div>

        <!-- Mapa de Google Maps (Paso Robles). TODO(Daniel): reemplaza el src por el embed real. -->
        <div class="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Paso+Robles,+CA&z=12&output=embed"
            title="Martinez Farming — Paso Robles, CA"
            class="aspect-[16/9] w-full"
            style="border:0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Formulario (ContactForm React; monta en #render-contact-form) -->
      <div class="reveal">
        <div class="rounded-2xl bg-white p-6 text-raiz-profunda shadow-xl sm:p-8">
          <div id="render-contact-form"></div>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer();