var start = function () {
    'use strict';
    var config = {
        blogContainer : 'box box2',
        pjContainer : 'box box3',
        blog : 'blog',
        sideprojects : 'side-projects',
        orientation : (window.innerHeight >= window.innerWidth/2.2),
        sm : '35.22222%',
        med : '47.25555%',
        large : '100%'
    },
        blogContent = document.getElementById(config.blog),
        pjContent = document.getElementById(config.sideprojects),
        getHeading = function (cat) {
            var categ = document.getElementsByClassName(cat);
            return categ;
        },
        blogHead = getHeading(config.blogContainer),
        pjHead = getHeading(config.pjContainer),
        onLoadCheck = function () {
            if (config.orientation) {
                pjContent.style.width = config.large;
                blogContent.style.width = config.large;
            } else {
                pjContent.style.width = config.med;
                blogContent.style.width = config.med;
            }
            pjContent.style.height = '100%';
            blogContent.style.height = '100%';
        },
        onClick = function (content, other) {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                if (other.style.display === 'block') {
                    // content.style.width = config.med;
                    // other.style.width = config.med;
                } else {
                    other.style.display = 'none';
                    // content.style.width = config.large;
                }
            } else {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    // other.style.width = config.large;
                } else {
                    content.style.display = 'none';
                    // other.style.width = config.med;
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