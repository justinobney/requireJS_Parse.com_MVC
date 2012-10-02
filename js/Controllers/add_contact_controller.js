define(['Views/add_contact_view', 'Models/contact','parse'], function(add_contact_view, Contact) {
    function start() {
        add_contact_view.render();
        bindEvents();
    }

    function bindEvents() {
        document.getElementById('add').addEventListener('click', function() {
            var first_name = document.getElementById('first-name').value;
            var last_name = document.getElementById('last-name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            
            if(first_name == '' || last_name == '')
            {
                alert("Invalid Data");
                return false;
            }

            var contact = new Contact(first_name, last_name, email, phone);

            contact.save(function(data){
                window.location.hash = '#list';
            });

        }, false);
    }

    return {
        start: start
    };
});