const likes = document.querySelectorAll('.heart');

for(let like of likes) {
    like.addEventListener('click', function() {
        if(like.classList.contains('far')) {
            like.classList.remove('far');
            like.classList.add('fas');
        }else {
            like.classList.remove('fas');
            like.classList.add('far');
        }
    })
}