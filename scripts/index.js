let listOfLis = document.querySelectorAll('li');

for (var i = 0; i < listOfLis.length; i++) {
    listOfLis[i].addEventListener('mouseover', function() {
        this.classList.add('selected');
    })
    listOfLis[i].addEventListener('mouseout', function() {
        this.classList.remove('selected');
    })
    listOfLis[i].addEventListener('click', function() {
        this.classList.toggle('done');
    })
}




