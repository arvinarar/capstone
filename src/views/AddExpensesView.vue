<script>
import { ref } from "vue";
import Datepicker from "vue3-datepicker";
import axios from "axios";

export default {
  setup() {
    const name = ref();
    const type = ref();
    const amount = ref();
    const date = ref(new Date());
    return { name, type, amount, date };
  },
  components: {
    Datepicker,
  },
  methods: {
    async submitExpense() {
      let result = await axios.post("http://localhost:3000/expenses", {
        name: this.name,
        type: this.type,
        date: this.date,
        dateString: this.date.toLocaleDateString(),
        amount: this.amount,
      });
      this.$router.push("/RecentExpenses");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="header textcenter">Add Expenses</h3>
      </div>
    </div>
    <form @submit.prevent="submitExpense">
      <div class="row">
        <div class="col-md-4">
          <label class="form-label">Name: </label>
        </div>
        <div class="col-md-8">
          <input class="form-control" type="text" required v-model="name" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label class="form-label">Type: </label>
        </div>
        <div class="col-md-8">
          <select class="form-select" required v-model="type">
            <option value="Rent">Rent/Bills</option>
            <option value="Food">Food</option>
            <option value="Fare">Commute Fare</option>
            <option value="School">School</option>
            <option value="Misc.">Misc.</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label class="form-label">Amount: </label>
        </div>
        <div class="col-md-8">
          <input class="form-control" type="number" required v-model="amount" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label class="form-label">Date: </label>
        </div>
        <div class="col-md-8">
          <Datepicker required v-model="date" />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-auto">
          <button id="button" type="button" class="btn">
            <RouterLink to="/">Back</RouterLink>
          </button>
        </div>
        <div class="col-auto">
          <button id="button" type="submit" class="btn">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scope>
body {
  min-height: 100vh;
  display: flex;
}

.form-control:focus {
  border-color: #747ab3;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(116, 122, 179, 0.6);
}

.row {
  margin-bottom: 0.5rem;
}

.header {
  margin-bottom: 0.5rem;
}

#button {
  border-radius: 10px;
  border-width: 3px;
  border-color: #394193;
  background-color: #6167a9;
  color: white;
  font-size: clamp(15px, 3vw, 20px);

  &:hover {
    border-color: #6167a9;
    background-color: #394193;
  }
}

a {
  text-decoration: none !important;
  color: white !important;
}
</style>
