Vue.component('editable-label', {
    props: {
        initValue: String,
    },
    data: function(){
        return {
            show: false,
            value: this.initValue,
        }
    },
    methods:{
        toggle: function(){
            this.show = !this.show;
        },
    },
    template: 
 `<div>
    <div class="edit" v-show="show">
        <input type="text" v-model="value"/>
    </div>
    <div class="label">
        <button v-on:click="toggle">&#128393</button>
        <p>{{value}}</p>
    </div>
 </div>
 `,
}); 
