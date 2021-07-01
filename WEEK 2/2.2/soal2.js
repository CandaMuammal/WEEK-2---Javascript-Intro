const getMonth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		if (!error) {
			callback(month)
		} else {
			callback(null)
		}
	}, 4000)
}

const callback = (month) => {
  if (month) {
 	 month.map((item) => {
		console.log(item)
   })
  } else {
    console.log("data not found");
  }
};
getMonth(callback);

