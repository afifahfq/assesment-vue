<template>
    <div>
      <b-navbar toggleable="lg" type="light">
        <div class="container">
          <b-navbar-brand href="#">Assesment Vue</b-navbar-brand>
  
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/calculator">Calculator</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/people">People</router-link>
              </li>
            </b-navbar-nav>

          </b-collapse>
        </div>
      </b-navbar>
    </div>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
    };
  },
  props: [],
  methods: {
  },
  mounted() {
  },
};
</script>
  