<?php /* Template Name: About */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — ABOUT
   Reusa .reveal (home.js corre global y se auto-protege).
   [CONFIRMAR] = dato pendiente del cliente; placeholder, NO se inventa.
   Imágenes con TODO: súbelas a la media library y reemplaza las rutas.
   =========================================================== */ ?>

<?php
/* -----------------------------------------------------------
   URLs de imágenes (media library de WordPress). Edita aquí, en un solo lugar.
   Pega la URL completa del archivo (Biblioteca de medios -> abre la imagen -> "URL del archivo").
   ----------------------------------------------------------- */
$img_hero       = '/wp-content/uploads/2026/07/MartinezFamilyHero.png'; // imagen editorial del About (familia)
$img_octavio    = '/wp-content/uploads/2026/07/MF_CEO-scaled.webp'; // foto de Octavio Garcia (liderazgo)
$img_award_seal = '/wp-content/uploads/2026/06/Martinez-Farming_Sello.png'; // sello del premio
?>

<main data-about class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HEADER =================== -->
  <section aria-labelledby="about-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">About Martinez Farming</p>
        <h1 id="about-h" class="mt-3 font-display text-4xl leading-[1.08] text-raiz-profunda sm:text-5xl lg:text-6xl">Rooted in family. Grown with honor.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          Martinez Farming is a family owned business born in Paso Robles, California, devoted to agricultural excellence in the premium wine sector. We bring specialized vineyard labor to wineries and winegrowers, combining technical precision, sustainability, and human pride. We grow more than grapes, we grow legacy.
        </p>
      </div>
      <!-- Imagen editorial (URL desde $img_hero, definido arriba). -->
      <div class="reveal mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-noche-vinedo/30 bg-cover bg-center" style="background-image:url('<?php echo esc_url($img_hero); ?>')"></div>
    </div>
  </section>

  <!-- =================== S2 · MISSION & VISION =================== -->
  <section aria-labelledby="mv-h" class="relative isolate overflow-hidden bg-raiz-profunda text-white">
    <!-- Video de fondo -->
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay muted loop playsinline
      aria-hidden="true"
    >
      <source src="/wp-content/uploads/2026/07/grape-in-vineyard-2025-12-17-20-12-53-utc.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-raiz-profunda/75"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <h2 id="mv-h" class="sr-only">Mission and vision</h2>
      <div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div class="reveal rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md sm:p-10">
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our mission</p>
          <p class="mt-4 font-display text-2xl leading-snug text-white sm:text-3xl">To farm with excellence and respect, delivering premium agricultural services that combine technical precision, sustainability, and human pride to give life to the world's great wines.</p>
        </div>
        <div class="reveal rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md sm:p-10">
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our vision</p>
          <p class="mt-4 font-display text-2xl leading-snug text-white sm:text-3xl">To be recognized globally as the most trusted and ethical partner in the wine industry, a symbol of quality, integrity, and family legacy.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- =================== S3 · OUR STORY =================== -->
  <section aria-labelledby="story-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <div class="reveal lg:col-span-5">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our story</p>
        <h2 id="story-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">A family business, rooted in the land.</h2>
      </div>
      <div class="reveal lg:col-span-7">
        <p class="text-lg leading-relaxed text-stone-700">
          Martinez Farming was born from a family's dream to put their name in service of the land. In Paso Robles, California, they turned effort, heritage, and passion into an agricultural company devoted to winegrowing excellence. What began as a family legacy today helps bring great wines to life.
        </p>
        <p class="mt-4 text-lg leading-relaxed text-stone-700">
          We are a family business, rooted in Paso Robles and the vineyards of California's Central Coast. Our work is simple to say and hard to do well: bring skilled hands, real standards, and honest accountability to every vineyard we touch.
        </p>
        <p class="mt-6 border-l-2 border-olivar-vivo pl-5 font-display text-xl text-noche-vinedo">
          We don't just grow grapes. We grow trust.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== S4 · WHAT WE STAND FOR =================== -->
  <section aria-labelledby="values-h" class="relative isolate overflow-hidden bg-raiz-profunda text-white">
    <!-- Video de fondo -->
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay muted loop playsinline
      aria-hidden="true"
    >
      <source src="/wp-content/uploads/2026/07/fresh-grapes-in-a-sunny-vineyard-2025-12-17-07-15-47-utc.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-raiz-profunda/75"></div>

    <!-- Estampado de fondo (mismo tono que el bg -> mix-blend screen). -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 200px; opacity:0.3; mix-blend-mode:screen"
    ></div>
    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">What we stand for</p>
        <h2 id="values-h" class="mt-2 font-display text-3xl sm:text-4xl">The values behind the work.</h2>
      </div>
      <?php
        // Valores oficiales del cliente (cuestionario) + ícono por cada uno.
        $values = [
          ['Legacy', 'sprout'],
          ['Excellence', 'star'],
          ['Trust', 'handshake'],
          ['Honesty', 'shield'],
          ['Sustainability', 'leaf'],
          ['Pride', 'award'],
          ['Precision', 'target'],
          ['Family', 'users'],
          ['Passion', 'flame'],
          ['Authenticity', 'gem'],
        ];
        // Dos filas en direcciones opuestas: arriba -> izquierda, abajo -> derecha.
        $rows = [
          ['dir' => 'vmarquee-left',  'items' => array_slice($values, 0, 5)],
          ['dir' => 'vmarquee-right', 'items' => array_slice($values, 5, 5)],
        ];
      ?>
      <div class="mt-12 space-y-4">
        <?php foreach ($rows as $row): ?>
        <div class="vmarquee reveal">
          <div class="vmarquee-track <?php echo $row['dir']; ?>">
            <?php
              // Repetimos el set dos veces para un loop continuo y sin saltos.
              for ($rep = 0; $rep < 2; $rep++):
                foreach ($row['items'] as $v): ?>
              <div class="shine mr-4 flex w-56 shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"<?php echo $rep === 1 ? ' aria-hidden="true"' : ''; ?>>
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-olivar-vivo/15 text-olivar-vivo">
              <?php
                switch ($v[1]):
                  case 'sprout': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
                  <?php break; case 'star': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <?php break; case 'handshake': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25H21"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                  <?php break; case 'shield': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                  <?php break; case 'leaf': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
                  <?php break; case 'award': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  <?php break; case 'target': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  <?php break; case 'users': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <?php break; case 'flame': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                  <?php break; case 'gem': ?>
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
                  <?php break; endswitch; ?>
            </span>
            <span class="font-display text-lg text-white"><?php echo esc_html($v[0]); ?></span>
          </div>
            <?php endforeach; endfor; ?>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- =================== S5 · LEADERSHIP =================== -->
  <section aria-labelledby="lead-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Foto -->
      <div class="reveal lg:col-span-5">
        <!-- Foto de Octavio (URL desde $img_octavio, definido arriba). -->
        <div class="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-tierra-suave/40 bg-cover bg-center" style="background-image:url('<?php echo esc_url($img_octavio); ?>')"></div>
      </div>
      <!-- Bio -->
      <div class="reveal lg:col-span-7">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Leadership</p>
        <h2 id="lead-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">Octavio Garcia</h2>
        <p class="mt-1 text-sm font-medium uppercase tracking-wider text-stone-500">Owner</p>
        <!-- TODO(Daniel): [CONFIRMAR] biografía real de Octavio Garcia -->
        <div class="mt-5 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-5 text-stone-500">
          <p class="text-sm">[ CONFIRMAR: biografía de Octavio Garcia — trayectoria, años en la industria, su rol en el día a día. Pendiente de copy aprobado. ]</p>
        </div>
        <p class="mt-6 text-stone-700">
          Under his leadership, Martinez Farming was named the 2026 San Luis Obispo County Winegrape Grower of the Year.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== S6 · AWARD =================== -->
  <section aria-labelledby="award-h" class="overflow-hidden bg-tierra-suave/20">
    <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Texto (izquierda) -->
      <div class="reveal lg:col-span-7 lg:pr-6">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Recognition</p>
        <h2 id="award-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl lg:text-5xl">Recognized for the work we put in the ground.</h2>
        <p class="mt-5 max-w-xl text-lg text-stone-700">We are proud to be named the 2026 San Luis Obispo County Winegrape Grower of the Year. It reflects the honest work, the skilled hands, and the standards we bring to every vineyard we touch.</p>
      </div>
      <!-- Sello (derecha) -->
      <div class="reveal lg:col-span-5">
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
    </div>
  </section>

  <!-- =================== S7 · CONTACT (form) =================== -->
  <section aria-labelledby="cta-h" class="relative isolate overflow-hidden bg-noche-vinedo text-white">
    <!-- Estampado (mismo tratamiento que el Home). TODO(Daniel): ajusta opacity. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>
    <div class="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <!-- Texto + contacto -->
      <div class="reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Let's talk</p>
        <h2 id="cta-h" class="mt-2 font-display text-4xl leading-tight sm:text-5xl">Let's grow something worth remembering.</h2>
        <p class="mt-5 max-w-md text-lg text-tierra-suave">Whether you are evaluating raw land or looking for a reliable partner through harvest, we would be glad to talk.</p>
        <div class="mt-8 space-y-2 text-sm">
          <a href="tel:+18054239303" class="block text-tierra-suave hover:text-white">805-423-9303</a>
          <!-- TODO(Daniel): [CONFIRMAR] correo de dominio en lugar de martinezfarming@yahoo.com -->
          <a href="mailto:martinezfarming@yahoo.com" class="block text-tierra-suave hover:text-white">martinezfarming@yahoo.com</a>
          <p class="text-tierra-suave">Paso Robles, California</p>
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