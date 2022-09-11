<template>
    <div class="card shadow card-people">
        <div v-for="person in people" :key="person.id" class="card" style="width: 18rem;">
            <img :src=person.avatar class="card-img-top" alt="Avatar">
            <div class="card-body">
                <h5 class="card-title">{{person.first_name}} {{person.last_name}}</h5>
                <p class="card-text">You can contact {{person.first_name}} at
                    <a  :href="'mailto:' + person.email" target="_blank" rel="noopener">{{person.email}}</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PeopleCard",
  data() {
    return {
    };
  },
  props: ["people"],
  methods: {
  },
  mounted() {
  },
};
</script>

<style>
</style>