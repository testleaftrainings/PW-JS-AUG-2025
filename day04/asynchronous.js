function browserPage(){
  setTimeout(() => {
     console.log("Loading the image")
  }, 2000); 
   console.log("Working with asynchronous call")
}

function elemntText(){
    console.log("Loading the element text")
}
browserPage()
elemntText()