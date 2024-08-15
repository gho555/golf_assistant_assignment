const url = "https://66b357b77fba54a5b7ec89d3.mockapi.io/api/v1/availabilities";

const getGolfCourse = async (location) => {
  const res = await fetch(url);
  const json = await res.json();
  let result = new Array(...json)
    .filter(
      (val) => val.tags.includes("18holes") && (val.min ? val.min == 1 : true)
    )
    .map((val) => {
      return {
        name: val.name,
        price: val.price,
        datetime: val.start,
        tags: val.tags,
      };
    });
  return result;
};

export { getGolfCourse };
