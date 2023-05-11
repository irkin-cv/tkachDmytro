<template>
  <div class="position banner-block">
    <div class="main-text">
      <h1>Hi, I am Dimasic</h1>
      <p>
        {{ $t('common.main_text_1') }}
      </p>
      <p>
        {{ $t('common.main_text_2') }}
      </p>
      <p>
        {{ $t('common.main_text_3') }}
      </p>
      <AppButton v-b-modal.resume-modal>
        {{ $t('common.download_resume') }}
      </AppButton>
      <a :href="pdf">dddddd2</a>
    </div>
    <div class="main-image">
      <img
        src="~static/images/main-page/dmytro-tkach.jpg"
        alt="Dmytro Tkach"
      >
    </div>

    <ResumeModal />
  </div>
</template>

<script>
import AppButton from '@/components/ui/button/AppButton'
import ResumeModal from '@/components/modals/ResumeModal'

export default {
  name: 'IndexPage',
  components: { AppButton, ResumeModal }
}
</script>

<style scoped lang="scss">
.position {
  max-width: var(--content-width);
  margin: auto;
}
.banner-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 150px 0;
}
.main-text {
  max-width: 60%;
}
.main-image {
  display: block;
  width: 243px;
  height: 243px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
