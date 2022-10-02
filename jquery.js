console.log("Entered jquery")
$(document).ready(function () {
    $("#LoadBtn").click(function () {
        $("#LoadNote").load("anurag.txt")
    });

    $("#GetBtn").click(function () {
        $.get("anurag.txt",function(data,status){
            alert("Data : "+data+"\nStatus : "+status)
        });
    });

    $("#PostBtn").click(function () {
        var txt="Hello ,This is new text entered by post Method"
        $.post("anurag.txt",function(data,status){
            alert("Data : "+data+"\nStatus : "+status)
        });
    });
});
