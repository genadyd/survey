import {Modal} from "./Modal.js";
// import {UniqeGenerator} from "../Lib/UniqeGenerator.js";

export class MessageModal extends Modal{
    modalShow() {
        super.modalShow()
        CKEDITOR.replace('message_for_ans_quest', {
            contentsLangDirection: 'rtl',
            language: 'he'
        });
    }

}
