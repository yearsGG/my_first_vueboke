<!-- src/views/OrderPage.vue -->
<template>
  <div>
    <h2>我的订单</h2>
    <OrderTable :orders="orders" />
  </div>
</template>


<script>
// src/views/OrderPage.vue
import apiClient from '../config/api';
import OrderTable from '../components/OrderTable.vue';

export default {
  components: { OrderTable },
  data() {
    return {
      orders: [],
    };
  },
  created() {
    apiClient.get('/orders')
        .then(response => {
          console.log("Fetched orders:", response.data);
          this.orders = response.data;
        })
        .catch(error => {
          console.error("Error fetching orders:", error);
        });
  },
};

</script>

