export class Modal{
    constructor (modalFormObj, behavior){
       this.modalFormObj = modalFormObj;
       this.behavior = behavior
       this.modalContainerCreate();

    }
    modalContainerCreate(){
        this.modalContainerHtml = '<div class="modal_page_closer">' +
            this.behavior.getFormHtml()
                +'</div>';
    }
    modalShow(){
       $('#page_wrapper').prepend(this.modalContainerHtml);

    }
}
