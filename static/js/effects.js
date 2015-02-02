var blog = 'box box2',
    aboutme = 'box box1',
    projects = 'box box3',
    blogContent = document.getElementById('blog'),
    pjContent = document.getElementById('side-projects');

var getHeading = function (cat) {
    categ = document.getElementsByClassName(cat);
    return categ;
}
var blogHead = getHeading(blog),
    pjHead = getHeading(projects);

//finally.
blogHead[0].onclick = function () {
    if (blogContent.style.display === 'none') {
            blogContent.style.display = 'block';
    }
    else {
        if (blogContent.style.display === 'block') {
            blogContent.style.display = 'none';
        }
        else {
            blogContent.style.display = 'none';
        }
    }
}
pjHead[0].onclick = function () {
    if (pjContent.style.display === 'none') {
            pjContent.style.display = 'block';
    }
    else {
        if (pjContent.style.display === 'block') {
            pjContent.style.display = 'none';
        }        
        else {
            pjContent.style.display = 'none';
        }
    }
}
