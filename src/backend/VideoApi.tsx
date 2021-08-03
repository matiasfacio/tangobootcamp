export type Video = {
  name: string;
  id?: number;
  url?: string;
  snippet?: string;
  description?: string;
};

let nextId = 0;

export const videoList: Video[] = [
  {
    name: "Positions",
    id: nextId++,
    url: "https://vimeo.com/313714047",
    snippet: "What are the positions in Tango ?",
    description:
      "There are two clear positions in tango, open step or apertura and crossed step or cruce",
  },
  {
    name: "Directions",
    id: nextId++,
    url: "https://vimeo.com/294424954",
    snippet: "What are the possible directions in Tango ?",
    description:
      "We have, from the leader point of view, two clear directions of how the follower moves. Either does the follower moves to our right or she does move to our left side of the embrace",
  },
  { name: "Walk", id: nextId++ },
  { name: "Systems", id: nextId++ },
  { name: "Cross", id: nextId++ },
  { name: "Volcada", id: nextId++ },
  {
    name: "Giro",
    id: nextId++,
    url: "https://vimeo.com/214391023",
    snippet: "Fundamental Structure of Tango Dance",
  },
  { name: "Lines", id: nextId++ },
  { name: "Circles", id: nextId++ },
  { name: "Ochos", id: nextId++ },
  { name: "Sacadas", id: nextId++ },
  { name: "Boleos", id: nextId++ },
  { name: "Barridas", id: nextId++ },
  { name: "Ganchos", id: nextId++ },
  { name: "Linear Boleos", id: nextId++ },
  { name: "Forth Sacada", id: nextId++ },
  { name: "Short Boleos", id: nextId++ },
  { name: "Entradas", id: nextId++ },
  { name: "Entradas or Sacadas", id: nextId++ },
  { name: "UserArea", id: 99, url: "https://vimeo.com/581727033" },
];

export const delay = (timeInMiliSeconds: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, timeInMiliSeconds);
  });

const apiDelay = 1000;

export const VideoApi = {
  loadAllVideos: async (): Promise<Video[]> => {
    await delay(apiDelay);
    return videoList;
  },
  loadVideo: async (request: string): Promise<Video[]> => {
    await delay(apiDelay);
    const requestedVideoName: Video[] = videoList.filter(
      (video) => video.name === request
    );
    return requestedVideoName;
  },
};
