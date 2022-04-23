import sql from "mysql";

let db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "yash091@mysql",
  database: "campus_placement"
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected");
});

export default db;