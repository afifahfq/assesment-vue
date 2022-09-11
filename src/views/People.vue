<template>
    <div class="people">
      <h3>People</h3>
      <p>Here are some faces which helped develop this website.</p>
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
  created() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(response => {
        this.people = response.data.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  mounted() {
  },
};
</script>