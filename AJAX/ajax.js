const sendData = document.getElementById("sendData");
const getData = document.getElementById("getData");

// XMlHttpRequest: AJAX

// common send request function 
function sendRequest(method, url, data) {
  const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("content-type","application/json")
    xhr.send(data);
    xhr.onload = function () {
        if(xhr.status>=400){
        reject("Something is wrong",);

        }
        else{
            resolve(xhr.response);
        }
     
    };
    xhr.onerror=function () { 
        reject(xhr.response);
    }
  });
  return promise;
}
// get data
const get = function () {
  const url = `https://jsonplaceholder.typicode.com/posts
`;
  sendRequest("GET", url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
// send
const send = function () {
  const url = `https://jsonplaceholder.typicode.com/posts
    `;
  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  sendRequest("POST", url, JSON.stringify(data))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
// event listener
sendData.addEventListener("click", send);
getData.addEventListener("click", get);
