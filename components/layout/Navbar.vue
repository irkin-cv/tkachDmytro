<template>
  <div class="navbar-wrapper">
    <b-navbar
      :sticky="true"
      toggleable="lg"
      type="light"
      class="navbar"
    >
      <nuxt-link :to="{ name: 'index' }" class="navbar-brand">
        <img
          src="~static/images/logo.png"
          alt="Dmytro Tkach"
          height="70"
          width="325"
          class="logo-img"
        >
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'index' }" class="navbar-item">
            {{ $t('navbar.home') }}
          </b-nav-item>

          <b-nav-item href="catalog" :to="{ name: 'catalog' }" class="navbar-item">
            {{ $t('navbar.catalog') }}
          </b-nav-item>

          <b-nav-item :to="{ name: 'how-it-work' }" class="navbar-item">
            {{ $t('navbar.how_it_work') }}
          </b-nav-item>

          <b-nav-item :to="{ name: 'find-out-cost' }" class="navbar-item">
            {{ $t('navbar.find_out_cost') }}
          </b-nav-item>

          <b-nav-item-dropdown :text="locales.ru" right>
            <b-dropdown-item
              v-for="(locale, index) in locales"
              :key="`${locale}-${index}`"
              href="#"
            >
              {{ locale }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarSection',
  data () {
    return {
      locales: {
        ru: this.$t('navbar.rus'),
        uk: this.$t('navbar.uk'),
        en: this.$t('navbar.en')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/navbar.scss';
</style>
