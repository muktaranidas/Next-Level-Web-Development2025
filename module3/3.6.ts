{
    //getter and setter
    class BankAccount{
        public readonly id: number;
        public name: string;
    //    private _balance: number
       protected _balance: number
        
        constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
        }
        set deposite(amount:number) {
            this._balance = this.balance+amount
}
        // public addDeposit(amount: number) {
        //     this._balance = this._balance+amount
        // }
        //getter
        get balance() {
            return this._balance
        }
        public getBalance() {
            return this._balance
        }
    }
      class studentAccount extends BankAccount{
         test() {
               this._balance
           }
       }
    const goribManusherAccount = new BankAccount(111, "mukta", 50)
    // goribManusherAccount.balance = 100;
    goribManusherAccount.deposite =100
//     goribManusherAccount.addDeposit(1001) // functrion call korte hocche
    //    const myBalance=  goribManusherAccount.getBalance() // function call korte hocche
    

    const myBalance = goribManusherAccount.balance

//     console.log(goribManusherAccount);
    console.log(myBalance);
    //
}

