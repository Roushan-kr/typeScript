// const name =[] // parimater of type naver
// const name:[]=[] // parimater of type naver with empty array
const name: string[] = []; // parimater of type string array
const power: Array<number> = []; // parimater of type string array

name.push("name");
power.push(2, 6, 8);

// using it with obj intf
type User = {
  readonly _id: number;
  name: string;
  email: string;
  CTC?: number;
  role: string[];
};

const allUser: User[] = [];
allUser.push(
  { name: "rj", email: "", _id: 1515, role: ["sales"] },
  { name: "dj", email: "", _id: 55151, role: ["management"] }
);

// using multiDimensional array

const MlModel: number[][] = [
  [255, 25, 255],
  [15, 18, 26],
]; // num array alowed

const rOnlyArr: readonly string[] = ["",""];

export {};
