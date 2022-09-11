<template>
    <div class="about">
      <h1>This is an about page edit</h1>
    </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {
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
  },
};
</script>