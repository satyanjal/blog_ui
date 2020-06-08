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