export const GET = async (URL) => {
  const res = await fetch(URL);
  const data = res.json();

  return data;
};
