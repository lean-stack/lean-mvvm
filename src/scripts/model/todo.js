
let lastId = 0;

class Todo {

     constructor (txt) {
         this.txt = txt;
         this.done = false;
         this.id = ++lastId;
     }

    }
