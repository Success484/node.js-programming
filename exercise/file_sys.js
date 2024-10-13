const fsxPromise = require("fs").promises;
const path = require('path')

const fileOps = async () => {
  try{
    const data = await fsxPromise.readFile(path.join(__dirname, 'starter.txt'), "utf8")
    console.log(data)
    await fsxPromise.unlink(path.join(__dirname, 'starter.txt'))
    await fsxPromise.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you.')
    await fsxPromise.appendFile(path.join(__dirname, 'reply.txt'), '\n \nYes it is!, renamed again.')
    await fsxPromise.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'))
    const newData = await fsxPromise.readFile(path.join(__dirname, 'newReply.txt'), "utf8")
    console.log( `new saved data: \n ${newData}`)
  }catch(err){
    console.error(err)
  }
}
fileOps()

// fsx.readFile(path.join(__dirname, 'starter.txt'), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fsx.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you.', (err) => {
//   if (err) throw err
//   console.log('write complete')
//     fsx.appendFile(path.join(__dirname, 'reply.txt'), '\n \nYes it is!, renamed.', (err) => {
//       if (err) throw err
//       console.log('append complete')
//     })
//       fsx.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'), (err) => {
//         if (err) throw err
//         console.log('write complete')
//       })
// })


// console.log('reading')

process.on("uncaughtException", (err) => {
  console.error(`uncaught error : ${err}`);
  process.exit;
});
