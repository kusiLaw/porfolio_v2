const formValidation = {
  email  : (mail) => ( (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) ),
  name  : (name) => ( name.trim().split(' ').every( el =>/^[A-Za-z]+$/.test(el)) && name.length >= 2 ),
    
}

export default formValidation