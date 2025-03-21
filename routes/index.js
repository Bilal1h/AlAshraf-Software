var express = require("express");
var router = express.Router();
const userModel = require("./users");
const houseCategoryModel = require("../models/houses_category")
const houseModel = require("../models/each_house_category")
const monthsModel = require("../models/months")
const utilityModel = require("../models/utility")
const localstrategy = require("passport-local");
const passport = require("passport");
passport.use(new localstrategy(userModel.authenticate()));
/* GET home page. */
router.get("/admin-login", function (req, res, next) {
  res.render("index", { title: "Express" });
});




router.get("/profile", isLoggedIn, async function (req, res) {
  if (req.isAuthenticated()) {
    const userId = req.user._id; // Get the user ID
    try {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const currentMonthName = monthNames[new Date().getMonth()];
      const currentYear = new Date().getFullYear();
      const sumofAllMonthsOfTotalCurrentYear = [];
      const sumofAllMonthsOfRecCurrentYear = [];
      const sumofAllMonthsOfDueCurrentYear = [];
      const sumofAllMonthsOfPerCurrentYear = [];
      const currentYearMonths = await monthsModel.find({ Year: currentYear });
      currentYearMonths.forEach((month) => {
        sumofAllMonthsOfTotalCurrentYear.push(month.ammount_to_be_collected);
        sumofAllMonthsOfRecCurrentYear.push(month.ammount_collected);
        sumofAllMonthsOfDueCurrentYear.push((month.ammount_to_be_collected)-(month.ammount_collected));
        sumofAllMonthsOfPerCurrentYear.push(((month.ammount_collected * 100) / (month.ammount_to_be_collected)));
      
      })
      const totalMonthsOfTotalCurrentYear = sumofAllMonthsOfTotalCurrentYear.reduce((sum, num) => sum + num, 0);
      const totalMonthsOfRecCurrentYear = sumofAllMonthsOfRecCurrentYear.reduce((sum, num) => sum + num, 0);
      const totalMonthsOfDueCurrentYear = sumofAllMonthsOfDueCurrentYear.reduce((sum, num) => sum + num, 0);
      const totalMonthsOfPerCurrentYear = sumofAllMonthsOfPerCurrentYear.reduce((sum, num) => sum + num, 0);

      const currentMonthAmount = await monthsModel.findOne({ name: currentMonthName , Year: currentYear });


      const lastMonth = monthNames[(new Date().getMonth())-1];
      const lastMonthAmount = await monthsModel.findOne({ name: lastMonth , Year: currentYear });


      const user = await userModel.findById(userId);
      res.render("profile", { usernames: user ,
        lastMonthAmount,
        currentMonthAmount,
        currentYearTotalAmount:totalMonthsOfTotalCurrentYear,
        currentYearRecAmount:totalMonthsOfRecCurrentYear,
        currentYearDueAmount:totalMonthsOfDueCurrentYear,
        currentYearPerAmount:totalMonthsOfPerCurrentYear.toFixed(2),
        currentMonth: currentMonthName ,
        currentYear: currentYear 
       });




    } catch (err) {
      console.error("Error fetching user:", err);
      res.redirect("/"); // Redirect if there's an error
    }
  } else {
    res.redirect("/admin-login"); // Redirect if user is not authenticated
  }
});

