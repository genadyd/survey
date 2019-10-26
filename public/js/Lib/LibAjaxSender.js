export class LibAjaxSender {
    constructor(sendObject){
        this.sendObject = sendObject;
    }
    AjSender(dataType='text'){
            $.ajax({
                url:'/survey/index.php',
                type:'post',
                dataType:dataType,
                data:{objectToSend:JSON.stringify(this.sendObject)},
                success:(resp)=> {
                    if(this.sendObject.collback !== undefined){
                        this.sendObject.collback(resp);
                    }
                }
        })
    }
}
