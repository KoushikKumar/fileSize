'use strict';

$(".uploadDiv").css("pointer","cursor");
$(function() {
     $("input:file").change(function (){
       $("#attachmentForm").submit();
       $(".upload").prop("disabled",true);
     });
 });
  
