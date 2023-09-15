async function asyncBoredAPI() {
  try {
    const data = await fetch("http://www.boredapi.com/api/activity/");
    const res = await data.json()
    console.log("Async/await: ", res);
  } catch (err) {
    console.log("error: ", err);
  }
}
asyncBoredAPI();