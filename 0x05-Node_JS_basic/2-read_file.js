const fs = require('fs');

const countStudents = (path) => {
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database')
    }

    fs.createReadStream(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data.length)
    })
}

module.exports = countStudents;