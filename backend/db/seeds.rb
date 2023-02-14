puts "🌱 Planting seeds..."

# Seed your database here

User.create(
    username: 'ron', password: 'password', first_name: 'Ron', last_name: 'Post', email_address: 'ron@example.com', phone_number:'8675309'
)

User.create(
    username: 'jer', password: 'password', first_name: 'Jer', last_name: 'Bush', email_address: 'jer@example.com', phone_number:'4050624'
)

User.create(
    username: 'adi', password: 'password', first_name: 'Adiel', last_name: 'Eich', email_address: 'adi@example.com', phone_number:'4050624'
)

10.times do
    Property.create(title: Faker::Color.color_name, street_address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, price_per_night: rand(100..350), available?: Faker::Boolean.boolean, user_id: User.all.sample.id, landlord_id: 1);
end


puts "✅ Done seeding!"
