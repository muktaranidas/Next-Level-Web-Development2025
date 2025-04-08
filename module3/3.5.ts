{
    // access modifiers
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
        public addDeposit(amount: number) {
            this._balance = this._balance+amount
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
    const goribManusherAccount = new BankAccount(111, "mukta", 20)
    // goribManusherAccount.balance = 100;
    goribManusherAccount.addDeposit(1001)
   const myBalance=  goribManusherAccount.getBalance()
    console.log(goribManusherAccount);
    console.log(myBalance);
}