<template>
    <div class="home">
      <div class="container">
        <Landing />
      </div>
    </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
// import PeopleCard from "@/components/PeopleCard.vue";
import axios from "axios";
import Landing from "@/components/Landing.vue";

export default {
  name: "HomeView",
  components: {
  // Navbar,
  Landing
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
  