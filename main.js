$(document).ready(function(){
  $('.submit').click(function (event){
    console.log('Clicked button')

    var name = $('.fullName').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('status')
    statusElm.empty()


    if(fullName.length > 2){
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Name is not valid</div>')
    }



    if(email.length > 5 && email.include('@') && email.includes('.')){
      statusElm.append('<div>Email is valid</div>')
    } else{
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }


    if(subject.length >= 2){
      statusElm.append('<div>Subject is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</div>')
    }


    if(message.length >= 20){
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }





  })
})
