require 'faker'

puts "Seeding user data..."



u1 = User.create(username: "JaviRod", email: "javi@example.com", password:"1234", first_name: "Javi", last_name: "Rodriguez", gender: "male", image_url: Faker::LoremFlickr.image(), city: "Chicago", state: "IL")
u2 = User.create(username: "AllieSoldau", email: "allie@example.com", password: "5678", first_name: "Allie", last_name: "Soldau", gender: "non-binary", image_url: Faker::LoremFlickr.image(), city: "Albany", state: "NY")

# TO DO: why won't my user seed data work? 
# 5.times do
#     user = User.create(
#         username: Faker::Ancient.god
#     )
# end

puts "Seeding baby shower data..."



b1 = BabyShower.create(baby_shower_name: "Javi's 1st baby shower", date: "2023-04-12", address: "My House", image_url: "https://images.unsplash.com/photo-1630305131239-c8df91783f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGJhYnklMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60", description: "Come help us celebrate baby Kevin!", user_id: 1)
b2 = BabyShower.create(baby_shower_name: "Javi's 2nd baby shower", date: "2024-01-16", address: "Freddie's fish tank", image_url: "https://www.customaquariums.com/wp-content/uploads/2019/02/100-gallon-aquarium-24_-x-48_-x-18_-colonial-oak-stain-classic-trim-standard-flat-panels-showcase-image.jpg", description: "Javi is having more babies!!", user_id: 1)

puts "Seeding item data..."

20.times do
    item = Item.create(
        # TO DO: why wont it give me random images??
        item_name: Faker::Creature::Animal.name,
        price: rand(1..100),
        image_url: Faker::LoremFlickr.image(),
        listing_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
        baby_shower_id: rand(1..5), 
        user_id: rand(1..2)
    )
end


puts "Done seeding"