<template>
  <div class="test">
    <span v-html="title"></span>
    <p>{{user.firstName}}</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <p v-if="showHideTest">Test 1</p>
    <p v-else>Test 2</p>
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
      showHideTest: false,
      items: [
        {title: 'item 1'},
        {title: 'item 2'},
        {title: 'item 3'}
      ]
    }
  }
}
</script>

<style scoped>

</style>


