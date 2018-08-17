/// Javascript code function will be called on body load 

function Show(){
    // Find a element with id
    var div = document.getElementById('attrs');

    var attrs = document.getElementById('google').attributes;

    let att = '';
    for(let idx = 0 ; idx <attrs.length ; ++idx){
        att += 'Name : '+attrs[idx].name  + ' value : '+ attrs[idx].value +' ';
    }

    div.innerText = att;
}

function Hide(){
    var div = document.getElementById('attrs');
    div.innerText = "";
}