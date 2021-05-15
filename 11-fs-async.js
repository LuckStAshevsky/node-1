const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./cont/fold/test.txt', 'utf8', (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = result;
   readFile('./cont/fold/test2.txt', 'utf8', (err, result) => {
      if (err) {
         console.log(err);
         return;
      }
      const second = result;
      console.log('read done');
      writeFile(
         './cont/fold/test-async.txt',
         `Async: ${first}, ${second}`,
         (err, result) => {
            if (err) {
               console.log(err);
               return;
            }
            console.log('write done');
         }
      );
   })
})
console.log('start 2nd');
readFile('./cont/fold/test.txt', 'utf8', (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = result;
   readFile('./cont/fold/test2.txt', 'utf8', (err, result) => {
      if (err) {
         console.log(err);
         return;
      }
      const second = result;
      console.log('read done');
      writeFile(
         './cont/fold/test-async.txt',
         `Async: ${first}, ${second}`,
         (err, result) => {
            if (err) {
               console.log(err);
               return;
            }
            console.log('write done');
         }
      );
   })
})
console.log('start 3rd');
readFile('./cont/fold/test.txt', 'utf8', (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = result;
   readFile('./cont/fold/test2.txt', 'utf8', (err, result) => {
      if (err) {
         console.log(err);
         return;
      }
      const second = result;
      console.log('read done');
      writeFile(
         './cont/fold/test-async.txt',
         `Async: ${first}, ${second}`,
         (err, result) => {
            if (err) {
               console.log(err);
               return;
            }
            console.log('write done');
         }
      );
   })
})
console.log('finish');