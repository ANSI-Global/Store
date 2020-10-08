Map(
[
{ name: "Colombo 1", address: "115/8 Mattegoda Terrace, Mattegoda." },
{ name: "Kandy 1", address: "Mawanella, Kandy Road." },
],
Lambda("warehouses",
Create(Collection("Warehouse"), { data: Var("warehouses") })
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
Create(Collection("Category"), { data: Var("categories") })
)
);

Map(
[
{ name: "Nike Shoe",
description: "<p>A very comfortable fit.<p>",
categoryID: "123456",
images: [{https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zslfihhyn43ufetjigrq/tanjun-shoe-MkTmejeq.jpg}]
price: "1000"
warehouse: {name: "Kandy 1", address: "Mawanella, Kandy Road."}
quantity: "100 },
{ name: "Nike Shoe A",
description: "<p>A very strong fit.<p>",
categoryID: "54321",
images: [{https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zslfihhyn43ufetjigrq/tanjun-shoe-MkTmejeq.jpg}]
price: "1200"
warehouse: {name: "Kandy 1", address: "Mawanella, Kandy Road."}
quantity: "80 },
],
Lambda("product",
Create(Collection("Product"), { data: Var("product") })
)
);

Map(
[
{ uid: "1002837"
address: { street: "Mateegoda Terrace",
city: "Colomboo",
state: "Sri Lanka",
zipCode: "10230"}
role: "Admin",
searchedItems: ["Shoes"]
clickedItems: [{"100020"}]
usedTags: [{"electronic"}]},
],
Lambda("users",
Create(Collection("User"), { data: Var("users") })
)
);
