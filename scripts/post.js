var data = {}
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = decodeURI(tmp[1]);
    }

    var template = '<div class="container">' +
        '<p class="header-design" id="user-header">'+ data.content_heading +'</p>'+
        '<div class="name-edit">' +
            '<span class="float-left name-alignment">'+ data.name +'</span>'+
            '<span class="float-right" id="edit-btn">'+
                '<button class="btn-danger" onclick="editContent()">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>'+
            '</span>'+
        '</div>'+
        '<div>'+
            '<p id="user-content">'+ data.content_body +'</p>'+
            '<button class="btn-danger" onclick="liked()" id="like-name">'+
                '<i class="fa fa-thumbs-up" aria-hidden="true"></i>'+
                '<span >Like</span>'+
            '</button>'+
            '<p id="like-content">Be the first one to like this!</p>'+
        '</div>'+
        '<div>'+
            '<textarea class="textarea-design" id="comment-text" placeholder="Leave a comment..."></textarea>'+
            '<div><button class="btn-danger" onclick="addComment()">Comment</button></div>'+
        '</div>'+
        '<div>'+
            '<p>All Comments</p>'+
            '<span id="all-comments">'+
            '</span>'+
        '</div>'+
    '</div>';

    document.getElementById('main-content').innerHTML = template;

}




function liked() {
    document.getElementById('like-content').innerHTML = '1 person likes this!';
    document.getElementById('like-name').innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked';
}

function addComment() {
    var message = $('textarea#comment-text').val();
    document.getElementById('comment-text').value = '';
    var old_content = document.getElementById('all-comments').innerHTML;
    document.getElementById('all-comments').innerHTML = '<span class="form-control comments-box"> <p>'+message+'</p></span>' + old_content;

}

function editContent() {
    var user_header_element = document.getElementById("user-header");
    var user_content_element = document.getElementById("user-content");
    user_header_element.contentEditable = true;
    user_content_element.contentEditable = true;

    user_header_element.classList.add("user-edit-border");
    user_content_element.classList.add("user-edit-border");

    document.getElementById('edit-btn').innerHTML = '<button class="btn-danger" onclick="saveContent()">Save <i class="fa fa-floppy-o" aria-hidden="true"></i></button>'

}


function saveContent() {
    var user_header_element = document.getElementById("user-header");
    var user_content_element = document.getElementById("user-content");

    user_header_element.contentEditable = false;
    user_content_element.contentEditable = false;
    document.getElementById('edit-btn').innerHTML = '<button class="btn-danger" onclick="editContent()">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';

    user_header_element.classList.remove("user-edit-border");
    user_content_element.classList.remove("user-edit-border");
}