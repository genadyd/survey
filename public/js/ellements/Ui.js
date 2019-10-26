export class Ui{
    buttonShow(jsonObject){
     let buttonHtml = '<button type="button"' +
         ' type_crypt="'+jsonObject.crypt+'" ' +
         'element_type="'+jsonObject.type+'"' +
         ' class="btn btn-outline-success">'+jsonObject.element_title+
         '</button>';
     $('.answers_forms_container .one_element_box[element_type_crypt='+jsonObject.parent_box_type_crypt+'] .add_element_button').html(buttonHtml);
    }
}
