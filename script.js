const who = ['You', 'Your friend', 'Nobody', 'Someone'];
const what = ['will succeed', 'will fail', 'will change your life', 'will eat something', 'will go to the trip', 'should do something', 'should do nothing', 'should try harder', 'should let it pass'];
const when = ['today', 'this week', 'this year', 'in nearly future', 'in far future', 'sometime', 'never'];

function random (arr) {
    let beginnerNum = Math.floor(Math.random() * (arr.length));
    return arr[beginnerNum];
};

function misteryMessage (beginner, action, time) {
    console.log(random(beginner) + ' ' + random(action) + ' ' + random(time) + '!');
};

misteryMessage (who, what, when);