$(document).ready(function(){
	var API_KEY = "AIzaSyBXntONNCIFdoJjSX84Uo-s6pCOxSJv06U";
	
	var video=''

	$('#form').submit(function(event){
		event.preventDefault()
		var search = $("#search").val()
		var maxResults = $("#maxResults").val()
		var orderInput = $("#order-input").val()
		videoSearch(API_KEY,search,parseInt(maxResults), orderInput)
	
	})

	function videoSearch(key, search, maxResults, orderInput){
		maxResults = maxResults || 10
		$.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search +"&order=" + orderInput, function(data){
			console.log(data)
			data.items.forEach(item =>{
				video = `
				<iframe width="100%" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>

				`
				$("#videos").append(video)
				})
		})
	}
})