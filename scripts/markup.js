
    $(document.body).on('mouseup', function(){
        var text = document.getSelection().toString();
        var length= document.getSelection().toString().length;  /*** Mit Sonderzeichen! ***/
        // full way
      //   var lengthregulate = document.getSelection().toString().replace(/[!-~\d\s\u3002\u201C\uFF1F\u201D\uFF01\uFF0C\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g).length;
        
        // anacreon way
        var lengthregulate = document.getSelection().toString().replace(/[!-~\d\s\u3002\uFF1F\uFF01\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g).length;
        
        selectednumber.style.visibility = "visible";
        setTimeout(function() {
        selectednumber.style.visibility = "hidden";
         }, 2100);

        // selectedtext.style.visibility = "visible";
        //  setTimeout(function() {
        // selectedtext.style.visibility = "hidden";
        //   }, 2100);
         
        
    
        document.getElementById("selectednumber").innerHTML = lengthregulate;
      


    });
        /*** Textbox for selected text ***/
        // if (text) {
        //     alert(text);   
        // }

        /***Textbox for counter ***/
    //     if (length) {
    //         alert(length);   
    //     }
    // });

