const mysql = require('mysql')

module.exports.db = async (name, username, email) => {
    const pool = mysql.createPool({
        connectionLimit: 10,
        user: 'root',
        password: 'mysql',
        host: 'localhost',
        database: 'student_list'
    })

    await pool.connect()

    pool.query('insert into members_Individual_profile(name, username, email) values(??, ??, ??)', [name, username, email], (err) => {
        if (err) console.error(err)
    })

    pool.end()
}