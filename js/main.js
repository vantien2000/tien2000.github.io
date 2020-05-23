var menu = [
    'item1',
    'item2',
    'item3',
    'item4'
];

var onMenu = document.getElementById('menu-drop');
var onDropDown = document.getElementById('menu-dropdown');
onMenu.addEventListener('click',render);
function render(){
    var getElement = document.querySelectorAll('#menu-dropdown>#dropdown-menu');
    var content = menu.map(function(item){
        return '<li>'+item+'</li>';
    });
    for(var i=0;i<getElement.length;i++)
        getElement[i].innerHTML = content.join('');
    
};
onMenu.addEventListener('click',myFunction);
function myFunction(){
    onDropDown.style.display = 'block';
}
onMenu.addEventListener('mouseenter',function(){
    onDropDown.style.display = 'none';
});

var onSearch = document.getElementById('search-icon');
var search = document.getElementById('search');
onSearch.addEventListener('click',function (){
    search.style.display = 'block';
});
search.addEventListener('mouseout',function(){
    search.style.display = 'none'
})





