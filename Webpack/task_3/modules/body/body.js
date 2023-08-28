import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

let p2 = $('<p>Dashboard data for the students</p>');
let p3 = $('<button><span>Click here to get started<span></button>');
let p4 = $('<p id="count"></p>');

$('body').append(p2);
$('body').append(p3);
$('body').append(p4);

let count = 0;

function updateCounter() {
  count++;
  p4.text(`${count} clicks on the button`);
}

p3.on('click', _.debounce(updateCounter, 500));