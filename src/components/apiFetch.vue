<template>
  <div class="test">
    <span v-html="title"></span>
    <p>{{user.firstName}}</p>
    <p v-if="showHideTest">Test</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title: '<h1>sample data</h1>',
      user: {
        firstName: 'john',
        lastname: 'johny'
      },
      showHideTest: false
    }
  }
}
</script>

<style scoped>

</style>


