<script>
import Nav from '@/components/Nav/Nav.vue';
export default {
  components: {
    Nav
  }
}
</script>
<template>
  <header>
    <Nav />
    <section class="site-hero" style="background-image: url('./src/assets/images/jason2.jpg');" id="section-home" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row intro-text align-items-center justify-content-center">
          <div class="col-md-10 text-center pt-5">
            <h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Clint Jason</strong></h1>
            <strong class="d-block text-white text-uppercase letter-spacing">and this is My Resume</strong>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>