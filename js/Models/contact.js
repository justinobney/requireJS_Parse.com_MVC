define(['parse'],function(){
    
    function Contact(first_name, last_name, email, phone){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;

        this.save = function(callback){
            var Contact = Parse.Object.extend("Contact");

            var contactEntry = new Contact();
            contactEntry.save({
                first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
                email: this.email
            }, {
                success: function (object) {
                    callback(object);
                },
                error: function (model, error) {
                    console.log(model, error);
                }
            });
        };
    }

    return Contact;
});