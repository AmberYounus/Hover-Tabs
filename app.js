function openCity(event,cityName){
    var i;
    var tabContent = document.getElementsByClassName("tabContent");
    for ( i = 0; i < tabContent.length; i++) {
        
       tabContent[i].style.display="none" ;
        
    }
    var tabLinks = document.getElementsByClassName("tablinks");
    for ( i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].className = tabLinks[i].className.replace(" active" , "")
        
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}

