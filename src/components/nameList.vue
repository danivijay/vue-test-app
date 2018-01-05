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
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterPress">
    <hr />
    <input type="text" v-model="user.firstName">
    <input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title: '<h1><a href="./api">Sample Usages</a></h1>',
      test2: '',
      user: {
        firstName: 'john',
        lastName: 'johny'
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
    },
    pressKey: function(e) {
      console.log(e.target.value);
    },
    enterPress: function(){
      console.log('enterhit');
    }
  },
  computed: {
    fullName: function() {
      return this.user.firstName + ' ' + this.user.lastName;
    }
  }
}
</script>

<style scoped>

</style>



