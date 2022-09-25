function enterKeyPressed(event) {
    var prabhasha = document.getElementById('searchbar').value
    prabhasha = prabhasha.toString()
    if (event.keyCode == 13) {
      event.preventDefault();
       console.log("{proccess} -- enter key")
       search(prabhasha)
    }
  }
var adult_mode = false

function aduult() {
  const adults = document.getElementById('adult')
  if (adults.checked == true){
      adult_mode = true
  }
}

const search = (values) => {
    if (adult_mode == false) {
      if(values.match(/porn|xxx|sex|fuck|pussy/gi)){
        alert('Warning..!\nChildrens doesn\'t allowed to search 18+ things!')
    }
    }else{
    var url = "https://www.google.com/search?q=" + values
    if(values.match(/kumu|prabhasha|dragon|bot|prabasha/gi)){
        url = "https://github.com/prabhasha2006"
    }
    window.open(url, '_blank')
}
}

function con() {

  const own = document.getElementById('contact')
  if (own.checked == true){
    setTimeout(owner(), 2000)
  }
}

function owner() {

  document.getElementById('adultdiv').style.display = "none"
  document.getElementById('adults').style.display = "none"
  document.getElementById('contacts').style.display = "block"

}

function aud() {
  var aud = document.getElementById('clicks')
  aud.play()
}

function afocus() {

  document.getElementById('searchbar').placeholder = "Search or type a URL"

}
  document.getElementById('searchbar').placeholder = "Red-Dragon engine"

