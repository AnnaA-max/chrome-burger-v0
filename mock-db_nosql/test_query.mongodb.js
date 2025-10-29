
use ("sample_mflix");

// db.movies.aggregate([
// 	{$match: {directors: "Christopher Nolan"}},
// 	{$sort: {year: -1}},
// 	{$limit: 5},
// 	{$project: {_id: 0, title: 1, year: 1}}
// ]);

db.movies.aggregate([
  { $match: { year: { $gte: 2000, $lte: 2010 } } },
  { $group: { _id: "$year", totalMovies: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);


//Find movies where the primary spoken language is English or French
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [
//         { languages: "English" },
//         { languages: "French" }
//       ]
//     }
//   },
//   { $project: { _id: 0, title: 1, languages: 1 } }
// ])

//Find all movies released after 2010 and with an IMDb rating of at least 8.0.

// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         { year: { $gt: 2010 } },
//         { "imdb.rating": { $gte: 8.0 } }
//       ]
//     }
//   },
//   { $project: { _id: 0, title: 1, year: 1, "imdb.rating": 1 } }
// ]);

//Write a query to see a list of all employees working at Chrome & Burger.
use("chrome-burger-db");

db.staff.find({}, {first_name:1 , last_name:1 , _id:0});

//Task: Write a query to find all menu items that fall under the 'Burger' category.
// db.menu_items.find( {category: "Burger" },{ _id: 0, name: 1 , category: 1 });
db.menu_items.find({}, {_id:0, category:"Burger", name: 1})