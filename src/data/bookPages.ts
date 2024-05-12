interface BookPagesType {
  id: number;
  title: string;
  author: string;
  content: string;
}

//TODO: Az id fontos, hogy egyesével növekvő természetes szám legyen 1-től

export const bookPages: BookPagesType[] = [
  {
    id: 1,
    author: "Teszt Elek",
    title: "A kódolás",
    content: "Kódolok javában, de ez nem JAVA...",
  },
  {
    id: 2,
    author: "Kis Kornél",
    title: "A dekódolás",
    content: "Kódolok javában, de ez nem JAVA...",
  },
  {
    id: 3,
    author: "Jákob Géza",
    title: "Hibajavítás",
    content: "Kódolok javában, de ez nem JAVA...",
  },
];
