<template>
  <div class="test">
    <input type="text" v-model="test2">
    <span v-html="title"></span>
    <p>{{user.firstName}}</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <p v-if="showHideTest">Test 1</p>
    <p v-else>{{test2}}</p>
    <button v-on:click="greet('hello world')">say greeting</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title: '<h1>sample data</h1>',
      test2: '',
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
  },
  methods: {
    greet: function(greeting){
      alert(greeting);
    }
  }
}
</script>

<style scoped>

</style>


