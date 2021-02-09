class Question{
    constructor(){
       this.input=createInput("ENTER THE CORRECT OPTION")
       this.button=createButton("SUBMIT")
       //this.answer=createElement("h3");
       this.input2=createInput("ENTER YOUR NAME")
    }
    display(){
       this.input.position(550,280)
       this.button.position(600,320)
       this.input2.position(400,280)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.input2.hide();
            contestant.answer=this.input.value();
            contestant.name=this.input2.value();
            contestantCount+=1
            contestant.updateCount(contestantCount)
            contestant.update();
            contestant.index=contestantCount
           // console.log(this.answer)
        });
    }
}