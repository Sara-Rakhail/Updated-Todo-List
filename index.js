#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlueBright.italic.bold("\nRakhail Codes WellCome You in Todo List\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.blackBright("Select your option"),
                choices: ["Add Task", "Update Task", "Delete Task", "View Todo List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo List") {
            await veiwTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//for adding new task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.italic.green("Enter your new task"),
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Your task has been added successfully\n`);
};
//to view all todo list tasks
let veiwTask = () => {
    console.log("\n Your Todo list\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Delete task from the list
let deleteTask = async () => {
    await veiwTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.bgRed("Enter Index number of task to delete:"),
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} Task has been deleted\n`);
};
//to update your task
let updateTask = async () => {
    await veiwTask();
    let update_Task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.bgMagentaBright("Enter the index number of the task you want to update"),
        },
        {
            name: "new_Task",
            type: "input",
            message: chalk.italic.yellow("Enter your new task:"),
        }
    ]);
    todoList[update_Task_index.index - 1] = update_Task_index.new_Task;
    console.log(`\n Task at index number ${update_Task_index.index - 1} updated successfully[Check "view Todo List"]\n`);
};
main();
