menu_list_array = [];
var visible = 0;
var htmldata="";
function getmenu(){
    htmldata="";
    if (visible==0){

        document.getElementById("display_menu").innerHTML = "";
        document.getElementById("menu_list").innerHTML = "Hide Menu";
        visible = 1;

    } else if (visible==1){
        
    for(var i=0; i<menu_list_array.length; i++){
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
    document.getElementById("menu_list").innerHTML = "Show Menu";
    visible = 0;
    
}
}

function add_suggestion(){
	var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    htmldata="";
    for(var j=0; j<menu_list_array.length; j++)
    {
        htmldata=htmldata+ menu_list_array[j] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
    visible = 0;
}

