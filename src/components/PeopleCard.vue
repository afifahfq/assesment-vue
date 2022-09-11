<template>
    <div class="card shadow card-people">
        <!-- <div v-for="person in people">
            <div class="card-body">
                <h5 class="card-title">{{ person.first_name }}</h5>
                <p
                class="card-text"
                >Harga : Rp. {{ person.email }}</p>
                <router-link class="btn btn-success" :to="'/foods/'+people.id"><b-icon-cart></b-icon-cart> Pesan</router-link>
            </div>
            {{ person.id }}:
            <span class="lighten">
                <span v-html="person.email"></span>{{ person.first_name | '' }}
            </span>
        </div> -->
        <div v-for="person in people" :key="person" class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <img :src=person.avatar class="card-img-top" alt="Avatar">
            <div class="card-body">
                <h5 class="card-title">{{person.first_name}} {{person.last_name}}</h5>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </p> -->
                <p class="card-text">You can contact {{person.first_name}} at
                    <a :href="person.email" target="_blank" rel="noopener">{{person.email}}</a>.
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