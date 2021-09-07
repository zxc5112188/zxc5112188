/*document.write("<h1>舒舒又服服啦</h1>");
document.write("<br/>");
document.write("<h1>舒舒又服服啦</h1><br/>");*/
//開課啦~~

//變數只能是英文大小寫、數字、$或_組成
//變數開頭不能是數字
/*var my_name= "都看看是誰";
var age= 44;
var male= true;
var high= 175;

document.write("我的名字是" + ma_name);
document.write("<br/>")
document.write(my_name + "的年紀" + age);
document.write("<br/>")
document.write(my_name + "的身高" + high);*/
//以上是變數

//-------------------------------------------------------------------

//如何使用字串、字串的用法
/*var phrase = "hello\" Mr.Huang" + " haha";
var text = "哈";
document.write(phrase+ text+ "嘿");

var phrase= "Hello Mr.Huang";
//           0123456789
document.write(phrase);
document.write("<br/>");
document.write(phrase.length); //變數的長度
document.write("<br/>");
document.write(phrase.toUpperCase()); //全部轉大寫
document.write("<br/>");
document.write(phrase.toLowerCase()); //全部轉小寫
document.write("<br/>");
document.write(phrase.charAt(0)); //0為開頭
document.write("<br/>");
document.write(phrase.indexOf("H")); //顯示""中的字在哪個位置
document.write("<br/>");
document.write(phrase.substring(0,5)); //顯示從哪個位置到哪個位置
document.write("<br/>");
//https://www.w3schools.com/js/js_string_methods.asp 字串介紹*/
//以上是字串
/*var phrase= "Hello Mr.Huang";
var i= phrase.length- 1;
var j= phrase.length;
for(i; i>=0; i--){
    document.write(phrase.substring(i, j));
    document.write("<br/>");
};*/
//好玩

//-------------------------------------------------------------------

//如何使用數字
/*var number= 5;
document.write(3);
document.write("<br/>");
document.write(6+3);
document.write("<br/>");
document.write(6*3);
document.write("<br/>");
document.write(6+3*5); //先乘除後加減
document.write("<br/>");
document.write((6+3)*5);
document.write("<br/>");
document.write((6+3)*number);
document.write("<br/>");
document.write(8%3); //取餘數
document.write("<br/>");

document.write(Math.abs(-5)); //取絕對值
document.write("<br/>");
document.write(Math.max(2, 55, 216, 0.15, 0.165, 1235)); //取最大值
document.write("<br/>");
document.write(Math.min(2, 55, 216, 0.15, 0.165, 1235)); //取最小值
document.write("<br/>");
document.write(Math.round(2.3)); //四捨五入
document.write("<br/>");
document.write(Math.pow(2, 3)); //算次方,2的3次方
document.write("<br/>");
document.write(Math.sqrt(64)); //開根號
document.write("<br/>");
document.write(Math.random()); //0~1亂數
document.write("<br/>");
document.write(Math.round(Math.random()*10)); //取1~10的亂數(小數點四捨五入)
document.write(parseInt(Math.random()*10)); //取1~10的亂數(只取整數)*/
//以上是數字的使用

//-------------------------------------------------------------------

//製作一個基本的計算機
/*var num1= prompt("請輸入數字");
var num2= prompt("請輸入數字");
//num1= parseInt(num1); //字串轉換為"整數"回傳給我們
//num2= parseInt(num2);
num1= parseFloat(num1); //字串轉換為"包含小數點"回傳給我們
num2= parseFloat(num2);
document.write(num1+ num2);*/
//以上是計算機

//-------------------------------------------------------------------

//陣列 array
/*var scores= [80, 60, 20, 30, 50];
var friends= ["aaa", true, 99, -1];
scores[0]= 90;
document.write(scores[0]+ "<br/>");
document.write(friends+ "<br/>");
document.write(friends.length);*/
//以上是陣列

//-------------------------------------------------------------------

