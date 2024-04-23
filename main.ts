#! /usr/bin/env node

// Importing inquirer & chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorfull Wellcome messege
console.log(chalk.italic.blueBright("\n \t\t'Word Counter'"));
console.log("=" .repeat(50));

// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence"
    },
])

// Triming the sentence and splitting it into words based on 'spaces'
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("\n \t-Sentence words");
console.log(words);
console.log(` \n -Word count: ${chalk.bold (words.length)}`);





