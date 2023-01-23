#baby_showers
#users
#items

puts "Seeding user data..."

u1 = User.create(username: "JaviRod", email: "javi@example.com", password:"1234", first_name: "Javi", last_name: "Rodriguez", gender: "male", image_url: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/272485055_442645474232137_553443305937710399_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=m8T-kbKSZK8AX9oyBxn&tn=a3pJmd8ONxYdvNbD&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc1ODY5MzExMjc1NzAyODc5MA%3D%3D.2-ccb7-5&oh=00_AfCeeGgPmqiZJ5wpxh573MVzvJZ84dh8uBlqKzRNeD0gZA&oe=63D38A9E&_nc_sid=6136e7", city: "Chicago", state: "IL")
u2 = User.create(username: "AllieSoldau", email: "allie@example.com", password: "5678", first_name: "Allie", last_name: "Soldau", gender: "non-binary", image_url: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/151443538_166926468394030_983409448468227186_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=tNIxB3InOSAAX_VmeSg&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjUxMzQ2MjQ3MDc3MTExODA2NA%3D%3D.2-ccb7-5&oh=00_AfBvyBzIsNVijERqjcJI__W3_j-vRSKmM7No9D8ylL-KSA&oe=63D3399B&_nc_sid=6136e7", city: "Albany", state: "NY")
u3 = User.create(username: "FredFrog", email: "freddie@example.com", password: "666", first_name: "Freddie", last_name: "Froggie", gender: "female", image_url: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/283314497_1129573524283292_6632876482182541999_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=4IGK_KstCLoAX-f3LnW&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg0NTMyNjQzNTQ5MzAyMzk0NA%3D%3D.2-ccb7-5&oh=00_AfAtRYgLZwpXb2am9pgIVmkmvQSra7eUWw1WMMrxO7nbKA&oe=63D275DA&_nc_sid=6136e7", city: "Dover", state: "NH")

puts "Seeding baby shower data..."

b1 = BabyShower.create(baby_shower_name: "Javi's baby shower", date: "2023-04-12", address: "My House", image_url: "https://images.unsplash.com/photo-1630305131239-c8df91783f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGJhYnklMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60", description: "Come help us celebrate baby Kevin!", user_id: u1.id)
b2 = BabyShower.create(baby_shower_name: "Freddie's baby shower", date: "2024-01-16", address: "Freddie's fish tank", image_url: "https://www.customaquariums.com/wp-content/uploads/2019/02/100-gallon-aquarium-24_-x-48_-x-18_-colonial-oak-stain-classic-trim-standard-flat-panels-showcase-image.jpg", description: "Freddie and Freddie are having babies!!", user_id: u3.id)

puts "Seeding item data..."

i1 = Item.create(item_name: "Diapers", price: 42.99, image_url: "https://i5.walmartimages.com/asr/2a201ae0-ac03-44e7-8d10-0745c3077052_1.7db20f10a38473112cb9e51b591a4731.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", listing_url: "https://www.walmart.com/ip/Pampers-Swaddlers-Newborn-Diapers-Size-0-88-count/28240458?wmlspartner=wlpa&selectedSellerId=101250816&&adid=2222222222728240458_146223900841_18659479646&wl0=&wl1=g&wl2=c&wl3=629494650645&wl4=aud-1651068664266:pla-455189314445&wl5=9004733&wl6=&wl7=&wl8=&wl9=pla&wl10=676956757&wl11=online&wl12=28240458&veh=sem&gclid=CjwKCAiA2rOeBhAsEiwA2Pl7Qz-rhv5uRshqv6I_sKUPZJcgjUth2bdwIact3vUq4YWA0_HQp6RWaRoCWDQQAvD_BwE&gclsrc=aw.ds", baby_shower_id: b1.id, user_id: u3.id)
i2 = Item.create(item_name: "Bottles", price: 30.95, image_url: "https://images.philips.com/is/image/philipsconsumer/a974b5e1976341618845aca9000f70a5?wid=1364&hei=530&$jpglarge$", listing_url: "https://www.usa.philips.com/c-p/SCY903_34/natural-baby-bottle?utm_id=71700000097446442&origin=7_700000001596682_71700000097446442__&gclid=CjwKCAiA2rOeBhAsEiwA2Pl7Q3rmGJWAax5EicIuz2VlJ1dGDvmZ2o3rL-nzQl3sp5GxU6ns5X7LoxoCJ-8QAvD_BwE&gclsrc=aw.ds", baby_shower_id: b1.id, user_id: u2.id)

puts "Done seeding"