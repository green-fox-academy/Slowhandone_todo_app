import minimist from 'minimist';
import fs from 'fs';
//import instructionsForUse from './instructionsForUse.js';

const args = minimist(process.argv);

const jsonConent = fs.readFileSync( 'todos.json' )
const jsonTodos = JSON.parse( jsonConent );

jsonTodos[0] = {"name": 'kutyát sétáltatni', "status": false }
jsonTodos[1] = {"name": "tejet venni", "status": false}
jsonTodos[2] = {"name": "megcsinálni a leckét", "status": false}

fs.writeFileSync( 'todos.json', JSON.stringify(jsonTodos))

function printTodoList() {
    if (args.l != undefined) {
        console.log("1 -", jsonTodos[0].name)
        console.log("2 -", jsonTodos[1].name)
        console.log("3 -", jsonTodos[2].name)
    } else if (args.l != -1) {
        console.log('nahát')
    }return
}

printTodoList()


