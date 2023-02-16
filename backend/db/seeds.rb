puts "🌱 Planting seeds..."


## User Seed Data
User.create(
    username: 'ron', password: 'password', first_name: 'Ron', last_name: 'Post', email: 'ron@example.com', phone_number:'8675309'
)

User.create(
    username: 'jer', password: 'password', first_name: 'Jer', last_name: 'Bush', email: 'jer@example.com', phone_number:'4050624'
)

User.create(
    username: 'adi', password: 'password', first_name: 'Adiel', last_name: 'Eich', email: 'adi@example.com', phone_number:'4050624'
)

## Landlord Seed Data 
3.times do
    Landlord.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

## Property Seed Data
10.times do
    Property.create(title: Faker::Color.color_name, street_address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, price_per_night: rand(100..350), available: true, user_id: nil, landlord_id: Landlord.all.sample.id);
end

## Review Seed Data
20.times do
    Review.create(text: Faker::Lorem.paragraph, user_id: User.all.sample.id, property_id: Property.all.sample.id);
end

20.times do 
    Favorite.create(property_id: Property.all.sample.id, user_id: User.all.sample.id)
end


puts "✅ Done seeding!"
