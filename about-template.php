<?php /* Template Name: About */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — ABOUT
   Reusa .reveal (home.js corre global y se auto-protege).
   [CONFIRMAR] = dato pendiente del cliente; placeholder, NO se inventa.
   Imágenes con TODO: súbelas a la media library y reemplaza las rutas.
   =========================================================== */ ?>

<main data-about class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HEADER =================== -->
  <section aria-labelledby="about-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">About Martinez Farming</p>
        <h1 id="about-h" class="mt-3 font-display text-4xl leading-[1.08] text-raiz-profunda sm:text-5xl lg:text-6xl">Rooted in family. Grown with honor.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          Martinez Farming is a family owned vineyard services company based in Paso Robles, California, serving premium and ultra premium wineries across the Central Coast.
        </p>
      </div>
      <!-- TODO(Daniel): imagen editorial del equipo o del viñedo -->
      <div class="reveal mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-noche-vinedo/30 bg-cover bg-center" style="background-image:url('/wp-content/uploads/2026/06/about-hero.jpg')"></div>
    </div>
  </section>

  <!-- =================== S2 · OUR STORY =================== -->
  <section aria-labelledby="story-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <div class="reveal lg:col-span-5">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our story</p>
        <h2 id="story-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl">A family business, rooted in the land.</h2>
      </div>
      <div class="reveal lg:col-span-7">
        <p class="text-lg leading-relaxed text-stone-700">
          We are a family business, rooted in Paso Robles and the vineyards of California's Central Coast. Our work is simple to say and hard to do well: bring skilled hands, real standards, and honest accountability to every vineyard we touch.
        </p>
        <!-- TODO(Daniel): [CONFIRMAR] historia de origen real — año de fundación e historia
             de Octavio Garcia y la familia. Reemplaza este bloque por el copy aprobado. -->
        <div class="mt-6 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-5 text-stone-500">
          <p class="text-sm">[ CONFIRMAR: historia de origen — año de fundación, cómo empezó la familia, el camino de Octavio Garcia. Pendiente de copy aprobado del cliente. ]</p>
        </div>
        <p class="mt-6 border-l-2 border-olivar-vivo pl-5 font-display text-xl text-noche-vinedo">
          We don't just grow grapes. We grow trust.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== S3 · WHAT WE STAND FOR =================== -->
  <section aria-labelledby="values-h" class="bg-raiz-profunda text-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">What we stand for</p>
        <h2 id="values-h" class="mt-2 font-display text-3xl sm:text-4xl">Standards we hold on every vineyard.</h2>
      </div>
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <?php
          // 5 diferenciadores aprobados (render en inglés).
          $values = [
            ['Impeccable compliance', 'On time and by the book, every season.'],
            ['Trained, supervised crews', 'Technical and human leadership on every team.'],
            ['Standards and traceability', 'Consistent processes across every vineyard.'], // TODO(Daniel): [CONFIRMAR] el alcance de "documentado/trazable"
            ['Real sustainability', 'Responsible farming and respect for the land.'],
            ['A human relationship', 'You work directly with the people doing the work.'],
          ];
          foreach ($values as $v): ?>
          <div class="reveal rounded-xl border border-white/10 bg-white/5 p-6">
            <svg class="h-5 w-5 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            <h3 class="mt-4 font-display text-xl text-white"><?php echo esc_html($v[0]); ?></h3>
            <p class="mt-1.5 text-sm text-tierra-suave"><?php echo esc_html($v[1]); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- =================== S4 · LEADERSHIP =================== -->
  <section aria-labelledby="lead-h" class="bg-white">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <!-- Foto -->
      <div class="reveal lg:col-span-5">
        <!-- TODO(Daniel): foto de Octavio Garcia -->
        <div class="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-tierra-suave/40 bg-cover bg-center" style="background-image:url('/wp-content/uploads/2026/06/octavio-garcia.jpg')"></div>
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

  <!-- =================== S5 · AWARD =================== -->
  <section aria-labelledby="award-h" class="overflow-hidden bg-tierra-suave/20">
    <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
      <div class="reveal lg:col-span-5">
        <!-- TODO(Daniel): sello oficial del premio o foto de la entrega -->
        <div class="grid aspect-square w-full place-items-center rounded-2xl border border-raiz-profunda/10 bg-raiz-profunda bg-cover bg-center text-center" style="background-image:url('/wp-content/uploads/2026/06/award-seal.jpg')">
          <div class="px-8 text-tierra-suave">
            <svg class="mx-auto h-12 w-12 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>
            <p class="mt-3 text-sm">[ TODO: sello oficial del premio<br/>o foto de la entrega ]</p>
          </div>
        </div>
      </div>
      <div class="reveal lg:col-span-7 lg:pl-6">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Recognition</p>
        <h2 id="award-h" class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl lg:text-5xl">Recognized for the work we put in the ground.</h2>
        <p class="mt-5 max-w-xl text-lg text-stone-700">We are proud to be named the 2026 San Luis Obispo County Winegrape Grower of the Year. It reflects the honest work, the skilled hands, and the standards we bring to every vineyard we touch.</p>
      </div>
    </div>
  </section>

  <!-- =================== S6 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex min-h-[70svh] items-center overflow-hidden bg-noche-vinedo text-white">
    <!-- Estampado (mismo tratamiento que el Home). TODO(Daniel): ajusta opacity. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl">Let's grow something worth remembering.</h2>
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