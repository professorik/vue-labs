Vue.component('navbar', {
    data: function(){
        return {
            showList: false,
        }
    },
    methods:{
        toggle: function(){
            this.showList = !this.showList;
            this.$emit('input', this.showList)
        }
    },
    template: 
 `
<div class="navbar">
    <input type="image" 
        src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" 
        alt="List"
        @click="toggle"
        :class="[showList ? 'active' : '']"
    /> 
    <input type="image" 
        src="https://cdn-icons-png.flaticon.com/512/17/17620.png" 
        alt="Tiles"
        @click="toggle"
        :class="[!showList ? 'active' : '']"
    />  
</div>
 `,
}); 
