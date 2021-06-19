try{
    const Database = require("@replit/database")
    const db = new Database()

    module.exports = db;
}catch (e){
    console.log(e);
}
