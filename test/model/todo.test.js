import { Todo } from 'model/todo';

describe('Todo model', () => {

    it('is initializable ...', () => {

        const todo = new Todo('Demo');

        expect(true).to.be.true;

    });

});
