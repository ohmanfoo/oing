var start = function () {
    'use strict';
    var blogContainer = 'box box2',
        pjContainer = 'box box3',
        blogContent = document.getElementById('blog'),
        pjContent = document.getElementById('side-projects'),
        getHeading = function (cat) {
            var categ = document.getElementsByClassName(cat);
            return categ;
        },
        blogHead = getHeading(blogContainer),
        pjHead = getHeading(pjContainer),
        onLoadCheck = function () {
            if (window.innerHeight + 40 >= window.innerWidth) {
                pjContent.style.width = '100%';
                blogContent.style.width = '100%';
                return;
            }
        },
        onClick = function (content, other) {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                if (other.style.display === 'none') {
                    content.style.width = '75%';
                } else {
                    if (window.innerHeight + 40 >= window.innerWidth) {
                        other.style.width = '100%';
                        content.style.width = '100%';
                    } else {
                        if (document.getElementById('side-projects') === content) {
                            content.style.width = '32.2%';
                            other.style.width = '66%';
                        } else {
                            content.style.width = '66.5%';
                            other.style.width = '32.2%';
                        }
                    }
                }
            } else {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    other.style.width = '100%';
                } else {
                    content.style.display = 'none';
                    other.style.width = '100%';
                }
            }
        };
    blogHead[0].onclick = function () {
        return onClick(blogContent, pjContent);
    };
    pjHead[0].onclick = function () {
        return onClick(pjContent, blogContent);
    };
    onLoadCheck();
};

document.onreadystatechange = function () {
    'use strict';
    if (document.readyState === 'complete') {
        start();
    }
};

