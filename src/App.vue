<script>
import Header from '@/components/Header/Header.vue';
import Portfolio from '@/layouts/portfolio.vue';
import Resume from '@/layouts/resume.vue';
import About from '@/layouts/about.vue';
import Testimonial from '@/layouts/testimonial.vue';
import Services from '@/layouts/services.vue';
import Contact from '@/layouts/contact.vue';
import Footer from '@/components/Footer/footer.vue';

export default {
  components: {
    Header,
    Portfolio,
    Resume,
    About,
    Testimonial,
    Services,
    Contact,
    Footer
  }
}
</script>

<template>
  <Header />
  <main>
    <Portfolio />
    <Resume />
    <About />
    <Testimonial />
    <Services />
    <Contact />
  </main>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
