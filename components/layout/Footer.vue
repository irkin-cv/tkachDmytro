<template>
  <section class="footer">
    <IconInstagram class="socials icon-instagram" />
    <IconFacebook class="socials icon-facebook" />
    <IconTwitter class="socials icon-twitter" />
    <IconYouTube class="socials icon-youtube" />

    <AppButton class="">
      <template #prepend>
        <img
          src="@/static/images/burger.svg"
          alt=""
          width="25"
          height="24"
          class="button_trigger-filter__prepend"
        />
      </template>

      selectedInterval

      <template #append>
        test
      </template>
    </AppButton>
  </section>
</template>

<script>
import AppButton from '@/components/ui/button/AppButton'
import IconInstagram from '@/components/ui/images/icons/socials/IconInstagram'
import IconFacebook from '@/components/ui/images/icons/socials/IconFacebook'
import IconTwitter from '@/components/ui/images/icons/socials/IconTwitter'
import IconYouTube from '@/components/ui/images/icons/socials/IconYouTube'

export default {
  name: 'Footer',
  components: {
    AppButton,
    IconInstagram,
    IconFacebook,
    IconTwitter,
    IconYouTube
  }
}
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--clr-dark-blue);
}
.socials {
  cursor: pointer;
}
.socials:hover:deep(svg path) {
  fill: var(--clr-hot-ping);
}
</style>
