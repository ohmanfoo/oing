var start = function () {
    'use strict';
    var blog = 'box box2',
        projects = 'box box3',
        blogContent = document.getElementById('blog'),
        pjContent = document.getElementById('side-projects'),
        getHeading = function (cat) {
            var categ = document.getElementsByClassName(cat);
            return categ;
        },
        blogHead = getHeading(blog),
        pjHead = getHeading(projects);
    var onLoadCheck = function () {
        if (window.innerHeight > window.innerWidth) {
        pjContent.style.width = '100%';
        blogContent.style.width = '100%';
        return;
        }
    }
    onLoadCheck();

    blogHead[0].onclick = function () {
        if (blogContent.style.display === 'none') {
            blogContent.style.display = 'block';
            if (pjContent.style.display === 'none') {
                blogContent.style.width = '100%';
            } else {
                if (window.innerHeight > window.innerWidth) {
                    pjContent.style.width = '100%';
                    blogContent.style.width = '100%';
                    return;
                }
                pjContent.style.width = '32.5%';
                blogContent.style.width = '66.1%';
            }     
        } else {
            if (blogContent.style.display === 'block') {
                blogContent.style.display = 'none';
                pjContent.style.width = '100%';
            } else {
                blogContent.style.display = 'none';                
                pjContent.style.width = '100%';
            }
        }
    };
    pjHead[0].onclick = function () {
        if (pjContent.style.display === 'none') {
            pjContent.style.display = 'block';
            if (blogContent.style.display === 'none') {
                pjContent.style.width = '100%';
            } else {
                if (window.innerHeight > window.innerWidth) {
                    pjContent.style.width = '100%';
                    blogContent.style.width = '100%';
                    return;
                }
                pjContent.style.width = '32.5%';
                blogContent.style.width = '66.1%';
            }
        } else {
            if (pjContent.style.display === 'block') {
                pjContent.style.display = 'none';
                blogContent.style.width = '100%';
            } else {
                pjContent.style.display = 'none';
                blogContent.style.width = '100%';
            }
        }
    };
};

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        start();
    }
};
