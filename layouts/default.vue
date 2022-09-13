<template>
  <div>
    <Navbar />

    <!--content-->
    <nuxt class="main-content" />
    <!--end content-->

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
