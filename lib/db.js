export const user = [
  {
    id: 1,
    name: "Talha",
    age: 22,
  },
  {
    id: 2,
    name: "Emon",
    age: 16,
  },
  {
    id: 3,
    name: "Omi",
    age: 21,
  },
  {
    id: 4,
    name: "Saima",
    age: 20,
  },
];

const { DB_USER, DB_PASS } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  DB_USER +
  ":" +
  DB_PASS +
  "@cluster0.zwyhda7.mongodb.net/Profile?retryWrites=true&w=majority";
