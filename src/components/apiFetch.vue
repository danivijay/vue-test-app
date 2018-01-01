<template>
  <div class="test">
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title: 'sample data',
      user: {
        firstName: 'john',
        lastname: 'johny'
      }
    }
  }
}
</script>

<style scoped>

</style>


