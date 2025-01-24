const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const HomePage = async () => {
  await delay(1000);
  return (
    <>
      <h1>e shop</h1>
    </>
  );
};

export default HomePage;