//函式 function
/*function hello(name, age){
    document.write("你好,"+ name+ " 你今年"+ age+ "歲");
}

hello("小白", 99);

var num1= prompt("請輸入數字");
var num2= prompt("請輸入數字");
num1= parseInt(num1);
num2= parseInt(num2);
function add(num1, num2){
    //document.write(num1+ num2);
    return num1+ num2;
}

add(num1, num2);*/
//以上是函式

//-------------------------------------------------------------------

//if判斷
/*var hun= true;
if(hun){
    document.write("去吃飯");
}*/

/*var rainy= true;
if(rainy){
    document.write("開車去");
}else{
    document.write("走路去");
}*/

/*var score= 10;
if(score== 100){
    document.write("給你1000");
}else if(score>= 80){
    document.write("給你500");
}else if(score>= 60){
    document.write("給你100");
}else{
    document.write("給我300");
}*/

/*var score= 10;
var rainy= true;
//&&=>而且，兩邊的條件都要通過
if(score== 100 && rainy){
    document.write("給你1000");
}else{
    document.write("給我100");
}*/

/*var score= 10;
var rainy= false;
//|| =>或，兩邊的條件一邊有通過就好
if(score== 100 || rainy){
    document.write("給你1000");
}else{
    document.write("給我100");
}*/

/*var score= 10;
var rainy= true;
//! =>以反面判斷
if(score== 100 || !rainy){
    document.write("給你1000");
}else{
    document.write("給我100");
}*/

//三數判斷最大
/*function max_num(a, b, c){
    if(a>=b && a>=c) return a;
    else if(b>=a && b>=c) return b;
    else return c;
}

document.write(max_num(55, 498, 3254198));*/
//以上是if判斷

//-------------------------------------------------------------------

//物件 object

//  key value
//  鍵    值

/*var person={
    name: "小小", //稱為屬性
    age: 23,
    is_male: true,
    //   <======== function的名稱直接以前面命名
    print_name:function(){ //在object中可以包含function
        document.write(this.name); //在object中的this可以用來指向object
        // 物件    函式
    }
};

person.print_name();*/

/*var phrase= "hello";
phrase.length; //將phrase作為object取得length屬性*/
//以上為物件 object

//-------------------------------------------------------------------

//真實世界物件 object
/*var movie= {
    title: "當男人戀愛時",
    maker: "金盞花大影業",
    duration: 115,
    actors: [ //以陣列表達
        { //建立物件
            name: "邱澤",
            age: 39,
            is_male: true
        },
        {
            name: "許瑋甯",
            age: 37,
            is_male: false
        }
    ]
};

document.write(movie.title+ "<br/>");
document.write(movie.maker+ "<br/>");
document.write(movie.duration+ "<br/>");
document.write(movie.actors[0].name);
document.write(movie.actors[0].age+ "<br/>");
document.write(movie.actors[1].name);*/
//以上是object在真實世界中的實作

//-------------------------------------------------------------------

//while 迴圈
//當小括號中的判斷為false就結束
/*var i= 1;
while(i<=5){
    document.write(i);
    document.write("<br/>")
    i+=2;
}*/

/*var i= 6;
//先做再判斷
do{
    document.write(i);
    document.write("<br/>")
    i+=2;
}while(i<=5)*/
//以上是while迴圈

//-------------------------------------------------------------------

//密碼檢驗程式
/*var password= 123456;
var input;
var entry_count= 0;
var entry_limit= 3;
var out_of_limit= false;

while(password!=input && !out_of_limit){
    entry_count++;
    if(entry_count<=entry_limit){
        input= prompt("請輸入密碼");
    }else out_of_limit= true;
}

if(out_of_limit){
    alert("超出輸入次數");
}else alert("登入成功");*/
//以上是用while迴圈做密碼檢驗程式

//-------------------------------------------------------------------

//for迴圈
/*for(var i= 0; i<10; i++){
    document.write(i);
    document.write("<br/>");
}*/

