import fs from "fs";
import { IUser } from "../interfaces/interfaces";

export const getWithFS = async (file: string): Promise<IUser[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${file}.JSON`, "utf8", (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(content));
    });
  });
};

export const saveWithFS = (file: string, content: IUser[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${file}.JSON`, JSON.stringify(content), (err) => {
      if (err) {
        reject(err);
      }
      resolve(console.log(`User saved`));
    });
  });
};
