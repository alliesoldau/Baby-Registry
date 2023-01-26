require 'faker'

puts "Seeding user data..."



u1 = User.create(username: "JaviRod", email: "javi@example.com", password:"1234", first_name: "Javi", last_name: "Rodriguez", gender: "male", image_url: Faker::Avatar.image, city: "Chicago", state: "IL")
u2 = User.create(username: "AllieSoldau", email: "allie@example.com", password: "1234", first_name: "Allie", last_name: "Soldau", gender: "non-binary", image_url: Faker::Avatar.image, city: "Albany", state: "NY")

5.times do
    user = User.create(
        username: Faker::Ancient.god,
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        password: "1234",
        email: Faker::Internet.email,
        gender: Faker::Gender.type,
        city: Faker::Address.city,
        state: Faker::Address.state,
        image_url: Faker::LoremFlickr.image()
    )
end

puts "Seeding baby shower data..."

b1 = BabyShower.create(baby_shower_name: "Javi's 1st baby shower", date: "2023-04-12", address: "My House", description: "Javi is having a baby!", user_id: 1)
b2 = BabyShower.create(baby_shower_name: "Javi's 2nd baby shower", date: "2024-01-16", address: "Freddie's fish tank", description: "Javi is having more babies!!", user_id: 1)

5.times do
    shower = BabyShower.create(
        baby_shower_name: Faker::TvShows::GameOfThrones.character,
        date: Faker::Date.birthday(min_age: 18, max_age: 75),
        address: Faker::Address.full_address,
        description: Faker::Quote.famous_last_words,
        user_id: rand(1..7)
    )
end

puts "Seeding item data..."

20.times do
    item = Item.create(
        item_name: Faker::Creature::Animal.name,
        price: rand(1..100),
        image_url: Faker::Avatar.image,
        listing_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
        baby_shower_id: rand(1..2), 
        user_id: rand(1..7)
    )
end


puts "Done seeding"