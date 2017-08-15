function openFunction1() {
    var open = document.getElementById('close-box1');
    var icon = document.getElementById('fa-open');
    icon.classList.toggle("fa-minus");
    
    if (open.style.display == 'block') {
        (open.style.display = 'none');
    } else {
        open.style.display = 'block';
    }
}
function openFunction2() {
    var open = document.getElementById('close-box2');
    var icon = document.getElementById('fa-open2');
    icon.classList.toggle("fa-minus");
    
    if (open.style.display == 'block') {
        (open.style.display = 'none');
    } else {
        open.style.display = 'block';
    }
}
function openFunction3() {
    var open = document.getElementById('close-box3');
    var icon = document.getElementById('fa-open3');
    icon.classList.toggle("fa-minus");
    
    if (open.style.display == 'block') {
        (open.style.display = 'none');
    } else {
        open.style.display = 'block';
    }
}
function showTxt() {
    var x = document.getElementById('hidden-txt');
    var y = document.getElementById('show-txt');
    var z = document.getElementById('hide-txt');
    
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
}
function hideTxt() {
    var x = document.getElementById('hidden-txt');
    var y = document.getElementById('show-txt');
    var z = document.getElementById('hide-txt');
    
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
}

function toggleMenu() {
    var open = document.getElementById('meniu-xs');
    
    if (open.style.display == 'block') {
        open.style.display = 'none';
    } else {
        open.style.display = 'block';
    }
}