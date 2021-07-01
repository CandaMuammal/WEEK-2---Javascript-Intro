const name = () =>  [
  'Abigail', 'Alexandra', 'Allison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 
  'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
]


const searchName = (letter, limit, name) => {
  const arr = name();
  const newArr = [];

  if (typeof letter === "string" && typeof limit === "number") {
    arr.map((item) => {
      if (item.toLowerCase().match(letter) && newArr.length < limit) {
      newArr.push(item);
      } 
  });
  console.log(newArr.length >= 1 ? newArr : "No Data Found!")
  } else {
    console.log("Wrong Parameter")
  }
};

searchName("car", 2, name);


  