const moment = require('moment');

class Account {
    #amount
    #account_ID


    constructor(name, amount, account_ID) {
        this.name = name;
        this.#amount = amount;
        this.#account_ID = account_ID
    }

    tellMeBalance() {
        console.log(`sizning hisobingizdagi qoldiq: ${this.#amount}$`);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}$`)
        } else {
            console.log(`Sizning balansizgidagi pul yetarli emas: ${this.#amount}`)
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hisobigiz toldirildi, hisobingiz ${this.#amount}$ tashkil etdi`);
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`);
        console.log('Hisob raqamingiz:', this.#account_ID);
    }

    static tellMeAboutClass() {
        console.log('Bu class accountlar ni yasash uchun xizmat qiladi');
        
    }

    static tellMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH:mm:ss")}`);   
    }
}

module.exports = Account