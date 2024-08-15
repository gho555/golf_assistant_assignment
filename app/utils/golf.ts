const url = "https://66b357b77fba54a5b7ec89d3.mockapi.io/api/v1/availabilities";

const getGolfCourse = async (location) => {
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  return json;
};

export { getGolfCourse };
