export class MainAjaxSender {
    constructor( sendObject, serviceObject={}){
        this.sendObject = sendObject;
        this.serviceObject = serviceObject;
        this.ajaxParamsObject = {};
    }
    AjaxSend(){
        this.setParamsForAjaxSendUse();
        return new Promise((resolve, reject)=>
        {
            $.ajax({
                url: this.ajaxParamsObject.url,
                type: this.ajaxParamsObject.type,
                dataType: this.ajaxParamsObject.dataType,
                data: {objectToSend: JSON.stringify(this.sendObject)},
                success: (resp) => {
                    resolve(resp)
                    }
                })
            })
    }
    setParamsForAjaxSendUse(){
       this.ajaxParamsObject.url = '/survey/index.php';
       this.ajaxParamsObject.type = 'post';
       this.ajaxParamsObject.dataType = 'json';
        if(this.serviceObject.hasOwnProperty('url') && typeof this.serviceObject.url == 'string'){
            if(this.serviceObject.url != '') {
                this.ajaxParamsObject.url = this.serviceObject.url
            }
        }
        if( typeof this.serviceObject.type != "undefined" && typeof this.serviceObject.type == 'string' && this.serviceObject.url != ''){
            this.ajaxParamsObject.dataType = this.serviceObject.dataType
        }
        if( typeof this.serviceObject.dataType != "undefined" && (this.serviceObject.type == 'post' || this.serviceObject.type == 'get')){
            this.ajaxParamsObject.type = this.serviceObject.type
        }

    }
}
