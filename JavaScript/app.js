        $("input").on("click", function(evenement) {
        var valeur = $(this).val();
        console.log(valeur);
        $("#resultat").val(valeur);
    });

    //Additions//

    function additions(a, b){
      console.log(a + b);

    };

    //Soustractions//

    function soustractions(a, b){
      console.log(a - b);
    };

    //Multiplications//

    function multiplications(a, b){
      console.log(a * b);
    };

    //Divisions//

    function divisions(a, b) {
        if(b > 0){
            console.log(a / b);
            } else {
                console.log(a / b);
            }

    };

    var nombre1 = 0;        
    var nombre2 = 0;

    $("add").click(function(){
        operation = "additions";
    });  

    $("sous").click(function(){
        operation = "soustractions";
    });  

    $("mul").click(function(){
        operation = "multiplications";
    }); 

    $("div").click(function(){
        operation = "divisions";
    }); 







    

