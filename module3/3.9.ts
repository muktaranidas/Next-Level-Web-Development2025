{
    //abstraction: idea dei......                    1. interface         2.abstract
    // idea
    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move():void
    }
    // real implementaion
    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stoping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`I am Testing`);
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine()


    // abstract class 
    // idea
     abstract class Car2{
       abstract startEngine(): void 
        abstract stopEngine(): void
        abstract move(): void 
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log(`I am Starting`);
        }
        stopEngine(): void {
            console.log(`Stop`);
        }
        move(): void {
            console.log(`Move`);
        }
    
}
    // const hondaCar = new Car2()
    // hondaCar.startEngine()

    //
}