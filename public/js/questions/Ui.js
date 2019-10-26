export class Ui{
  getQuestionsElements(jsonData) {
      let elementsHtml ='';

      // console.log(map);
      for( let key in jsonData) {
          elementsHtml += '<button type="button" type_crypt="'+jsonData[key].crypt+'" element_type="' + jsonData[key].type + '" class="btn btn-outline-success">'
              + jsonData[key].element_title +
              '</button>'

      }
      $('.answers_elements_types').find('.types_container').html(elementsHtml).removeClass('hidden').end().find('.answers_types_open_close').addClass('types_oppened').text('הסתר סוגי תגובות')
  }
    closeTypesElementsBox(button){
      button.text('הצג סוגי תגובה').removeClass('types_oppened').closest('.answers_elements_types').find('.types_container').addClass('hidden');
    }



}
