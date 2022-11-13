const selector = selector => document.querySelector(selector);
var uuid;

$(document).on('submit','#post-form', (e) => {
        e.preventDefault();
    console.log($('#link').val())
        $.ajax({
                type:'POST',
                url:'/create',
                data: {
                        link:$('#link').val(),
                        csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                },
                success: (data) => {
                        uuid = data;
                        $('h2').html(`https://${window.location.host}/${data}`);
                        $('i').css('visibility', 'visible')
                }
        });
});

function goNewUrl() {
        if(!selector('h2').textContent) return;
        window.open(uuid);
}

function copyNewUrl() {
        if(!selector('h2').textContent) return;
        copyToClipboard(selector('h2').textContent);
}

function copyToClipboard(text) {
        let input = document.body.appendChild(document.createElement("input"));
        input.value = text;
        input.focus();
        input.select();
        document.execCommand('copy');
        input.parentNode.removeChild(input);
}
