let formIsValid = function(self) {
   if(self.name == "" || self.email == "" || self.object == "" || self.message == "" || !self.verify){
      return false
   }
   return true
}

let submitForm = function(self) {
   if(!self.formIsValid()){
      return
   }
   self.isSending = true

   var data = "name="+this.name+"&object="+this.object+"&message="+this.message+"&email="+self.email;

   let httpRequest = new XMLHttpRequest();
   httpRequest.withCredentials = true;
   
   httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
           
            var response = JSON.parse(httpRequest.responseText);
            if(response.statut == "success") {
               self.statut = 'success'
               self.responseMessage = "Votre message a bien été envoyé. Nous vous répondrons dans les plus bref délais."
               console.log('success')
            }else{
                self.statut = 'error'
                self.responseMessage = "Une erreur est survenu lors de l'envoi. Merci de rééssayer ultérieurement"
                console.log('error')
            }
            
         } else {
            self.statut = 'error'
            self.responseMessage = "Une erreur est survenu lors de l'envoi. Merci de rééssayer ultérieurement"
            console.log('error 2')
         }
         self.isSending = false
      }
   };
   

      httpRequest.open("POST", "/handleForm.php");
      httpRequest.setRequestHeader("Accept", "*/*");
      httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      httpRequest.send(data);
}


let onVerify = function(self, token) {
   self.verify = true
   console.log('verify')
}


export default {formIsValid, submitForm, onVerify}