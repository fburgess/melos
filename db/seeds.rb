# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding users..."
Customer.create([
  {
  
    username: "Freddie",
    password: "foodie",
    email: "freddie@gmail.com"
  },
  {
    username: "Matt",
    password: "matt123",
    email: "matt@gmail.com"
  },
  {
    username: "Zai",
    password: "333333",
    email: "zai@yahoo.com"
  },
  {
    username: "Ashley",
    password: "070494",
    email: "ashley@gmail.com"
  }
])
puts "Seeding Menu_item..."
MenuItem.create([
  {
    name: "Jerk Chicken",
    price: "10.00",
    category: "Chicken",
    image: "/Menupix/jerk-chicken.jpeg"
  },
  {
    name: "Jerk Pork",
    price: "12.00",
    category: "Pork",
    image: ""
  },
  {
    
    name: "Oxtail & Butter Bean",
    price: "15.00",
    category: "Beef",
    image: ""
  },
  {
    name: "Snapper Fish",
    price: "18.00",
    category: "Fish",
    image: ""
  },
  {
    name: "Stew Pork",
    price: "12.00",
    category: "Pork",
    image: ""
  },
  {
    
    name: "Fried Chicken",
    price: "10.00",
    category: "Chicken",
    image: ""
  },
  {
    name: "Brown Stew Chicken",
    price: "10.00",
    category: "Chicken",
    image: ""
  },
  {
    
    name: "Mac & Cheese",
    price: "3.00",
    category: "Sides",
    image: ""
  },
  {
    name: "Patty & Coco Bread",
    price: "5.00",
    category: "Sides",
    image: ""
  },
  {
    name: "Corn Bread",
    price: "3.00",
    category: "Sides",
    image: ""
  },
  {
    
    name: "Plantains",
    price: "2.00",
    category: "Sides",
    image: ""
  },
  {
    name: "Sweet Potato Pudding",
    price: "3.00",
    category: "Sides",
    image: ""
  },
  {
    name: "Beet Juice",
    price: "5.00",
    category: "Juice",
    image: ""
  },
  {
    name: "Carrot & Beet Juice",
    price: "3.00",
    category: "Juice",
    image: ""
  },
  {
    
    name: "Pineapple & Ginger Juice",
    price: "5.00",
    category: "Juice",
    image: ""
  },
  {
    name: "Cucumber Juice",
    price: "5.00",
    category: "Juice",
    image: ""
  },
  {
    name: "Sorrel Drink",
    price: "5.00",
    category: "Juice",
    image: ""
  },
  {
    name: "Carrot Juice",
    price: "5.00",
    category: "Juice",
    image: ""
  },
  {
    name: "Bottle Water",
    price: "1.25",
    category: "Juice",
    image: ""
  }
])

puts "Seeding Reviews..."
Review.create([
  {
    customer_id: 1,
    menu_item_id: 2,
    rating: 5,
    content: "I Love this Dish!"
  },
  {
    customer_id: 2,
    menu_item_id: 1,
    rating: 4,
    content: "Yeah Mon!"
  },
  {
    customer_id: 3,
    menu_item_id: 15,
    rating: 3,
    content: "I love all their natural juices but this one hits the spot!"
  },
  {
    customer_id: 4,
    menu_item_id: 12,
    rating: 2,
    content: "Wish I could have had it warm"
  },
  {
    customer_id: 2,
    menu_item_id: 9,
    rating: 4,
    content: "This Patties are so juicy!"
  }
])

puts "Seeding Order..."
Order.create([
  {
    total: "10.00",
    customer_id: 1,
    menu_item_id: 1
    
  },
  {
    total: "15.00",
    customer_id: 3,
    menu_item_id: 5
  },
  {
    total: "18.00",
    customer_id: 4,
    menu_item_id: 6
    
  }

])

puts "Seeding Order_History..."
OrderHistory.create([
  {
    order_id: 1,
    customer_id:1
   
  },
  {
    order_id: 2,
    customer_id:3
  
  },
  {
    order_id: 3,
    customer_id:4

    
  }
])

puts "Done seeding!"