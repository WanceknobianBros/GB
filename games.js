 let footer = document.getElementById("foot");
    let exit = document.getElementById("fixed");
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
    function showHide() {
      var x = document.getElementById("fixed");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    exit.addEventListener('click',function (){
      location.reload();
    })
    document.addEventListener('keydown', function(event) {
      if(event.keyCode == 13) {
        e();
      }
    });
      showHide();
      let error = document.getElementById("error");
      function e() {
        error.innerText = ""
        var x = document.getElementById('ta').value;
        if(x.charAt(0) == "h" && x.charAt(1) == "t"){
		      document.getElementById('games').src = x;
		    } else{
		      document.getElementById('games').src = "https://" + x;
		    }
        document.getElementById('games').hidden = false;
        footer.hidden = true
        showHide()
      };
      function onError() {
        error.innerText = "Oh No! It looks like we encountered an error!"
        document.getElementById('games').hidden = true;
      };