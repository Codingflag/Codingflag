Vue.component('modal',{
  template:'#modal-template',
  props:{
    show:{
      type:Boolean,
      required:true,
      twoWay:true
    }
  }
});
new Vue({
  el:'#app',
  data:{
    dispModal:false
  }
});