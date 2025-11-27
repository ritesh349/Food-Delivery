let Data = [

    {
        "id":1,
        "img":"https://react-food-project-five.vercel.app/static/media/product_01.6be97a612b580d595585.jpg",
        "name":"Veg. Burger",
        "cat":"Burger",
        "price":50
    },
        {
        "id":2,
        "img":"https://react-food-project-five.vercel.app/static/media/product_2.1.f15385546f60c8d0f0d9.jpg",
        "name":"Vege Tarian Pizza",
        "cat":"Pizza",

        "price":115
    },   
    
    {
        "id":3,
        "img":"https://react-food-project-five.vercel.app/static/media/product_3.1.9c207cdf68c9700b11ce.jpg",
        "name":"Double Cheese MArgherita",
        "cat":"Pizza",

        "price":110
    },
     
    {
        "id":4,
        "img":"https://react-food-project-five.vercel.app/static/media/product_4.1.3c8ecc492220a3922731.jpg",
        "name":"Maxican Green wave",
        "cat":"Pizza",

        "price":110
    },
     
    {
        "id":5,
        "img":"https://react-food-project-five.vercel.app/static/media/product_04.f7c5294d0481fb12cc4c.jpg",
        "name":"Cheese Burger",
        "cat":"Burger",

        "price":60
    },
     
    {
        "id":6,
        "img":"https://react-food-project-five.vercel.app/static/media/product_01.6be97a612b580d595585.jpg",
        "name":"Royal Cheese Burger",
        "cat":"Burger",

        "price":55
    },
     
    {
        "id":7,
        "img":"https://react-food-project-five.vercel.app/static/media/product_2.2.4967c9cbe3fec366a31a.jpg",
        "name":"Seafood Pizza",
        "cat":"Pizza",

        "price":115
    },
     
    {
        "id":8,
        "img":"https://react-food-project-five.vercel.app/static/media/product_3.2.ebcb16b50e4ef0060a5e.jpg",
        "name":"Thin Cheese Pizza",
        "cat":"Pizza",

        "price":110
    },
     
    {
        "id":9,
        "img":"https://react-food-project-five.vercel.app/static/media/product_4.2.e82e43e0a3fc5dab999e.jpg",
        "name":"Pizza With Maxical ",
        "cat":"Pizza",

        "price":110
    },
     
    {
        "id":10,
        "img":"https://react-food-project-five.vercel.app/static/media/product_08.efc6c71968cf3ffe817a.jpg",
        "name":"Cllasic Humburger",
        "cat":"Burger",

        "price":75
    },
     
    {
        "id":11,
        "img":"https://react-food-project-five.vercel.app/static/media/bread(1).2fbb5c91c696e21efcb6.png",
        "name":"Crunchy Bread",
        "cat":"Snacks",

        "price":40
    },
     
    {
        "id":12,
        "img":"https://react-food-project-five.vercel.app/static/media/bread(2).dd485726262fc6f94474.png",
        "name":"Delicious Bread",
        "cat":"Snacks",

        "price":45
    },
     
    {
        "id":13,
        "img":"https://react-food-project-five.vercel.app/static/media/bread(3).e4b9fdd91579778ae4cc.png",
        "name":"Loaf Bread",
        "cat":"Snacks",

        "price": 55 
    },
     
    {
        "id":14,
        "img":"https://media.istockphoto.com/photos/red-bull-bottle-on-white-picture-id458716385?k=20&m=458716385&s=612x612&w=0&h=O7UqEQC38Dra8c5d_uCjRtb7U0ensG0zcjtQ0aIrzMs=",
        "name":"Red Bull",
        "cat":"Drink",

        "price":120
    },
    
]


Data=Data.map((ww)=>({...ww,que:1}))
console.log(Data);



export default Data