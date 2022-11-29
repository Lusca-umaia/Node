const readXlsxFile = require('read-excel-file/node')
let validator = require('validator')


readXlsxFile('./alunos.xlsx').then((rows) => {
    for (i = 1; i < 11; i++) {
        if (validator.isEmpty(rows[i][0]) == false && validator.isEmail(rows[i][1]) == true && (rows[i][2]) > 0 && validator.isAlphanumeric(rows[i][3]) == true) {
            console.log(rows[i][0])
            console.log(rows[i][1])
            console.log(rows[i][2])
            console.log(rows[i][3], "\n")
        }
    }
})