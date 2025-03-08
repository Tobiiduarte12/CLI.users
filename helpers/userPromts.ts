import inquirer from "inquirer";
import { IUser } from "../interfaces/interfaces";

export const newUserPromts = async (): Promise<IUser> => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your user name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Please enter your last name:",
    },
    {
      type: "input",
      name: "age",
      message: "Please enter your age:",
    },
  ]);
};
