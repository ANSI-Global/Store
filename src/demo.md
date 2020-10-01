Map(
[
{ title: "Screwdriver", description: "Drives screws." },
{ title: "Hair dryer", description: "Dries your hair." },
{ title: "Rocket", description: "Flies you to the moon and back." }
],
Lambda("product",
Create(Collection("Product"), { data: Var("product") })
)
);
