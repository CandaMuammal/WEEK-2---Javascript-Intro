const getDataApi = (url) =>{    
    fetch(url)
	.then((response) => {
		if(response.status != 200) {
			console.log('Oops! Server Error ' + response.status)
			return
		}
		response.json()
		.then((data) => {
			data.map((item) => {
			console.log(item.name)
			})
		})
	})
}

getDataApi('https://jsonplaceholder.typicode.com/usrs')
