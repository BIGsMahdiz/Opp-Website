const fetchData = async () => {
  const response = await fetch("data.json");
  const json = response.json();
  return json;
};

export { fetchData };
