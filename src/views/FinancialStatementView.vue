<script>
import getDb from '../composable/getFinancialStatement'

export default {
  setup() {
    const { expenses, week1, week2, week3, week4, week5, error, load } = getDb()
    load()

    return { expenses, week1, week2, week3, week4, week5, error }
  }
}
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
        <button id="button" type="button" class="btn">&lt;&lt; Previous Month</button>
      </div>
      <div class="col-auto">
        <h5>Showing the Financial Report of May</h5>
      </div>
      <div class="col-auto"> <button id="button" type="button" class="btn">Next Month &#62;&#62;</button></div>
    </div>
    <div class="row d-md-none">
      <div class="col textcenter paginator">
        <h5>Showing the Financial Report of May</h5>
      </div>
    </div>
    <div class="row d-md-none d-flex justify-content-between mb-5">
      <div class="col-auto">
        <button id="button" type="button" class="btn">&lt;&lt; Previous Month</button>
      </div>
      <div class="col-auto">
        <button id="button" type="button" class="btn">Next Month &#62;&#62;</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 table-wrapper">
        <table class="table table-striped border textcenter">
        <thead class="sticky-top bg-white">
          <tr>
            <th scoped="col">Name</th>
            <th scoped="col">Type</th>
            <th scoped="col">Date</th>
            <th scoped="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="expense in expenses" :key="expense.id">
            <th class="maxWidth25">{{ expense.name }}</th>
            <th class="maxWidth25">{{ expense.type }}</th>
            <th class="maxWidth25">{{ expense.dateString }}</th>
            <th class="maxWidth25">{{ expense.amount }}</th>
          </tr>
        </tbody>
      </table>
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
    background-color: #6167A9;
    color: white;
    font-size: clamp(10px, 1.8vw, 15px);

    &:hover {
      border-color: #6167A9;
      background-color: #394193;
    }
  }

  a {
    text-decoration: none !important;
    color: white !important;
  }

  .paginator {
    margin-top: .5rem;
  }

  .maxWidth25{
    max-width: 25vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .table-wrapper {
    max-height: 80vh;
    overflow: auto;
    display:inline-block;
  }
</style>