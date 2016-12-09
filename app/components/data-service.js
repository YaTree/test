
angular.module('myApp')
    .factory("dataService", function () {
        var messages = [{
            image: "http://res.cloudinary.com/dmpdhoctp/image/upload/c_crop,g_face/v1476130991/oqp6pp2rksum04eb75oc.jpg",
            name: "John Smith",
            received: 5,
            text: "Hello, This is John!",
            isNew: 1
        }, {
            image: "http://res.cloudinary.com/dmpdhoctp/image/upload/c_crop,g_face/v1476130991/oqp6pp2rksum04eb75oc.jpg",
            name: "Mika Root",
            received: 15,
            text: "I have something",
            isNew: 1
        }, {
            image: "http://res.cloudinary.com/dmpdhoctp/image/upload/c_crop,g_face/v1476130991/oqp6pp2rksum04eb75oc.jpg",
            name: "Samuel",
            received: 75,
            text: "No!",
            isNew: 0
        }, {
            image: "http://res.cloudinary.com/dmpdhoctp/image/upload/c_crop,g_face/v1476130991/oqp6pp2rksum04eb75oc.jpg",
            name: "Boss",
            received: 2500,
            text: "!!!",
            isNew: 0
        }];


        var tasks = [{
            image: "images/Letter-F-blue-icon.png",
            title: "New website",
            delay: 5,
            left: 0,
            isFinished: 0
        }, {
            image: "images/Letter-A-blue-icon.png",
            title: "Free business",
            delay: 2,
            left: 0,
            isFinished: 0
        }, {
            image: "images/Letter-J-blue-icon.png",
            title: "New logo",
            delay: 0,
            left: 1,
            isFinished: 0
        }, {
            image: "images/Letter-F-blue-icon.png",
            title: "Free Icons Set",
            delay: 0,
            left: 2,
            isFinished: 0
        }, {
            image: "images/Letter-F-blue-icon.png",
            title: "Free Icons Set 2",
            delay: 0,
            left: 5,
            isFinished: 0
        }];


        var activitys = [{
            image: "images/ya.jpg",
            who: "John",
            action: "added a new project",
            what: "Free Ux",
            when: 1
        }, {
            image: "images/Letter-F-blue-icon.png",
            who: "Sam",
            action: "deleted project",
            what: "Bank",
            when: 5
        }, {
            image: "images/ya.jpg",
            who: "Rita",
            action: "created task",
            what: "Add function to",
            when: 25
        }, {
            image: "images/Letter-J-blue-icon.png",
            who: "John",
            action: "added",
            what: "AAA",
            when: 70
        }, {
            image: "images/ya.jpg",
            who: "Rita",
            action: "deleted",
            what: "Bbbb",
            when: 2400
        }, {
            image: "images/Letter-J-blue-icon.png",
            who: "Boss",
            action: "created",
            what: "aaaaa",
            when: 2500
        }, {
            image: "images/Letter-A-blue-icon.png",
            who: "Boss",
            action: "created",
            what: "Company",
            when: 25000
        }];

        var countOfNewMessages = 0;
        var countOfOpenTasks = 0;
        var countOfFailedTasks = 0;
        var countOfActivity = 0;


        function countCounters () {
            messages.forEach(function (element) {
               if (element.isNew == 1)
               {
                   countOfNewMessages++;
               }
            });

            tasks.forEach(function (element) {
                if (element.isFinished == 0)
                {
                    countOfOpenTasks++;
                }

                if (element.delay > 0)
                {
                    countOfFailedTasks++;
                }
            });

            countOfActivity = activitys.length;
        }
        countCounters();

        function addMessage (message) {
            messages.push (message);
        }

        function getMessages () {
            return messages;
        }

        function getTasks () {
            return tasks;
        }

        function getActivitys () {
            return activitys;
        }

        function timeLeftFromMin(minuts) {
            var mins = parseInt(minuts);

            if (mins < 3) {
                return "just now"
            }

            if (mins < 60) {
                return minuts + " minuts ago";
            }

            if (mins > 60 * 24) {
                return parseInt(mins / (60 * 24)) + " day(s) ago";
            }

            if (mins > 60) {
                return parseInt(mins / 60) + " hour(s) ago";
            }
        }

        return {
            count:countOfNewMessages,
            openTasks:countOfOpenTasks,
            failedTasks:countOfFailedTasks,
            activityCount:countOfActivity,
            addMessage:addMessage,
            getMessages:getMessages,
            getTasks:getTasks,
            getActivitys:getActivitys,
            timeLeftFromMin:timeLeftFromMin

        }
    });
