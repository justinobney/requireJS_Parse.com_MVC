define(function() {
    function render(parameters) {
        var appDiv = document.getElementById('app');
        var contacts = parameters.contacts;
        var html = '<ul>';
        for (var i = 0, len = contacts.length; i < len; i++) {
            html += '<li>' + contacts[i].first_name + ' ' + contacts[i].last_name + '</li>';
        }
        html += '</ul>';
        appDiv.innerHTML = html;
    }
    return {
        render: render
    };
});