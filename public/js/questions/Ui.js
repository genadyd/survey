export class Ui{
  getQuestionsElements(jsonData) {
      let elementsHtml ='';

      // console.log(map);
      for( let key in jsonData) {
          elementsHtml += '<button type="button" type_crypt="'+jsonData[key].crypt+'" element_type="' + jsonData[key].type + '" class="btn btn-outline-success tst">'
              + jsonData[key].element_title +
              '</button>';
      }
      $('.answers_elements_types').find('.types_container').html(elementsHtml).removeClass('hidden').end().find('.answers_types_open_close').addClass('types_oppened').text('הסתר סוגי תגובות')
  }
    closeTypesElementsBox(button){
      button.text('הצג סוגי תגובה').removeClass('types_oppened').closest('.answers_elements_types').find('.types_container').addClass('hidden');
    }
    
    questonsListHtmlBuilder(questionsObject){
      let htmlList = '';
        questionsObject.forEach(function (val, index) {
            htmlList +='<div class="oneQuestion card" question_crypt="'+val.crypt+'">' +
                '<div class="card-header"><span class="question_remove"> <i class="far fa-trash-alt"></i></span><h4 class="quest_title">'+val.question_text+'</h4></div>' +
                '<div class="card-body d-flex justify-content-between">' +
                '<div class="card" style="width: 18rem;">' +
                '<div class="card_header">fgfdgf11</div>' +
                '<div class="card_body">fghgfh gfhgfhgf</div>' +
                '</div>' +
                '<div class="card" style="width: 30%;">' +
                '<div class="card_header">fgdfgfd</div>' +
                '<div class="card_body">gfhgfh gfhgfh</div>' +
                '</div>' +
                '<div class="card" style="width: 18rem;">' +
                '<div class="card_header">fgdfgd</div>' +
                '<div class="card_body">vcbvcbcvbc</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        })
        let displayContaimer = document.getElementsByClassName('quuestions_display_container');
        displayContaimer[0].innerHTML = htmlList;
    }



}
