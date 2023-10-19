export class ProjectSlider{
    private images: HTMLCollection;
    private wrapper: HTMLDivElement;
    private imagesAndChilds: HTMLDivElement[][];

    constructor(){
        this.images = document.getElementsByClassName("slider-image") as HTMLCollection;
        this.wrapper = document.getElementById("slideshow-container") as HTMLDivElement;
        this.imagesAndChilds = [],[];
        this.getImagesAndChilds();
        this.getInfo()
    }
    getInfo(){
        console.log(this.imagesAndChilds);
        console.log(this.wrapper);
    }
    getImagesAndChilds(){
        const newArray = Array.from(this.images);
        (newArray).forEach(parent => {
            const child = parent.querySelector('img') as HTMLElement;
            this.imagesAndChilds.push([(parent as HTMLDivElement),(child as HTMLDivElement)]);
        });
    }

}
