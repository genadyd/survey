import {LibModel} from "../Lib/LibModel.js";

export class Model extends LibModel{
    formJsonBuilder(form = ''){
        let jsonObj = {}
        if(form !='' && form.length>0 ) {
               jsonObj = super.formJsonBuilder(form);
            if (jsonObj.thanks_text !== undefined && jsonObj.thanks_text == '') {
                jsonObj.thanks_text = CKEDITOR.instances['thanks_text'].getData()||'';
            }
        }
        jsonObj.module = 'surveys';
        jsonObj.class = 'Survey';
        return jsonObj;
        }


}
