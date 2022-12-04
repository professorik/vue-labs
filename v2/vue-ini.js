document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: "#app",
    data: {
      goods: [
        {
          title: 'Web Development',
          price: 300,
          selected: true,
        },
        {
          title: 'Design',
          price: 400,
          selected: true,
        },
        {
          title: 'Integration',
          price: 250,
          selected: false,
        },
        {
          title: 'Guide',
          price: 220,
          selected: false,
        },
      ],
      price: 0,
    },
    methods: {
      addPrice(value) {
        this.price += value
      },
    },
    created() {
      for (const item of this.goods) {
        let sum = 0
        if (item.selected) {
          sum += item.price
        }
        this.addPrice(sum)
      }
    }
  });
});