//load('/Users/Hesham Alsaeedi/OneDrive/Seattle University/Master of Software Engineering/2017/Spring/FieldBookingSystem/FieldBookingSystem/server/scripts/createDb.js')

db = db.getSiblingDB('FRS'); //Database name

//admins Collection
//==========================================================
//==========================================================

// Creating admins collection
db.createCollection('admins');
adminsCollection = db.getCollection("admins");
adminsCollection.remove({});

// Inserting documents
for (i = 0; i < 3; i++) {
    adminsCollection.insert({
        adminUserName: "admin" + i,
        adminId: i,
        organization: "organization " + i,
        phoneNumber: 2066189002
    });
}


//users Collection
//==========================================================
//==========================================================

// Creating users collection
db.createCollection('users');
usersCollection = db.getCollection("users");
usersCollection.remove({});

// Inserting documents
usersCollection.insert({
    userName: "user1",
    userId: 1,
    firstName: "Hesham",
    lastName: "Alsaeedi",
    phoneNo: "206-618-9002"
});

usersCollection.insert({
    userName: "user2",
    userId: 2,
    firstName: "James",
    lastName: "Barracca",
    phoneNo: "206-618-9002"
});

usersCollection.insert({
    userName: "user3",
    userId: 3,
    firstName: "Jacob",
    lastName: "Lee",
    phoneNo: "206-618-9002"
});


//Sports Collection
//==========================================================
//==========================================================

// Creating sports collection
db.createCollection('sports');
sportsCollection = db.getCollection("sports");
sportsCollection.remove({});

sportsCollection.insert({
    sportName: "Soccer",
    sportId: 1
});
sportsCollection.insert({
    sportName: "Tennis",
    sportId: 2
});
sportsCollection.insert({
    sportName: "Basketball",
    sportId: 3
});
sportsCollection.insert({
    sportName: "Baseball",
    sportId: 4
});
sportsCollection.insert({
    sportName: "Volleyball",
    sportId: 5
});



//Field Types Collection
//==========================================================
//==========================================================

// Creating field types collection
db.createCollection('fieldTypes');
fieldTypesCollection = db.getCollection("fieldTypes");
fieldTypesCollection.remove({});

fieldTypesCollection.insert({
    fieldTypeName: "Turf",
    fieldTypeId: 1
});
fieldTypesCollection.insert({
    fieldTypeName: "Grass",
    fieldTypeId: 2
});
fieldTypesCollection.insert({
    fieldTypeName: "Sand",
    fieldTypeId: 3
});
fieldTypesCollection.insert({
    fieldTypeName: "Indoor",
    fieldTypeId: 4
});
fieldTypesCollection.insert({
    fieldTypeName: "Clay",
    fieldTypeId: 5
});
fieldTypesCollection.insert({
    fieldTypeName: "Softball",
    fieldTypeId: 6
});

//Fields Collection
//==========================================================
//==========================================================

// Creating fields collection
db.createCollection('fields');
fieldsCollection = db.getCollection("fields");
fieldsCollection.remove({});

fieldsCollection.insert({
    fieldId: 1,
    adminId: 1,
    fieldName: "Ballard Playground Baseball/Softball Field #1",
    fieldHourlyPrice: 60,
    description: "Ballard Playfield is adjacent to Ballard Community Center and Adams Elementary School. It is a multi-purpose playfield featuring a children's play area and a soccer/baseball/softball field.",
    imageFileURL: "https://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/MNOP/MagnoliaPlayfield1.jpg",
    address: "2644 NW 60th St., Seattle, WA 98107",
    sport: [{
            sportName: "Baseball",
            sportId: 4
        },
        {
            sportName: "Softball",
            sportId: 6
        }
    ],
    fieldType: [{
        fieldTypeName: "Grass",
        fieldTypeId: 2
    }]
});

fieldsCollection.insert({
    fieldId: 1,
    adminId: 1,
    fieldName: "Bobby Morris Field (at Cal Anderson Park) Soccer Field",
    fieldHourlyPrice: 80,
    description: "Cal Anderson is located in Seattle's Capitol Hill neighborhood and is the hub of the community. Cal Anderson Park includes a fountain, texture pool and reflecting pool, promenade paths, landscaping, a shelterhouse, a plaza, a children's play area, a wading pool, a lighted sports field, and a number of oversize chess boards. This open park invites walking, sitting, reading, contemplation, informal sports in the meadow, and organized sports on the athletic field.",
    imageFileURL: "https://media-cdn.tripadvisor.com/media/photo-s/07/96/6d/0d/cal-anderson-park.jpg",
    address: "1635 11th Ave., Seattle, WA 98122",
    sport: [{
        sportName: "Soccer",
        sportId: 1
    }],
    fieldType: [{
        fieldTypeName: "Turf",
        fieldTypeId: 1
    }]
});


//requests Collection
//==========================================================
//==========================================================

// Creating requests collection
db.createCollection('requests');
requestsCollection = db.getCollection("requests");
requestsCollection.remove({});


requestsCollection.insert({
    requestId: 1,
    fieldId: 1,
    duration: 120,
    purpose: "little league baseball",
    totalPrice: 200,
    status: "pending",
    requestDateTime: new Date(2016, 4, 05, 20, 30, 0, 0),
    createDateTime: new Date(2016, 3, 18, 20, 30, 0, 0)
});

requestsCollection.insert({
    requestId: 2,
    fieldId: 2,
    duration: 90,
    purpose: "playing soccer with friends",
    totalPrice: 200,
    status: "complete",
    requestDateTime: new Date(2016, 3, 28, 20, 30, 0, 0),
    createDateTime: new Date(2016, 3, 18, 20, 30, 0, 0)
});