export type Currency = "eur" | "usd";

export type Course = {
  id: number;
  name: string;
  value: number;
  currency: "eur" | "usd";
};

export const CoursesAvailable: Course[] = [
  {
    name: "The Tango Structure Bootcamp",
    id: 1,
    value: 99,
    currency: "eur",
  },
  {
    name: "The Tango Musicality Bootcamp",
    id: 2,
    value: 89,
    currency: "eur",
  },
  {
    name: "A few words about Improvisation",
    id: 3,
    value: 0,
    currency: "eur",
  },
  {
    name: "Excercises",
    id: 4,
    value: 49,
    currency: "eur",
  },
];
