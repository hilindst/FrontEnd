Synchronous Coding vs Asynchronous
Callbacks

API: Application Program Interface

//Promises//
const getDetails = new Promise((resolve, reject) => {
  if (.success){
    resolve(someAPIRequest.data);
  }else{
    reject(new Error('API request failed, try again'));
  }
})

//resolve and reject are the structure

//telling it what to do:
getDetails.then((done)=>{
  console.log("We are done here:", done);
}).catch((err) => {
  console.log("Houston, we have a problem:", err);
});

//Async/Await//  less code than promise
then (What do next)  .then((data) => console.log('data: ', data))
catch (for errors)   .catch((err) => console.log('err: ', err))

json: javascript object notation
  const obj = {
    key: 'value',
  }

  EVEN BETTER WAYYY with ASYNC/AWAIT

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