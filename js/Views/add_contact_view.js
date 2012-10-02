define(function() {
    function render(parameters) {
        var appDiv = document.getElementById('app');
        var controls = [
			'<label>First Name</label>',
			'<input id="first-name" />',
			'<label>Last Name</label>',
			'<input id="last-name" />',
			'<label>Email</label>',
			'<input id="email" />',
			'<label>Phone</label>',
			'<input id="phone" />',
			'<button id="add">Add this user</button>'
        ];
        appDiv.innerHTML = controls.join('<br />');;
    }
    return {
        render: render
    };
});