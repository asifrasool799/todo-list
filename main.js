#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let operations = await inquirer.prompt([
        {
            name: "todolist",
            type: "list",
            message: "select one",
            choices: ["Add task", "View task", "Remove task"]
        }
    ]);
    if (operations.todolist === "Add task") {
        let Addtask = await inquirer.prompt([
            {
                name: 'todo',
                type: 'input',
                message: "What you want to add in your Todos?"
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: "Do you want to add more ?",
                default: "false"
            }
        ]);
        todos.push(Addtask.todo);
        condition = Addtask.addMore;
        console.log(todos);
    }
    else if (operations.todolist === "View task") {
        console.log(todos);
    }
    else if (operations.todolist === "Remove task") {
        let Removetask = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "Select task to remove",
                choices: todos.map((item) => item),
            }
        ]);
        let newtodos = todos.filter((val) => val !== Removetask.todo);
        todos = [...newtodos];
        console.log(todos);
    }
}
;
