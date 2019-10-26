export class LibModel {
    formJsonBuilder(formContainer){
        let formObject = {},
            index,
            value;
        $.each(formContainer.find(':input'),function () {
            index = $(this).attr('name');
            value = $(this).val();
            if(index !== undefined) {
                formObject[index] = value
            }
        })
        return formObject;
    }

}
