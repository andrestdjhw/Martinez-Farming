<?php /* Template Name: Locations */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — LOCATIONS
   Los 3 condados del área de servicio + un frame de Google Maps por condado.
   Reusa .reveal (home.js global).
   TODO(Daniel): reemplaza cada iframe src por el embed real de Google Maps
   (Maps -> Compartir -> Insertar un mapa -> copia el src del <iframe>).
   =========================================================== */ ?>

<main data-locations class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HEADER =================== -->
  <section aria-labelledby="loc-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Locations</p>
        <h1 id="loc-h" class="mt-3 font-display text-4xl leading-[1.08] text-raiz-profunda sm:text-5xl">Rooted in Paso Robles. Serving the Central Coast.</h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
          From our home in Paso Robles, we serve vineyards across three counties, with the same crews, the same standards, and the same accountability.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · COUNTIES + MAPS =================== -->
  <section aria-label="Service area counties" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <?php
        // 3 condados del área de servicio (cuestionario).
        // TODO(Daniel): pega el src real del embed de Google Maps de cada condado.
        $counties = [
          [
            'num' => '01',
            'name' => 'San Luis Obispo County',
            'note' => 'Home base — Paso Robles and the surrounding AVAs.',
            'map' => 'https://www.google.com/maps?q=San+Luis+Obispo+County,+CA&output=embed', // TODO: reemplazar por embed oficial
          ],
          [
            'num' => '02',
            'name' => 'Monterey County',
            'note' => 'Vineyards across the northern Central Coast.',
            'map' => 'https://www.google.com/maps?q=Monterey+County,+CA&output=embed', // TODO
          ],
          [
            'num' => '03',
            'name' => 'Santa Barbara County',
            'note' => 'Vineyards across the southern Central Coast.',
            'map' => 'https://www.google.com/maps?q=Santa+Barbara+County,+CA&output=embed', // TODO
          ],
        ];
        foreach ($counties as $i => $c):
          $reverse = ($i % 2 === 1);
      ?>
        <article class="reveal grid items-center gap-8 border-t border-stone-200 py-14 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <!-- Mapa -->
          <div class="<?php echo $reverse ? 'lg:order-2' : ''; ?>">
            <div class="overflow-hidden rounded-2xl border border-stone-200">
              <iframe
                src="<?php echo esc_url($c['map']); ?>"
                title="Map of <?php echo esc_attr($c['name']); ?>"
                class="aspect-[4/3] w-full"
                style="border:0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- Texto -->
          <div class="<?php echo $reverse ? 'lg:order-1' : ''; ?>">
            <span class="font-display text-sm text-olivar-vivo"><?php echo $c['num']; ?> / 03</span>
            <h2 class="mt-2 font-display text-3xl text-raiz-profunda sm:text-4xl"><?php echo esc_html($c['name']); ?></h2>
            <p class="mt-3 text-lg text-stone-600"><?php echo esc_html($c['note']); ?></p>
            <div class="mt-5 flex items-center gap-2 text-sm font-medium text-raiz-profunda">
              <svg class="h-5 w-5 text-olivar-vivo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Central Coast, California
            </div>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- =================== S3 · HOME BASE =================== -->
  <section aria-labelledby="base-h" class="bg-raiz-profunda text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid items-center gap-8 lg:grid-cols-12">
        <div class="reveal lg:col-span-7">
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Our home base</p>
          <h2 id="base-h" class="mt-2 font-display text-3xl sm:text-4xl">Paso Robles, California</h2>
          <p class="mt-4 max-w-xl text-tierra-suave">It all starts here. From Paso Robles we bring the same crews and the same standards to every vineyard across the Central Coast.</p>
          <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="tel:+18054239303" class="text-tierra-suave hover:text-white">805-423-9303</a>
            <!-- TODO(Daniel): [CONFIRMAR] correo de dominio -->
            <a href="mailto:martinezfarming@yahoo.com" class="text-tierra-suave hover:text-white">martinezfarming@yahoo.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =================== S4 · CLOSING CTA =================== -->
  <section aria-labelledby="cta-h" class="relative flex min-h-[55svh] items-center overflow-hidden bg-noche-vinedo text-white">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-repeat"
      style="background-image:url('/wp-content/uploads/2026/06/Estampados-MF_2-scaled.png'); background-size:auto 220px; opacity:0.45; mix-blend-mode:screen"
    ></div>
    <div class="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <h2 id="cta-h" class="reveal font-display text-4xl leading-tight sm:text-5xl">In our service area?</h2>
      <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-tierra-suave">If your vineyard is across the Central Coast, we'd be glad to talk.</p>
      <div class="reveal mt-10">
        <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-olivar-vivo px-8 py-4 text-lg font-bold text-raiz-profunda transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-[0.99]">
          Request a Consultation
        </a>
      </div>
    </div>
  </section>

</main>

<?php get_footer();