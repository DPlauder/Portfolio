export class ProjectSlider{
    private sliderContainer: HTMLDivElement;
    private picContainer: HTMLDivElement;
    private elements: HTMLElement[];
    //private divRight: HTMLDivElement;
    //private divLeft: HTMLDivElement;

    constructor(){
        this.sliderContainer = document.getElementById("slideshow-container") as HTMLDivElement;
        this.picContainer = this.createPicContainer();
        this.elements = this.createElements();
        //this.divRight = this.createDivRight();
        //this.divLeft = this.createDivLeft();
        this.appendDivsToPicContainer();
        this.appendToSliderContainer();
    }

    createPicContainer(){
        const picCon = document.createElement('div') as HTMLDivElement;
        picCon.classList.add('slider-pics');
        return picCon;
    }
    createElements(){
        const el = [];
        for(let i = 0; i < 4; i++){
            el.push(document.createElement('em') as HTMLElement);
        }
        return el;
    }
    /*
    createDivRight(){
        const divRight = document.createElement('div');
        divRight.classList.add('next');
        divRight.appendChild(this.elements[0]);
        divRight.appendChild(this.elements[1]);
        return divRight;
    }
    createDivLeft(){
        const divLeft = document.createElement('div');
        divLeft.classList.add('prev');
        divLeft.appendChild(this.elements[2]);
        divLeft.appendChild(this.elements[3]);
        return divLeft;
    }
    */
    appendDivsToPicContainer(){
        //this.picContainer.appendChild(this.divLeft);
        //this.picContainer.appendChild(this.divRight);

    }
    appendToSliderContainer(){
        this.sliderContainer.appendChild(this.picContainer);
    }
}
