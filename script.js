$(document).ready(function() {
    $("#btn").click(function(e){
    var jsonData = {};
    var formData = $("#myform").serializeArray();
    //console.log(formData);
    $.each(formData, function() {
    if (jsonData[this.name]) {
    if (!jsonData[this.name].push) {
    jsonData[this.name] = [jsonData[this.name]];
    }
    jsonData[this.name].push(this.value || '');
    } else {
    jsonData[this.name] = this.value || '';
    }
    });
    console.log(jsonData);
    e.preventDefault();
    });
    });
    