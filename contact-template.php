<?php /* Template Name: Contact */ get_header(); ?>

<?php /* ===========================================================
   MARTINEZ FARMING — CONTACT
   El formulario es el componente React (#render-contact-form, index.js lo monta).
   Reusa .reveal (home.js global). Datos de contacto reales; TODO/[CONFIRMAR] marcados.
   =========================================================== */ ?>

<main data-contact class="font-sans text-raiz-profunda">

  <!-- =================== S1 · HEADER =================== -->
  <section aria-labelledby="contact-h" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="max-w-3xl reveal">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Contact us</p>
        <h1 id="contact-h" class="mt-3 font-display text-4xl leading-[1.08] text-raiz-profunda sm:text-5xl">Let's talk about your vineyard.</h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
          Whether you are evaluating raw land or looking for a reliable partner through harvest, we would be glad to talk.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== S2 · INFO + FORM =================== -->
  <section aria-label="Contact details and form" class="bg-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">

      <!-- Columna izquierda: info de contacto -->
      <div class="reveal">
        <h2 class="font-display text-2xl text-raiz-profunda">Reach us directly</h2>
        <dl class="mt-6 space-y-5">
          <div class="flex items-start gap-4">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-tierra-suave/30 text-raiz-profunda">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            </span>
            <div>
              <dt class="text-sm font-medium uppercase tracking-wider text-stone-500">Phone</dt>
              <dd class="mt-0.5"><a href="tel:+18054239303" class="text-lg text-raiz-profunda hover:text-noche-vinedo">805-423-9303</a></dd>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-tierra-suave/30 text-raiz-profunda">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            </span>
            <div>
              <dt class="text-sm font-medium uppercase tracking-wider text-stone-500">Email</dt>
              <!-- TODO(Daniel): [CONFIRMAR] correo de dominio en lugar de Yahoo -->
              <dd class="mt-0.5"><a href="mailto:martinezfarming@yahoo.com" class="text-lg text-raiz-profunda hover:text-noche-vinedo">martinezfarming@yahoo.com</a></dd>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-tierra-suave/30 text-raiz-profunda">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <dt class="text-sm font-medium uppercase tracking-wider text-stone-500">Location</dt>
              <dd class="mt-0.5 text-lg text-raiz-profunda">Paso Robles, California</dd>
              <dd class="mt-1 text-sm text-stone-500">Serving San Luis Obispo, Monterey, and Santa Barbara Counties</dd>
            </div>
          </div>
        </dl>

        <!-- Redes -->
        <div class="mt-8 border-t border-stone-200 pt-6">
          <p class="text-sm font-medium uppercase tracking-wider text-stone-500">Follow us</p>
          <div class="mt-3 flex items-center gap-2">
            <?php
              $socials = [
                ['Instagram', 'https://instagram.com/martinez_farming', '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>'],
                ['Facebook', 'https://facebook.com/MartinezFarming', '<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" fill="currentColor" stroke="none"/>'],
                ['YouTube', 'https://youtube.com/@MartinezFarmingLLC', '<path d="M23 12s0-3.2-.41-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.08 12 5.08 12 5.08s-7.3 0-8.83.41a2.5 2.5 0 0 0-1.76 1.77C1 8.8 1 12 1 12s0 3.2.41 4.74a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.02V8.98L15.5 12 10 15.02Z" fill="currentColor" stroke="none"/>'],
                // TODO(Daniel): URL de TikTok
                ['TikTok', '#', '<path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.4-.2-3.5-.8v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.6Z" fill="currentColor" stroke="none"/>'],
              ];
              foreach ($socials as $s): ?>
              <a href="<?php echo esc_url($s[1]); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php echo esc_attr($s[0]); ?>" class="grid h-10 w-10 place-items-center rounded-full bg-stone-100 text-raiz-profunda transition-colors hover:bg-olivar-vivo hover:text-raiz-profunda focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><?php echo $s[2]; ?></svg>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      </div>

      <!-- Columna derecha: el formulario React monta aquí -->
      <div class="reveal">
        <div id="render-contact-form"></div>
      </div>
    </div>
  </section>

  <!-- =================== S3 · MAPA =================== -->
  <section aria-label="Our location" class="bg-stone-50">
    <div class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-20">
      <!-- TODO(Daniel): pega el embed de Google Maps (iframe) de la oficina en Paso Robles.
           Mientras tanto se muestra un placeholder. -->
      <div class="reveal overflow-hidden rounded-2xl border border-stone-200">
        <div class="grid aspect-[21/9] w-full place-items-center bg-tierra-suave/25 text-center">
          <div class="px-6 text-stone-500">
            <svg class="mx-auto h-8 w-8 text-raiz-profunda/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <p class="mt-2 text-sm">[ TODO: embed de Google Maps — Paso Robles, CA ]</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer();