/* 
    Abstract class is blue print it contains method implementation

    You cannot directly create class diretly from abstract

    You have to extend that abstract in your application then only you can use in your application

*/
abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){

    }

    abstract getSepia() : void

    blurFilter() : void {
        console.log("This the blur filter of Original pre-implmented class")
    }

}

// const virencamera = new TakePhoto("Open","Blue")     // Not allowed

class virenTakePhoto extends TakePhoto{
    
    constructor(
        public cameraMode:string,
        public filter : string
    ){
        super(cameraMode,filter)
    }

    getSepia() : void {
        console.log("You have changed to Speia Mode")
    }

    customFilter() : void {
        console.log("My custom filter in your class")
    }
}

let virenCamera = new virenTakePhoto("Open","Normal")

virenCamera.blurFilter()        // this is the function of abstract class
virenCamera.customFilter()      // this is function of your own implementation class