router.get("/manage-utils-expenses", isLoggedIn, async function (req, res) {
  if (req.isAuthenticated()) {
    const userId = req.user._id; // Get the user ID
    try {
     

      const user = await userModel.findById(userId);
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
       const currentYear = new Date().getFullYear();
       const currentMonthName = monthNames[new Date().getMonth()];
      const sumofAllMonthsOfCurrentYear = [];
const currentYearMonths = await monthsModel.find({ Year: currentYear }).populate("utilities_of_this_month");

currentYearMonths.forEach((month) => {
  if (month.utilities_of_this_month.length > 0) {
    month.utilities_of_this_month.forEach((utility) => {
      sumofAllMonthsOfCurrentYear.push(utility.amount || 0);
    });
  }
});

// Ensure reduce() doesn't operate on an empty array
const totalMonthsOfCurrentYear = sumofAllMonthsOfCurrentYear.length
  ? sumofAllMonthsOfCurrentYear.reduce((sum, num) => sum + num, 0)
  : 0;

      const currentMonthUtils = await monthsModel.findOne({ name: currentMonthName , Year: currentYear }).populate("utilities_of_this_month");
      const arrOfCurrentMonth = [];
      if (Object.keys(currentMonthUtils).length !== 0) {
        currentMonthUtils.utilities_of_this_month.forEach((month) => {
          arrOfCurrentMonth.push(month.amount);
        })
        const totalOfCurrentMonthUtils = arrOfCurrentMonth.reduce((sum, num) => sum + num, 0);
        res.render("manage_utils", {  usernames: user , currentYearAmount:totalMonthsOfCurrentYear, currentMonth: currentMonthName ,currentYear: currentYear ,currentMonthUtils:totalOfCurrentMonthUtils  });
      }





    } catch (err) {
      console.error("Error fetching user:", err);
      res.redirect("/"); // Redirect if there's an error
    }
  } else {
    res.redirect("/admin-login"); // Redirect if user is not authenticated
  }
});



router.get("/registerbilaluser" , function(req,res){
    res.render("registerbilaluser")
})
router.post("/register", function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });
  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/?registered=true");
      });
    })
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/?usernotfound=true"
}), function (req, res) { })

router.get("/logout", function (req, res, next) {
  req.logout((err) => {  // Add the callback function
    if (err) return next(err);  // Handle any logout errors
    req.session.destroy((err) => {  // Destroy the session
      if (err) return next(err);  // Handle session destruction errors
      res.redirect("/");  // Redirect after successful logout
    });
  });
});



// Category Routes
router.get("/addcategory", isLoggedIn, function (req, res, next) {
  res.render("add_category")
})
router.post("/addcategory", isLoggedIn, async function (req, res, next) {
  const monthofthiscategory = await monthsModel.findOne({ name: req.body.monthselect })
  await houseCategoryModel.create({
    name: req.body.categoryname,
    ammount_to_be_collected: req.body.totalammount,
    month: req.body.monthselect,
    monthId: monthofthiscategory._id
  });
  const housemodelfind = await houseCategoryModel.findOne({ month: req.body.monthselect })
  await monthsModel.findOneAndUpdate({ name: req.body.monthselect }, { $push: { categories_of_this_month: housemodelfind._id } });

  res.redirect(`/showcategories/${monthofthiscategory.name}`)
})


// Houses Routes
router.get("/:year/:month/:category/addhouse", isLoggedIn, async function (req, res, next) {
  const categories = await houseCategoryModel.find({ month: req.params.month , Year:req.params.year });

  res.render("add_house", { categories: categories,Year:req.params.year, categoryName: req.params.category, monthName: req.params.month })
})



