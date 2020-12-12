import minimist from 'minimist';
import fs from 'fs';

const args = minimist(process.argv);

const jsonConent = fs.readFileSync('emptyTodo.json')
const jsonTodos = JSON.parse( jsonConent );

function printEmptyList(text = undefined) {
    if ( args.l != undefined) {
        console.log('Nincs mára tennivalód')
    }
}

printEmptyList()