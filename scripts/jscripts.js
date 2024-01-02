function validateForm() {
    var vDocElement;
    var validF = "true";
    vDocElement = document.getElementById("fname").value;

    if (vDocElement == "") {
        document.getElementById("msgName").innerHTML = "Please enter your name";
        validF = "false";
    } else {
        document.getElementById("msgName").innerHTML = "";
    }

    vDocElement = document.getElementById("femail").value;
    if (vDocElement == "") {
        document.getElementById("msgEmail").innerHTML = "Please enter a valid email address";
        validF = "false";
    } else {
        document.getElementById("msgEmail").innerHTML = "";
    }

    vDocElement = document.getElementById("fsubject").value;
    if (vDocElement == "") {
        document.getElementById("msgSubject").innerHTML = "Please enter your subject";
        validF = "false";
    } else {
        document.getElementById("msgSubject").innerHTML = "";
    }

    vDocElement = document.getElementById("fmessage").value;
    if (vDocElement == "") {
        document.getElementById("msgMessage").innerHTML = "Please enter a message";
        validF = "false";
    } else {
        document.getElementById("msgMessage").innerHTML = "";
    }

    if (validF == "true") {
        alert("Your message was succesfully sent, thank you");
        return true;
    } else {
        return false;
    }
}

function validateFormReservation() {
    var vDocElement;
    var validF = "true";
    var vName = "";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    vDocElement = document.getElementById("fname").value;
    vName = vDocElement;
    if (vDocElement == "") {
        document.getElementById("msgName").innerHTML = "Please enter your name";
        validF = "false";
    } else {
        document.getElementById("msgName").innerHTML = "";
    }

    vDocElement = document.getElementById("fphone").value;
    if (vDocElement == "") {
        document.getElementById("msgPhone").innerHTML = "Please enter your phone";
        validF = "false";
    } else {
        document.getElementById("msgPhone").innerHTML = "";
    }

    vDocElement = document.getElementById("femail").value;
    if (vDocElement == "") {
        document.getElementById("msgEmail").innerHTML = "Please enter a valid email address";
        validF = "false";
    } else {
        if (!vDocElement.match(mailformat)) {
            document.getElementById("msgEmail").innerHTML = "Please enter a valid email address format";
            validF = "false";
        } else {
            document.getElementById("msgEmail").innerHTML = "";
        }
    }



    vDocElement = document.getElementById("fpeople").value;
    if (vDocElement == "0") {
        document.getElementById("msgPeople").innerHTML = "Please select how many people";
        validF = "false";
    } else {
        document.getElementById("msgPeople").innerHTML = "";
    }

    vDocElement = document.getElementById("fdate").value;
    if (vDocElement == "") {
        document.getElementById("msgDate").innerHTML = "Please select date";
        validF = "false";
    } else {
        document.getElementById("msgDate").innerHTML = "";
    }

    vDocElement = document.getElementById("ftime").value;
    if (vDocElement == "0") {
        document.getElementById("msgTime").innerHTML = "Please select time";
        validF = "false";
    } else {
        document.getElementById("msgTime").innerHTML = "";
    }

    if (validF == "true") {
        alert(vName + " your Reservation was succesfully made, thank you");
        return true;
    } else {
        return false;
    }


    function enviarEmail() {
        // Obter o conteúdo da carta do formulário
        var carta = document.getElementById('carta').value;
    
        // Verificar se a carta não está vazia
        if (carta.trim() === "") {
            alert("Por favor, escreva sua carta antes de enviar.");
            return;
        }
    
        // Criar um objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // Configurar a solicitação para o arquivo PHP (ou qualquer script do lado do servidor que você esteja usando)
        xhr.open("POST", "enviar_email.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        // Definir a função de retorno de chamada
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Resposta do servidor (pode ser usada para feedback ao usuário)
                alert(xhr.responseText);
            }
        };
    
        // Enviar os dados para o servidor
        xhr.send("carta=" + carta);
    }
    
}
