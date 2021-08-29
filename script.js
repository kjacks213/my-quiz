var index = 0

function myFunction() {
    document.getElementById("demo").innerHTML += '<br/>' ;
    document.getElementById("demo").innerHTML += quiz[index][0];
    document.getElementById("demo").innerHTML += '<br/>' ;
    document.getElementById("demo").innerHTML += '<form>' ;
    for (let i = 1; i < quiz[index].length; i++) {
        document.getElementById("demo").innerHTML += quiz[index][i] + "<br>";
    } 
    index++;
}
var quiz = [
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ],
    ['Question 1','<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' , '<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ,'<input type="radio" id="html" name="fav_language" value="option1"> <label for="html">Option1</label>' ]

];