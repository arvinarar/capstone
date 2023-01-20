<script>
import { ref } from "vue"

export default {
    setup() {
        const name = ref();
        const type = ref();
        const amount = ref();
        return { name, type, amount }
    },
    methods: {
        submitExpense() {
            console.log("Submitted")
            this.$router.push("/RecentExpenses")
        }
    }
}
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
                    <input class="form-control" type="text" required v-model="name">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="form-label">Type: </label>
                </div>
                <div class="col-md-8">
                    <select class="form-select" required v-model="type">
                        <option value="Rent">Rent</option>
                        <option value="Food">Food</option>
                        <option value="Misc.">Misc</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="form-label">Amount: </label>
                </div>
                <div class="col-md-8">
                    <input class="form-control" type="number" required v-model="amount">
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <button id="button" type="submit" class="btn">
                        Add
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scope>
  .form-control:focus {
    border-color: #747AB3;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(116, 122, 179, 0.6);
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
    background-color: #6167A9;
    color: white;
    font-size: clamp(15px, 3vw, 20px);

    &:hover {
      border-color: #6167A9;
      background-color: #394193;
    }
  }

  a {
    text-decoration: none !important;
    color: white !important;
  }
</style>