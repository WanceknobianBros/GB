var confirmPassword = "w@nce_2015";
      let i;
      var youShallPass = true;
      var attempted = false;
      function checkPswd() {
         var password = document.getElementById("pswd").value;
         if (password == confirmPassword) {
            if (!youShallPass){
               document.getElementById("ha").innerText = "HAHA, NO U CANT DO DAT BOI YOU ALREDE GOT IT WROONG";
               throw new Error("Quit trying to hack into my highly sophisticated website, you can't do it.")
            }
            window.location = "https://greasybanana.w3spaces.com/-rfew22a6ub35hgwx5tg-ee88ferv28p58zhfqb48vru-4cmf9rjss-xu63q9cyhunr253kzcwygz7p4c27wzurdmq6ta986tn2-rav-9tn.html"
         } else {
            document.getElementById("pswd").style = "border-color : red;";
            document.getElementById("pt").style = "color : red;";
            document.getElementById("cont").style = "background-color : red;";
            youShallPass = false;
         }
      }