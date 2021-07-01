let arkaFood = (price, voucher, distance, tax) => {
    let discount = null
    let rate = null
    let subTotal = null

    if (voucher) {

        if (voucher === "ARKAFOOD5") {
           
            if (price >= 50000 && price <= 100000) {
                discount = 0.5 * price;
               
                if (distance <= 2) {
                    rate = 5000;
                   
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );   
                    }  

                } else {
                    rate = 5000 + (Math.ceil(distance - 2) * 3000)
                    
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );
                    }
                }


            } else if (price > 100000) {
                discount = 50000;

                if (distance <= 2) {
                    rate = 5000;
                   
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );   
                    }  

                } else {
                    rate = 5000 + (Math.ceil(distance - 2) * 3000)
                    
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );
                    }
                }
            } else {
                discount = 0;
                if (distance <= 2) {
                    rate = 5000;
                   
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax;
                        console.log(
                            `Price    : ${price}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );   
                    }  

                } else {
                    rate = 5000 + (Math.ceil(distance - 2) * 3000)
                    
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );
                    }
                }
            }

        } else if (voucher === "DITRAKTIRDEMY") {
            if (price >= 25000 && price <= 50000) {
                discount = 0.6 * price;

                if (distance <= 2) {
                    rate = 5000;
                   
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );   
                    }  

                } else {
                    rate = 5000 + (Math.ceil(distance - 2) * 3000)
                    
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );
                    }
                }

            } else if (price > 50000) {
                discount = 30000;

                if (distance <= 2) {
                    rate = 5000;
                   
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );   
                    }  

                } else {
                    rate = 5000 + (Math.ceil(distance - 2) * 3000)
                    
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Discount : ${discount}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );
                    }
                }

            } else {
                discount = 0;

                if (distance <= 2) {
                    rate = 5000;
                   
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate - discount;
                        console.log(
                            `Price    : ${price}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );   
                    }  

                } else {
                    rate = 5000 + (Math.ceil(distance - 2) * 3000)
                    
                    if (tax) {
                        tax = 0.05 * price;
                        subTotal = price + rate + tax - discount;
                        console.log(
                            `Price    : ${price}
                             Rate     : ${rate}
                             Tax      : ${tax}
                             SubTotal : ${subTotal}`
                        );
                    } else {
                        subTotal = price + rate;
                        console.log(
                            `Price    : ${price}
                             Rate     : ${rate}
                             SubTotal : ${subTotal}`
                        );
                    }
                }

            }
        } else {
            console.log("Please Input Voucher Correctly")
        }
    } else {
        console.log("Voucher not Available")
        discount = 0;

        if (distance <= 2) {
            rate = 5000;
           
            if (tax) {
                tax = 0.05 * price;
                subTotal = price + rate + tax - discount;
                console.log(
                    `Price    : ${price}
                     Rate     : ${rate}
                     Tax      : ${tax}
                     SubTotal : ${subTotal}`
                );
            } else {
                subTotal = price + rate - discount;
                console.log(
                    `Price    : ${price}
                     Rate     : ${rate}
                     SubTotal : ${subTotal}`
                );   
            }  

        } else {
            rate = 5000 + (Math.ceil(distance - 2) * 3000)
            
            if (tax) {
                tax = 0.05 * price;
                subTotal = price + rate + tax - discount;
                console.log(
                    `Price    : ${price}
                     Rate     : ${rate}
                     Tax      : ${tax}
                     SubTotal : ${subTotal}`
                );
            } else {
                subTotal = price + rate;
                console.log(
                    `Price    : ${price}
                     Rate     : ${rate}
                     SubTotal : ${subTotal}`
                );
            }
        }

    }
        
        
    }


arkaFood(75000, "ARKAFOOD5", 5, true)

