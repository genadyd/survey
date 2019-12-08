import {jsonObjectFromFormBuilder} from "../Lib/jsonObjectFromFormBuilder.js";


export class Model{
    formJsonBuilder(form = ''){
        let jsonObj = {}
        if(form !='' && form.length>0 ) {
               jsonObj = jsonObjectFromFormBuilder.formJsonBuilder(form);
            if (jsonObj.thanks_text !== undefined && jsonObj.thanks_text == '') {
                jsonObj.thanks_text = CKEDITOR.instances['thanks_text'].getData()||'';
            }
        }
        jsonObj.module = 'surveys';
        return jsonObj;
        }


}
