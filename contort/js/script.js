$(document).ready(function() {




$(window).resize(function(){
    var audio = document.getElementById("fake");
        audio.play(); 
    $("#gif").hide();  
    $("#text").hide();  
    $("#intro").hide();    
});

$(window).hover(function(){
    var audio = document.getElementById("fake");
        audio.play();   
});




function myFunctiona(a) {
    if(a.matches){
        document.getElementById('squeak').play();
        document.getElementById('squeak').currentTime = 0;
    }
    
}

var a = window.matchMedia("(max-width: 1500px) and (min-width: 1301px) and (max-height: 300px) and (min-height: 201px)")
myFunctiona(a)
a.addListener(myFunctiona)


function myFunctionb(b) {
    if(b.matches){
        document.getElementById('honk').play();
        document.getElementById('honk').currentTime = 0;
    }
    
}

var b = window.matchMedia("(max-width: 1500px) and (min-width: 1301px) and (max-height: 200px)")
myFunctionb(b)
b.addListener(myFunctionb)


function myFunctionc(c) {
    if(c.matches){
        document.getElementById('bawong').play();
        document.getElementById('bawong').currentTime = 0;
    }
    
}

var c = window.matchMedia("(max-width: 1300px) and (min-width: 1151px) and (max-height: 400px) and (min-height: 300px)")
myFunctionc(c)
c.addListener(myFunctionc)


function myFunctiond(d) {
    if(d.matches){
        document.getElementById('confused').play();
        document.getElementById('confused').currentTime = 0;
    }
    
}

var d = window.matchMedia("(max-width: 1300px) and (min-width: 1151px) and (max-height: 300px) and (min-height: 201px)")
myFunctiond(d)
d.addListener(myFunctiond)

function myFunctione(e) {
    if(e.matches){
        document.getElementById('klonk').play();
        document.getElementById('klonk').currentTime = 0;
    }
    
}

var e = window.matchMedia("(max-width: 1300px) and (min-width: 1151px) and (max-height: 200px)")
myFunctione(e)
e.addListener(myFunctione)

function myFunctionf(f) {
    if(f.matches){
        document.getElementById('shrink').play();
        document.getElementById('shrink').currentTime = 0;
    }
    
}

var f = window.matchMedia("(max-width: 1150px) and (min-width: 1001px) and (max-height: 400px) and (min-height: 300px)")
myFunctionf(f)
f.addListener(myFunctionf)

function myFunctiong(g) {
    if(g.matches){
        document.getElementById('updown').play();
        document.getElementById('updown').currentTime = 0;
    }
    
}

var g = window.matchMedia("(max-width: 1150px) and (min-width: 1001px) and (max-height: 300px) and (min-height: 201px)")
myFunctiong(g)
g.addListener(myFunctiong)

function myFunctionh(h) {
    if(h.matches){
        document.getElementById('squeak').play();
        document.getElementById('squeak').currentTime = 0;
    }
    
}

var h = window.matchMedia("(max-width: 1150px) and (min-width: 1001px) and (max-height: 200px)")
myFunctionh(h)
h.addListener(myFunctionh)

function myFunctioni(i) {
    if(i.matches){
        document.getElementById('honk').play();
        document.getElementById('honk').currentTime = 0;
    }
    
}

var i = window.matchMedia("(max-width: 1000px) and (min-width: 851px) and (max-height: 500px) and (min-height: 401px)")
myFunctioni(i)
i.addListener(myFunctioni)

function myFunctionj(j) {
    if(j.matches){
        document.getElementById('bawong').play();
        document.getElementById('bawong').currentTime = 0;
    }
    
}

var j = window.matchMedia("(max-width: 1000px) and (min-width: 851px) and (max-height: 400px) and (min-height: 301px)")
myFunctionj(j)
j.addListener(myFunctionj)


function myFunctionk(k) {
    if(k.matches){
        document.getElementById('confused').play();
        document.getElementById('confused').currentTime = 0;
    }
    
}

var k = window.matchMedia("(max-width: 1000px) and (min-width: 851px) and (max-height: 300px) and (min-height: 201px)")
myFunctionk(k)
k.addListener(myFunctionk)

function myFunctionl(l) {
    if(l.matches){
        document.getElementById('klonk').play();
        document.getElementById('klonk').currentTime = 0;
    }
    
}

var l = window.matchMedia("(max-width: 1000px) and (min-width: 851px) and (max-height: 200px)")
myFunctionl(l)
l.addListener(myFunctionl)

function myFunctionm(m) {
    if(m.matches){
        document.getElementById('shrink').play();
        document.getElementById('shrink').currentTime = 0;
    }
    
}

var m = window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 600px) and (min-height: 501px)")
myFunctionm(m)
m.addListener(myFunctionm)

function myFunctionn(n) {
    if(n.matches){
        document.getElementById('updown').play();
        document.getElementById('updown').currentTime = 0;
    }
    
}

var n = window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 500px) and (min-height: 401px)")
myFunctionn(n)
n.addListener(myFunctionn)

