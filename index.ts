#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.blueBright("\n\t=======> Welcome To Naila Solanki's - CLI Adventure Game <=======\n"));

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt({
  name: "name",
  type: "input",
  message: chalk.bold.yellowBright("\nPlease Enter Your Name:"),
});
let opponent = await inquirer.prompt({
  name: "select",
  type: "list",
  message: chalk.bold.magentaBright("\nPlease Select Your Opponent:"),
  choices: ["Skeleton", "Alien", "Zombie"],
});

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do {
    //Skeleton.
  if (opponent.select == "Skeleton") {
    console.log(
      `\n\t${chalk.bold.greenBright(p1.name)} VS ${chalk.bold.redBright(o1.name)}\n`
    );
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message:chalk.bold.magentaBright("Please Select Your Opponent:"),
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You Loose, Better Luck Next Time:"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.greenBright.bold.italic("You Win:"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time:"));
      process.exit()
    }
  }

  //Alien.
  if (opponent.select == "Alien") {
    console.log(
      `\n\t${chalk.bold.greenBright(p1.name)} VS ${chalk.bold.redBright(o1.name)}\n`
    );
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message:chalk.bold.magentaBright("Please Select Your Opponent:"),
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You Loose, Better Luck Next Time:"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.greenBright.bold.italic("You Win:"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time:"));
      process.exit()
    }
  }

  //Zombie.
  if (opponent.select == "Zombie") {
    console.log(
      `\n\t${chalk.bold.greenBright(p1.name)} VS ${chalk.bold.redBright(o1.name)}\n`
    );
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message:chalk.bold.magentaBright("Please Select Your Opponent:"),
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You Loose, Better Luck Next Time:"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.greenBright.bold.italic("You Win:"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `You Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time:"));
      process.exit()
    }
  }
} while (true);
