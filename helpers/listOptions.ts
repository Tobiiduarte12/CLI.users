import { getWithFS, saveWithFS } from "./fsMethods";
import { newUserPromts } from "./userPromts";

export const seeAllUser = async () => {
  const currentUsers = await getWithFS("users");

  console.log(currentUsers);
};

export const createNewUser = async () => {
  const newUserData = await newUserPromts();

  const currentUsers = await getWithFS("users");

  currentUsers.push(newUserData);

  await saveWithFS("users", currentUsers);
};
