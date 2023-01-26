require 'faker'

suckr = ImageSuckr::GoogleSuckr.new

puts "Seeding user data..."

User.create(username: "AllieSoldau", email: "allie@example.com", password: "1234", first_name: "Allie", last_name: "Soldau", gender: "non-binary", image_url: Faker::Avatar.image, city: "Albany", state: "NY")

9.times do
    user = User.create(
        username: Faker::Creature::Animal.name.capitalize(),
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        password: "1234",
        email: Faker::Internet.email,
        gender: Faker::Gender.type,
        city: Faker::Address.city,
        state: Faker::Address.state,
        image_url: Faker::Avatar.image
    )
end

puts "Seeding baby shower data..."

10.times do
    randomUser = rand(1..10)
    shower = BabyShower.create(
        baby_shower_name: "#{User.find(randomUser).username}'s #{Faker::Color.color_name.capitalize()} Shower",
        date: Faker::Date.birthday(min_age: 0, max_age: 1),
        address: Faker::Address.full_address,
        description: Faker::Quote.famous_last_words,
        user_id: randomUser
    )
end

puts "Seeding item data..."

20.times do
    item = Item.create(
        item_name: Faker::Commerce.product_name,
        price: Faker::Commerce.price,
        image_url: Faker::Avatar.image,
        listing_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
        baby_shower_id: rand(1..10), 
        user_id: rand(1..10)
    )
end

20.times do
    item = Item.create(
        item_name: Faker::Commerce.product_name,
        price: Faker::Commerce.price,
        image_url: Faker::Avatar.image,
        listing_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
        baby_shower_id: rand(1..10), 
        user_id: ''
    )
end


puts "Done seeding"