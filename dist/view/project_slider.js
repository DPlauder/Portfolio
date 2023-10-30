export class ProjectSlider {
    //private divRight: HTMLDivElement;
    //private divLeft: HTMLDivElement;
    constructor() {
        this.sliderContainer = document.getElementById("slideshow-container");
        this.picContainer = this.createPicContainer();
        this.elements = this.createElements();
        //this.divRight = this.createDivRight();
        //this.divLeft = this.createDivLeft();
        this.appendDivsToPicContainer();
        this.appendToSliderContainer();
    }
    createPicContainer() {
        const picCon = document.createElement('div');
        picCon.classList.add('slider-pics');
        return picCon;
    }
    createElements() {
        const el = [];
        for (let i = 0; i < 4; i++) {
            el.push(document.createElement('em'));
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
    appendDivsToPicContainer() {
        //this.picContainer.appendChild(this.divLeft);
        //this.picContainer.appendChild(this.divRight);
    }
    appendToSliderContainer() {
        this.sliderContainer.appendChild(this.picContainer);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlldy9wcm9qZWN0X3NsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYTtJQUl0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBRWxDO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFtQixDQUFDO1FBQ3hGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsd0NBQXdDO1FBQ3hDLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFDL0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELGNBQWM7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDZCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQWdCLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7TUFlRTtJQUNGLHdCQUF3QjtRQUNwQiw4Q0FBOEM7UUFDOUMsK0NBQStDO0lBRW5ELENBQUM7SUFDRCx1QkFBdUI7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDSiJ9