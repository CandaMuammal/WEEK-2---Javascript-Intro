
// const ajax = new XMLHttpRequest()
// ajax.open('GET','https://jsonplaceholder.typicode.com/posts' )
// ajax.send()
// ajax.onreadystatechange = function(){
//     const data = JSON.parse(ajax.responseText)
//     console.log(data);
// }

// const ajax = new XMLHttpRequest()
// ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// ajax.send()
// ajax.onreadystatechange = function(){
//   const data = JSON.parse(ajax.responseText)
//   console.log(data);
// }

// const getDataPost = (method, url, callback)
  
const getDataPost = (method, url,  callback) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();
  
    ajax.onreadystatechange = function () {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        callback(data);
      } else {
        console.log("Error");
      }
    };
};

const showData = (data) => {
    data.map((item) => {
        console.log(item.title);
    });
};
  
getDataPost("GET" ,"https://jsonplaceholder.typicode.com/posts", showData)
