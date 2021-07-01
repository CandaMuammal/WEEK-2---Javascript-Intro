const getDataPost = (method, url) =>
  new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();
    
        ajax.onreadystatechange = function () {
          if (ajax.status === 200) {
            const data = JSON.parse(ajax.responseText);
            resolve(data);
          } else {
            reject(new Error(`${ajax.status} : Error`));
          }
        };
   
  });

getDataPost("GET", "https://jsonplaceholder.typicode.com/comments")
  .then((res) => {
    res.map((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });