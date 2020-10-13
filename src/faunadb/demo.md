Map(
[
{ name: "Colombo 1", address: "115/8 Mattegoda Terrace, Mattegoda." },
{ name: "Kandy 1", address: "Mawanella, Kandy Road." },
],
Lambda("warehouses",
Create(Collection("warehouses"), { data: Var("warehouses") })
)
);

Map(
[
{ label: "Cloths & Wears"},
{ label: "Material"},
{ label: "Vehicles"},
{ label: "Furniture"},
{ label: "Food & Baverages"},
{ label: "Machinary"},
{ label: "Electronics"},
{ label: "Stationary"},
],
Lambda("categories",
Create(Collection("categories"), { data: Var("categories") })
)
);

Map(
[
{
name: "Nike Shoe",
description: "<p>A very comfortable fit.<p>",
categoryID: 278188649332343298,
images: [
"gs://ansi-68e9a.appspot.com/store/images/images (1).jpeg",
"gs://ansi-68e9a.appspot.com/store/images/images.jpeg",
"gs://ansi-68e9a.appspot.com/store/images/shoe1.jpg",
],
price: 1000,
warehouse: { name: "Kandy 1", address: "Mawanella, Kandy Road." },
quantity: 100,
backorderLimit: 0,
backordered: false,
},
{
name: "Nike Shoe A",
description: "<p>A very strong fit.<p>",
categoryID: 54321,
images: ["gs://ansi-68e9a.appspot.com/store/images/shoe2.jpg"],
price: 1200,
warehouse: { name: "Kandy 1", address: "Mawanella, Kandy Road." },
quantity: 80,
backorderLimit: 0,
backordered: false,
},
],
Lambda("products",
Create(Collection("products"), { data: Var("products") })
)
);

Map(
[
{
uid: 1002837,
address: {
street: "Mateegoda Terrace",
city: "Colomboo",
state: "Sri Lanka",
zipCode: "10230",
},
role: "Admin",
searchedItems: ["Shoes", "Umbrellas"],
clickedItems: [1000201],
usedTags: ["electronic"],
},
],
Lambda("users",
Create(Collection("users"), { data: Var("users") })
)
);

Map(
[
{
products: {
imageCarousel: [
{image:"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",text:"Hello"},
{image:"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",text:"Hello"},
{image:"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",text:"Hello"}
]
}
},
],
Lambda("pages",
Create(Collection("pages"), { data: Var("pages") })
)
);

Map(
[
{
customer: 278188649332343298,
line: [{ product: 278188649332343298, quantity: 10 }],
status: "Delivered",
creationDate: 1602604615554,
shipDate: 1602604615246,
shipAddress: {
street: "115/8 Mattegoda, Terrace",
city: "Colombo",
state: "Sri Lanka",
zipCode: 10100,
},
dateCreated: 1602604615554,
details: "<P>Cat is Dog and it say meow</p>",
},
],
Lambda("orders",
Create(Collection("orders"), { data: Var("orders") })
)
);
