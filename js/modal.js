function KTMail(){
    var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
    if($("#email").val() == ""){
    $("#err1").html("* Bắt buộc nhập");
    return false;
    }
    if(!mail.test($("#txtMail").val())){
    $("#err1").html("* Nhập đúng định dạng mail");
    return false;
    }
    $("#err1").html("*");
    return true;
    }
    $("#email").blur(KTMail);