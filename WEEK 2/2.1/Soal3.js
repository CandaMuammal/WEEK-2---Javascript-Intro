let valueSelection = (value1, value2, arrayData) => {
    if (typeof value1 !== "number" || typeof value2 !== "number") {
      console.log("Input Must be a Number");

    } else if (value1 > value2) {
      console.log("Value2 Must be Bigger than Value1");

    } else if (arrayData.length < 5) {
      console.log("arrayData Limit is 5"); 

    } else {
      const pickArr = [];
      arrayData.map((data) => {
      if (data > value1 && data < value2) {
        pickArr.push(data);
      }
      });
      console.log(
        pickArr.length > 0 ? pickArr.sort((a,b) => a-b) : "No Data Found!"
      );

      }
    }
  
  valueSelection(1, 20.5, [-3, 0, 4, 9, 6, 5, 8, 14, 20, 18, 11]); 

