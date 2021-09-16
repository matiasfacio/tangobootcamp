export type Video = {
  name: string;
  id?: number;
  url?: string;
  snippet?: string;
  description?: string;
};

let nextId = 1;

export const VideosPreview: Video[] = [
  {
    name: "Improvisation",
    id: 1,
    url: "https://vimeo.com/583806355",
    snippet: "Introduction to Improvisation in Tango",
    description: "So much going on!",
  },
  {
    name: "The Tango Structure BootCamp",
    id: 2,
    url: "https://vimeo.com/313714047",
    snippet: "What will you learn.",
    description: "This is a small preview of what wer are going to be working!",
  },
  {
    name: "The Tango Musicality BootCamp",
    id: 3,
    url: "https://vimeo.com/294424954",
    snippet: "What will you learn.",
    description:
      "Dancing to tango music is not the same than knowing about musical theory.",
  },
  {
    name: "Exercises",
    id: 4,
    url: "https://vimeo.com/214391023",
    snippet: "What will you learn.",
    description:
      "Many useful exercises to improve your tango technique. This package will be updated continuosly!",
  },
];

export const Improvisation: Video[] = [
  {
    name: "Introduction",
    id: 1,
    url: "https://vimeo.com/583806355",
    snippet: "Introduction to Improvisation in Tango",
    description: "So much going on!",
  },
  {
    name: "Facing the unknown",
    id: 2,
    url: "https://vimeo.com/583814684",
    snippet: "Intoduction to Improvisation in Tango",
    description: "So much going on!",
  },
  {
    name: "State of Improvisation",
    id: 3,
    url: "https://vimeo.com/583804568",
    snippet: "Intoduction to Improvisation in Tango",
    description: "So much going on!",
  },
];

export const videoList: Video[] = [
  {
    name: "El Abrazo",
    id: nextId++,
    url: "https://vimeo.com/313714047",
    snippet: "Another point of view of the Tango embrace",
    description:
      "There are two clear positions in tango, open step or apertura and crossed step or cruce",
  },
  {
    name: "Positions",
    id: nextId++,
    url: "https://vimeo.com/294424954",
    snippet: "What are the possible positions in Tango ?",
    description:
      "We have, from the leader point of view, two clear directions of how the follower moves. Either does the follower moves to our right or she does move to our left side of the embrace",
  },
  { name: "Directions", id: nextId++ },
  { name: "Examples", id: nextId++ },
  { name: "The cross", id: nextId++ },
  {
    name: "Crossed and Parallel System",
    id: nextId++,
    url: "https://vimeo.com/214391023",
    snippet: "Crossed System and Parallel System",
  },
  { name: "Basic figures", id: nextId++ },
  { name: "Giros / Turns", id: nextId++ },
  { name: "Giros / Turns fun facts", id: nextId++ },
  { name: "Exercises", id: nextId++ },
  { name: "Changes of direction", id: nextId++ },
  { name: "Changes of direction: ochos", id: nextId++ },
  { name: "Changes of direction: rebound", id: nextId++ },
  { name: "Changes of direction: alteration", id: nextId++ },
  { name: "Exercises", id: nextId++ },
  { name: "A favor", id: nextId++ },
  { name: "En contra", id: nextId++ },
  { name: "Exercises", id: nextId++ },
  { name: "Analysis of the structure of known elements", id: nextId++ },
  { name: "Ochos", id: nextId++ },
  { name: "Over turned ochos", id: nextId++ },
  { name: "Entradas", id: nextId++ },
  { name: "Sacadas", id: nextId++ },
  { name: "Sacadas with rebounds", id: nextId++ },
  { name: "Forth Sacada", id: nextId++ },
  { name: "Exercises", id: nextId++ },
  { name: "Voleos en contra", id: nextId++ },
  { name: "Voleos a favor", id: nextId++ },
  { name: "Voleos", id: nextId++ },
  { name: "Linear Voleo", id: nextId++ },
  { name: "Hips rebound", id: nextId++ },
  { name: "Short Voleos", id: nextId++ },
  { name: "Low Voleos", id: nextId++ },
  { name: "Exercises", id: nextId++ },
  { name: "Ganchos en contra", id: nextId++ },
  { name: "Ganchos a favor", id: nextId++ },
  { name: "Leg wraps", id: nextId++ },
  { name: "Piernazos or high ganchos", id: nextId++ },
  { name: "Exercises", id: nextId++ },
  { name: "An elastic embrace", id: nextId++ },
  { name: "Volcadas", id: nextId++ },
  { name: "Colgadas", id: nextId++ },
  { name: "Elasticos", id: nextId++ },
];

const CoursesId = [
  {
    id: "1",
    videoList: videoList,
  },
  {
    id: "3",
    videoList: Improvisation,
  },
];

export const delay = (timeInMiliSeconds: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, timeInMiliSeconds);
  });

const apiDelay = 1000;

export const VideoApi = {
  loadAllVideos: async (id: string): Promise<Video[]> => {
    await delay(apiDelay);
    const list = CoursesId.find((course) => course.id === id);
    return list.videoList;
  },
  loadVideo: async (request: string): Promise<Video[]> => {
    await delay(apiDelay);
    const requestedVideoName: Video[] = videoList.filter(
      (video) => video.name === request
    );
    return requestedVideoName;
  },
  loadPreview: (request: number): Video => {
    const requestPreviewVideo: Video[] = VideosPreview.filter(
      (video) => video.id === request
    );
    return requestPreviewVideo[0];
  },
};
