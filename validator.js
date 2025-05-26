function Validator(options){
    var formElement = document.querySelector(options.form);
 
    console.log(options.rules);
    if (formElement){
        options.rules.forEach(function(rule){

            var inputElement = formElement.querySelector(rule.Selection);
            if (inputElement) {
                inputElement.onblur = function (){
                    var errorMessage = rule.test(inputElement.value);
                    if 
                }
            }


                });
            }
3        }

//dinh nghia cac rules
Validator.isRequired = function(){
return {
Selection: Selection,
test: function(){

}

};
}

validator.isEmail = function(){
    return{
Selection: Selection,
test: function(){
    
}

};
}