<template>
  <div>
    <div class="justify-content-center align-self-center">
      <h3>Simple Calculator</h3>
    </div>
    <div class="calculator">
        <div class="result">{{current || '0'}}</div>
        <div @click="clear" class="btn">C</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="percent" class="btn">%</div>
        <div @click="divide" class="btn operator">÷</div>
        <div @click="append('7')" class="btn">7</div>
        <div @click="append('8')" class="btn">8</div>
        <div @click="append('9')" class="btn">9</div>
        <div @click="times" class="btn operator">x</div>
        <div @click="append('4')" class="btn">4</div>
        <div @click="append('5')" class="btn">5</div>
        <div @click="append('6')" class="btn">6</div>
        <div @click="minus" class="btn operator">-</div>
        <div @click="append('1')" class="btn">1</div>
        <div @click="append('2')" class="btn">2</div>
        <div @click="append('3')" class="btn">3</div>
        <div @click="add" class="btn operator">+</div>
        <div @click="append('0')" class="btn zero">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="equal" class="btn operator">=</div>
    </div>

    <div class="calculator-table">
      <v-client-table :data="history" :columns="header" :options="options"></v-client-table>
      <div class="btn btn-reset" @click="reset">Reset</div>
    </div>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
import Vue from 'vue';
import { ClientTable } from "vue-tables-2";

Vue.use(ClientTable);

export default {
  name: "CalculatorView",
  components: {
    // Navbar
  },
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
      history: this.getFromStorage(),
      temp: {},
      header: ["1st num", "Operator", "2nd num", "Result"],
      options: {}
    }
  },
  methods: {
    clear() {
      this.current = '';
      this.temp = {};
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ? 
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
      this.temp["1st num"] = this.current;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
      this.temp["Operator"] = "/";
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
      this.temp["Operator"] = "*";
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
      this.temp["Operator"] = "-";
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
      this.temp["Operator"] = '+';
    },
    equal() {
      this.temp["2nd num"] = this.current;
      this.current = `${this.operator(
        parseFloat(this.previous), 
        parseFloat(this.current)
      )}`;

      this.temp["Result"] = this.current;
      this.history.push(this.temp);
      this.previous = null;
      this.temp = {};
      
      localStorage.setItem('calculator', JSON.stringify(this.history));
      console.log(localStorage.getItem('calculator'));
    },
    getFromStorage() {
      let check = JSON.parse(localStorage.getItem('calculator'));
      if (check == undefined || check.length < 1) {
        let temp = [];
        localStorage.setItem('calculator', JSON.stringify(temp));
      }

      this.history = JSON.parse(localStorage.getItem('calculator'));
      return JSON.parse(localStorage.getItem('calculator'));
    },
    reset() {
      this.history = [];
      localStorage.setItem('calculator', JSON.stringify(this.history));
    }
  }
}
</script>