router.post("/:year/:month/:category/addhouse", isLoggedIn, async function (req, res, next) {
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
    const amountToBeCollected = floors === 1 ? 4000 : baseAmount + ((floors - 1) * 1000);

    // Create a new house entry
    const newHouse = await houseModel.create({
      name: req.body.housename,
      amount_to_be_collected: amountToBeCollected,
      is_amount_collected: req.body.isammountcollected === "true",
      category: req.body.selectcategory,
      month: req.params.month,
      floors: floorDict[floors] || "Plot",  // Storing floor label instead of number
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





// Show Categories Routes
router.get("/showcategories/:year/:month", isLoggedIn, async function (req, res, next) {
  try {
    const monthName = req.params.month;

    // Find categories linked to the given month
    const categories = await houseCategoryModel.find({ month: monthName , Year:req.params.year });

    if (categories.length === 0) {
      return res.render("show_categories", { categories: [], housesobjarr: [], monthName });
    }

    // Prepare data for the table
    let housesobjarr = await Promise.all(categories.map(async (category) => {
      const houses = await houseModel.find({ category: category.name , month: monthName });

      // Filter houses where is_amount_collected is true, then sum the amount_to_be_collected
      const totalAmountCollected = houses
        .filter(house => house.is_amount_collected === true)
        .reduce((sum, house) => sum + house.amount_to_be_collected, 0);

      return {
        categoryName: category.name,
        totalAmountCollected,
        totalAmountToBeCollected: category.ammount_to_be_collected
      };
    }));

    res.render("show_categories", { categories, housesobjarr, monthName , Year:req.params.year });

  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Server Error");
  }
});



// Show House Routes
router.get("/show/:year/:month/category/:category/data", isLoggedIn, async function (req, res, next) {
  const houses = await houseModel.find({ Year:req.params.year,category: req.params.category , month: req.params.month });

  res.render("show_houses", { houses: houses,month:req.params.month,category:req.params.category , Year:req.params.year });
});


//Edit House Categories

// Edit House Status
router.get("/:year/:month/edit/status/:housename", isLoggedIn, async function (req, res, next) {
  try {
    // Find the house by name
    const house = await houseModel.findOne({ name: req.params.housename });

    // Render the edit form with house details
    res.render("edit_house", { product: house,Year:req.params.year , month:req.params.month });
  } catch (error) {
    console.error("Error fetching house data:", error);
    res.status(500).send("Server Error");
  }
});

router.post("/:year/:month/edit/check/status/:housename" , async function(req,res){
  try {
    // Find the house by name
    const house = await houseModel.findOne({ name: req.params.housename });

    if (!house) {
      return res.status(404).send("House not found");
    }

    
  
    const isCollected = req.body.editamountpaid === "on"; // Handle checkbox state
    const previousHouseData = await houseModel.findOne({ name: req.params.housename, month: req.params.month, Year: req.params.year });

const updatedHouse = await houseModel.findOneAndUpdate(
  { name: req.params.housename, month: req.params.month, Year: req.params.year },
  {
    is_amount_collected: isCollected,


  },
  { new: true }
);

// Fetch the current month's data
const monthsModelUpdate = await monthsModel.findOne({ name: req.params.month, Year: req.params.year });

if (!monthsModelUpdate) {
  return res.status(500).send("Month record not found.");
}

// Correctly update `ammount_collected`
let ammount_collected = Number(monthsModelUpdate.ammount_collected) || 0;

// If the amount was previously collected but now unchecked, subtract it
if (previousHouseData.is_amount_collected && !isCollected) {
  ammount_collected -= previousHouseData.amount_to_be_collected;
}
// If the amount is newly collected, add it
else if (!previousHouseData.is_amount_collected && isCollected) {
  ammount_collected += updatedHouse.amount_to_be_collected;
}

await monthsModel.findOneAndUpdate(
  { name: req.params.month, Year: req.params.year },
  { ammount_collected: Math.max(ammount_collected, 0) } // Ensure it doesn't go negative
);

console.log("Updated Month Model:", monthsModelUpdate);
console.log("Updated Amount Collected:", ammount_collected);
console.log("House Amount to be Collected:", updatedHouse.amount_to_be_collected);

res.redirect(`/show/${req.params.year}/${updatedHouse.month}/category/${updatedHouse.category}/data`);

  } catch (error) {
    console.error("Error updating house data:", error);
    res.status(500).send("Server Error");
  }

})

// Update House Status
// Update House Status
router.post("/:year/:month/edit/status/:housename", async function (req, res) {
  try {
    // Find the house by name
    const house = await houseModel.findOne({ name: req.params.housename , month: req.params.month , Year:req.params.year });

    if (!house) {
      return res.status(404).send("House not found");
    }



    const category = await houseCategoryModel.findOne({ name: house.category, month: req.params.month, Year: req.params.year });

    let amountToBeCollected = 0; // Set a default value

    if (req.body.editfloors === "G") {
      amountToBeCollected = Number(category?.amount_for_G || 0);
    } else if (req.body.editfloors === "G+1") {
      amountToBeCollected = Number(category?.amount_for_G1 || 0);
    } else if (req.body.editfloors === "G+2") {
      amountToBeCollected = Number(category?.amount_for_G2 || 0);
    } else if (req.body.editfloors === "G+3") {
      amountToBeCollected = Number(category?.amount_for_G3 || 0);
    } else if (req.body.editfloors === "G+4") {
      amountToBeCollected = Number(category?.amount_for_G4 || 0);
    }
    
    // Update the house status and amount to be collected
    const isAmountCollected = req.body.is_amount_collected === "on"; // Check if the checkbox is checked

    const isCollected = req.body.is_amount_collected === "on"; // Handle checkbox state
const previousHouseData = await houseModel.findOne({ name: req.params.housename, month: req.params.month, Year: req.params.year });

const updatedHouse = await houseModel.findOneAndUpdate(
  { name: req.params.housename, month: req.params.month, Year: req.params.year },
  {
    is_amount_collected: isCollected,
    floors: req.body.editfloors,
    amount_to_be_collected: amountToBeCollected,
    OwnerName: req.body.editownername,
    OwnerPhone: req.body.editownerphone,
  },
  { new: true }
);

// Fetch the current month's data
const monthsModelUpdate = await monthsModel.findOne({ name: updatedHouse.month, Year: req.params.year });
const houseUpdate = await houseModel.findOne({name:req.params.housename, month: req.params.month, Year: req.params.year});
let totalAmountCollected = Number(houseUpdate.amount_to_be_collected);
let monthTotalamount = Number(monthsModelUpdate.ammount_to_be_collected);

  const houseUpdateofPopulated = await houseModel.findOne({name:req.params.housename, month: req.params.month, Year: req.params.year}).populate("ParentHouseid");
  
  // const commonDifference = ;
if (!monthsModelUpdate) {
  return res.status(500).send("Month record not found.");
}

// Correctly update `ammount_collected`
let ammount_collected = Number(monthsModelUpdate.ammount_collected) || 0;

// If the amount was previously collected but now unchecked, subtract it
if (previousHouseData.is_amount_collected && !isCollected) {
  ammount_collected -= previousHouseData.amount_to_be_collected;
}
// If the amount is newly collected, add it
else if (!previousHouseData.is_amount_collected && isCollected) {
  ammount_collected += updatedHouse.amount_to_be_collected;
}

await monthsModel.findOneAndUpdate(
  { name: updatedHouse.month, Year: req.params.year },
  { ammount_collected: Math.max(ammount_collected, 0) , ammount_to_be_collected: monthTotalamount + totalAmountCollected } // Ensure it doesn't go negative
);

console.log("Updated Month Model:", monthsModelUpdate);
console.log("Updated Amount Collected:", ammount_collected);
console.log("House Amount to be Collected:", updatedHouse.amount_to_be_collected);

res.redirect(`/show/${req.params.year}/${updatedHouse.month}/category/${updatedHouse.category}/data`);

  } catch (error) {
    console.error("Error updating house data:", error);
    res.status(500).send("Server Error");
  }
});



// Months Routes Start Here
router.get("/:year/showallmonths", isLoggedIn, async function (req, res) {
  if (req.isAuthenticated()) {
    const userId = req.user._id; // Get the user ID
    try {
      const user = await userModel.findById(userId);
      res.render("allmonths", { usernames: user , Year:req.params.year });
    } catch (err) {
      console.error("Error fetching user:", err);
      res.redirect("/"); // Redirect if there's an error
    }
  } else {
    res.redirect("/"); // Redirect if user is not authenticated
  }
})

router.get("/:year/month/:month", isLoggedIn, async function (req, res) {
  const categories = await houseCategoryModel.find({ month: req.params.month , Year:req.params.year });
  const utilities = await utilityModel.find({ month: req.params.month });
  const remainMonth = await monthsModel.findOne({ name: req.params.month , Year:req.params.year });
  // Prepare data for the table
  let housesobjarr = await Promise.all(categories.map(async (category) => {
    const houses = await houseModel.find({ category: category.name, month: req.params.month , Year:req.params.year });

    // Filter houses where is_amount_collected is true, then sum the amount_to_be_collected
    const totalAmountCollected = houses
      .filter(house => house.is_amount_collected === true)
      .reduce((sum, house) => sum + house.amount_to_be_collected, 0);

    return {
      categoryName: category.name,
      totalAmountCollected,
      totalAmountToBeCollected: category.ammount_to_be_collected,
    };
  }));

  const unpaidHouses = await houseModel.find({ month: req.params.month, is_amount_collected: false , Year:req.params.year });
  const lengthOfUnpaidHouses = unpaidHouses.length;
  const monthname = req.params.month;

  const SumOfToBeCollected = await monthsModel.findOne({ name: req.params.month , Year:req.params.year });
  const arrSumOfCollected = housesobjarr.map(e => e.totalAmountCollected);
  const arrSumOfRemainingAmount = unpaidHouses.map(e => e.amount_to_be_collected);

  // Sum the amounts of utilities
  const totalUtilityAmount = utilities.reduce((sum, utility) => sum + utility.amount, 0);
  const finalSumOfToBeCollected = SumOfToBeCollected.ammount_to_be_collected;
  const finalHousesSumOfCollected = arrSumOfCollected.reduce((sum, num) => sum + num, 0);
  const netTotalAmount = finalHousesSumOfCollected - totalUtilityAmount;
  const finalSumOfRemaining = remainMonth.ammount_to_be_collected - finalHousesSumOfCollected;
  console.log(finalSumOfToBeCollected);
  res.render("month", {
    month: monthname,
    totalcollected: finalSumOfToBeCollected,
    totalhousescollected: finalHousesSumOfCollected,
    finalSumOfRemaining,
    totaltobecollected: finalSumOfToBeCollected,
    totalUtilityAmount,
    lengthOfUnpaidHouses,
    netTotalAmount,
    Year:req.params.year,
  });
});


// Utilities Setup
router.get("/:year/month/:month/addutility" ,isLoggedIn , async function(req,res,next){
  res.render("add_utility", {month: req.params.month , Year:req.params.year})
});
router.post("/:year/month/:month/addutility" , async function(req,res){
  const monthOfUtility = await monthsModel.findOne({name:req.params.month , Year:rq.params.year})
  await utilityModel.create({
    name:req.body.utilityname,
    amount:req.body.utilityamount,
    month:req.params.month,
    Year:req.params.year,
    monthId:monthOfUtility._id
  });
  const utilityFind = await utilityModel.findOne({name:req.body.utilityname})
  await monthsModel.findOneAndUpdate({name:req.params.month},{ $push: { utilities_of_this_month: utilityFind._id } });
  res.redirect(`${req.params.year}/month/${req.params.month}/showutilities`)
})

router.get("/:year/month/:month/showutilities",async function(req,res,next){
  const utilities = await utilityModel.find({month:req.params.month , Year:req.params.year});
  res.render("show_utilities",{utilities:utilities,month:req.params.month, Year:req.params.year}) 
})







// Unpaid Houses Routes

router.get("/show/:year/:month/unpaidhouses", isLoggedIn, async function (req, res, next) {
  const houses = await houseModel.find({ Year:req.params.year, month: req.params.month , is_amount_collected: false });
  res.render("show_unpaid_houses", { houses: houses,month:req.params.month , Year:req.params.year});
})









// Public House Routes
// Public Home Page Route
router.get("/", function (req, res) {
  let isLoggedInUser = Boolean;
  if (req.isAuthenticated()) {
    isLoggedInUser = true;
  } else {
    isLoggedInUser = false;
  }  
  res.render("public_home" , {isLoggedInUser});
});
// Check House Status Page Route
router.get("/checkstatus", function (req, res) {
  const error = req.query.error;
  res.render("check_status", { error });
});

// Handle House Status Check
router.post("/checkstatus", async function (req, res) {
  const { month, category, housename } = req.body;
  const houseNameofA = housename.split("-");
  if (houseNameofA[0] === "A") {
    let finalHousename = `1 - A - ${houseNameofA[1]}`;
    const house = await houseModel.findOne({ month, category, name: finalHousename });

  if (!house) {
    return res.redirect("/checkstatus?error=House not found");
  }

  res.render("show_status", { house, month });
  }
  else if(houseNameofA[0] === "B"){
    let finalHousename = ` B - ${houseNameofA[1]}`;
    const house = await houseModel.findOne({ month, category, name: finalHousename });
    
  if (!house) {
    return res.redirect("/checkstatus?error=House not found");
  }

  res.render("show_status", { house, month });}
  else if(houseNameofA[0] === "R"){
    let finalHousename = `R - ${houseNameofA[1]}`;
    const house = await houseModel.findOne({ month, category, name: finalHousename });
    
  if (!house) {
    return res.redirect("/checkstatus?error=House not found");
  }

}

});



// monthly fee management
router.get("/:year/manage-monthly-maintenance-fee", async (req, res) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  let dataMap = {}; // Object to store categorized data

  try {
    await Promise.all(
      months.map(async (month) => {
        const data = await houseCategoryModel.find({ month, Year: req.params.year }).limit(4); // Fetch only 4 records per month
        dataMap[month] = data; // Store in object
      })
    );

    res.render("monthlyMaintenanceFee", { dataMap }); // Pass data to EJS
  } catch (error) {
    console.error("Error fetching monthly data:", error);
    res.status(500).send("Internal Server Error");
  }
});




router.get("/:year/:month/edit-maintenance-fee-plan" , async function(req,res){
  
    res.render("edit_maintenance_fee" , {month:req.params.month , Year:req.params.year})
})

router.post("/:year/:month/edit-maintenance-fee-plan", async function (req, res) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthIndex = new Date().getMonth(); // Zero-based index
  const selectedCat = req.body.editcat;

  for (let i = currentMonthIndex; i < monthNames.length; i++) {
    await houseCategoryModel.findOneAndUpdate(
      { name: selectedCat, month: monthNames[i], Year: req.params.year },
      { amount_per_house: req.body.editamount }
    );
  }

  res.redirect(`/${req.params.year}/manage-monthly-maintenance-fee`);
});




router.get("/:year/:month/edit/:category/additional-floor", async function(req, res) {
  try {
    const month = req.params.month;
    const year = req.params.year;

    // Fetch categories based on the month and year
    const categories = await houseCategoryModel.findOne({name:req.params.category, month: month, Year: year });

    if (!categories) {
      return res.status(404).send("No data found for the given month and year");
    }

    res.render("edit_additional_floor_charge", {
      month: month,
      categories: categories,
      Year: year
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.post("/:year/:month/edit/:category/additional-floor", isLoggedIn, async function (req, res) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const selectedCategory = req.body.selectCategory;
  const amountForG = req.body.amountG;
  const amountForG1 = req.body.amountG1;
  const amountForG2 = req.body.amountG2;
  const amountForG3 = req.body.amountG3;
  const amountForG4 = req.body.amountG4;

  // Get index of the current month being edited
  const editMonthIndex = monthNames.indexOf(req.params.month);
  
  // Loop over months **from the edited month onwards** (not affecting past months)
  for (let i = editMonthIndex; i < monthNames.length; i++) {  
    const updatedCategory = await houseCategoryModel.findOneAndUpdate(
      { name: req.params.category, month: monthNames[i], Year: req.params.year },
      { 
        amount_for_G: amountForG, 
        amount_for_G1: amountForG1, 
        amount_for_G2: amountForG2, 
        amount_for_G3: amountForG3, 
        amount_for_G4: amountForG4 
      },
      { new: true } // Get updated document
    );

    if (!updatedCategory) continue; // Skip if category not found

    // Get all houses that belong to this category for the current month
    const houses = await houseModel.find({ 
      category: updatedCategory.name, 
      month: monthNames[i], 
      Year: req.params.year 
    });

    // Update amount_to_be_collected for each house
    await Promise.all(houses.map(async (house) => {
      let amountToBeCollected = 0;

      switch (house.floors) {
        case "G":
          amountToBeCollected = updatedCategory.amount_for_G;
          break;
        case "G+1":
          amountToBeCollected = updatedCategory.amount_for_G1;
          break;
        case "G+2":
          amountToBeCollected = updatedCategory.amount_for_G2;
          break;
        case "G+3":
          amountToBeCollected = updatedCategory.amount_for_G3;
          break;
        case "G+4":
          amountToBeCollected = updatedCategory.amount_for_G4;
          break;
      }

      // Update house's amount_to_be_collected
      await houseModel.findOneAndUpdate(
        { name: house.name, month: monthNames[i], Year: req.params.year },
        { amount_to_be_collected: amountToBeCollected }
      );
    }));
  }

  res.redirect(`/${req.params.year}/manage-monthly-maintenance-fee`);
});

// router.get("/createcat2025", async function(req, res) {
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const categories = ["A", "B", "R", "C"];
//   const amounts = [310000, 95000, 92000, 0];
//   const amountPerAdditional = [
//     { G: 4000, G1: 5000, G2: 6000, G3: 7000, G4: 8000 },
//     { G: 5000, G1: 6000, G2: 7000, G3: 8000, G4: 9000 },
//     { G: 3000, G1: 4000, G2: 5000, G3: 6000, G4: 7000 },
//     { G: 0, G1: 0, G2: 0, G3: 0, G4: 0 }
//   ];

//   for (const month of months) {
//     const monthofthiscategory = await monthsModel.findOne({ name: month });
//     for (let i = 0; i < categories.length; i++) {
//       const category = categories[i];
//       const amount = amounts[i];
//       const additionalAmounts = amountPerAdditional[i]; // Fetch additional amount for this category

//       const newCategory = await houseCategoryModel.create({
//         name: category,
//         ammount_to_be_collected: amount,
//         month: month,
//         Year:"2025",
//         monthId: monthofthiscategory._id,
//         amount_for_G: additionalAmounts.G,
//         amount_for_G1: additionalAmounts.G1,
//         amount_for_G2: additionalAmounts.G2,
//         amount_for_G3: additionalAmounts.G3,
//         amount_for_G4: additionalAmounts.G4
//       });

//       await monthsModel.findOneAndUpdate(
//         { name: month },
//         { $push: { categories_of_this_month: newCategory._id } }
//       );
//     }
//   }

//   res.send("Categories created successfully");
// });


router.get("/updatemonth", async function(req,res){
  const months = ["May", "June", "July", "August", "September", "October", "November", "December"];

  for (const month of months) {
    await houseCategoryModel.deleteOne({ month, name: "A" });
    await houseCategoryModel.deleteOne({ month, name: "B" });
    await houseCategoryModel.deleteOne({ month, name: "C" });
    await houseCategoryModel.deleteOne({ month, name: "R" });
  }
  
})




function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  };
  res.redirect("/admin-login");

}

module.exports = router;





