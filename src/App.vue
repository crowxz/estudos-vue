<template>
  <div id="app">
    <Header />
    <router-view path="$router.key"/>
    <Footer />

  </div>
</template>

<script>

import './styles/global.css';
import Header from './components/Header'
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>