function myFunctiono(o) {
    if(o.matches){
        document.getElementById('squeak').play();
        document.getElementById('squeak').currentTime = 0;
    }
    
}

var o = window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 400px) and (min-height: 301px)")
myFunctiono(o)
o.addListener(myFunctiono)

function myFunctionp(p) {
    if(p.matches){
        document.getElementById('honk').play();
        document.getElementById('honk').currentTime = 0;
    }
    
}

var p = window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 300px) and (min-height: 201px)")
myFunctionp(p)
p.addListener(myFunctionp)

function myFunctionq(q) {
    if(q.matches){
        document.getElementById('bawong').play();
        document.getElementById('bawong').currentTime = 0;
    }
    
}

var q = window.matchMedia("(max-width: 850px) and (min-width: 701px) and (max-height: 200px)")
myFunctionq(q)
q.addListener(myFunctionq)


function myFunctionr(r) {
    if(r.matches){
        document.getElementById('confused').play();
        document.getElementById('confused').currentTime = 0;
    }
    
}

var r = window.matchMedia("(max-width: 700px) and (min-width: 551px) and (max-height: 600px) and (min-height: 501px)")
myFunctionr(r)
r.addListener(myFunctionr)

function myFunctions(s) {
    if(s.matches){
        document.getElementById('klonk').play();
        document.getElementById('klonk').currentTime = 0;
    }
    
}

var s = window.matchMedia("(max-width: 700px) and (min-width: 551px) and (max-height: 500px) and (min-height: 401px)")
myFunctions(s)
s.addListener(myFunctions)

function myFunctiont(t) {
    if(t.matches){
        document.getElementById('shrink').play();
        document.getElementById('shrink').currentTime = 0;
    }
    
}

var t = window.matchMedia("(max-width: 700px) and (min-width: 551px) and (max-height: 400px) and (min-height: 301px)")
myFunctiont(t)
t.addListener(myFunctiont)


function myFunctionu(u) {
    if(u.matches){
        document.getElementById('updown').play();
        document.getElementById('updown').currentTime = 0;
    }
    
}

var u = window.matchMedia("(max-width: 700px) and (min-width: 551px) and (max-height: 300px) and (min-height: 201px)")
myFunctionu(u)
u.addListener(myFunctionu)

function myFunctionv(v) {
    if(v.matches){
        document.getElementById('squeak').play();
        document.getElementById('squeak').currentTime = 0;
    }
    
}

var v = window.matchMedia("(max-width: 700px) and (min-width: 551px) and (max-height: 200px)")
myFunctionv(v)
v.addListener(myFunctionv)


function myFunctionw(w) {
    if(w.matches){
        document.getElementById('honk').play();
        document.getElementById('honk').currentTime = 0;
    }
    
}

var w = window.matchMedia("(max-width: 550px) and (max-height: 700px) and (min-height: 601px)")
myFunctionw(w)
w.addListener(myFunctionw)

function myFunctionx(x) {
    if(x.matches){
        document.getElementById('bawong').play();
        document.getElementById('bawong').currentTime = 0;
    }
    
}

var x = window.matchMedia("(max-width: 550px) and (max-height: 600px) and (min-height: 501px)")
myFunctionx(x)
x.addListener(myFunctionx)

function myFunctiony(y) {
    if(y.matches){
        document.getElementById('confused').play();
        document.getElementById('confused').currentTime = 0;
    }
    
}

var y = window.matchMedia("(max-width: 550px) and (max-height: 500px) and (min-height: 401px)")
myFunctiony(y)
y.addListener(myFunctiony)

function myFunctionz(z) {
    if(z.matches){
        document.getElementById('klonk').play();
        document.getElementById('klonk').currentTime = 0;
    }
    
}

var z = window.matchMedia("(max-width: 550px) and (max-height: 400px) and (min-height: 301px)")
myFunctionz(z)
z.addListener(myFunctionz)

function myFunctionab(ab) {
    if(ab.matches){
        document.getElementById('shrink').play();
        document.getElementById('shrink').currentTime = 0;
    }
    
}

var ab = window.matchMedia("(max-width: 550px) and (max-height: 300px) and (min-height: 201px)")
myFunctionab(ab)
ab.addListener(myFunctionab)

function myFunctionac(ac) {
    if(ac.matches){
        document.getElementById('updown').play();
        document.getElementById('updown').currentTime = 0;
    }
    
}

var ac = window.matchMedia("(max-width: 550px) and (max-height: 200px)")
myFunctionab(ac)
ac.addListener(myFunctionac)

});