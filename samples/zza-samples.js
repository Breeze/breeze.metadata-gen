/**
 * Extracts from Zza-Node-Mongo
 */
(function(zza){

    zza.customers =
    [
        {
            "firstName": "Derek",
            "lastName": "Puckett",
            "phone": "(954) 594-9355",
            "email": "derek.puckett@vulputate.net",
            "address": {
                "street": "P.O. Box 914, 9990 Dapibus St.",
                "city": "Quam",
                "state": "OH",
                "zip": "55154"
            },
            "_id": "51f06ded06a7baa417000001"
        },
        {
            "firstName": "Bernard",
            "lastName": "Russell",
            "phone": "(203) 652-0465",
            "email": "bernard.russell@torquentper.com",
            "address": {
                "street": "324-6843 Dolor Ave",
                "city": "Quis",
                "state": "FL",
                "zip": "28034"
            },
            "_id": "51f06ded06a7baa417000002"
        },
        {
            "firstName": "Jordan",
            "lastName": "Jimenez",
            "phone": "(265) 520-8354",
            "email": "jordan.jimenez@variusorciin.co.uk",
            "address": {
                "street": "Ap #370-9242 Sed, Ave",
                "city": "Lorem",
                "state": "OR",
                "zip": "88091"
            },
            "_id": "51f06ded06a7baa417000003"
        },
        {
            "firstName": "Jordan",
            "lastName": "Holloway",
            "phone": "(761) 224-2078",
            "email": "jordan.holloway@felisullamcorper.edu",
            "address": {
                "street": "Ap #128-7062 Viverra. Road",
                "city": "Penatibus",
                "state": "PA",
                "zip": "82092"
            },
            "_id": "51f06ded06a7baa417000004"
        },
        {
            "firstName": "Dorian",
            "lastName": "Hurley",
            "phone": "(691) 714-1449",
            "email": "dorian.hurley@ipsumprimis.org",
            "address": {
                "street": "3100 Nunc St.",
                "city": "Nam",
                "state": "IL",
                "zip": "57878"
            },
            "_id": "51f06ded06a7baa417000005"
        },
        {
            "firstName": "Regan",
            "lastName": "Wright",
            "phone": "(126) 144-1855",
            "email": "regan.wright@ullamcorpernislarcu.edu",
            "address": {
                "street": "Ap #701-4141 Ante. Rd.",
                "city": "Dictum",
                "state": "KS",
                "zip": "82560"
            },
            "_id": "51f06ded06a7baa417000006"
        },
        {
            "firstName": "Hedda",
            "lastName": "Kemp",
            "phone": "(147) 741-1696",
            "email": "hedda.kemp@nunc.ca",
            "address": {
                "street": "P.O. Box 880, 3605 Nec, Ave",
                "city": "Dolor City",
                "state": "MS",
                "zip": "56403"
            },
            "_id": "51f06ded06a7baa417000007"
        },
        {
            "firstName": "Jordan",
            "lastName": "Kelly",
            "phone": "(859) 624-7317",
            "email": "jordan.kelly@lorem.org",
            "address": {
                "street": "P.O. Box 866, 3666 Phasellus Rd.",
                "city": "Rutrum",
                "state": "MN",
                "zip": "69800"
            },
            "_id": "51f06ded06a7baa417000008"
        },
        {
            "firstName": "Cheryl",
            "lastName": "Massey",
            "phone": "(601) 563-9471",
            "email": "cheryl.massey@dictumplacerat.edu",
            "address": {
                "street": "Ap #171-7323 Mattis Av.",
                "city": "Erat",
                "state": "OK",
                "zip": "02283"
            },
            "_id": "51f06ded06a7baa417000009"
        },
        {
            "firstName": "Erich",
            "lastName": "Barron",
            "phone": "(880) 947-3420",
            "email": "erich.barron@Loremipsumdolor.net",
            "address": {
                "street": "Ap #442-177 Volutpat Avenue",
                "city": "Egestas City",
                "state": "CT",
                "zip": "42871"
            },
            "_id": "51f06ded06a7baa41700000a"
        },
        {
            "firstName": "Brianna",
            "lastName": "Allen",
            "phone": "(298) 393-0372",
            "email": "brianna.allen@InfaucibusMorbi.com",
            "address": {
                "street": "P.O. Box 902, 5276 Semper St.",
                "city": "Rhoncus City",
                "state": "ME",
                "zip": "86063"
            },
            "_id": "51f06ded06a7baa41700000b"
        }
     ];

    zza.lookups =
    {
        "OrderStatus": [
            {
                "_id": 1,
                "name": "Ordered",
                "$type": "OrderStatus"
            },
            {
                "_id": 2,
                "name": "PickedUp",
                "$type": "OrderStatus"
            },
            {
                "_id": 3,
                "name": "Delivered",
                "$type": "OrderStatus"
            },
            {
                "_id": 4,
                "name": "Cancelled",
                "$type": "OrderStatus"
            },
            {
                "_id": 5,
                "name": "Pending",
                "$type": "OrderStatus"
            }
        ],
        "Product": [
            {
                "_id": 1,
                "type": "pizza",
                "name": "Plain Cheese",
                "description": "Your basic plain cheese pizza with no toppings.\nIncludes tomato sauce, mozzarella, oregano and a sprinkling of cheddar",
                "image": "plaincheese.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": true,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 2,
                "type": "pizza",
                "name": "Make Your Own",
                "description": "Make your own\nIncludes tomato sauce, mozzarella, oregano and a sprinkling of cheddar",
                "image": "makeyourown.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": true,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 3,
                "type": "pizza",
                "name": "Holy Smokes",
                "description": "Swiss, fontina, gorgonzola, mozzarella, roasted walnuts and fresh sage",
                "image": "holysmokes.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": true,
                "withTomatoSauce": false,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 4,
                "type": "pizza",
                "name": "Taj Mahal",
                "description": "Chicken marinated in spicy Tandoori sauce, green pepper, red onion, cilantro and mozzarella",
                "image": "tajmahal.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 5,
                "type": "pizza",
                "name": "Pestolante",
                "description": "Homemade pesto sauce, vine ripe tomatoes, feta, fresh basil, oregano and mozzarella",
                "image": "pestolante.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": true,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 6,
                "type": "pizza",
                "name": "Italian Stallion",
                "description": "Italian sausage, roasted red peppers, caramelized onions, parmesan, tomato sauce and mozzarella",
                "image": "italianstallion.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 7,
                "type": "pizza",
                "name": "Tom Terrific",
                "description": "Vine ripe tomatoes, garlic, fresh basil, mozzarella and cheddar",
                "image": "tomterrific.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": true,
                "withTomatoSauce": false,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 8,
                "type": "pizza",
                "name": "No Cheese",
                "description": "Fresh mushrooms, caramelized onions, broccoli, vine ripe tomatoes, roasted red peppers, fresh basil, oregano and tomato sauce",
                "image": "nocheese.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": true,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 9,
                "type": "pizza",
                "name": "Shanghai",
                "description": "Shredded pork marinated in a spicy hoisin style sauce, mozzarella, peanuts, green onions, jalape\u00f1os, carrots and fresh cilantro",
                "image": "shanghai.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 10,
                "type": "pizza",
                "name": "Lisbon",
                "description": "Portuguese linguica, smoked bacon, pepperoncini, roasted red peppers, tomato sauce, mozzarella, and fresh cilantro",
                "image": "lisbon.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 11,
                "type": "pizza",
                "name": "Jerusalem",
                "description": "Homemade hummus, vine ripe tomatoes, black olives, caramelized onions, feta, fresh basil, pepperoncini and mozzarella",
                "image": "jerusalem.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": true,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 12,
                "type": "pizza",
                "name": "Greco Irish",
                "description": "Homemade pesto sauce, roasted potatoes, caramelized onions, feta, fresh basil, oregano and mozzarella",
                "image": "grecoirish.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": true,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 13,
                "type": "pizza",
                "name": "Amadeus",
                "description": "Italian sausage, pepperoni, fresh mushrooms, red onions, tomato sauce, mozzarella and cheddar",
                "image": "amadeus.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 14,
                "type": "pizza",
                "name": "Mama Mia",
                "description": "Italian sausage, pepperoni, salami, beef meatball, tomato sauce, mozzarella and cheddar",
                "image": "mamamia.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 15,
                "type": "pizza",
                "name": "Hula Pie",
                "description": "Hawaiian pineapple, Canadian bacon, Mandarin oranges, tomato sauce, mozzarella and cheddar",
                "image": "hulapie.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 16,
                "type": "pizza",
                "name": "Little Venus",
                "description": "Spinach, artichoke hearts, sun-dried tomatoes, feta, garlic, fresh basil, oregano and mozzarella",
                "image": "littlevenus.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 17,
                "type": "pizza",
                "name": "Garden Gallop",
                "description": "Fresh mushrooms, green peppers, red onions, artichoke hearts, broccoli, vine ripe tomatoes, fresh basil, tomato sauce, mozzarella and cheddar",
                "image": "gardengallop.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 18,
                "type": "pizza",
                "name": "South of the Border",
                "description": "Grilled chicken, black beans and salsa, black olives, red onions, vine ripe tomatoes, jalape\u00f1os, fresh cilantro and cheddar",
                "image": "southoftheborder.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 19,
                "type": "pizza",
                "name": "Asian Chicken",
                "description": "Chicken marinated in a spicy ginger peanut sauce, peanuts, green onions, Swiss, fontina, fresh cilantro and mozzarella",
                "image": "asianchicken.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 20,
                "type": "pizza",
                "name": "Chicken Coolness",
                "description": "Chicken marinated in a tangy ranch sauce, broccoli, red onions, Swiss, fontina, gorgonzola, mozzarella and fresh sage",
                "image": "chickencoolness.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 21,
                "type": "pizza",
                "name": "Pork BBQ",
                "description": "Shredded pork marinated in a sweet BBQ sauce, red onions, fresh cilantro, cheddar and mozzarella",
                "image": "porkbbq.jpg",
                "hasOptions": true,
                "isPremium": true,
                "isVegetarian": false,
                "withTomatoSauce": true,
                "sizeIds": null,
                "$type": "Product"
            },
            {
                "_id": 22,
                "type": "salad",
                "name": "Caesar Salad",
                "description": "Crisp Romaine, parmesan and croutons",
                "image": "caesarsalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    7,
                    8
                ],
                "$type": "Product"
            },
            {
                "_id": 23,
                "type": "salad",
                "name": "Chicken Caesar Salad",
                "description": "Traditional Caesar with your choice of grilled or BBQ chicken",
                "image": "chickencaesarsalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    9
                ],
                "$type": "Product"
            },
            {
                "_id": 24,
                "type": "salad",
                "name": "Spinach Salad",
                "description": "Spinach, fresh mushrooms, caramelized onions, vine ripe tomatoes, artichoke hearts and candied walnuts.",
                "image": "spinachsalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    7,
                    8
                ],
                "$type": "Product"
            },
            {
                "_id": 25,
                "type": "salad",
                "name": "Garden Salad",
                "description": "Red leaf lettuce, black olives, fresh mushrooms, green peppers, red onions, artichoke hearts, vine ripe tomatoes and mozzarella",
                "image": "gardensalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    7,
                    8
                ],
                "$type": "Product"
            },
            {
                "_id": 26,
                "type": "salad",
                "name": "Greek Salad",
                "description": "Red leaf lettuce, red onions, feta, olives and pepperoncinis",
                "image": "greeksalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    7,
                    8
                ],
                "$type": "Product"
            },
            {
                "_id": 27,
                "type": "salad",
                "name": "Chef Salad",
                "description": "Crisp Romaine, spiced ham, turkey, salami, gorgonzola, green onions, vine ripe tomatoes and roasted red peppers",
                "image": "chefsalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    9
                ],
                "$type": "Product"
            },
            {
                "_id": 28,
                "type": "salad",
                "name": "Thai Chicken Salad",
                "description": "Crisp Romaine, green onions, Mandarin oranges, carrots, crispy noodles and chicken marinated in a spicy ginger peanut sauce",
                "image": "thaichickensalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    9
                ],
                "$type": "Product"
            },
            {
                "_id": 29,
                "type": "salad",
                "name": "Farmer Salad",
                "description": "Crisp Romaine, smoked bacon, grilled chicken, vine ripe tomatoes and gorgonzola",
                "image": "farmersalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    9
                ],
                "$type": "Product"
            },
            {
                "_id": 30,
                "type": "salad",
                "name": "Big Country Salad",
                "description": "Spinach, smoked bacon, feta, candied walnuts, caramelized onions and vine ripe tomatoes",
                "image": "bigcountrysalad.jpg",
                "hasOptions": true,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    9
                ],
                "$type": "Product"
            },
            {
                "_id": 31,
                "type": "drink",
                "name": "Cola",
                "description": "Cola",
                "image": "cola.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    10,
                    11,
                    12
                ],
                "$type": "Product"
            },
            {
                "_id": 32,
                "type": "drink",
                "name": "Diet Cola",
                "description": "Diet Cola",
                "image": "dietcola.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    10,
                    11,
                    12
                ],
                "$type": "Product"
            },
            {
                "_id": 33,
                "type": "drink",
                "name": "Root Beer",
                "description": "Root Beer",
                "image": "rootbeer.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    10,
                    11,
                    12
                ],
                "$type": "Product"
            },
            {
                "_id": 34,
                "type": "drink",
                "name": "Cascade Fog",
                "description": "Cascade Fog",
                "image": "cascadefog.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    10,
                    11,
                    12
                ],
                "$type": "Product"
            },
            {
                "_id": 35,
                "type": "drink",
                "name": "Dr. Popper",
                "description": "Dr. Popper",
                "image": "dr.popper.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    10,
                    11,
                    12
                ],
                "$type": "Product"
            },
            {
                "_id": 36,
                "type": "drink",
                "name": "Lemon Spruce",
                "description": "Lemon Spruce",
                "image": "lemonspruce.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    10
                ],
                "$type": "Product"
            },
            {
                "_id": 37,
                "type": "drink",
                "name": "Green Tea",
                "description": "Green Tea",
                "image": "greentea.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    13
                ],
                "$type": "Product"
            },
            {
                "_id": 38,
                "type": "drink",
                "name": "Orange Juice",
                "description": "Orange Juice",
                "image": "orangejuice.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    14
                ],
                "$type": "Product"
            },
            {
                "_id": 39,
                "type": "drink",
                "name": "Apple Juice",
                "description": "Apple Juice",
                "image": "applejuice.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    14
                ],
                "$type": "Product"
            },
            {
                "_id": 40,
                "type": "drink",
                "name": "Energade",
                "description": "Energade",
                "image": "energade.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    15
                ],
                "$type": "Product"
            },
            {
                "_id": 41,
                "type": "drink",
                "name": "Aqua H2O",
                "description": "Aqua H2O",
                "image": "aquah2o.jpg",
                "hasOptions": false,
                "isPremium": false,
                "isVegetarian": false,
                "withTomatoSauce": false,
                "sizeIds": [
                    14
                ],
                "$type": "Product"
            }
        ],
        "ProductOption": [
            {
                "_id": 1,
                "type": "crust",
                "name": "Classic Crust",
                "factor": 0,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 2,
                "type": "crust",
                "name": "Wheat Crust",
                "factor": 0,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 3,
                "type": "crust",
                "name": "Gluten-free Crust",
                "factor": 0,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 4,
                "type": "sauce",
                "name": "Tomato",
                "factor": 0,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 5,
                "type": "sauce",
                "name": "Pesto*",
                "factor": 2,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 6,
                "type": "sauce",
                "name": "Salsa",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 7,
                "type": "sauce",
                "name": "Texas BBQ",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 8,
                "type": "sauce",
                "name": "Hummus",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 9,
                "type": "sauce",
                "name": "Hoisin",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 10,
                "type": "sauce",
                "name": "Ranch",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 11,
                "type": "sauce",
                "name": "Vegemite",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 12,
                "type": "sauce",
                "name": "Tandoori",
                "factor": 1,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 13,
                "type": "cheese",
                "name": "Feta",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 14,
                "type": "cheese",
                "name": "Fontina & Swiss",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 15,
                "type": "cheese",
                "name": "Soy",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 16,
                "type": "cheese",
                "name": "Cheddar",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 17,
                "type": "cheese",
                "name": "Ricotta",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 18,
                "type": "cheese",
                "name": "Gorgonzola",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 19,
                "type": "cheese",
                "name": "Mozzarella",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 20,
                "type": "veggie",
                "name": "Black Olives",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 21,
                "type": "veggie",
                "name": "Broccoli",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 22,
                "type": "veggie",
                "name": "Jalapenos",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 23,
                "type": "veggie",
                "name": "Fresh Mushrooms",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 24,
                "type": "veggie",
                "name": "Red Onions",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 25,
                "type": "veggie",
                "name": "Artichoke Heart",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 26,
                "type": "veggie",
                "name": "Green Onions",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 27,
                "type": "veggie",
                "name": "Spinach",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 28,
                "type": "veggie",
                "name": "Sun-Dried Tomatoes",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 29,
                "type": "veggie",
                "name": "Vine Ripe Tomatoes",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 30,
                "type": "veggie",
                "name": "Green Peppers",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 31,
                "type": "veggie",
                "name": "Roasted Red Peppers",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 32,
                "type": "veggie",
                "name": "Roasted Potatoes",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 33,
                "type": "veggie",
                "name": "Hawaiian Pineapple",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 34,
                "type": "veggie",
                "name": "Mandarin Oranges",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 35,
                "type": "veggie",
                "name": "Walnuts",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 36,
                "type": "veggie",
                "name": "Candied Walnuts",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 37,
                "type": "veggie",
                "name": "Peanuts",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 38,
                "type": "veggie",
                "name": "Pepperoncini",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 39,
                "type": "veggie",
                "name": "Caramelized Onions",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 40,
                "type": "veggie",
                "name": "Carrots",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 41,
                "type": "meat",
                "name": "Pepperoni",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 42,
                "type": "meat",
                "name": "Italian Sausage",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 43,
                "type": "meat",
                "name": "Salami",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 44,
                "type": "meat",
                "name": "Smoked Bacon",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 45,
                "type": "meat",
                "name": "Canadian Bacon",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 46,
                "type": "meat",
                "name": "BBQ Chicken*",
                "factor": 2,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 47,
                "type": "meat",
                "name": "Thai Chicken*",
                "factor": 2,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 48,
                "type": "meat",
                "name": "Grilled Chicken*",
                "factor": 2,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 49,
                "type": "meat",
                "name": "Beef Meatball",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 50,
                "type": "meat",
                "name": "Shredded BBQ Pork*",
                "factor": 2,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 51,
                "type": "meat",
                "name": "Anchovies",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 52,
                "type": "meat",
                "name": "Linguica",
                "factor": 1,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 53,
                "type": "spice",
                "name": "Basil",
                "factor": 0,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 54,
                "type": "spice",
                "name": "Cilantro",
                "factor": 0,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 55,
                "type": "spice",
                "name": "Garlic",
                "factor": 0,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 56,
                "type": "spice",
                "name": "Sage",
                "factor": 0,
                "productTypes": [
                    "pizza",
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 57,
                "type": "spice",
                "name": "Oregano",
                "factor": 0,
                "productTypes": [
                    "pizza"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 58,
                "type": "saladDressing",
                "name": "No Dressing",
                "factor": 0,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 59,
                "type": "saladDressing",
                "name": "Vinaigrette",
                "factor": 1,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 60,
                "type": "saladDressing",
                "name": "Ranch",
                "factor": 1,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 61,
                "type": "saladDressing",
                "name": "Caesar",
                "factor": 1,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 62,
                "type": "saladDressing",
                "name": "Red Pepper Italian",
                "factor": 1,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 63,
                "type": "saladDressing",
                "name": "Bleu Cheese",
                "factor": 1,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            },
            {
                "_id": 64,
                "type": "saladDressing",
                "name": "Sesame Oriental",
                "factor": 1,
                "productTypes": [
                    "salad"
                ],
                "$type": "ProductOption"
            }
        ],
        "ProductSize": [
            {
                "_id": 1,
                "type": "pizza",
                "name": "Personal 8\"",
                "price": 6.15,
                "premiumPrice": 7.65,
                "toppingPrice": 0.65,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 2,
                "type": "pizza",
                "name": "Medium 12\"",
                "price": 12.4,
                "premiumPrice": 16.95,
                "toppingPrice": 1.35,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 3,
                "type": "pizza",
                "name": "Large 14\"",
                "price": 14.45,
                "premiumPrice": 20.95,
                "toppingPrice": 1.7,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 4,
                "type": "pizza",
                "name": "X-Large 16\"",
                "price": 16.5,
                "premiumPrice": 23.45,
                "toppingPrice": 2.05,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 5,
                "type": "pizza",
                "name": "Huge 18\"",
                "price": 17.95,
                "premiumPrice": 26.95,
                "toppingPrice": 2.25,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 6,
                "type": "pizza",
                "name": "Gluten Free 12\"",
                "price": 16.9,
                "premiumPrice": 21.45,
                "toppingPrice": 1.35,
                "isGlutenFree": true,
                "$type": "ProductSize"
            },
            {
                "_id": 7,
                "type": "salad",
                "name": "Side",
                "price": 3.95,
                "premiumPrice": null,
                "toppingPrice": 0.65,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 8,
                "type": "salad",
                "name": "Entree",
                "price": 7.95,
                "premiumPrice": null,
                "toppingPrice": 1.3,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 9,
                "type": "salad",
                "name": "Entree",
                "price": 8.95,
                "premiumPrice": null,
                "toppingPrice": 1.3,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 10,
                "type": "drink",
                "name": "Can",
                "price": 1.5,
                "premiumPrice": null,
                "toppingPrice": null,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 11,
                "type": "drink",
                "name": "20 oz",
                "price": 1.95,
                "premiumPrice": null,
                "toppingPrice": null,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 12,
                "type": "drink",
                "name": "2 liter",
                "price": 2.75,
                "premiumPrice": null,
                "toppingPrice": null,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 13,
                "type": "drink",
                "name": "20 oz",
                "price": 1.75,
                "premiumPrice": null,
                "toppingPrice": null,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 14,
                "type": "drink",
                "name": "Serving",
                "price": 1.75,
                "premiumPrice": null,
                "toppingPrice": null,
                "isGlutenFree": false,
                "$type": "ProductSize"
            },
            {
                "_id": 15,
                "type": "drink",
                "name": "Serving",
                "price": 2,
                "premiumPrice": null,
                "toppingPrice": null,
                "isGlutenFree": false,
                "$type": "ProductSize"
            }
        ]
    };

    zza.orderStatuses = zza.lookups.OrderStatus;

})(module.exports);

