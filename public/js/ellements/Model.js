import {LibModel} from "../Lib/LibModel.js";

export class Model extends LibModel{
    formJsonBuilder(form = ''){
        let jsonObj = {}
        if(form !='' && form.length>0 ) {
            jsonObj = super.formJsonBuilder(form);

        }
        jsonObj.module = 'answers';
        jsonObj.class = 'Answer';
        return jsonObj;
    }
}
