// Imagine this is implementation of TakePhoto by 3rd Party Developer
interface TakePhoto {

    cameraMode: string,
    filter: string,
    fps: string
}

// You want add field in your application like createStory() which is not available in TakePhoto
interface Story {

    createStory(): void
}

class Instagram implements TakePhoto, Story {

    constructor(
        public cameraMode: string,
        public filter: string,
        public fps: string
    ) {

    }

    createStory(): void {
        console.log(`this.cameraMode + this.fps + this.filter`)
    }
}