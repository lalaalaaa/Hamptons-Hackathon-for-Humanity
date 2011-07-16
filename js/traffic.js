
function Question(id, image, options)
{
id : id;
image : image;
options : options;
}

function Option(id, text)
{
id : id; 
text : text; 
next : next;
}


HHH = {};
///URL
HHH.getQuestionUrl = "";


//Object Methods
HHH.NextQuestion = function(questionId){
  //Get Question
  $.getJSON(HHH.NextQuestionUrl, function(data){
    //populate page element with question
  });
}



//Page Utils

HHH.MouseOverQuestion = function(){
//Mouse Over
}

HHH.Transition = function(){
//Transition animation
}

