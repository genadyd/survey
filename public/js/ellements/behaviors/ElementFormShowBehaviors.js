 export class ElementFormShowBehaviors {
    constructor(elementObject){
        this.elementObject = elementObject;
    }
     formBuilder(){
        let formHtml ='' +
             '<div class="one_element_box" element_type="'+this.elementObject.elementType+'" question_crypt="'+this.elementObject.elementQuestionCrypt+'" element_type_crypt="'+this.elementObject.elementTypeCrypt+'">' +
             '<div class="label">התשובה</div>' +
            '<div class="ans_container">' +
            '<div class="type_heading">'+this.elementObject.elementTypeTitle+'</div> ' +
             '<div class="answer_title">' +
             '<input type="text" placeholder="כותרת התשובה">' +
             '</div>' +
            '<div class="controls_box">' +
            '<div class="ans_delete"><i class="far fa-trash-alt answer_remove_init text-danger"></i></div>' +
            '</div>' +
            '</div>' +
             '</div>';
         return formHtml;
     }
 }
