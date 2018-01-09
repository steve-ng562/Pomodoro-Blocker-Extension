var urls = [
'https://instagram.com',
'https://facebook.com',
'https://reddit.com'
];

$(document).ready(function(){
loadURLS();

//when submit is clicked
$(".btn-primary").click(function(){
	var str = $('.form-control').val();
	if(str.substring(0,8) == "https://"){
	urls.push(str);
console.log(JSON.stringify(urls));
}
else
	alert("Please input the URL in the correct format.");

});

//when remove is clicked
$(".btn-danger").click(function(){

});
//save URLS to localStorage
$(".btn-success").click(function(){
updateURLS();
});


function updateURLS(){
	localStorage.setItem("url", JSON.stringify(urls));


}
function loadURLS(){

}
});

