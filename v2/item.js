Vue.component('item', {
    props: {
        uncolored: Boolean,
        title: String,
        price: Number,
        sel: Boolean,
    },
    computed:{
        getPrice: function() {
            return this.price.toFixed(2);
        },
    },
    data: function(){
        return {
            selected: this.sel,
        }
    },
    methods:{
        toggle: function(){
            this.selected = !this.selected;
            this.$emit('update-cart', this.price*(2*Number(this.selected)-1))
        }
    },
    template: 
 `
<div>
    <div class="item" v-on:click="toggle" :class="{red:!selected, bgr:uncolored}">
        <p>{{title}}</p>
        <p>$ {{getPrice}}</p>
    </div>
</div>
 `,
});
