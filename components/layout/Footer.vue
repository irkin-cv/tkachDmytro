<template>
  <section class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <nuxt-link :to="{ name: 'index' }">
          <img
            src="~static/images/logo-white.svg"
            alt="shiny-shiny.com"
            height="24"
            width="119"
            class="logo-img"
          />
        </nuxt-link>
      </div>

      <div class="footer-navigation">
        <nuxt-link :to="{ name: 'help' }" class="navigation-link colored">
          {{ $t('footer.help') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'contacts' }" class="navigation-link">
          {{ $t('footer.contacts') }}
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
          <a :href="instagramLink" target="_blank" class="icon-instagram"><IconInstagram class="socials" /></a>
          <a :href="facebookLink" target="_blank" class="icon-facebook"><IconFacebook class="socials" /></a>
          <a :href="twitterLink" target="_blank" class="icon-twitter"><IconTwitter class="socials" /></a>
          <a :href="youtubeLink" target="_blank" class="icon-youtube"><IconYouTube class="socials " /></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-text">
        <!--Потом не забыть сделать чтобы год автоматически менялся-->
        2022 © Shiny-Shiny. All rights reserved.
      </div>
    </div>
  </section>
</template>

<script>
import IconInstagram from '@/components/ui/images/icons/socials/IconInstagram'
import IconFacebook from '@/components/ui/images/icons/socials/IconFacebook'
import IconTwitter from '@/components/ui/images/icons/socials/IconTwitter'
import IconYouTube from '@/components/ui/images/icons/socials/IconYouTube'
import SocialLinks from '@/enums/social/SocialLinks'

export default {
  name: 'FooterSection',
  components: {
    IconInstagram,
    IconFacebook,
    IconTwitter,
    IconYouTube
  },
  computed: {
    instagramLink: () => SocialLinks.Instagram,
    facebookLink: () => SocialLinks.Facebook,
    twitterLink: () => SocialLinks.Twitter,
    youtubeLink: () => SocialLinks.YouTube
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/footer.scss';
</style>
