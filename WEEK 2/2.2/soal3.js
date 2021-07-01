// let valueSelection = (value1, value2, arrayData) => {
// 	return new Promise((resolve, reject) => {
//     if (typeof value1 !== "number" || typeof value2 !== "number") {
//       reject(new Error("Input Must be a Number!"));

//     } else if (value1 > value2) {
//       reject(new Error("Value2 Must be Bigger than Value1!"));

//     } else if (arrayData.length < 5) {
//       reject(new Error("arrayData Limit is 5!")); 

//     } else {
//       const pickArr = [];
//       arrayData.map((data) => {
//       if (data > value1 && data < value2) {
//         pickArr.push(data);
//       }
//       });
//       resolve(
//         pickArr.length > 0 ? pickArr.sort((a,b) => a-b) : "No Data Found!"
//       );

//       }
// 	})
// }
  
// valueSelection(1, 20.5, [-3, 0, 4, 9])
// .then((res) => {
// 	console.log(res)
// 	})
// .catch((err) => {
// 	console.log(err.message)
// 	})

// // const valueSelections = async (value1, value2, arrayData) => {
// // 	try {
// // 		const data = await valueSelection(value1, value2, arrayData)
// // 		console.log(data);
// // 	} catch (err) {
// // 		console.log(err.message);
// // 	}
// // }
// // valueSelections(1, -7, [-5, -2, 0, 1, 7, 18])


const simpleCalculator = (value1, value2, operator) => {
	return new Promise((resolve, reject) => {
		if (typeof(value1) === 'number' && typeof(value2) === 'number') {
				setTimeout(() => {
				let result = ''
				if (operator === 'plus') {
					result = value1 + value2;
					resolve('result: ' + result)
				} else if (operator === 'minus' ) {
					result = value1 - value2;
					resolve('result: ' + result)
				} else if (operator === 'times') {
					result = value1 * value2;
					resolve('result: ' + result)
				} else if (operator === 'divide') {
					result = value1 / value2;
					resolve('result: ' + result)
				} else {
					reject('calculation cannot be done!')
				}
			}, 3000);
			
		} else {
			reject('input must be a number!')
		}	
	})	
}

simpleCalculator(1, 5, 'kurang')
.then((res) => {
	console.log(res)
})
.catch((err) => {
	console.log(err)
})

// const simpleCalculator2 = async(value1, value2, operator) => {
// 	try {
// 		const results = await simpleCalculator(value1, value2, operator)
// 		console.log(results) 
// 	}catch(err) {
// 		console.log(err)
// 	}
// }
 
simpleCalculator2(1, 17, "kurang")




