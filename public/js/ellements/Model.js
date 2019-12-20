import {LibModel} from "../Lib/LibModel.js";

export class Model extends LibModel{
    formJsonBuilder(form = ''){
        let jsonObj = {}
        if(form !='' && form.length>0 ) {
            jsonObj = super.formJsonBuilder(form);
        }
        jsonObj.module = 'forms_elements';

        return jsonObj;
    }
}
