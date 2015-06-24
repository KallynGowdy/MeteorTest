# MeteorTest

One thing that I immediately don't like as much about Meteor is that it requires a [full-blown installer on Windows][installer]. :(


## Installation
1. Clone project
2. [Install Meteor][installer] (Restart if step 4 doesn't work)
3. `cd src`
4. run `meteor`

One thing that I really like about meteor is that the real-time system is built in end-to-end. You can even manually insert values into MongoDB and they will "automagically" show up on the clients. (That is really important for distributed systems)
It is also extremely simple. Almost so simple that I wonder how much structure you really can have in your projects. The created project for you only has 3 files (`src.css`, `src.html`, `src.js`), not including the `.meteor` folder.

[installer]: https://www.meteor.com/install
