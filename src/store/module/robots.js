// import axios from 'axios';

export default {
  // namespace: true,
  state:{
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
  // actions: {
  //   getParts({commit}){
  //     axios.get('http://localhost:8081/api/parts');
  //   }
  // },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    }
  },
}
