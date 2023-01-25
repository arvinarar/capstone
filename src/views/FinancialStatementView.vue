<script setup>
import getDb from "../composable/getFinancialStatement";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "vue-chartjs";
import { onMounted } from "vue";

ChartJS.register(ArcElement, Tooltip);

const { expenses, week1, week2, week3, week4, week5, error, test, load } =
  getDb();

onMounted(() => {
  load();
});

const data = {
  labels: ["Rent/Bills", "Food", "Commute Fare", "School", "Misc."],
  datasets: [
    {
      backgroundColor: ["#472EA3", "#5E3FBE", "#A88DEB", "#E5DAFB", "#F4F0FD"],
      data: [12, 12, 12, 12, 12],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="textcenter">Financial Statement</h2>
      </div>
    </div>
    <div class="row d-none d-md-flex mb-5 paginator justify-content-center">
      <div class="col-auto">
        <button id="button" type="button" class="btn">
          &lt;&lt; Previous Month
        </button>
      </div>
      <div class="col-auto">
        <h5>Showing the Financial Report of May</h5>
      </div>
      <div class="col-auto">
        <button id="button" type="button" class="btn">
          Next Month &#62;&#62;
        </button>
      </div>
    </div>
    <div class="row d-md-none">
      <div class="col textcenter paginator">
        <h5>Showing the Financial Report of May</h5>
      </div>
    </div>
    <div class="row d-md-none d-flex justify-content-between mb-5">
      <div class="col-auto">
        <button id="button" type="button" class="btn">
          &lt;&lt; Previous Month
        </button>
      </div>
      <div class="col-auto">
        <button id="button" type="button" class="btn">
          Next Month &#62;&#62;
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 table-wrapper">
        <table class="table table-striped border textcenter">
          <thead class="sticky-top bg-white">
            <tr class="Theader">
              <th scoped="col">Name</th>
              <th scoped="col">Type</th>
              <th scoped="col">Date</th>
              <th scoped="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.id">
              <th class="maxWidth25">{{ expense.name }}</th>
              <th class="maxWidth25">{{ expense.type }}</th>
              <th class="maxWidth25">{{ expense.dateString }}</th>
              <th class="maxWidth25">{{ expense.amount }}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row mx-auto mt-5">
          <div class="col-auto mx-auto">
            <Pie :data="data" :options="options" />
          </div>
        </div>
        <div class="row mx-auto mt-5 d-flex justify-content-around">
          <div class="col-3">
            <Pie :data="data" :options="options" />
            <p class="textcenter notsoBold">Week1</p>
          </div>
          <div class="col-3">
            <Pie :data="data" :options="options" />
            <p class="textcenter notsoBold">Week2</p>
          </div>
          <div class="col-3">
            <Pie :data="data" :options="options" />
            <p class="textcenter notsoBold">Week3</p>
          </div>
        </div>
        <div class="row mx-auto mt-2 d-flex justify-content-center">
          <div class="col-3 me-5">
            <Pie :data="data" :options="options" />
            <p class="textcenter notsoBold">Week4</p>
          </div>
          <div class="col-3">
            <Pie :data="data" :options="options" />
            <p class="textcenter notsoBold">Week5</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-auto">
        <button id="button" type="button" class="btn textcenter">
          <a href="/">Back to Homepage</a>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
body {
  min-height: 15vh;
  display: block;
}

#button {
  border-radius: 10px;
  border-width: 3px;
  border-color: #394193;
  background-color: #6167a9;
  color: white;
  font-size: clamp(10px, 1.8vw, 15px);

  &:hover {
    border-color: #6167a9;
    background-color: #394193;
  }
}

a {
  text-decoration: none !important;
  color: white !important;
}

.paginator {
  margin-top: 0.5rem;
}

.maxWidth25 {
  max-width: 25vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-wrapper {
  max-height: 80vh;
  overflow: auto;
  display: inline-block;
}

.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #e4e6fb;
}

.Theader {
  background-color: #6167a9;
  color: #ffffff;
  border-width: 2px;
  border-color: black;
}

.table {
  border-width: 2px !important;
  border-color: black !important;

  th {
    border-left-width: 2px !important;
    border-color: black !important;
  }
}

.notsoBold {
  font-weight: 550;
}
</style>
