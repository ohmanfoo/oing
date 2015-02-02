var start = function () {
    'use strict';
//     var config = {
//         blogContainer : 'box box2',
//         pjContainer : 'box box3',
//         blog : 'blog',
//         sideprojects : 'side-projects',
//     },
//         blogContent = document.getElementById(config.blog),
//         pjContent = document.getElementById(config.sideprojects),

//         getHeading = function (cat) {
//             var categ = document.getElementsByClassName(cat);
//             return categ;
//         },

//         blogHead = getHeading(config.blogContainer),
//         pjHead = getHeading(config.pjContainer),

//         // onLoadCheck = function () {



//         // },
//         // onClick = function (content, other) {



//         // };

//     blogHead[0].onclick = function () {
//         return onClick(blogContent, pjContent);
//     };
//     pjHead[0].onclick = function () {
//         return onClick(pjContent, blogContent);
//     };
};

document.onreadystatechange = function () {
    'use strict';
    if (document.readyState === 'complete') {
        start();
    }
};