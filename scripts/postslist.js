function deleteModal(userCardId){
    $('#deleteModal').modal('show');
    var yes_template = '<button type="button" class="btn btn-success float-left" onclick="deleteUserCard('+userCardId.id+')">Yes</button>'
    document.getElementById("yes_btn").innerHTML = yes_template;
}

var postListObject = [
    {
        name: "Srishti Gupta",
        content_heading : "'let' me be a 'const'(ant), not a 'var'(iable)!",
        content_body : "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
    },
    {
        name: "Colby Fayock",
        content_heading : "What is linting and how can it save you time?",
        content_body : "One of the biggest challenges in software development is time. It's something we can't easily get more of, but linting can help us make the most out of the time we have."
    },
    {
        name: "Yazeed Bzadough",
        content_heading : "How to Get More Views on Your Tech Blog",
        content_body : "everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
        name: "Cedd Burge",
        content_heading : "How to write easily describable code",
        content_body : "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
    },
    {
        name: "Srishti Gupta",
        content_heading : "Everything you should know about 'module' & 'require' in Node.js",
        content_body : "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
    }
];

var idName = 1;
function showProject(){

    postListObject.forEach(function(value,index){
        var userCardId = 'usercard_'+idName;
        var template = '<span id="'+ userCardId +'"><div class="input-group mb-3 card-design">' +
        '<div class="input-group-prepend">' +
            '<p class="input-group-text name-design">' + value.name + '</p>' +
        '</div>' +

        '<div class="form-control content-design">' +
        '<div>' +
            '<p class="content-heading">' + value.content_heading +
                '<span class="float-right cursor"><a onclick="deleteModal('+ userCardId +')"><i class="fa fa-trash" aria-hidden="true"></i></a></span>'+
            '</p>'+
        '</div>' +
        '<p class="content-body">' + value.content_body + '</p>' +
        '<span>' +
            '<span class="float-right cursor"><a href="./post.html"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a></span>' +
        '</span></div></div></span>';

         document.getElementById("card-details").innerHTML += template;
         idName++;
    })
}
showProject();

function deleteUserCard(userCardId) {
    document.getElementById(userCardId.id).innerHTML = '';
    $('#deleteModal').modal('hide');
}