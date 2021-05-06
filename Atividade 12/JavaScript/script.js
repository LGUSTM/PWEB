document.addEventListener("DOMContentLoaded", () => {

    var form = document.forms["form"]
    var name = document.forms["form"].elements["name"];
    var email = document.forms["form"].elements["email"];
    var comments = document.forms["form"].elements["comments"];
    var bntYes = document.forms["form"].elements["radiobtn_yes"];
    var btnNo = document.forms["form"].elements["radiobtn_no"];

    form.addEventListener('submit', (evt) => {
        if (!validar()){
            evt.preventDefault();
        }

    });

    function validar(){
        
        if(name.value.length < 10){
            alert("Insira um nome com no mínimo 10 caracteres.");
            name.focus();
            return false;
        }

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            alert("O e-mail digitado não é inválido.");
            email.focus();
            return false;
        }

        if(comments.value.length < 10){
            alert("O comentário não pode ter menos do que 20 caracteres.");
            comments.focus();
            return false;
        }

        if(!(bntYes.checked || btnNo.checked)){
            alert("O preenchimento da pesquisa é obrigatório.");
            return false;
        }
        
        alert(btnNo.checked ? "Obrigado pela visita!" : "Volte sempre!");
    }

});