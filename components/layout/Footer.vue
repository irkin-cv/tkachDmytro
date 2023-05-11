<template>
  <section class="footer">
    <div class="footer-container">
      <div class="footer-navigation">
        <nuxt-link :to="{ name: 'help' }" class="navigation-link colored">
          {{ $t('footer.help') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'contacts' }" class="navigation-link">
          {{ $t('footer.contacts') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'terms-of-service' }" class="navigation-link">
          {{ $t('footer.terms_of_service') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'delivery' }" class="navigation-link">
          {{ $t('footer.delivery') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'get-ideas' }" class="navigation-link get-ideas">
          {{ $t('footer.get_ideas') }}
        </nuxt-link>
      </div>

      <div class="footer-navigation">
        <nuxt-link :to="{ name: 'about' }" class="navigation-link colored">
          {{ $t('footer.about') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'how-it-work' }" class="navigation-link">
          {{ $t('footer.how_it_work') }}
        </nuxt-link>
      </div>

      <div class="footer-social">
        <div class="social-links">
          <a :href="linkedInLink" target="_blank" class="icon-youtube"><IconLinkedIn class="socials " /></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-text">
        <!--Потом не забыть сделать чтобы год автоматически менялся-->
        2023 © Dmytro Tkach. All rights reserved.
      </div>
    </div>
  </section>
</template>

<script>
import IconLinkedIn from '@/components/ui/images/icons/socials/IconLikedIn'
import SocialLinks from '@/enums/social/SocialLinks'

export default {
  name: 'FooterSection',
  components: {
    IconLinkedIn
  },
  computed: {
    linkedInLink: () => SocialLinks.LinkedIn
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/footer.scss';
</style>
