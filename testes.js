console.log('!use strict');

function a () {
    console.log('function a ()'+this);
}

a();

b = {
    a: function () {
        console.log('b -> a: function()'+this);
    }
}

b.a();