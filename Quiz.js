class Quiz {
    constructor(){
        
    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    updata(state){
        database.ref("/").updata({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref("contestantCount").once("value")
            if(contestantCountRef.exists){
                var displayAns=200
                contestantCount=contestantCountRef.val();
                contestant.getCount();

            for(var con in allContestants){
                var correctans="3";
                if(correctans===allContestants[con].answer){
                    fill("green")
                    text("correct",550,280)
                } else{
                    fill("red")
                    text("wrong",550,280)
                }
                displayAns+=30
                textSize(20)
                text(allContestants[con].name+":"+allContestants[con].answer,200,displayAns)

            }
            }
            
            question=new Question();
            form.display();
        }
    }
}