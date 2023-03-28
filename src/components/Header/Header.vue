<script>
import Nav from '@/components/Nav/Nav.vue';
import pic from '@/assets/images/jason2.jpg';
export default {
  data() {
    return {
      pic: pic,
      logo: logo,
    }
  },
  components: {
    Nav
  }
}
</script>
<template>
  <header>
    <Nav />
    <section class="site-hero" :style="{'background-image': `url(${this.pic})`}" id="section-home" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row intro-text align-items-center justify-content-center">
          <div class="col-md-10 text-center pt-5">
            <h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Clint Jason</strong></h1>
            <strong class="d-block text-white text-uppercase letter-spacing">and I am a freelance Software Engineer</strong>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>