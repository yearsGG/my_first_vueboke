<!--OrderTable.vue-->
<template>
  <div class="order-table">
    <table v-if="orders.length">
      <thead>
      <tr>
        <th>订单号</th>
        <th>周期</th>
        <th>订单金额</th>
        <th>订单状态</th>
        <th>创建时间</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.period }}</td>
        <td>{{ order.amount }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.createdAt }}</td>
      </tr>
      </tbody>
    </table>
    <EmptyState v-else />
  </div>
</template>


<script>
import EmptyState from './EmptyState.vue';

export default {
  name: "OrderTable",
  components: { EmptyState },
  props: {
    orders: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.order-table table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 14px;
}

.order-table th, .order-table td {
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.order-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

tbody tr:hover {
  background-color: #f9f9f9;
}
</style>
