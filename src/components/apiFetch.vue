<template>
  <div class="test">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title: 'Sample API Fetch',
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


