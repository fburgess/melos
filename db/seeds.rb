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
    image: "/Menupix/jerk-pork.jpeg"
  },
  {
    
    name: "Oxtail & Butter Bean",
    price: "15.00",
    category: "Beef",
    image: "/Menupix/oxtail.jpeg"
  },
  {
    name: "Snapper Fish",
    price: "18.00",
    category: "Fish",
    image: "/Menupix/Brown-Stew-Snapper.jpeg"
  },
  {
    name: "Stew Pork",
    price: "12.00",
    category: "Pork",
    image: "/Menupix/stew-pork.png"
  },
  {
    
    name: "Fried Chicken",
    price: "10.00",
    category: "Chicken",
    image: "/Menupix/Fried-Chicken.jpeg"
  },
  {
    name: "Brown Stew Chicken",
    price: "10.00",
    category: "Chicken",
    image: "/Menupix/stew-chicken.jpeg"
  },
  {
    
    name: "Mac & Cheese",
    price: "3.00",
    category: "Sides",
    image: "/Menupix/mac-cheese.jpeg"
  },
  {
    name: "Patty & Coco Bread",
    price: "5.00",
    category: "Sides",
    image: "/Menupix/Patty-coco-bread.webp"
  },
  {
    name: "Corn Bread",
    price: "3.00",
    category: "Sides",
    image: "/Menupix/cornbread.jpeg"
  },
  {
    
    name: "Plantains",
    price: "2.00",
    category: "Sides",
    image: "/Menupix/fried-plantains.jpeg"
  },
  {
    name: "Sweet Potato Pudding",
    price: "3.00",
    category: "Sides",
    image: "/Menupix/Sweet-Potato-Pudding.jpeg"
  },
  {
    name: "Beet Juice",
    price: "5.00",
    category: "Juice",
    image: "/Menupix/beet-juice.jpeg"
  },
  {
    name: "Carrot & Beet Juice",
    price: "3.00",
    category: "Juice",
    image: "/Menupix/carrott-beet.jpeg"
  },
  {
    
    name: "Pineapple & Ginger Juice",
    price: "5.00",
    category: "Juice",
    image: "/Menupix/Pineapple-Ginger.jpeg"
  },
  {
    name: "Cucumber Juice",
    price: "5.00",
    category: "Juice",
    image: "/Menupix/cucumber-juice.jpeg"
  },
  {
    name: "Sorrel Drink",
    price: "5.00",
    category: "Juice",
    image: "/Menupix/sorrel.jpeg"
  },
  {
    name: "Carrot Juice",
    price: "5.00",
    category: "Juice",
    image: "/Menupix/carrot.jpeg"
  },
  {
    name: "Bottle Water",
    price: "1.25",
    category: "Juice",
    image: "/Menupix/WATA.jpeg"
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