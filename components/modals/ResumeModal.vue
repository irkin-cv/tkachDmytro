<template>
  <b-modal
    id="resume-modal"
    title="BootstrapVue"
    size="xl"
  >
    <p class="my-4">
      <object type="application/pdf" data="http://localhost:3000/static/pdf/Tkach-CV.pdf" width="800" height="500" />
<!--      <object-->
<!--        data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"-->
<!--        width="800"-->
<!--        height="500"-->
<!--      />-->
<!--      </object>-->
<!--      <b-embed src="/static/pdf/tkach-CV.pdf" width="800" height="500" />-->
<!--      <b-embed type="iframe" aspect="4by3" controls poster="poster.png">-->
<!--        <source src="dev-stories.webm" type="video/webm">-->
<!--        <source src="dev-stories.mp4" type="video/mp4">-->
<!--      </b-embed>-->
<!--      <b-embed-->
<!--        type="object"-->
<!--        src="/static/pdf/tkach-CV.pdf"-->
<!--      />-->
<!--      <VuePdfEmbed source="@/static/images/logo.png" />-->
    </p>
  </b-modal>
</template>

<script>
// import Event from '@/enums/Event'

export default {
  name: 'ResumeModal'
}
</script>

<style scoped>

</style>
