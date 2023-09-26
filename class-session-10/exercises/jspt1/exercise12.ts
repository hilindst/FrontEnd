/* let foodItems: null[] = [
{ foodName: "Milk",
  foodPrice: 2.55,
},


] */


interface FoodItem {
  foodName: string;
  foodPrice: number;
}

let foodItems: FoodItem[] = [
  {foodName: 'Apple', foodPrice: 1},
  {foodName: 'Orange', foodPrice: 2},
]

console.log(foodItems);