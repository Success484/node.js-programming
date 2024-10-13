const fs = require('fs')

const rs = fs.createReadStream('./lorem.txt',  {encoding:'utf8'})

const ws = fs.createWriteStream('./newLorem.txt')

// rs.on('data', (junckData) => {
//     ws.write(junckData)
// })

rs.pipe(ws)