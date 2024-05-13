//Module Package:

//File package:
// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log('Natija', natija);

// console.log('=========');

// const natija2 = calculate.qoshish(80, 20);
// console.log('Natija', natija2);

// const natija3 = calculate.ayirish(80, 20);
// console.log('Natija', natija3);

//bu modullar node.js oIda berilgan boladi:
// console.log(require("module").wrapper);
// const moment = require("moment"); 

//agar biror narsani save qilayotganda, 'npm install moment --save" qilsak faat aynan shu project uchun save qilib beradi, '--global' qilsak unda har doim shu moment ni ishlatishimiz mumkin

// const Account = require('./account(class orqali)')
// Account.tellMeAboutClass();
// Account.tellMeTime();

// console.log('============')


// const myAccount = new Account("Danny", 200000, 9807285210012);
// myAccount.giveMeDetails();

// myAccount.makeDeposit(1000000);

// //Bugatti narxi 400k usd
// myAccount.withdrawMoney(400000);
// myAccount.makeDeposit(200000);


const schedule = require('node-schedule');

const job = schedule.scheduleJob('3 * * * *', function(){
  console.log('3 second:');
});

console.log("Hello World");