export  class SurveyObjectBuilder {

    constructor(json) {
        this.jsonObject = json;

        this.init();
        // this.buildNewSurvey();
    }

    init() {
        if ( !localStorage.getItem('SurveyObject')) {
            localStorage.setItem('SurveyObject',JSON.stringify({}))

        }
    }
   async buildNewSurvey(){
        this.jsonObject.forEach((item, key) =>{
            const surObj =  localStorage.getItem('SurveyObject')

            if(!surObj[item.crypt]){
                console.log(surObj)
                surObj[item.crypt] = {}
            }
            localStorage.setItem('SurveyObject', surObj)
        })

    }
}
