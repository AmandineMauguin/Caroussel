app.component("carousel", {
  template: `<button @click="addCount()">{{count}}</button><transition name="fade"><img :src="showImg()"/></transition>`,

  props: {
    liste: {
      type: Array,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    setInterval(this.addCount, 5000);
  },
  methods: {
    slideShow() {
      
    },
    showImg() {
      while (this.count < 0) {
        this.count += this.liste.length;
      }
      while (this.count > this.liste.length - 1) {
        this.count -= this.liste.length;
      }
      return this.liste[this.count];
    },

    addCount() {
      this.count++;
    },
  },
  


  
});

