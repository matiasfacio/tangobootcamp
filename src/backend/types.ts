export type Currency = "eur" | "usd";

export type Course = {
  id: number;
  name: string;
  value: number;
  discount: number;
  currency: "eur" | "usd";
  picture?: string;
};

export const CoursesAvailable: Course[] = [
  {
    name: "The Tango Structure Bootcamp",
    id: 1,
    value: 99,
    discount: 9.9,
    currency: "eur",
    picture: "structure",
  },
  {
    name: "The Tango Musicality Bootcamp",
    id: 2,
    value: 89,
    discount: 0,
    currency: "eur",
    picture: "musicality",
  },
  {
    name: "A few words about Improvisation",
    id: 3,
    value: 0,
    discount: 0,
    currency: "eur",
    picture: "talkimprovisation",
  },
  {
    name: "Excercises",
    id: 4,
    value: 49,
    discount: 0,
    currency: "eur",
    picture: "exercises",
  },
];
