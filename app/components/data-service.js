
angular.module('myApp')
    .factory("dataService", function () {
        var messages = [{
            image: "images/john.jpg",
            name: "John Smith",
            received: 5,
            text: "Hello, This is John!",
            isNew: 1
        }, {
            image: "images/ya.jpg",
            name: "Me",
            received: 15,
            text: "I have something",
            isNew: 1
        }, {
            image: "images/ya.jpg",
            name: "Me",
            received: 75,
            text: "No!",
            isNew: 0
        }, {
            image: "images/boss.jpg",
            name: "Boss",
            received: 2500,
            text: "Hope, you are..",
            isNew: 0
        }, {
            image: "images/boss.jpg",
            name: "Boss",
            received: 2500,
            text: "Where are you?!",
            isNew: 1
        }];

        var tasks = [{
            image: "images/ficon.jpg",
            title: "New website",
            delay: 5*60*25,
            left: 0,
            isFinished: 0
        }, {
            image: "images/nicon.jpg",
            title: "Free business",
            delay: 2*60*25,
            left: 0,
            isFinished: 0
        }, {
            image: "images/ficon.jpg",
            title: "New logo",
            delay: 0,
            left: 1*60*25,
            isFinished: 0
        }, {
            image: "images/nicon.jpg",
            title: "Free Icons Set",
            delay: 0,
            left: 2*60*25,
            isFinished: 0
        }, {
            image: "images/ficon.jpg",
            title: "Free Icons Set 2",
            delay: 0,
            left: 5*60*25,
            isFinished: 0
        }];

        var activitys = [{
            image: "images/john.jpg",
            who: "John",
            action: "added a new project",
            what: "Free Ux",
            when: 1
        }, {
            image: "images/boss.jpg",
            who: "Boss",
            action: "deleted project",
            what: "Bank",
            when: 5
        }, {
            image: "images/rita.jpg",
            who: "Rita",
            action: "created task",
            what: "Add function to",
            when: 25
        }, {
            image: "images/john.jpg",
            who: "John",
            action: "added",
            what: "Task1",
            when: 70
        }, {
            image: "images/rita.jpg",
            who: "Rita",
            action: "deleted",
            what: "Task1",
            when: 2400
        }, {
            image: "images/boss.jpg",
            who: "Boss",
            action: "created",
            what: "Task2",
            when: 2500
        }, {
            image: "images/boss.jpg",
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
                return checkForOne(parseInt(mins / (60 * 24)), 'day');
            }

            if (mins > 60) {
                return checkForOne(parseInt(mins / 60), 'hour');
            }
        }

        function checkForOne(num, period) {

            if (num == 1) {
                return "1 " + period +" ago";
            }

            return num + " " + period +"s ago";

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
