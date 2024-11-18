// src/frontend/components/OrderList.vue
<template>
  <div class="order-list">
    <h1>我的订单</h1>
    <OrderTable :orders="orders" />
  </div>
</template>

<script>
import apiClient from '../config/api';
import OrderTable from './OrderTable.vue';

export default {
  name: "OrderList",
  components: { OrderTable },
  data() {
    return {
      orders: []
    };
  },
  created() {
    apiClient.get('/orders')
        .then(response => {
          this.orders = response.data;
        })
        .catch(error => {
          console.error("Error fetching orders:", error);
        });
  }
};
</script>
