import 'jquery/dist/jquery.min.js';

myFun();

function myFun() {
    $(document).ready(function () {
        $(".mb-dashboard-div").mouseenter(function () {
            $(".mb-dashboard-image").css({
                "background-color": "#808080",
                "color": "white"
            });
            $(".mb-dashboard-div").css({
                "background-color": "#C0C0C0"
            });
        });
        $(".mb-dashboard-div").mouseleave(function () {
            $(".mb-dashboard-image").css({
                "background-color": "white",
                "color": "black"
            });
            $(".mb-dashboard-div").css({
                "background-color": "white"
            });
        });
        $(".mb-email-div").mouseenter(function () {
            $(".mb-email-image").css({
                "background-color": "#808080",
                "color": "white"
            });
            $(".mb-email-div").css({
                "background-color": "#C0C0C0"
            });
        });
        $(".mb-email-div").mouseleave(function () {
            $(".mb-email-image").css({
                "background-color": "white",
                "color": "black"
            });
            $(".mb-email-div").css({
                "background-color": "white"
            });
        });
        $(".mb-calendar-div").mouseenter(function () {
            $(".mb-calendar-image").css({
                "background-color": "#808080",
                "color": "white"
            });
            $(".mb-calendar-div").css({
                "background-color": "#C0C0C0"
            });
        });
        $(".mb-calendar-div").mouseleave(function () {
            $(".mb-calendar-image").css({
                "background-color": "white",
                "color": "black"
            });
            $(".mb-calendar-div").css({
                "background-color": "white"
            });
        });
        $(".mb-material-div").mouseenter(function () {
            $(".mb-material-image").css({
                "background-color": "#808080",
                "color": "white"
            });
            $(".mb-material-div").css({
                "background-color": "#C0C0C0"
            });
        });
        $(".mb-material-div").mouseleave(function () {
            $(".mb-material-image").css({
                "background-color": "white",
                "color": "black"
            });
            $(".mb-material-div").css({
                "background-color": "white"
            });
        });
        $(".mb-kit-div").mouseenter(function () {
            $(".mb-kit-image").css({
                "background-color": "#808080",
                "color": "white"
            });
            $(".mb-kit-div").css({
                "background-color": "#C0C0C0"
            });
        });
        $(".mb-kit-div").mouseleave(function () {
            $(".mb-kit-image").css({
                "background-color": "white",
                "color": "black"
            });
            $(".mb-kit-div").css({
                "background-color": "white"
            });
        });
        $(".mb-chart-div").mouseenter(function () {
            $(".mb-chart-image").css({
                "background-color": "#808080",
                "color": "white"
            });
            $(".mb-chart-div").css({
                "background-color": "#C0C0C0"
            });
        });
        $(".mb-chart-div").mouseleave(function () {
            $(".mb-chart-image").css({
                "background-color": "white",
                "color": "black"
            });
            $(".mb-chart-div").css({
                "background-color": "white"
            });
        });
    });
}














// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });