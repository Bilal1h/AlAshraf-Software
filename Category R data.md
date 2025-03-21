

Ok so now i want to customize the each_house_category model, with the following data
S.NO  | PLOT NO |   NAME WITH S/O W/O D/O                              |    CONSTRUCTION | SHARE TYPE MEMBERSHIP NO |  CONTACT NO. 
this data will be for each house, well now i will give you the whole data, based on that generate a route that will create this datain a loop, bascially you can craete an array of objects containing all the data, well the first step would be make the each_house_category model, for that model i had provided you the required data, also also also please create a loop and then category would be R for the month of january, also fo the all of months, So in short if in January 29 houses are being created so in total 12 months, "348" houses will be created in which each 29 of them consists the data from that table, 
Also i had already created the each_house_category model so make sure that the values already in it will be there as it is, only the things from the table will be added in that model
Pleas create such loop here is the data





S.NO  | PLOT NO |   NAME WITH S/O W/O D/O                              |    CONSTRUCTION               | SHARE TYPE MEMBERSHIP NO |  CONTACT NO.
1     |  R - 1  |  MR M. ADNAN MAIRAJ S\O MAIRAJUDDIN                  |    G                          | R 16                     | 0300 2565512
2     |  R - 2  |  MR. NADEEM AHMED S/O S. FAIZ UL HASAN               |    G                          | R - 551                  | blank
3     |  R - 2A |  MR. S. TARIQ JAMAL HASHMI S/O S. JAMAL AHMED HASHMI |    G                          | R - 991                  | blank
4     |  R - 3  |   MR. M. ILYAS S/O M. RAUF                           |    G + 2                      | R - 523                  | blank
5     |  R - 3A |   MRS. ZAIN UL EBAD W/O S. ZAINUL EBAD               |    G + 1                      | R - 623                  | blank
6     |  R - 4  |   HAFIZ M. RAFIQ S/O KHUSHI MUHAMMAD                 |    G + 1                      | R - 25                   | blank
7     |  R - 4A |   MRS. ABIDA RAHAT W/O M. RAHAT                      |    G                          | R - 624                  | blank
8     |  R - 4B |  blank                                               |    plot (0)                   | blank                    | blank 
9     |  R - 5  |   MRS. MUSHKBAR FATIMA W/O FARAZ AHMED               |    G                          | R - 552                  | blank
10    |  R - 6  |  MR. ZEESHAN MUMTAZ S/O MUMTAZ AHMED                 |    G + 1                      | R - 23                   | blank
11    |  R - 7  |  MRS. KULSOOM BEGUM W/O M. HANIF                     |    G                          | R - 311                  | blank
12    |  R - 8  |  MRS. ANUM SALMAN W/O AHMAD SALMAN                   |    G + 1                      | R - 530                  | blank
13    |  R - 9  |  MR. M. UMAIR S/O M. SALEEM                          |    G + 2                      | R - 548                  | blank
14    |  R - 10 |  MR. SALIMULLAH S/O AMANULLAH                        |    G                          | R - 301                  | blank
15    |  R - 11 |  MR. M. MAAZ S/O ABDUL RAHIM                         |    G                          | R - 507                  | blank
16    |  R - 12 |  MR. ZAIN UL ABEDIN S/O SYED MUJEEB ULLAH            |    G + 1                      | R - 553                  | blank
17    |  R - 13 |  MR. M. MIAN S/O AJAN MIAN                           |    G + 1                      | R - 544                  | blank
18    |  R - 14 |  blank                                               |    plot (0)                   | blank                    | blank
19    |  R - 15 |  MRS. SALMA KHATOON W/O M. ADNAN MAIRAJ              |    G                          | R - 542                  | blank
20    |  R - 16 |  MR. ASADULLAH KHAN S/O FEROZ KHAN                   |    G + 1                      | R - 538                  | blank
21    |  R - 17 |  blank                                               |    plot (0)                   | blank                    | blank
22    |  R - 18 |  blank                                               |    plot (0)                   | blank                    | blank
23    |  R - 19 |  blank                                               |    plot (0)                   | blank                    | blank
24    |  R - 20 |  MR. ISHAQ USMANI S/O USMAN GHANI                    |    G + 1                      | R - 500                  | blank
25    |  R - 21 |  MRS. SHAGUFTA W/O TANVEER                           |    G + 2                      | R - 524                  | blank
26    |  R - 22 |  MR. S. NOORAN SHAH S/O                              |    G + 1                      | R - 159                  | blank
27    |  R - 23 |  M. ADNAN MAIRAJ S/O MAIRAJUDDIN                     |    G + 2                      | R - 338                  | blank
28    |  R - 24 |  M. FAROOQ JAMIL S/O M. JAMIL QURESHI                |    G + 1                      | R - 514                  | blank
29    |  R - 25 |  blank                                               |    blank                      | blank                    | blank 






Now i want to create another route to add 29 houses in R category in each month , meaning that in total 348 documents will be created, well in the 29 documents of each month, put the "amount_to_be_collected" value of first 5 plots as "0",  put the "amount_to_be_collected" value of next 20 plots as "basevalue + 1000" which means that these 15 plots will contain floor value as 1, and now keep the left 4 plot's "amount_to_be_collected" value as "baseValue"
Well keep the same logic in all months so if i tell in you complete summary
in total 348 documents there will be  "60" plots empty, in which each month contains "5" empty plots, same for the (+1 Ground floor houses) and (Ground floor houses)
So please create a route to make such a huge amount of houses.



 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const category = "A";
  const baseValue = 4000; // Base value for the "A" category





const plotNumbers = [
  "R - 1",
  "R - 2",
  "R - 2A",
  "R - 3",
  "R - 3A",
  "R - 4",
  "R - 4A",
  "R - 4B",
  "R - 5",
  "R - 6",
  "R - 7",
  "R - 8",
  "R - 9",
  "R - 10",
  "R - 11",
  "R - 12",
  "R - 13",
  "R - 14",
  "R - 15",
  "R - 16",
  "R - 17",
  "R - 18",
  "R - 19",
  "R - 20",
  "R - 21",
  "R - 22",
  "R - 23",
  "R - 24",
  "R - 25"
];











const namesArray = [
  "MR M. ADNAN MAIRAJ S/O MAIRAJUDDIN",
  "MR. NADEEM AHMED S/O S. FAIZ UL HASAN",
  "MR. S. TARIQ JAMAL HASHMI S/O S. JAMAL AHMED HASHMI",
  "MR. M. ILYAS S/O M. RAUF",
  "MRS. ZAIN UL EBAD W/O S. ZAINUL EBAD",
  "HAFIZ M. RAFIQ S/O KHUSHI MUHAMMAD",
  "MRS. ABIDA RAHAT W/O M. RAHAT",
  "",
  "MRS. MUSHKBAR FATIMA W/O FARAZ AHMED",
  "MR. ZEESHAN MUMTAZ S/O MUMTAZ AHMED",
  "MRS. KULSOOM BEGUM W/O M. HANIF",
  "MRS. ANUM SALMAN W/O AHMAD SALMAN",
  "MR. M. UMAIR S/O M. SALEEM",
  "MR. SALIMULLAH S/O AMANULLAH",
  "MR. M. MAAZ S/O ABDUL RAHIM",
  "MR. ZAIN UL ABEDIN S/O SYED MUJEEB ULLAH",
  "MR. M. MIAN S/O AJAN MIAN",
  "",
  "MRS. SALMA KHATOON W/O M. ADNAN MAIRAJ",
  "MR. ASADULLAH KHAN S/O FEROZ KHAN",
  "",
  "",
  "",
  "MR. ISHAQ USMANI S/O USMAN GHANI",
  "MRS. SHAGUFTA W/O TANVEER",
  "MR. S. NOORAN SHAH S/O",
  "M. ADNAN MAIRAJ S/O MAIRAJUDDIN",
  "M. FAROOQ JAMIL S/O M. JAMIL QURESHI",
  ""
];





const floors = [
  "G",
  "G",
  "G",
  "G + 2",
  "G + 1",
  "G + 1",
  "G",
  "Plot",
  "G",
  "G + 1",
  "G",
  "G + 1",
  "G + 2",
  "G",
  "G",
  "G + 1",
  "G + 1",
  "Plot",
  "G",
  "G + 1",
  "Plot",
  "Plot",
  "Plot",
  "G + 1",
  "G + 2",
  "G + 1",
  "G + 2",
  "G + 1",
  ""
];





const shareTypeMembership = [
  "R 16",
  "R - 551",
  "R - 991",
  "R - 523",
  "R - 623",
  "R - 25",
  "R - 624",
  "blank",
  "R - 552",
  "R - 23",
  "R - 311",
  "R - 530",
  "R - 548",
  "R - 301",
  "R - 507",
  "R - 553",
  "R - 544",
  "blank",
  "R - 542",
  "R - 538",
  "blank",
  "blank",
  "blank",
  "R - 500",
  "R - 524",
  "R - 159",
  "R - 338",
  "R - 514",
  "blank"
];



const contactNumbers = [
  "0300 2565512",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];


This is my Each_house_category mdoel so make sure to add value in loop on these parameters
const mongoose = require("mongoose");

const each_house_category_Schema = new mongoose.Schema({
    name: String,
    OwnerName: String,
    OwnerPhone: String,
    amount_to_be_collected: Number,
    is_amount_collected: {type:Boolean, default: false},
    category: String,
    month: String,
    shareTypeMembershipNumber: String,
    floors: String,
    monthId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "months"
    }],
    date: { type: Date, default: Date.now },
    ParentHouseid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house_category"
    },
});

module.exports = mongoose.model("each_house_category", each_house_category_Schema);













Well create that floor's logic here as well in this route
router.get("/addhousesR", async function (req, res, next) {
  try {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const category = "R";
    const baseValue = 4000; // Base value for the "R" category

    const plotNumbers = [
      "R - 1", "R - 2", "R - 2A", "R - 3", "R - 3A", "R - 4", "R - 4A", "R - 4B", "R - 5", "R - 6",
      "R - 7", "R - 8", "R - 9", "R - 10", "R - 11", "R - 12", "R - 13", "R - 14", "R - 15", "R - 16",
      "R - 17", "R - 18", "R - 19", "R - 20", "R - 21", "R - 22", "R - 23", "R - 24", "R - 25"
    ];

    const namesArray = [
      "MR M. ADNAN MAIRAJ S/O MAIRAJUDDIN", "MR. NADEEM AHMED S/O S. FAIZ UL HASAN", "MR. S. TARIQ JAMAL HASHMI S/O S. JAMAL AHMED HASHMI",
      "MR. M. ILYAS S/O M. RAUF", "MRS. ZAIN UL EBAD W/O S. ZAINUL EBAD", "HAFIZ M. RAFIQ S/O KHUSHI MUHAMMAD", "MRS. ABIDA RAHAT W/O M. RAHAT",
      "", "MRS. MUSHKBAR FATIMA W/O FARAZ AHMED", "MR. ZEESHAN MUMTAZ S/O MUMTAZ AHMED", "MRS. KULSOOM BEGUM W/O M. HANIF",
      "MRS. ANUM SALMAN W/O AHMAD SALMAN", "MR. M. UMAIR S/O M. SALEEM", "MR. SALIMULLAH S/O AMANULLAH", "MR. M. MAAZ S/O ABDUL RAHIM",
      "MR. ZAIN UL ABEDIN S/O SYED MUJEEB ULLAH", "MR. M. MIAN S/O AJAN MIAN", "", "MRS. SALMA KHATOON W/O M. ADNAN MAIRAJ",
      "MR. ASADULLAH KHAN S/O FEROZ KHAN", "", "", "", "MR. ISHAQ USMANI S/O USMAN GHANI", "MRS. SHAGUFTA W/O TANVEER",
      "MR. S. NOORAN SHAH S/O", "M. ADNAN MAIRAJ S/O MAIRAJUDDIN", "M. FAROOQ JAMIL S/O M. JAMIL QURESHI", ""
    ];

    const floors = [
      "G", "G", "G", "G + 2", "G + 1", "G + 1", "G", "Plot", "G", "G + 1", "G", "G + 1", "G + 2", "G", "G",
      "G + 1", "G + 1", "Plot", "G", "G + 1", "Plot", "Plot", "Plot", "G + 1", "G + 2", "G + 1", "G + 2", "G + 1", ""
    ];

    const shareTypeMembership = [
      "R 16", "R - 551", "R - 991", "R - 523", "R - 623", "R - 25", "R - 624", "blank", "R - 552", "R - 23",
      "R - 311", "R - 530", "R - 548", "R - 301", "R - 507", "R - 553", "R - 544", "blank", "R - 542", "R - 538",
      "blank", "blank", "blank", "R - 500", "R - 524", "R - 159", "R - 338", "R - 514", "blank"
    ];

    const contactNumbers = [
      "0300 2565512", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
    ];

    for (const month of months) {
      const monthOfThisCategory = await monthsModel.findOne({ name: month });
      const categoryOfThisMonth = await houseCategoryModel.findOne({ name: category, month });

      for (let i = 0; i < plotNumbers.length; i++) {
        let amountToBeCollected;
        if (i < 5) {
          amountToBeCollected = 0;
        } else if (i < 25) {
          amountToBeCollected = baseValue + 1000;
        } else {
          amountToBeCollected = baseValue;
        }

        await houseModel.create({
          name: plotNumbers[i],
          OwnerName: namesArray[i],
          OwnerPhone: contactNumbers[i],
          amount_to_be_collected: amountToBeCollected,
          is_amount_collected: false,
          category,
          month,
          shareTypeMembershipNumber: shareTypeMembership[i],
          floors: floors[i],
          monthId: monthOfThisCategory._id,
          ParentHouseid: categoryOfThisMonth._id
        });
      }
    }

    res.send("Houses added successfully");
  } catch (error) {
    console.error("Error adding houses:", error);
    res.status(500).send("Server Error");
  }
});


Also Keep the floor's logic from " /:month/:category/addhouse " route
which is this route
router.post("/:month/:category/addhouse", isLoggedIn, async function (req, res, next) {
  try {
    const currentDate = new Date().toISOString().split('T')[0];

    // Fetch the category details
    const category_of_that_month_of_this_house = await houseCategoryModel.findOne({
      month: req.params.month,
      name: req.params.category
    });

    if (!category_of_that_month_of_this_house) {
      throw new Error(`Category ${req.params.category} not found for month ${req.params.month}`);
    }

    const baseAmount = category_of_that_month_of_this_house.amount_per_house;
    if (isNaN(baseAmount)) {
      throw new Error("amount_per_house is not a valid number.");
    }

    // Floor label dictionary
    const floorDict = { 0: "Plot", 1: "G", 2: "G+1", 3: "G+2", 4: "G+3", 5: "G+4" };

    // Parse floor input and validate
    const floors = parseInt(req.body.floors, 10);
    if (isNaN(floors) || floors < 0 || floors > 5) {
      throw new Error("Invalid floors input.");
    }

    // Assign the correct label
    const floorLabel = floorDict[floors];

    // Calculate the amount to be collected
    const amountToBeCollected = baseAmount + ((floors - 1) * 1000);

    // Create a new house entry
    const newHouse = await houseModel.create({
      name: req.body.housename,
      amount_to_be_collected: amountToBeCollected,
      is_amount_collected: req.body.isammountcollected === "true",
      category: req.body.selectcategory,
      month: req.params.month,
      floors: floorLabel,  // Storing floor label instead of number
      date: currentDate,
      ParentHouseid: category_of_that_month_of_this_house._id
    });

    // Update the house category with new house entry
    await houseCategoryModel.findOneAndUpdate(
      { name: req.body.selectcategory },
      { $push: { data: newHouse._id } },
      { new: true }
    );

    // Redirect after successful insertion
    res.redirect(`/show/${req.params.month}/category/${req.body.selectcategory}/data`);
  } catch (error) {
    console.error("Error adding house:", error);
    res.status(500).send(error.message);
  }
});

























 | 1 - A - 1    |  MRS. UZMA MUZAFFAR S/O MUZAFFAR KHAN                               |   G   | R - 517
 | 1 - A - 2    |  MR. M. HARRIS S/O SAJEEL AHMED                                     |   G   | R - 512
 | 1 - A - 3    |  blank                                                              | blank | blank | 
 | 1 - A - 4    |  blank                                                              | blank | blank |
 | 1 - A - 5    |  blank                                                              | blank | blank |
 | 1 - A - 6    |  blank                                                              | blank | blank |
 | 1 - A - 7    |  MRS. SALMA JAMIL S/O JAMIL AHMED                                   | G + 1 | R - 351
 | 1 - A - 8    |  MR. M. SHOAIB KHAN S/O ZAFAR UL HASAN KHAN                         | G     | R - 341
 | 1 - A - 9    |  MR. M. AMIR ANSARI S/O M. IBRAHIM ANSARI                           | U C   | R - 405
 | 1 - A - 9  A |  MR. M. SULTAN S/O M. IDREES                                        | G + 1 | R - 1062
 | 1 - A - 9  B |  blank                                                              | blank | blank |
 | 1 - A - 9  C |   MR. SHAMIM UL HAQ S/O EHTESHAM UL HAQ                             | G+1UC | R - 1058
 | 1 - A - 9  D |  blank                                                              | blank | blank |
 | 1 - A - 9  E |  E MRS. AISHA TAHIR W/O TAHIR IMRAN                                 | G+1UC | R - 990
 | 1 - A - 10   | MR. BASHARAT KHAN S/O BASHIR AHMED                                  | G + 1 | R - 516
 | 1 - A - 11   |  blank                                                              | blank | blank |
 | 1 - A - 12   |  blank                                                              | blank | blank |
 | 1 - A - 13   |  blank                                                              | blank | blank |
 | 1 - A - 14   | MRS. REHMANI BEGUM W/O SHAKEEL AHMED                                | G     | R - 291
 | 1 - A - 17   |  blank                                                              | blank | blank |
 | 1 - A - 15   |  blank                                                              | blank | blank |
 | 1 - A - 16   |  blank                                                              | blank | blank |
 | 1 - A - 18   | MR. M. ZUBAIR S/O KHALIL UR REHMAN                                  | G     | R - 403
 | 1 - A - 19   |  blank                                                              | blank | blank |
 | 1 - A - 20   |  blank                                                              | blank | blank |
 | 1 - A - 21   |  blank                                                              | blank | blank |
 | 1 - A - 22   |  blank                                                              | blank | blank |
 | 1 - A - 23   |  blank                                                              | blank | blank |
 | 1 - A - 24   |  blank                                                              | blank | blank |
 | 1 - A - 25   |  blank                                                              | blank | blank |
 | 1 - A - 26   |  blank                                                              | blank | blank |
 | 1 - A - 27   |  blank                                                              | blank | blank |
 | 1 - A - 28   |  blank                                                              | blank | blank |
 | 1 - A - 29   | MR. ABDUL KHALID S/O ABDUL WAJID                                    | G+1UC | R - 123
 | 1 - A - 30   |  blank                                                              | blank | blank |
 | 1 - A - 31   |  blank                                                              | blank | blank |
 | 1 - A - 32   |  blank                                                              | blank | blank |
 | 1 - A - 33   |  blank                                                              | blank | blank |
 | 1 - A - 34   |  blank                                                              | blank | blank |
 | 1 - A - 35   |  blank                                                              | blank | blank |
 | 1 - A - 36   | MR. SAFAR MUHAMMAD S/O NOOR MUHAMMAD                                | G + 1 | blank |
 | 1 - A - 37   | MR. SALAHUDDIN S/O M. MUNIR UDDIN                                   | G + 1 | R - 536
 | 1 - A - 38   | MRS. JEHNAZ SULTANA W/O                                             | G + 1 | R - 535
 | 1 - A - 39   | MR. TALHA ISLAM S/O ISLAM UL HAQ                                    | G + 1 | R - 549
 | 1 - A - 40   |  blank                                                              | blank | blank |
 | 1 - A - 41   | MRS. SHAMEEN ASIM W/O ASIM FAROOQI                                  | G     | R - 180
 | 1 - A - 42   | MR. ABDULLAH NISAR S/O NISAR AHMED                                  | G     | R - 260
 | 1 - A - 43   | MR. ZIA UDDIN SIDDIQI S/O MAJEED UDDIN SIDDIQI                      | G + 1 | R - 73
 | 1 - A - 44   |  blank                                                              | blank | blank | 
 | 1 - A - 45   | MR. ABDUL RAB S/O MUHAMMAD                                          | G + 1 | R - 75
 | 1 - A - 46   |  blank                                                              | blank | blank | 
 | 1 - A - 47   |  blank                                                              | blank | blank | 
 | 1 - A - 48   | MR. NASEER AHMED S/O GUL MOHAMMAD                                   | G + 1 | R - 352
 | 1 - A - 49   |  blank                                                              | blank | blank | 
 | 1 - A - 50   |  blank                                                              | blank | blank | 
 | 1 - A - 51   |  blank                                                              | blank | blank | 
 | 1 - A - 52   | MRS. NAVEEN AFSAR W/O AFSAR ALAM SIDDIQI                            | G     | R - 11
 | 1 - A - 53   |  blank                                                              | blank | blank | 
 | 1 - A - 54   | MR. ABDUL MAJID S/O AZIZ KHAN                                       | G + 1 | R - 430
 | 1 - A - 55   |  blank                                                              | blank | blank | 
 | 1 - A - 56   |  blank                                                              | blank | blank | 
 | 1 - A - 57   | MR. KHALID SAIFULLAH S/O AHMAD ALI BAIG                             | G + 1 | R - 60
 | 1 - A - 58   |  blank                                                              | blank | blank | 
 | 1 - A - 59   |  blank                                                              | blank | blank | 
 | 1 - A - 60   |  blank                                                              | blank | blank | 
 | 1 - A - 61   |  blank                                                              | blank | blank | 
 | 1 - A - 62   | MR. HABIB ANJUM S/O ANJUM RAFIQ                                     | G + 1 | R - 468
 | 1 - A - 63   |  blank                                                              | blank | blank | 
 | 1 - A - 64   | MRS. SEEMA KHATOON W/O M. MANSOOR                                   | G + 1 | R - 364
 | 1 - A - 65   | MR. M. ADEEL S/O IFTIKHAR UDDIN                                     | G + 1 | R - 58
 | 1 - A - 66   |  blank                                                              | blank | blank | 
 | 1 - A - 67   |  blank                                                              | blank | blank | 
 | 1 - A - 68   |  blank                                                              | blank | blank | 
 | 1 - A - 69   | MRS. SHAHZADI PUKHRAJ W/O                                           | G + 1 | R - 529
 | 1 - A - 70   |  blank                                                              | blank | blank | 
 | 1 - A - 71   | MRS. AMBER DANISH W/O DANISH RAZA                                   | G + 1 | R - 310
 | 1 - A - 72   | MR. M. ZAKIR S/O M. FAROOQ                                          | G + 1 | R - 168
 | 1 - A - 73   | MRS.GHAZALA NADEEM W/O M. NADEEM HASHMI                             | U C   | R - 153
 | 1 - A - 74   | MRS. KULSOOM W/O M. SADDIQ KARAR                                    | G + 1 | R - 77
 | 1 - A - 75   |  blank                                                              | blank | blank | 
 | 1 - A - 76   |  blank                                                              | blank | blank | 
 | 1 - A - 77   |  blank                                                              | blank | blank | 
 | 1 - A - 78   |  blank                                                              | blank | blank | 
 | 1 - A - 79   | MRS. NUSRAT ARA W/O M. SHAFIQ                                       | G + 1 | R - 431
 | 1 - A - 80   |  blank                                                              | blank | blank | 
 | 1 - A - 81   |  blank                                                              | blank | blank | 
 | 1 - A - 82   |  blank                                                              | blank | blank | 
 | 1 - A - 83   |  blank                                                              | blank | blank | 
 | 1 - A - 84   | MR. ASHFAQ AHMED S/O JUMMA KHAN                                     | G     | R -   57
 | 1 - A - 85   |  blank                                                              | blank | blank | 
 | 1 - A - 86   | MR. FAZLE MAULA S/O FAZAL MOHAMMAD                                  | G + 1 | R - 466
 | 1 - A - 87   | MR. ZULFIQAR ALI S/O MEHRAB BHUTTO                                  | G + 1 | R - 28
 | 1 - A - 88   | MRS. FOUZIA W/O M. ZUBAIR MAIRAJ                                    | G + 1 | R - 527
 | 1 - A - 89   | MR. M. ANEES S/O M. RAFIQ                                           | G + 1 | U C R - 332
 | 1 - A - 90   | MR. ZAKA UDDIN S/O JAWAID TARIQ                                     | G + 1 | R - 334
 | 1 - A - 91   |  blank                                                              | blank | blank |
 | 1 - A - 92   | MR. M. ASIM S/O HAMEED ULLAH                                        | G + 1 | R - 397
 | 1 - A - 93   | MRS. TAHIRA KHATOON W/O ALI AKHTER                                  | G     | R -537
 | 1 - A - 94   | MRS. HUMERA SHIRAZI W/O SAEED UR REHMAN                             | G     | R - 520
 | 1 - A - 95   |  blank                                                              | blank | blank |
 | 1 - A - 96   |  blank                                                              | blank | blank |
 | 1 - A - 97   |  blank                                                              | blank | blank |
 | 1 - A - 98   | MR. S. MASOOD HASAN ZAIDI S/O LAIQ AHMED ZAIDI                      | G     | R - 503
 | 1 - A - 99   |  blank                                                              | blank | blank |
 | 1 - A - 100  |  MRS. SABIRA BEGUM W/O M. ASHRAF                                    | G     | R - 297
 | 1 - A - 101  |  MRS. SAIMA ADNAN W/O ADNAN USMANI                                  | G + 1 | R - 45
 | 1 - A - 102  |  blank                                                              | blank | blank |
 | 1 - A - 103  |  MR. M. AMIR S/O M. ARIF                                            | G + 1 | R - 363
 | 1 - A - 104  |  blank                                                              | blank | blank |
 | 1 - A - 105  |  MR. SULEMAN S/O ABDUL KARIM                                        | G + 1 | R - 318
 | 1 - A - 106  |  blank                                                              | blank | blank |
 | 1 - A - 107  |  blank                                                              | blank | blank |
 | 1 - A - 108  |  blank                                                              | blank | blank |
 | 1 - A - 109  |  MR. YAR MOHAMMAD KHAN S/O PIRA KHAN                                | G + 1 | R - 40
 | 1 - A - 110  |  MR. M. IMRAN S/O ABDUL SALAM                                       | G + 2 | R - 274
 | 1 - A - 111  |  blank                                                              | blank | blank |
 | 1 - A - 112  |  MR. M. ALTAF QADIR S/O                                             | G + 1 | R - 501
 | 1 - A - 113  |  MRS. FARIHA MAHMOOD W/O MAHMOOD UL HAQ SIDDIQI                     | G + 1 | R - 150
 | 1 -A - 114   |  blank                                                              | blank | blank |
 | 1 - A - 115  |  MR. MAHMOOD S/O ABDUL MAJEED                                       | G + 1 | R - 238
 | 1 - A - 116  |  blank                                                              | blank | blank |
 | 1 - A - 117  |  MRS. SHOUMAILA BIBI D/O MOHAMMAD SHER KHAN                         | G + 1 | R - 235
 | 1 -A - 118   |  blank                                                              | blank | blank |
 | 1 - A - 119  |  blank                                                              | blank | blank |
 | 1 - A - 120  |  MR M. TARIQ BAWANI S/O M. HANIF BAWANI                             | G + 1 | R - 234
 | 1 - A - 121  |  blank                                                              | blank | blank |
 | 1 - A - 122  |  MR. ABDUL FAREED SIDDIQI S/O ABDUL AZIZ                            | G + 1 | R - 239
 | 1 - A - 123  |  blank                                                              | blank | blank |
 | 1 - A - 124  |  MR. M. SALEEM S/O HAROON AHMED                                     | G + 2 | U C R - 225
 | 1 - A - 125  |  MR. REHAN UMER S/O M. IDREES                                       | G + 1 | R - 71
 | 1 - A - 126  |  blank                                                              | blank | blank |
 | 1 - A - 127  |  MR. M. ASLAM S/O M. A. RAZZAK                                      | G + 2 | R - 398
 | 1 - A - 128  |  MR. WAQAR AHMED QURESHI S/O M. ANSAR                               | G + 1 | R - 416
 | 1 - A - 129  |  MR. RAHEEL AHMED QURESHI S/O M. ANSAR                              | G + 1 | R - 386
 | 1 - A - 130  |  blank                                                              | blank | blank |
 | 1 -A - 131   |  blank                                                              | blank | blank |
 | 1 - A - 132  |  blank                                                              | blank | blank |
 | 1 - A - 133  |  blank                                                              | blank | blank |
 | 1 -A - 134   |  blank                                                              | blank | blank |
 | 1 -A - 135   |  blank                                                              | blank | blank |
 | 1 - A - 136  |  blank                                                              | blank | blank |



















"CONSTRUCTION
TYPE"
G
G
  
  
  
  
G + 1	
G	
U C	
G + 1	
  
G + 1	U C
  
G + 1	U C
G + 1	
  
  
  
G	
  
  
  
G	
  
  
  
  
  
  
  
  
  
  
G + 1	U C






G + 1
G + 1
G + 1
G + 1

G
G
G + 1

G + 1


G + 1



G

G + 1


G + 1




G + 1

G + 1
G + 1



G + 1

G + 1
G + 1
U C
G + 1



  
G + 1	
  
  
  
  
G	
  
G + 1	
G + 1	
G + 1	
G + 1	U C
G + 1	
  
G + 1	
G	
G



G

G
G + 1

G + 1

G + 1



G + 1
G + 2	
  
G + 1	
G + 1	
  
G + 1	
  
G + 1	
  
  
G + 1	
  
G + 1	
  
G + 2	U C
G + 1	

G + 2
G + 1
G + 1







