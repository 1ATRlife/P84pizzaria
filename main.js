pizza_list_array = [];

function getmenu(){
        var item = document.getElementById("pizza_name").value;
        pizza_list_array.push(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
}
console.log("Lookie here, an old, badly coded foodbot at this url! http://ai2.appinventor.mit.edu/#6206582976020480 and also a nice video at https://www.youtube.com/watch?v=xvFZjo5PgG0")