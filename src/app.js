import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      thingsToDo: [
        {name: "hoover", highPriority: true},
        {name: "feed cats", highPriority: true},
        {name: "wash car", highPriority: false}
      ],
      newThingToDo: "",
      newPriority: false
    },
    methods: {
      saveNewThingToDo: function(){
        let newToDoObject= {name: this.newThingToDo, highPriority: this.newPriority}
        this.thingsToDo.push(newToDoObject)
        this.newThingToDo = ""
        this.newPriority = false
      },
      makeHighPriority: function(index){
        this.thingsToDo[index].highPriority = true
      }
    }
  });
});
