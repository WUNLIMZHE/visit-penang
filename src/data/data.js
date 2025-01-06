const events = [
  {
    id: 1,
    name: "Sze Chuan Chicken in Chili Oil (口水鸡)",
    price: "16.90",
    location: "Wan Jia Dumpling House, Elit Avenue, Bayan Lepas, Penang",
    rating: "4.3",
    description: "Tender chicken in a spicy, tangy sauce, garnished with fresh herbs and sesame seeds.",
    details: "Sze Chuan Chicken in Chili Oil (口水鸡), often translated as \"Mouthwatering Chicken,\" is a beloved dish from Sichuan cuisine that perfectly showcases the region's signature flavors. The dish features tender, poached chicken bathed in a vibrant, aromatic chili oil sauce. The sauce is infused with the signature heat of Sichuan peppercorns, offering a delightful numbing spiciness balanced with tangy vinegar and savory seasonings. Garnished with fresh herbs, sesame seeds, and often a sprinkle of crushed peanuts, this dish is a feast for the senses, boasting bold, authentic flavors and an enticing aroma. \nWhat sets Sze Chuan Chicken in Chili Oil apart is its unique serving style and refreshing character. Unlike many spicy dishes served hot, Sze Chuan Chicken in Chili Oil is served cold, offering a contrast that highlights the complexity of its flavors. Each bite delivers a harmonious blend of textures—from the smoothness of the chicken to the slight crunch of the garnishes—and a lingering, mouthwatering sensation from the chili oil. This dish is a quintessential example of Sichuan cuisine’s mastery in combining heat, flavor, and aroma into an unforgettable culinary experience.",
    img: "/01koushuiji.webp",
    alt: "Sze Chuan Chicken in Chili Oil image",
    source:
      "https://www.kenhuntfood.com/2023/09/wan-jia-dumpling-house-elit-avenue.html",
    category: "food",
  },
  {
    id: 2,
    name: "Boiled Dumplings (Egg and Chives)",
    price: "10.90",
    location: "Wan Jia Dumpling House, Elit Avenue, Bayan Lepas, Penang",
    rating: "4.5",
    description: "Delicate dumplings filled with scrambled eggs and vibrant chives, offering a delightful balance of flavors wrapped in a tender dough.",
    details: "These handmade boiled dumplings feature a delicate filling of egg and chives, skillfully balanced to bring out their natural flavors. The dumpling skin is slightly thick, providing a satisfying bite that complements the soft, flavorful filling. Served with aromatic black vinegar on the side, the tangy dipping sauce enhances the overall taste, making each bite a simple yet comforting delight.",
    img: "/02boiled-dumplings.webp",
    alt: "Boiled Dumplings",
    source:
      "https://www.kenhuntfood.com/2023/09/wan-jia-dumpling-house-elit-avenue.html",
    category: "food",
  },
  {
    id: 3,
    name: "Asam Laksa",
    price: "5-10 per bowl",
    location:
      "Nan Guang Kopitiam, 67 Main Road, 11000 Balik Pulau, Pulau Pinang, Malaysia",
    rating: "4.0",
    description: "Enjoy the authentic taste of Penang laksa, a tangy, flavorful dish with tamarind broth, fresh herbs, rice noodles, and a perfect balance of sweet, sour, and spicy notes.",
    details: "It is a well-known eatery in Penang, celebrated for its signature dish, Penang Asam Laksa. This flavorful dish features thick rice noodles, poached fish, and fresh vegetables like sliced cucumber, pineapple, and onions, all combined in a tangy fish broth. The warm and welcoming ambiance, paired with affordable pricing, makes it a must-visit destination for locals and tourists seeking an authentic taste of Penang.",
    img: "/03kim-laksa.webp",
    alt: "Asam Laksa",
    source: "https://kim-laksa-balik-pulau.wheree.com/",
    category: "food",
  },
  {
    id: 4,
    name: "Nutmeg Juice",
    price: "3",
    location:
      "Available at local eateries in Balik Pulau, Penang e.g. Nan Guang Kopitiam, 67 Main Road, 11000 Balik Pulau, Pulau Pinang, Malaysia",
    rating: "4.5",
    description: "Refreshing juice made from the fruit of the nutmeg tree.",
    details: "Nutmeg juice is a popular and refreshing beverage in Penang, especially in Balik Pulau. Made from the fleshy fruit of the nutmeg tree, this drink has a slightly tangy and aromatic flavor that is both unique and invigorating. It's commonly enjoyed alongside local dishes like laksa, offering a taste of Penang's rich culinary heritage.",
    img: "/04nutmeg-juice.webp",
    alt: "Nutmeg Juice",
    source: "http://www.conytan.com/2016/05/balik-pulau-laksa-kim-laksa.html",
    category: "food",
  },
  {
    id: 5,
    name: "Char Koay Teow",
    price: "4.70",
    location:
      "Corner of Kimberly and Cinta Street, Penang (Sin Guat Keong coffee shop)",
    rating: "4.5",
    description: "A flavorful rice noodle dish with shrimp, a popular local favorite.",
    details: "Char Koay Teow is a beloved Malaysian street food, known for its stir-fried rice noodles, shrimp, and a savory blend of flavors. Each stall adds its own touch, but the version at the hawker stall on the corner of Kimberly and Cintra Street is considered the best. The noodles are wok-fried with a combination of soy sauce, garlic, and a variety of spices, delivering a smoky, rich taste that is simply irresistible.",
    img: "/05char-kuey-teow.webp",
    alt: "Char Koay Teow",
    source: "https://rooftopantics.com/penang-food-guide-eat/",
    category: "food",
  },
  {
    id: 6,
    name: "Nasi Kandar",
    price: "10 and above",
    location: "Multiple locations in Penang e.g. 177 Jalan Penang, Penang, Malaysia",
    rating: "3.6",
    description: "A flavorful northern Malay dish with rice, curry sauces, and meat or fish.",
    details: "Nasi Kandar is a traditional northern Malay dish featuring steamed rice served with a variety of rich curry sauces and meats, chicken, or fish, often all at once. A local favorite is Nasi Kandar Line Clear, a restaurant open 24/7 that has become famous for its authentic offerings.To enjoy this dish, simply get in line, point at your preferred items, and dive into the flavorful meal.",
    img: "/06nasi-kandar.webp",
    alt: "Nasi Kandar",
    source:
      "https://www.tripadvisor.com.my/Restaurant_Review-g298303-d3858927-Reviews-Nasi_Kandar_Line_Clear-George_Town_Penang_Island_Penang.html",
    category: "food",
  },
  {
    id: 7,
    name: "Big Bowl Ramen",
    price: "12 and above",
    location: "Blkg Blk 1 Seh Lim Jeti, Pengkalan Weld, George Town, 10300 George Town, Pulau Pinang",
    rating: "3.6",
    description: "Large portions of ramen served with tender braised pork and flavorful broth.",
    details: "Big Bowl Ramen at Chew Jetty offers large servings of noodles, with a focus on their Braised Pork Belly ramen. The firm noodles are complemented by tender, savory pork, and a rich broth. This casual spot is known for its hearty and satisfying meals, making it a great choice for noodle lovers in Penang.",
    img: "/07big-bowl-ramen.webp",
    alt: "Big Bowl Ramen",
    source: "https://www.placesandfoods.com/2017/09/penang-big-bowl-ramen-noodle-chew-jetty.html",
    category: "food"
  },

  {
    id: 8,
    name: "Hokkien Mee",
    price: "8-12",
    location: "Multiple location in Penang. e.g. 67-A Lebuh Presgrave, George Town, 10300, Malaysia",
    rating: "4.5",
    description: "A Penang specialty with a rich, savory broth, served with noodles, prawns, and pork.",
    details: "Hokkien Mee originates from Fujian Province in Southern China, where the majority of George Town\'s Chinese residents descended from.It  is known for its rich, aromatic broth made from prawns and pork, served with a combination of yellow noodles and rice vermicelli. Topped with succulent prawns, tender pork, boiled eggs, and crispy shallots, the dish delivers a perfect balance of savory and spicy flavors. With its deep red color and satisfying texture, this iconic noodle dish has become a favorite for both locals and tourists alike, especially in Penang\'s vibrant food scene.",
    img: "/08hokkien-mee.webp",
    alt: "Hokkien Mee",
    source: "https://guide.michelin.com/my/en/article/dining-out/a-day-in-the-life-with-penang-s-888-hokkien-mee",
    category: "food"
  },

  {
    id: 9,
    name: "Roti Canai",
    price: "2-3. (Varies depending on location)",
    location: "Multiple location in Penang. e.g. 51 29, Jalan Gemas, Taman Kampar, 10460 George Town, Pulau Pinang",
    rating: "3.8",
    description: "A popular Malaysian flatbread, crispy on the outside, soft and flaky on the inside. Served with curry or dhal for dipping.",
    details: "Roti Canai is a beloved breakfast dish in Penang, originating from India. It\'s a layered, flaky flatbread often enjoyed with a side of rich curry or dhal. Adding an egg to the dish is a common variation. It's a satisfying dish that locals love, with many street vendors offering their unique take on it.",
    img: "/09roti-canai.webp",
    alt: "Roti Canai",
    source: "https://foodcrush.com.my/penang/profile/roti-canai-gemas-road",
    category: "food"
  },

  {
    id: 10,
    name: "Nasi Lemak",
    price: "2 and above. (Varies depending on location)",
    location: "Multiple location in Penang. e.g. Sri Weld Food Court, Beach St, Georgetown, 10300 George Town, Penang",
    rating: "3.8",
    description: "A Malaysian classic with coconut rice, sambal, anchovies, peanuts, and a variety of toppings, wrapped in fragrant banana leaf.",
    details: "Nasi Lemak is a beloved Malaysian dish, often considered the country\'s national dish. It consists of aromatic coconut rice served with sambal (a spicy paste), crispy fried anchovies, peanuts, and a choice of protein such as fried chicken or boiled egg. When wrapped in a banana leaf, the rice absorbs an earthy fragrance, enhancing the overall flavor. This combination of savory, spicy, and crunchy textures makes Nasi Lemak an irresistible meal, enjoyed by locals and visitors alike at various food stalls and eateries across Penang.",
    img: "/10nasi-lemak.webp",
    alt: "Nasi Lemak",
    source: "https://www.tripadvisor.com.sg/Restaurant_Review-g298303-d1159847-Reviews-Sri_Weld_Food_Court-George_Town_Penang_Island_Penang.html",
    category: "food"
  },

  {
    id: 11,
    name: "Teochew Cendol",
    price: "2.50 for dine-in, RM 2.70 for takeaway",
    location: "27 & 29 Lebuh Keng Kwee, Georgetown, Penang, Malaysia",
    rating: "4.2",
    description: "A popular traditional dessert in Penang, made with shaved ice, coconut milk, palm sugar, kidney beans, and green jelly noodles",
    details: "Nasi Lemak is a beloved Malaysian dish, often considered the country\'s national dish. It consists of aromatic coconut rice served with sambal (a spicy paste), crispy fried anchovies, peanuts, and a choice of protein such as fried chicken or boiled egg. When wrapped in a banana leaf, the rice absorbs an earthy fragrance, enhancing the overall flavor. This combination of savory, spicy, and crunchy textures makes Nasi Lemak an irresistible meal, enjoyed by locals and visitors alike at various food stalls and eateries across Penang.",
    img: "/11cendol.webp",
    alt: "Teochew Cendol",
    source: "https://www.huislaw.com/2015/05/penang-road-famous-teochew-chendul/#google_vignette",
    category: "food"
  },

  {
    id: 12,
    name: "Penang Hainanese Chicken Rice",
    price: "6 - 12",
    location: "Heng\'s Sri Bahari Road Hainan Chicken Rice, 14 Sri Bahari Road, 10050 George Town, Penang",
    rating: "4.3",
    description: "Tender poached chicken served with fragrant rice and chili sauce.",
    details: " A comforting dish that originated from Hainan, China, Penang\'s version of Hainanese Chicken Rice features tender, poached chicken served with flavorful rice cooked in chicken fat. It\'s typically accompanied by a spicy chili dipping sauce and a side of soup. The dish is simple but packed with flavor and is a favorite in both casual eateries and high-end restaurants.",
    img: "/12chicken-rice.webp",
    alt: "Penang Hainanese Chicken Rice",
    source: "https://www.hungryonion.org/t/penang-hengs-sri-bahari-hainan-chicken-rice/36723",
    category: "food"
  },

  {
    id: 13,
    name: "Penang Fish Head Curry",
    price: "18 - 30",
    location: "Multiple locations in Penang. e.g. 77 D, Persiaran Gurney, 10250 George Town, Pulau Pinang",
    rating: "4.8",
    description: "A spicy, aromatic curry made with a fish head, vegetables, and rich broth.",
    details: " Fish Head Curry is a flavorful, spicy dish made with a large fish head, cooked in a rich and aromatic curry sauce. The curry is typically thick and tangy, complemented by vegetables like eggplant and okra. The dish is served with steamed rice and is a favorite among locals, offering a bold and comforting meal with every bite.",
    img: "/13curry-fish-head.webp",
    alt: "Penang Fish Head Curry",
    source: "https://penangfoodie.com/top-10-places-to-eat-at-gurney-drive-penang-2019-guide/#google_vignette",
    category: "food"
  },

  {
    id: 14,
    name: "Spicy Sour Fish Head Beehoon",
    price: "9.50",
    location: "Wong Chau Jun Restaurant, 77-79 Jalan Perak, George Town, Penang",
    rating: "4.5",
    description: "Noodles served in a flavorful broth with fish head and herbs.",
    details: " A flavorful noodle dish with fried fish head, served in a spicy, sour broth infused with lemongrass and chili. The fish head imparts a rich, umami flavor to the soup, while the noodles soak up the aromatic broth, creating a comforting dish that\'s both nutritious and delicious.The broth's spiciness and aromatic taste provide a satisfying and unique experience.",
    img: "/14beehoon-fish-head.webp",
    alt: "Penang Fish Head Curry",
    source: "https://pureglutton.com/fish-noodles-wong-chau-jun-restaurant-penang",
    category: "food"
  },

  {
    id: 15,
    name: "Grilled Fish (Ikan Bakar)",
    price: "20 - 30",
    location: "Sungai Pinang Food Court, Jalan Sungai Pinang, 11500, George Town, Penang",
    rating: "4.5",
    description: "Grilled fish seasoned with aromatic spices, offering a smoky, flavorful experience.",
    details: " The Ikan Bakar is a popular dish where the fish is perfectly grilled, seasoned with a blend of spices and herbs that enhance its natural flavors. The smoky aroma from the grill and the charred exterior contrast with the tender and juicy fish inside, creating a satisfying and savory meal for seafood lovers",
    img: "/15grilled-fish.webp",
    alt: "Grilled Fish",
    source: "https://www.foodadvisor.my/penang/east-coast-bbq-george-town",
    category: "food"
  },

  {
    id: 16,
    name: "The Habitat",
    price:
      "Standard Entrance Pass: RM60, Family Combo: RM60, Forest Bathing: RM100",
    location: "C7G9+69, Bukit Bendera, 11300 Bukit Bendera, Pulau Pinang",
    openingHours: 
    `Opens Daily Monday to Friday 9:00am - 7:00pm (Last entry at 5:30pm)
    Saturday to Sunday 9:00am - 8:00pm (Last entry at 6:30pm)`,
    rating: "4.5",
    description: "Experience The Habitat Penang Hill, a haven of stunning views and rich biodiversity.",
    details: "Nestled atop Penang Hill, The Habitat offers a unique eco-tourism experience that combines the serenity of nature with the adventure of discovery. Visitors can explore the pristine rainforest through guided nature walks, suspended canopy bridges, and a stunning treetop walk that provides panoramic views of Penang and beyond. This enchanting destination is home to diverse flora and fauna, making it a haven for nature lovers, photographers, and curious minds alike. \nMore than just a scenic retreat, The Habitat is dedicated to conservation and environmental education. It invites visitors to reconnect with nature while fostering a deeper appreciation for the rainforest ecosystem. Whether you’re seeking a peaceful escape, a family-friendly outing, or an educational adventure, The Habitat promises a journey of inspiration and wonder in the heart of Malaysia’s natural beauty.",
    img: "/16the-habitat.webp",
    alt: "The Habitat",
    source: "https://thehabitat.my/our-story/",
    category: "tourist-spot",
  },
  {
    id: 17,
    name: "Escape Penang",
    price:
      "0-3 Years: Free admission, 4-12 Years: RM86-RM112, 13-60 Years: RM129-RM184, 60+ Years: Free admission",
    location:
      "828, Jalan Teluk Bahang, Teluk Bahang, 11050, Pulau Pinang, Malaysia.",
    openingHours: `Opens Daily 10am-6pm`,
    rating: "4.6",
    description: "Thrilling adventures, water park fun, and eco-friendly activities for all ages.",
    details: "Escape Penang is a premier adventure park that brings outdoor fun to life with its array of thrilling attractions, from high ropes courses and zip lines to gravity-defying water slides and obstacle challenges. Designed for visitors of all ages, it’s the perfect destination for families, friends, and adventure seekers looking to reconnect with nature and enjoy adrenaline-pumping activities in a safe and exciting environment. \nBeyond the fun, Escape Penang is deeply committed to sustainability and eco-tourism. The park integrates green practices into its operations, promoting environmental stewardship while delivering world-class entertainment. Whether you're looking to conquer your fears on the world’s longest zip coaster, cool off in the sprawling water park, or simply bask in the park’s lush surroundings, Escape Penang promises a memorable experience that blends adventure with environmental mindfulness.",
    img: "/17escape-penang.webp",
    alt: "Escape Penang",
    source: "https://www.escape.my/",
    category: "tourist-spot",
  },
  {
    id: 18,
    name: "Entopia",
    price: "Malaysians: RM58.80, International Tourists: RM67.50",
    location:
      "No 830, Jalan Teluk Bahang, Teluk Bahang, 11050 Penang, Malaysia",
    openingHours: `Opens daily 9am-6pm`,
    rating: "4.4",
    description: "A vibrant haven of butterflies, lush gardens, and interactive nature exhibits.",
    details: "Entopia Penang is a world-class nature attraction that invites visitors into a vibrant ecosystem of butterflies, insects, and lush tropical gardens. Home to over 15,000 free-flying butterflies and a myriad of other fascinating creatures, it offers an immersive experience where nature comes to life. Through its interactive exhibits and beautifully landscaped enclosures, Entopia combines education with entertainment, inspiring visitors of all ages to appreciate the wonders of the natural world. \nMore than just a butterfly park, Entopia is a hub of discovery and learning. It features hands-on activities, multimedia presentations, and guided tours that delve into the secrets of insects and their vital role in our environment. Whether you're a nature enthusiast, a family looking for a fun day out, or simply curious about the world of tiny creatures, Entopia promises a magical experience filled with awe and inspiration.",
    img: "/18entopia.webp",
    alt: "Entopia",
    source: "https://www.entopia.com/",
    category: "tourist-spot",
  },

  {
    id: 19,
    name: "Penang War Museum",
    price:
      "Malaysians: RM22.00 per adult & RM12.00 per child, Foreigners: RM38.00 per adult & RM20.00 per child",
    location:
      "Lot 1350, Mukim 12, Daerah Barat Daya, Batu Maung, 11960, Penang, Malaysia.",
    openingHours: `Opens daily 9.00am - 6.00pm`,
    rating: "4.3",
    description: "Discover Penang\'s wartime history through immersive exhibits at the Penang War Museum.",
    details: "The Penang War Museum, located on the island\'s southwest coast, is a captivating historical site that provides an in-depth look into the island's military history, particularly during World War II. Set in a former British military stronghold, the museum showcases a range of exhibits, including old artillery, tunnels, and bunkers that were once used for defense. Visitors can walk through preserved structures and experience firsthand the conditions soldiers faced, offering a unique, immersive way to learn about the island\'s wartime significance. \n\nIn addition to its exhibits, the Penang War Museum is a place of remembrance, honoring the bravery and sacrifices made during the war. The museum\'s fascinating storytelling, complemented by its authentic war relics and recreated environments, makes it a must-visit for history enthusiasts and anyone interested in the resilience of Penang during its turbulent past. Whether you are a history buff or a curious traveler, this museum offers a powerful and emotional insight into Penang\'s wartime history.",
    img: "/19war-museum.webp",
    alt: "Penang War Museum",
    source: "https://mypenang.gov.my/all/my-stories/118/?lg=en",
    category: "tourist-spot",
  },

  {
    id: 20,
    name: "Penang Bird Park",
    price: "Malaysians: RM35.82, International tourists: RM42.77",
    location: "Jalan Todak Seberang Jaya, 13700 Perai, Penang",
    openingHours: `Opens daily 9.00am - 6.00pm`,
    rating: "4.5",
    description: "Established in 1988, Penang Bird Park is a nature lover's paradise, being the first and largest bird park of its kind in Malaysia.",
    details: "This five-acre park located on the mainland portion of Penang State is home to over 300 species of birds from all over the world, with more than 150 species from Malaysia alone. You can also witness daily feeding sessions and bird shows, providing an up-close and personal experience with birds such as hornbills, flamingos, pelicans, and swans.",
    img: "/20bird-park.webp",
    alt: "Penang Bird Park",
    source: "https://www.penangbirdpark.com.my",
    category: "tourist-spot"
  },

  {
    id: 21,
    name: "Tech Dome Penang",
    price: `Normal admission: RM28.00, 
            2 Adults + 1 Child: RM64.00, 
            2 Adults + 2 Children: RM72.00, 
            2 Adults + 3 Children: RM80.00, 
            2 Adults + 4 Children: RM88.00`,
    location: "KOMTAR, Geodesic Dome, Jalan Penang, 10000 George Town, Pulau Pinang, Malaysia",
    openingHours: `Opens daily 10.00am - 6.00pm`,
    rating: "4.4",
    description: "Discover the excitement at Tech Dome Penang, Malaysia's first science center, located in the iconic geodesic dome of KOMTAR.",
    details: "With over 150 interactive exhibits spread across seven galleries, it offers a unique opportunity to explore science and technology in a fun and engaging way. One of the main attractions is the G-Drop, the world\'s first free-standing vertical drop slide, providing an unforgettable thrill for adrenaline seekers. In addition, visitors can interact with humanoid robots that can talk, dance, and entertain, making it an ideal experience for both learning and fun. Bring your loved ones and immerse yourself in the world of innovation and discovery. Grab your tickets and visit Tech Dome Penang today!",
    img: "/21tech-dome.webp",
    alt: "Tech Dome Penang",
    source: "https://www.techdomepenang.org",
    category: "tourist-spot"
  },

  {
    id: 22,
    name: "Wonderfood Museum",
    price: "Malaysians: RM17.91, International Travellers: RM25.86",
    location: "49, Lebuh Pantai, George Town, 10200 George Town, Pulau Pinang, Malaysia",
    openingHours: `Opens daily 9.00am - 6.00pm`,
    rating: "4.6",
    description: "Visit the Wonderfood Museum in Penang and see a variety display of local food in Malaysia.",
    details: "The one-of-a-kind museum consists of three sections that include the Info Zone, Wow Zone, and Educational Zone, displaying over 100 types of popular street food and local dishes. Discover a miniature model of how the locals enjoy their food at the Info Zone or be amazed by life-sized food replicas at the Wow Zone and pose for photos. You can also learn about certain dishes that may endanger the environment. Bring along your loved ones for a good time together.",
    img: "/22wonderfood-museum.webp",
    alt: "Wonderfood Museum",
    source: "https://www.facebook.com/Wonderfoodmuseum",
    category: "tourist-spot"
  },

  {
    id: 23,
    name: "Little India",
    price: "Free admission",
    location: "Lebuh Cecil, 10300 Georgetown, Penang, Malaysia",
    openingHours: `Opens daily`,
    rating: "4.3",
    description: "Little India Penang is located in Georgetown, the capital of Penang. It is in the centre of Penang Heritage zone.",
    details: "It consists of 3 streets: Lebuh Chulia, Lebuh Queen and Jalan Pasar. Traditional Indian music fills the air as visitors savour the Indian shops little India has to offer. Many shops there sell Indian fabric and clothing such as Saree, silk and cotton. There are also many food stalls focusing on delicious Indian cuisine. Visitors get to experience eating food on a banana leaf without utensils, though spoons and forks are available upon request. A definite, must-visit place for sightseeing culture enthusiasts.",
    img: "/23little-india.webp",
    alt: "Little India",
    source: "https://penang.attractionsinmalaysia.com/Little-India.php",
    category: "tourist-spot"
  },

  {
    id: 24,
    name: "Penang 3D Trick Art",
    price: "Malaysians: RM17.30, International Tourists: RM21.10",
    location: "10, Lebuh Penang, George Town, 10200 George Town, Pulau Pinang, Malaysia",
    openingHours: `Opens daily 9.00am - 6.00pm`,
    rating: "4.3",
    description: "The Penang 3D Trick Art Museum located in Georgetown is one of the first to offer a unique and interactive museum experience in the area.",
    details: "Referring to the 3D Trick Art technique that makes images appear 3-dimensional, visitors can explore two themed exhibitions named 'All About Penang Life' and 'Modern Classic'. There will be guidance and assistance provided throughout the museum to assist visitors to take the best photos.",
    img: "/24trick-art3d.webp",
    alt: "Penang 3D Trick Art",
    source: "https://penangtrickart.com",
    category: "tourist-spot"
  },

  {
    id: 25,
    name: "Cheong Fatt Tze – The Blue Mansion",
    location: "14, Leith Street, 10200 George Town, Malaysia",
    rating: "4.6",
    description: "A historic and luxurious boutique hotel housed in an iconic blue mansion, offering a unique cultural experience in the heart of George Town, Penang.",
    details: "Cheong Fatt Tze – The Blue Mansion is a beautifully restored heritage building in the heart of George Town, Penang. This iconic blue mansion offers guests an extraordinary experience with its mix of traditional architecture and modern comforts. Originally the home of a prominent merchant, the mansion is now a boutique hotel that offers a glimpse into Penang’s rich history. Guests can explore the mansion’s stunning interior, enjoy delicious local cuisine, and immerse themselves in the unique cultural heritage of Penang. With its combination of elegance, history, and personalized service, this hotel promises an unforgettable stay.",
    img: "/25cheong-fatt-tze.webp",
    alt: "Cheong Fatt Tze – The Blue Mansion",
    booking:
      "https://www.booking.com/hotel/my/cheong-fatt-tze-the-blue-mansion.en-gb.html",
    source: "https://www.cheongfatttzemansion.com/",
    category: "hotel",
  },
  {
    id: 26,
    name: "Bayview Beach Resort",
    location: "Batu Ferringhi Beach, 11100 Batu Ferringhi, Malaysia.",
    rating: "4.0",
    description: "Situated along Batu Ferringhi Beach in Penang, Bayview Beach Resort offers rooms with private balconies that face the hills or the sea.",
    details: "Bayview Beach Resort is a four-star property located on Batu Ferringhi Beach in Penang. It features comfortable rooms with sea or garden views, multiple dining options, a swimming pool, spa services, and recreational activities. The resort is ideal for families, couples, and business travelers seeking a serene getaway with modern amenities. Its strategic location provides easy access to local attractions, including the Batu Ferringhi Night Market and Penang National Park. Location: Batu Ferringhi, Penang, Malaysia.",
    img: "/26bayview-resort.webp",
    alt: "Bayview Beach Resort",
    booking:
      "https://www.booking.com/hotel/my/bayviewbeach.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&nflt=class%3D4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734852140&srpvid=71f033cf5a3402b1&type=total&ucfs=1&",
    source: "https://bbr.bayviewhotels.com/",
    category: "hotel",
  },
  {
    id: 27,
    name: "By The Sea Penang",
    location: "Jalan Batu Ferringi 102-08-02, 11050 Batu Ferringhi, Malaysia",
    rating: "4.1",
    description: "A beachfront property offering a tranquil escape with modern suites and picturesque views of Batu Ferringhi, Penang.",
    details: "By The Sea Penang is a four-star property located along the sandy shores of Batu Ferringhi in Penang. The property features spacious, well-equipped suites with private balconies overlooking the sea or lush gardens. Guests can enjoy direct beach access, an outdoor pool, a fitness center, and nearby attractions such as local eateries and the vibrant Batu Ferringhi Night Market. This property is ideal for families and couples looking for a relaxing retreat in Penang. Location: Batu Ferringhi, Penang, Malaysia. ",
    img: "/27by-the-sea.webp",
    alt: "By The Sea Penang",
    booking:
      "https://www.booking.com/hotel/my/by-the-sea-penang-batu-ferringhi.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=7&hpos=7&nflt=class%3D4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734852647&srpvid=71f033cf5a3402b1&type=total&ucfs=1&",
    source: "https://www.bytheseapenang.com/",
    category: "hotel",
  },
  {
    id: 28,
    name: "G Beach Front Villa",
    location: "NO.546-E, MEDAN TANJUNG BUNGAH, 11200 Batu Ferringhi, Malaysia",
    rating: "4.7",
    description: "A luxurious beachfront villa offering a private retreat with stunning ocean views in Batu Ferringhi, Penang.",
    details: "G Beach Front Villa is a four-star accommodation situated along the serene Batu Ferringhi Beach in Penang. This villa provides an exclusive stay with spacious, elegantly designed interiors, private access to the beach, and a garden. Ideal for families and groups, it features modern amenities, including a fully equipped kitchen, a private pool, and a terrace for enjoying the coastal breeze. Guests can explore nearby attractions like the Batu Ferringhi Night Market, local eateries, and Penang’s cultural landmarks while enjoying the comfort and privacy of this beachfront heaven.",
    img: "/28g-beach-front-villa.webp",
    alt: "G Beach Front Villa",
    booking:
      "https://www.booking.com/hotel/my/g-beach-front-villa.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=10&hpos=10&nflt=class%3D4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734853163&srpvid=71f033cf5a3402b1&type=total&ucfs=1&",
    source: "https://g-beach-front-villa.penangbeachhotels.com/en/",
    category: "hotel"
  },

  {
    id: 29,
    name: "Ascott Gurney Penang",
    location: "18, Persiaran Gurney, 10250 George Town, Malaysia",
    rating: "4.4",
    description: "A waterfront resort offering spacious accommodations and modern amenities in the heart of George Town, Penang.",
    details: "The Ascott Gurney Penang is a four-star property located along the popular Gurney Drive, a prime location in George Town, Penang. The resort features large suites with separate living areas, kitchenettes, and stunning views of the sea or city. Amenities include a lagoon-style swimming pool, a fitness center, and facilities for business travelers. Its strategic location provides easy access to shopping, dining, and attractions such as Gurney Plaza and Gurney Paragon. Ideal for both leisure and business travelers seeking a blend of comfort and convenience in Penang.",
    img: "/29ascott-gurney.webp",
    alt: "Ascott Gurney Penang",
    booking: "https://www.booking.com/hotel/my/the-gurney-resort-amp-residences.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&all_sr_blocks=0_0_2_0_0&checkin=2024-12-23&checkout=2024-12-24&dest_id=-2403065&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=0_0_2_0_0&hpos=1&matching_block_id=0_0_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=0_0_2_0_0__73553&srepoch=1734853463&srpvid=5f4c3667ff9f034d&type=total&ucfs=1&",
    source: "https://gurney-hotel.com.my/index.htm",
    category: "hotel"
  },

  {
    id: 30,
    name: "Lyf Georgetown Penang",
    location: "No. 2A, Jalan Penang, Seksyen 14, 10000 George Town, Malaysia",
    rating: "4.2",
    description: "A modern and vibrant co-living space in the heart of George Town, catering to travelers seeking a blend of work and leisure.",
    details: "Lyf Georgetown Penang offers a unique co-living experience with stylish, fully-equipped accommodations designed for digital nomads, business travelers, and social explorers. Located in the vibrant UNESCO-listed city of George Town, the property features shared social spaces, meeting areas, and a communal kitchen to foster connections among guests. Amenities include a fitness center, high-speed internet, and a dynamic social calendar of events. Its central location provides convenient access to George Town's iconic heritage sites, local eateries, and shopping destinations.",
    img: "/30lyf.webp",
    alt: "Lyf Georgetown Penang",
    booking: "https://www.booking.com/hotel/my/lyf-georgetown-penang.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&all_sr_blocks=1268235702_399882355_0_0_0_716630&checkin=2024-12-23&checkout=2024-12-24&dest_id=-2403065&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=1268235702_399882355_0_0_0_716630&hpos=2&matching_block_id=1268235702_399882355_0_0_0_716630&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1268235702_399882355_0_0_0_716630_38232&srepoch=1734853680&srpvid=5f4c3667ff9f034d&type=total&ucfs=1&",
    source: "https://smartdory.com/2024/11/lyf-georgetown-penang/",
    category: "hotel"
  },

  {
    id: 31,
    name: "Sunway Georgetown Penang",
    location: "33 New Lane (Off Macalister Road), 10400 George Town, Malaysia",
    rating: "4.1",
    description: "A contemporary hotel offering comfort and convenience, located in the bustling heart of George Town.",
    details: "Sunway Georgetown Penang is a modern and well-appointed hotel in the UNESCO World Heritage Site of George Town. It provides comfort amidst the abundance of charm and culture available around its immediate vicinity. With stylish rooms, top-notch amenities, and excellent customer service, it caters to both business and leisure travelers. Guests can enjoy a relaxing dip in the outdoor pool, a workout at the fitness center, or a sumptuous meal at the in-house restaurant. The hotel’s strategic location provides easy access to George Town’s vibrant street food scene, cultural landmarks, and shopping centers.",
    img: "/31sunway-hotel.webp",
    alt: "Sunway Georgetown Penang",
    booking: "https://www.booking.com/hotel/my/sunway-georgetown-penang.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&all_sr_blocks=2576509_200856572_0_2_0_522757&checkin=2024-12-23&checkout=2024-12-24&dest_id=-2403065&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=7&highlighted_blocks=2576509_200856572_0_2_0_522757&hpos=7&matching_block_id=2576509_200856572_0_2_0_522757&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=2576509_200856572_0_2_0_522757_29780&srepoch=1734853840&srpvid=5f4c3667ff9f034d&type=total&ucfs=1&",
    source: "https://www.sunwayhotels.com/sunway-georgetown/",
    category: "hotel"
  },

  {
    id: 32,
    name: "Mercure Penang Beach",
    location: "505, Jalan Tanjung Bungah, 11200 George Town, Malaysia",
    rating: "4.0",
    description: "A charming beachside resort offering a blend of modern comfort and beautiful natural surroundings.",
    details: "Mercure Penang Beach is a beachfront resort that combines luxury with the beauty of nature. Guests can enjoy stunning views of the Andaman Sea and Penang's lush landscapes from their rooms. The resort offers a range of amenities including a spa, outdoor pool, fitness center, and multiple dining options. It’s a perfect retreat for both relaxation and adventure, with easy access to Penang’s cultural and natural attractions. The peaceful atmosphere makes it an ideal place for families, couples, and business travelers.",
    img: "/32mercure-penang.webp",
    alt: "Mercure Penang Beach",
    booking: "https://www.booking.com/hotel/my/mercure-penang-beach.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&all_sr_blocks=58027808_217788403_2_2_0_560973&checkin=2024-12-23&checkout=2024-12-24&dest_id=-2403065&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=11&highlighted_blocks=58027808_217788403_2_2_0_560973&hpos=11&matching_block_id=58027808_217788403_2_2_0_560973&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=58027808_217788403_2_2_0_560973_52800&srepoch=1734854439&srpvid=5f4c3667ff9f034d&type=total&ucfs=1&",
    source: "https://all.accor.com/hotel/B4R7/index.en.shtml?utm_source=Bing&utm_medium=cpc&utm_campaign=ppc-mer-mar-msn-my-en-my-exa-sear-my&utm_term=mar&utm_content=my-en-MY-V193063&msclkid=3ea62df1e13e14a492844a9626833b8c",
    category: "hotel"
  },

  {
    id: 33,
    name: "The George Hotel, George Town",
    location: "138 Jalan Penang George Town, 10100 George Town, Malaysia",
    rating: "4.2",
    description: "A modern, stylish hotel located in the heart of George Town, offering contemporary comfort and a central location for exploring Penang\'s heritage.",
    details: "The George Hotel is a vibrant and contemporary hotel situated in the UNESCO World Heritage Site of George Town. It is a chic and sophisticated accommodation choice for travelers seeking both comfort and style. This modern hotel combines contemporary amenities with traditional touches, offering well-appointed rooms, excellent service, and convenient access to local attractions. Guests can enjoy a range of services including free Wi-Fi, an on-site restaurant, and easy access to the cultural richness of Penang. Whether you’re in town for business or leisure, The George Hotel offers a relaxing and convenient stay.",
    img: "/33george-hotel.webp",
    alt: "The George Hotel, George Town",
    booking: "https://www.booking.com/hotel/my/the-george-george-town-penang.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&all_sr_blocks=909788403_401771671_0_2_0_536160&checkin=2024-12-23&checkout=2024-12-24&dest_id=-2403065&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=15&highlighted_blocks=909788403_401771671_0_2_0_536160&hpos=15&matching_block_id=909788403_401771671_0_2_0_536160&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=909788403_401771671_0_2_0_536160_72250&srepoch=1734854708&srpvid=5f4c3667ff9f034d&type=total&ucfs=1&",
    source: "https://thegeorge.com.my/",
    category: "hotel"
  },

  {
    id: 34,
    name: "The First Rooftop Infinity Sky Pool & Beacon",
    location: "142 Jalan Sungai Pinang, 10150 George Town, Malaysia",
    rating: "4.1",
    description: "Experience luxury and stunning panoramic views from this executive suite, featuring a rooftop infinity sky pool, located in the heart of George Town, Penang.",
    details: "The First Rooftop Infinity Sky Pool & Beacon Executive Suite offers a premium stay in George Town, Penang, combining elegant accommodations with breathtaking city views. Guests can relax in the sophisticated executive suite and enjoy access to an exclusive rooftop infinity pool, perfect for unwinding while taking in panoramic vistas of the city and beyond. With contemporary amenities, impeccable service, and a prime location close to Penang\'s cultural and historical landmarks, this hotel promises an unforgettable stay for both business and leisure travelers. Whether you are looking to relax or explore, this luxurious suite offers the ultimate in comfort and convenience.",
    img: "/34beacon-executive.webp",
    alt: "The First Rooftop Infinity Sky Pool & Beacon",
    booking: "https://www.booking.com/hotel/my/the-first-rooftop-infinity-sky-pool-beacon-executive-suite-george-town.en-gb.html",
    source: "https://www.sniffhotels.com/my/en/hotel/the-first-rooftop-infinity-sky-pool-beacon-executive-suite-george-town",
    category: "hotel"
  },

  {
    id: 35,
    name: "Carnarvon House",
    location: "28 Lorong Carnarvon, 10100 George Town, Malaysia",
    rating: "4.7",
    description: "A charming heritage building featuring a terrace, a shared lounge, and various recreational opportunities, Carnarvon House Hotel George Town enjoys a prime location merely 12 minutes' stroll from Penang Street Art",
    details: "Carnarvon House is a beautifully restored heritage guesthouse located in George Town, Penang. The building's historical charm is complemented by modern amenities, offering guests a cozy and unique stay. The guesthouse is situated in a central location, making it convenient for guests to explore the vibrant cultural and historic sights of George Town. With its welcoming atmosphere and personalized service, Carnarvon House provides an intimate experience, perfect for travelers seeking a blend of heritage and comfort during their stay in Penang.",
    img: "/35carnarvon.webp",
    alt: "Carnarvon House",
    booking: "https://www.booking.com/hotel/my/carnarvon-house.en-gb.html",
    source: "https://carnarvon-house.penangbeachhotels.com/en/",
    category: "hotel"
  },

  {
    id: 36,
    name: "Gurney Seaview Condo with Balcony",
    location: "100A, The Landmark By Katana, Jalan Tanjong Tokong, 10470 George Town, Malaysia",
    rating: "4.3",
    description: "Enjoy breathtaking sea views and comfort at this modern condo with a balcony, located in the prestigious Gurney Drive area of Penang.",
    details: "The Gurney Seaview Condo with Balcony offers guests an unforgettable stay with its stunning sea views, stylish décor, and convenient location along the famous Gurney Drive in Penang. The condo is fully equipped with modern amenities, providing a perfect blend of relaxation and comfort. Guests can enjoy the beautiful scenery from the balcony, making it an ideal choice for both short and long stays. Situated near shopping malls, restaurants, and attractions, the condo ensures a convenient and enjoyable experience for all travelers.",
    img: "/36gurney-seaview.webp",
    alt: "Gurney Seaview Condo with Balcony",
    booking: "https://www.booking.com/hotel/my/gurney-seaview-condo-with-balcony.en-gb.html",
    source: "https://gurney-seaview-condo-with-balcony.georgetown-hotels.org/en/",
    category: "hotel"
  },

  {
    id: 37,
    name: "Eastern & Oriental Hotel",
    location: "10 Farquhar Street, 10200 George Town, Malaysia",
    rating: "4.4",
    description: "A historic luxury hotel offering a blend of modern comfort and colonial charm, located along the waterfront in Penang.",
    details: "The Eastern & Oriental Hotel is a renowned landmark in Penang, offering a luxurious stay in a beautifully restored colonial building. Known for its timeless elegance, the hotel boasts spectacular sea views, impeccable service, and a wide range of world-class amenities. Guests can enjoy fine dining at the hotel's restaurants, unwind at the spa, or explore the cultural sights of Georgetown, all while staying in one of the most iconic hotels in the region. Whether you're here for business or leisure, the Eastern & Oriental Hotel provides an unforgettable experience.",
    img: "/37eastern.webp",
    alt: "Eastern & Oriental Hotel",
    booking: "https://www.booking.com/hotel/my/eastern-oriental.en-gb.html",
    source: "https://www.eohotels.com/",
    category: "hotel"
  },

  {
    id: 38,
    name: "The Boutique Residence Georgetown",
    location: "133 Jalan Masjid Kapitan Keling, 10400 George Town, Malaysia",
    rating: "4.5",
    description: "A sophisticated boutique hotel in the heart of Penang, blending modern comfort with cultural heritage for a unique stay.",
    details: "The Boutique Residence Georgetown is a charming hotel that offers a harmonious mix of modern design and traditional charm. Located in the city center within walking distance of Georgetown\'s heritage sites, vibrant street art, and local eateries, the hotel provides guests with easy access to the city\'s rich culture. It also offers well-appointed rooms, exceptional service, and a welcoming atmosphere. Guests can explore the vibrant culture of Georgetown while staying in a comfortable and stylish environment. The hotel features modern amenities including free Wi-Fi, air-conditioned rooms, and easy access to local attractions, making it the perfect base for a relaxing getaway or a cultural adventure.",
    img: "/38boutique-residence-hotel.webp",
    alt: "The Boutique Residence Georgetown",
    booking: "https://www.booking.com/hotel/my/the-boutique-residence-georgetown.en-gb.html",
    source: "https://the-boutique-residence-hotel.penanghotels.org/en/",
    category: "hotel"
  },

  {
    id: 39,
    name: "G Kelawai",
    location: "2, Persiaran Maktab, 10250 George Town, Malaysia",
    rating: "4.3",
    description: "An energising space for guests to play and work by day or mix and mingle by night.",
    details: "G Kelawai is a contemporary hotel located in the heart of Penang, offering a perfect blend of luxury and comfort. The hotel features modern and spacious rooms, each designed with a sleek, minimalist aesthetic and equipped with high-end amenities for an unparalleled stay. Guests can enjoy a range of dining options, a well-equipped fitness center, and a rooftop pool with panoramic views of the city. Conveniently situated near Penang\'s vibrant shopping, dining, and cultural districts, G Kelawai is an ideal choice for travelers seeking both relaxation and exploration. Whether for business or leisure, this hotel provides a chic base for your Penang experience.",
    img: "/39g-kelawai.webp",
    alt: "TG Kelawai",
    booking: "https://www.booking.com/hotel/my/g-kelawai.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCCWcta2VsYXdhaUgzWANooQGIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4ArGd77sGwAIB0gIkOGMzMjU5YjktNTY1MS00ZmU0LThjOTMtYmZkNzI0ZWExZTJm2AIE4AIB&sid=2e71c2f6d0703f6373185785648d88eb&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&",
    source: "https://kelawai.ghotel.com.my/",
    category: "hotel"
  },

  {
    id: 40,
    name: "Pinang Peranakan Museum",
    price: "Adults : RM25.00, Children (6-12 yrs) : RM 12.00, Junior Children (below 6) : Free",
    location: "29, Church Street, 10200 Penang, Malaysia.",
    openingHours: `Monday to Sunday including Public Holidays from 9:30 am to 5 pm`,
    rating: "4.5",
    description: "At the Pinang Peranakan Mansion, the typical home of a rich Baba of a century ago is recreated to offer a glimpse of their opulent lifestyle and of their many customs and traditions.",
    details: "With over 1,000 pieces of antiques and collectibles of the era on display, this Baba-Nyonya museum is also housed in one of Penang\'s heritage mansions of eclectic design and architecture. Built at the end of the 19th century by one of local history\'s famous personalities, the Sea Remembrance Store had once served as the residence and office of Kapitan Cina Chung Keng Kwee. Though not a Baba himself, his Chinese courtyard house was much like a typical large Baba home of eclectic style, incorporating Chinese carved-wood panels and English floor tiles and Scottish ironworks. Having survived the many decades of neglect and decay, the mansion has now been restored to its former glory of a stately home.",
    img: "/40penang-peranakan.webp",
    alt: "Pinang Peranakan Museum",
    source: "http://www.pinangperanakanmansion.com.my",
    category: "tourist-spot"
  },

  {
    id: 41,
    name: "Ghost Museum Penang",
    price: "Malaysians: RM14.03, International tourists: RM21.07",
    location: "57, Lebuh Melayu, George Town, 10300 George Town, Pulau Pinang, Malaysia",
    openingHours: `Monday to Sunday from 10.00am to 7.00pm`,
    rating: "3.5",
    description: "The Ghost Museum Penang, located at 57, Lebuh Melayu in George Town, is a unique attraction that delves into the rich tapestry of ghostly myths and legends from various cultures.",
    details: "The Ghost Museum Penang, located at 57, Lebuh Melayu in George Town, is a unique attraction that delves into the rich tapestry of ghostly myths and legends from various cultures, including Malay, Chinese, Japanese, and Western traditions. Visitors can explore detailed exhibits featuring figures like the Pontianak, Toyol, and Dracula, each accompanied by informative descriptions. The museum offers interactive experiences, such as themed rooms and costumes, allowing guests to immerse themselves in the eerie atmosphere. It's an engaging destination for those interested in folklore and the supernatural.",
    img: "/41ghost-museum.webp",
    alt: "Ghost Museum Penang",
    source: "https://www.facebook.com/ghostmuseumpenang57",
    category: "tourist-spot"
  },

  {
    id: 42,
    name: "Han Jiang Ancestral Temple",
    price: "Free",
    location: "127, Chulia Street, George Town, 10200, Penang, Malaysia",
    openingHours: `Monday to Saturday: 8.30am - 5.00pm
                    Sunday: 8.30am - 12.30pm`,
    rating: "4.2",
    description: "Han Jiang Teochew Temple is a Chinese Taoist temple at Chulia Street, within George Town's UNESCO World Heritage Site.",
    details: "Han Jiang Teochew Temple is completed in 1870, it serves as the community temple of the Penang Teochew Association. The temple houses the altars to the Teochew patron deity, the Taoist god of the north and ancestral tablets dedicated to the deceased. It was built in the form of si dian jing ('four-point gold' in Mandarin) and has one of the largest doors of all Chinese clan temples on Penang Island. In addition, the temple has three doors, instead of one in most other temples.",
    img: "/42han-jiang-teochew.webp",
    alt: "Han Jiang Ancestral Temple",
    source: "https://mypenang.gov.my/culture-heritage/directory/406/?lg=en ",
    category: "tourist-spot"
  },

  {
    id: 43,
    name: "Kuan Yin Temple",
    price: "Free",
    location: "30 Jalan Masjid Kapitan Keling (Pitt Street), George Town, 10200, Penang, Malaysia",
    openingHours: `Monday to Sunday: 7.00am - 7.00pm`,
    rating: "4.5",
    description: "The Goddess of Mercy Temple, or Kuan Im Teng, is a Mahayana Buddhist temple in George Town, Penang, built in 1728, making it the oldest Buddhist temple in the state.",
    details: "The Goddess of Mercy Temple, or Kuan Im Teng, is a Mahayana Buddhist temple in George Town, Penang, built in 1728, making it the oldest Buddhist temple in the state. Initially dedicated to the sea deity Mazu, it transitioned to honor Guan Yin by 1800 due to the influx of Chinese migrants. It also served as a neutral mediator between Cantonese and Hokkien communities. Though its secular roles have shifted to the Penang Chinese Town Hall, the temple remains a significant religious site, hosting Chinese festivals like Guan Yin's feast days and the Jade Emperor's Birthday, attracting devotees from Southeast Asia.",
    img: "/43guanyin.webp",
    alt: "Kuan Yin Temple",
    source: "https://mypenang.gov.my/culture-heritage/directory/827/?lg=en ",
    category: "tourist-spot"
  },

  {
    id: 44,
    name: "Asia Camera Museum",
    price: "25 per pax",
    location: "71, 1st Floor, Armenian Street, 10200 Georgetown, Penang, Malaysia",
    openingHours: `Monday to Sunday 10.00AM - 06.00PM`,
    rating: "4.5",
    description: "Asia Camera Museum started open their doors to the public on 15 January, 2014. This is a place you can explore a variety of cameras and photographic accessories.",
    details: "Asia Camera Museum is the first Camera Museum of SouthEast Asia and a place where you can explore a variety of cameras and photographic accessories. They have an extensive collection from Germany, Sweden, America, Japan, and many more. All camera collections came from many different sources and were gathered due to their importance to the history of photography. It is an ideal place to visit for photographers and camera enthusiasts.",
    img: "/44asia-camera-museum.webp",
    alt: "Asia Camera Museum",
    source: "https://www.asiacameramuseum.com",
    category: "tourist-spot"
  },

  {
    id: 45,
    name: "Sun Yat Sen Museum",
    price: "Adult: RM10, Children aged 12 and below: RM5",
    location: "120 Armenian Street, George Town, 10200, Penang, Malaysia",
    openingHours: `Monday to Sunday 9.00am to 6.00pm`,
    rating: "4.5",
    description: "Sun Yat Sen Museum Penang offers a unique glimpse into a traditional Penang Peranakan heritage house.",
    details: "Sun Yat Sen Museum Penang offers a unique glimpse into a traditional Penang Peranakan heritage house. The unusually long townhouse, featuring a historic interior with an intimate courtyard garden, is a showcase of tropical architecture of the George Town World Heritage Site. The museum looks out on the lush, green pocket park on the quiet end of the famous Lebuh Armenian, the most popular tourist street in George Town. The museum hosts a permanent exhibition on Dr Sun Yat Sen as a young revolutionary in exile. He organised the Second Guangzhou Uprising from this spot in 1910 before becoming the first president of modern China. Visitors can partake of guided tours in Mandarin and English.",
    img: "/45SunYatSen-Museum-Penang.webp",
    alt: "Sun Yat Sen Museum",
    source: "https://mypenang.gov.my/all/directory/392/?lg=en",
    category: "tourist-spot"
  },

];

export default events;
