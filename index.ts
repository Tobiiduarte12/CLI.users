import inquirer from "inquirer";
import { createNewUser, seeAllUser } from "./helpers/listOptions";

const main = async () => {
  let run = true;

  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosenItem",
        message: "choose an option",
        choices: [
          {
            value: 1,
            name: "See all users",
          },
          {
            value: 2,
            name: "Create new user",
          },
          {
            value: 99,
            name: "Exit",
          },
        ],
      },
    ]);

    switch (action.chosenItem) {
      case 1:
        await seeAllUser();
        break;
      case 2:
        await createNewUser();
        break;
      case 99:
        run = false;
        break;
      default:
        console.log("default");
    }
  }
};

main();
