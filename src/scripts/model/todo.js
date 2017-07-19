
let lastId = 0;

export class Todo {

     constructor (txt) {
         this.txt = txt;
         this.done = false;
         this.id = ++lastId;
     }

}
