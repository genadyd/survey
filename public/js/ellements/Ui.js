export class Ui{
    buttonShow(jsonObject){
     const buttonTitle = jsonObject.type ==  'select_container'?'הוסף תיבת בחירה':'הוסף כפתור רדיו'
     let buttonHtml = '<button type="button"' +
         ' type_crypt="'+jsonObject.crypt+'" ' +
         'element_type="'+jsonObject.type+'"' +
         ' class="btn btn-outline-success element_add">'+buttonTitle+
         '</button>';
     $('.answers_forms_container .one_element_box[element_type_crypt='+jsonObject.crypt+'] .add_element_button').html(buttonHtml);
    }
}
