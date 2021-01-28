<template>
  <content-loader
    class="flex flex-col rounded"
    width="100%"
    height="180px"
  >
    <content-loader
      class="rounded mt-3"
      width="90%"
      height="30px"
      animation-duration="2.3s"
    />
    <content-loader
      class="rounded mt-3"
      width="80%"
      height="30px"
      animation-duration="2.5s"
    />
    <content-loader
      class="rounded mt-3"
      width="90%"
      height="30px"
      animation-duration="2.7s"
    />
    <content-loader
      class="rounded mt-3"
      width="70%"
      height="30px"
      animation-duration="2.9s"
    />

  </content-loader>
</template>

<script>
import ContentLoader from '../../components/ContentLoader'

export default {
  components: { ContentLoader }
}
</script>
