const inputs = document.querySelectorAll("input");

const patterns = 
{
    username: /^[a-z\d]{5,12}$/i,
    telephone: /^\d{10}$/,
    password: /[\w@-]{7,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]{2,8})\.([a-z]{2,5})?$/
};

// validation function
function validate(field , regex){
    if(regex.test(field.value))
    {
        field.className = "valid";
    }
    else
    {
        field.className = "invalid";
    }
}

inputs.forEach((input) =>
    {
        input.addEventListener('keyup' , (e) =>
        {
            validate(e.target , patterns [e.target.attributes.name.value])  
        });
    });