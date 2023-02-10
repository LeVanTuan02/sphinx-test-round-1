import httpRequest from "./utils/httpRequest";

const race = async (horses) => {
  // making ajax request to json files
  const res = await Promise.all(horses.map((horse) => httpRequest.get(horse.url)));

  // sort response => get ajax request finished first
  res.sort((prev, next) => prev.duration - next.duration);
  const firstRes = res.shift();
  const reqUrl = firstRes.request.responseURL.slice(firstRes.request.responseURL.indexOf("horses"));
  const winnerHorse = horses.find((horse) => horse.url === reqUrl);

  return {
    name: winnerHorse.name,
    image: firstRes.data.image,
  };
};

export default race;
