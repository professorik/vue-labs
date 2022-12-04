Vue.component('card', {
    props: {
        title: String,
        img: String,
        isList: Boolean,
    },
    template: 
 `
<div class="card" :class="[isList ? 'list' : 'tile']">
    <img :src=img alt="img"/>
    {{title}}
</div>
 `,
}); 