/*var friends= ["小黑", "小白", "小黃", "小綠"];
for(var i= 0; i<friends.length; i++){
    document.write(friends[i]);
    document.write("<br/>");
}*/
//以上是for迴圈

//-------------------------------------------------------------------

//製作一個問答程式
/*var questions= [
    {
        prompt:"香蕉什麼顏色?\na.紅\nb.綠\nc.黃",
        answer:"c"
    },
    {
        prompt:"草莓什麼顏色?\na.紅\nb.綠\nc.黃",
        answer:"a"
    },
    {
        prompt:"1公尺等於幾公分?\na.1\nb.10\nc.100",
        answer:"c"
    }
]
var score= 0;
for(var i= 0; i<  questions.length; i++){
    var input= prompt(questions[i].prompt);
    if(input== questions[i].answer){
        score++;
        alert("答對了");
    }else{
        alert("答錯了");
    }
}
document.write("你得到 "+ score+ " 分");*/
//以上是用陣列+物件做題庫,並用for迴圈做判斷

//-------------------------------------------------------------------

//二維陣列、巢狀迴圈
/*var number= [ //這是一個4行3列的二維陣列
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
//document.write(number[0][1]);

for(var i= 0; i< number.length; i++){
    for(var j= 0; j< number[i].length; j++){
        document.write(number[i][j]+", ");
    }
    document.write("<br/>");
}*/
//以上是二維陣列及巢狀迴圈

//-------------------------------------------------------------------

//class (=模板，方便儲存相同格式的東西)
//    class名稱(通常第一個字會用大寫)
/*class Phone{ //(用大括號)
    //constructor是初始函式，用來把傳入的值賦予給實體的物件
    constructor(number, year, is_waterproof){
        this.number= number;
        this.year= year;
        this.is_waterproof= is_waterproof;
    }
    phone_age(){ //(函式直接寫)
        return 2021 - this.year;
    }
}

var phone1= new Phone("123", 2020, false);  // ====||
document.write(phone1.phone_age());         //     ||
var phone2= new Phone("456", 2018, false);  //     ||
// 上面的class寫法就等於下面的object寫法         //     ||
/*var phone1= {                             //     ||
    number: "123",             //<=================||
    year: 2020,
    is_waterproof: false,
    phone_age: function(){
        return 2021 - this.year;
    }
}*/
//以上是class

//-------------------------------------------------------------------

//如何取得html元素              //window等於這個網頁
//window.document.write("ccc"); //document屬於window這個全域的物件下
//window.prompt("vvv");
//https://www.w3schools.com/js/js_window.asp 更多window的介紹
//var a= 123;
//window.document.write(window.a);//全部的東西都在window下，所以window可以省略

/*var h1= document.getElementById("header");
        //       取得元素   經由ID
h1.innerText= "我超帥"; //更改文字
h1.style.backgroundColor= "red"; //更改背景
h1.style.color= "blue"; //更改字體顏色

var link= document.getElementById("link");
//console.log(link);
link.href= "https://amazon.com";*/
//以上是如何取得html中的元素

//-------------------------------------------------------------------

//event listener

//第一種event listener的作法，與html互動
                    //element用來存.html檔用this傳回來的值
/*function handle_click(element){
    //alert("Toyz的狗");
    //console.log(element);
    element.innerText= "還想舔啊";
    element.style.color= "red";
}*/

//第二種
/*var btn= document.getElementById("btn");
btn.addEventListener("click", function(){
    //alert("Toyz的狗");
    this.innerText= "還想舔啊";
    this.style.color= "red";
})

var img= document.getElementById("img");
//用mouseover來監測滑鼠有沒有在圖片上
img.addEventListener("mouseover", function(){
    this.src= "hotpot2.jpg";
})
//用mouseout來監測滑鼠有沒有離開圖片
img.addEventListener("mouseout", function(){
    this.src= "hotpot1.jpg";
})*/
//以上是event listener