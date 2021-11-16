
    const productList = [
        {
            name: "iphone 7",
            quantity: 30
        },
        {
            name: "Samsung S10",
            quantity: 10
        },
        {
            name: "Iphone X",
            quantity: 5
        },
        {
            name: "Xiaomi Redmi",
            quantity: 1
        },
    ];
   
    const lisst = productList.filter( product => product.quantity <10)
    
    console.log(lisst)
    console.log(lisst.length)

