<script>
import getDb from '../composable/getFinancialStatement'

export default {
  setup() {
    const { expenses, error, load } = getDb()
    load()

    return { expenses, error }
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
    <div class="row flex">
      <div class="col textcenter paginator">
        <h5>Showing the Financial Report of May</h5>
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
    font-size: clamp(10px, 3vw, 20px);

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
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
</style>