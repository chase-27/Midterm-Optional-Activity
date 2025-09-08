<template>
  <div id="app">
    <h1>My Items</h1>
    <ul>
      <li v-for="i in items" :key="i.id">{{ i.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    fetch("http://localhost:3000/api/items")
      .then(r => r.json())
      .then(d => {
        this.items = d
      })
  }
}
</script>

<style>
#app {
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
  background-color: #f9f9f9;
}

h1 {
  font-size: 20px;
  color: blue;
}

ul {
  list-style-type: square;
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
  color: darkgreen;
  font-family: Arial, sans-serif;
}
</style>
