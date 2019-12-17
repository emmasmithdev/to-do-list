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
      newThingToDo: {name: "", highPriority: null}
    },
    methods: {
      saveNewThingToDo: function(){
        let newToDoObject= {name: this.newThingToDo.name, highPriority: this.newThingToDo.highPriority}
        this.thingsToDo.push(newToDoObject)
        this.newThingToDo = {name: "", highPriority: null}
      },
      makeHighPriority: function(index){
        this.thingsToDo[index].highPriority = true
      }
    }
  });
});
