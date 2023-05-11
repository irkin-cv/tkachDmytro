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
          src="~static/images/logo.svg"
          alt="shiny-shiny.com"
          height="24"
          width="119"
          class="logo-img"
        />
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

          <b-nav-item class="navbar-item">
            {{ $t('navbar.basket') }}
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

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 1020;
}
.navbar {
  max-width: var(--content-width);
  height: var(--navbar-height);
  margin: auto;
  padding: 0;
  background-color: #ffffff;
}

.navbar-nav:deep(.nav-link) {
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  color: var(--clr-black-100);
}
.navbar-item {
  margin-right: 32px;
}

.navbar-nav:deep(.nuxt-link-exact-active),
.navbar-nav:deep(.nav-link):hover,
.navbar-nav:deep(.nav-link):focus,
.navbar-nav:deep(.show) > .nav-link {
  font-weight: 700;
  color: var(--clr-hot-ping);
  border-bottom: 1px solid;
}
.navbar-nav:deep(.nav-item) {
  outline: none;
}
.navbar-nav:deep(.dropdown-item):hover {
  color: var(--clr-hot-ping);
}
.navbar-nav:deep(.dropdown-menu) {
  border-radius: var(--border-radius-12);
}
.navbar-nav:deep(.dropdown-toggle)::after {
  display: none;
}

@media all and (max-width: 992px) {
  .navbar:deep(.navbar-nav) {
    padding: 15px;
    border: 1px solid var(--clr-black-1);
    border-radius: var(--border-radius-12);
    background: #ffffff;
  }
  .navbar-item {
    margin-right: 0;
  }
  .navbar-nav:deep(.nav-link) {
    padding: 10px 0;
    font-size: 18px;
  }
  .navbar-nav:deep(.dropdown-menu) {
    border-radius: 0 0 var(--border-radius-12) var(--border-radius-12);
    margin-top: -2px;
    border-color: var(--clr-hot-ping);
  }
  .navbar:deep(.navbar-toggler) {
    border: none;
  }
  .navbar:deep(.navbar-toggler-icon) {
    background: url('~static/images/burger.svg') no-repeat;
    background-size: cover;
  }
}
</style>
