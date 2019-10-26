export class Ui{
    constructor(){

    }
   survaysListContainerOppenClose(){
$('#survey_admin_navbar').on('click', '.open_close_list' ,function () {
    let container = $('#surveys_list_container');
    if(container.is('.hidden')){
        container.removeClass('hidden');
        $(this).find('.fas.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up')
    }else{
        container.addClass('hidden');
        $(this).find('.fas.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down')
    }
})
   }

 }

