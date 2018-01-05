<template>
  <div class="apiFetch">
    <h2>{{title}}</h2>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="name">
      <input type="text" v-model="newUser.email" placeholder="email">
      <input type="submit" value="submit">
    </form>
    <ul>
      <li v-for="user in users">
        {{user.name}}: {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'apiFetch',
  data() {
    return {
      title: "Api Fetching Test",
      newUser: {},
      users: [
        { name: "john doe", email:"johndoe@gmail.com" , contacted: false},
        { name: "foobar", email:"foebar@gmail.com" , contacted: false},
        { name: "bar", email:"bar@gmail.com" , contacted: false}
      ]
    }
  },
  methods: {
    addUser: function(e){
      console.log("add");
      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>


