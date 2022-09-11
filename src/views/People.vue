<template>
    <div class="people">
      <h1>People</h1>
      <PeopleCard :people="people" />
    </div>
</template>

<script>
import axios from "axios";
import PeopleCard from "@/components/PeopleCard.vue";

export default {
  name: "PeopleView",
  components: {
    PeopleCard
},
  data() {
    return {
      people: null,
      loading: true,
      errored: false
    };
  },
  methods: {
  },
  mounted() {
    window.addEventListener('load', () => {
      axios
      .get("https://reqres.in/api/users?page=1")
      .then(response => {
        this.people = response.data.data;
        console.log(this.people);
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    })
  },
};
</script>