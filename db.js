const Pool = require('pg')
const pool = new Pool({
	 user: "postgres",
	 password: "198513",
	 host: "localhost",
	 port: 5432
})




module.exports = pool