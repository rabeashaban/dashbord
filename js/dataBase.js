//تثبيت الداتا بيز ريل تيم

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  push,
  get,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC1ftVMetYjFb3o1BwdFmoiiEEFEWsgs8",
  authDomain: "asnan-50269.firebaseapp.com",
  databaseURL: "https://asnan-50269-default-rtdb.firebaseio.com",
  projectId: "asnan-50269",
  storageBucket: "asnan-50269.appspot.com",
  messagingSenderId: "425048409979",
  appId: "1:425048409979:web:e80d620dce2cccce6d5fde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//استدعاء البيانات من الداتا بيز
var database = getDatabase(app);
var PostCollection = ref(database, "/المرضي");
//اظهر البيانات علطول لما بتحس ان في تغيير
onValue(PostCollection, (data) => {
  Show(data.val());
});

// نعرف الجافا اسكربت ان ده من الاتش تي ام ال
window.sendData = sendData;

/// دالة الحفظ تحفظ الداتا داخل الداتا بيز
function sendData() {
  var NameElmared = $("#name-elmared").val();
  var AddraesElmared = $("#addraes-elmared").val();
  var MobileElmared = $("#mobile-elmared").val();
  var Age = $("#age-elmared").val();
  var Arad = $("#arad-elmared").val();

  alert("تم ارسال بيانات المريض بنجاح ");
  $("#username").val("");
  $("#email").val("");
  $("#mobile").val("");
  var DataInfo = {
    nameElmared: NameElmared,
    addraesElmared: AddraesElmared,
    aobileElmared: MobileElmared,
    age: Age,
    arad: Arad,
  };
  //لو الايدي فاضي اعمل اضافة
  push(PostCollection, DataInfo);
}

function Show(almared) {
  $("#tbody").empty();
  for (var idalmared in almared) {
    var dataShow = `
             
                  <tr>   
                    <td> ${almared[idalmared].nameElmared} </td>
                    <td>${almared[idalmared].addraesElmared}  </td>
                    <td> ${almared[idalmared].aobileElmared} </td>
                    <td> ${almared[idalmared].age} </td>
                    <td> ${almared[idalmared].arad} </td>
                    <td> <i class="fa-solid fa-xmark" onclick="del('${idalmared}')" ></i></td>



                  </tr>
                  
                  `;
    $("#tbody").append(dataShow);
  }
}

window.del = del;
function del(id) {
  const Upddets = {};
  Upddets[`/المرضي/${id}`] = null; // احذف
  return update(ref(database), Upddets);
}

/*=============اضافة الاعضاء وطقم الدكاترة ================== */

var aladaa = ref(database, "/الاعضاء");
onValue(aladaa, (data) => {
  Showaladaa(data.val());
});

window.SendAladaa = SendAladaa;

/// دالة الحفظ تحفظ الداتا داخل الداتا بيز
function SendAladaa() {
  var ID = $("#ID").val();
  var UserName = $("#userName").val();
  var UserAddres = $("#userAddres").val();
  var UserMobile = $("#userMobile").val();

  alert("تمت اضافة بنجاح ");
  $("#ID").val("");
  $("#userName").val("");
  $("#userAddres").val("");
  $("#userMobile").val("");

  var DataAladaa = {
    ID: ID,
    UserName: UserName,
    UserAddres: UserAddres,
    UserMobile: UserMobile,
  };

  if (ID == "") {
    //لو الايدي فاضي اعمل اضافة
    push(aladaa, DataAladaa);
  } else {
    //عملية التعديل
    const Upddets = {};
    Upddets[`/الاعضاء/${ID}`] = DataAladaa;
    return update(ref(database), Upddets);
  }
}
window.Showaladaa = Showaladaa;
function Showaladaa(alada) {
  $("#ContentAladaa").empty();
  for (var idAlada in alada) {
    var dataaladaa = `
               
                    <tr>   
                      <td> ${alada[idAlada].UserName} </td>
                      <td>${alada[idAlada].UserAddres}  </td>
                      <td> ${idAlada}</td>
                      <td> ${alada[idAlada].UserMobile} </td>
                
                      <td> <i class="fa-solid fa-xmark" onclick="delAladaa('${idAlada}')" ></i></td>
  
                    </tr>
                    
                    `;
    $("#ContentAladaa").append(dataaladaa);
  }
}
//الحذف
window.delAladaa = delAladaa;
function delAladaa(id) {
  const Upddets = {};
  Upddets[`/الاعضاء/${id}`] = null; // احذف
  return update(ref(database), Upddets);
}



/*=============  اضافة المشتريات   ================== */
var almoshtryat = ref(database, "/المشتريات");
onValue(almoshtryat, (data) => {
  Showalmoshtryat(data.val());
});


window.SendAlmoshtrat = SendAlmoshtrat;

/// دالة الحفظ تحفظ الداتا داخل الداتا بيز
function SendAlmoshtrat() {
  var ID = $("#ID").val();
  var Alkmea = $("#Alkmea").val();
  var Prise = $("#Prise").val();

  alert("تمت اضافة بنجاح ");
  $("#ID").val("");
  $("#Alkmea").val("");
  $("#Prise").val("");

  var DataMoshtryat = {
    TotalAlmoshtryat: Prise * Alkmea,
    ID: ID,
    Alkmea: Alkmea,
    Prise: Prise,
  };
  if (ID == "") {
    //لو الايدي فاضي اعمل اضافة
    push(almoshtryat, DataMoshtryat);
  } else {
    //عملية التعديل
    const Upddets = {};
    Upddets[`/المشتريات/${ID}`] = DataMoshtryat;
    return update(ref(database), Upddets);
  }
}


window.Showalmoshtryat = Showalmoshtryat;
function Showalmoshtryat(moshtryat) {
  $("#ContentAlmoshtrat").empty();
  for (var idMoshtryat in moshtryat) {
    var datamoshtryat = `
               
                    <tr>   
                    <td> ${idMoshtryat}</td>
                    <td>${moshtryat[idMoshtryat].Alkmea}  </td>
                    <td> ${moshtryat[idMoshtryat].Prise} </td>
                    <td> ${moshtryat[idMoshtryat].TotalAlmoshtryat} </td>
                      <td> <i class="fa-solid fa-xmark" onclick="delmoshtryat('${idMoshtryat}')" ></i></td>
  
                    </tr>
                    
                    `;
    $("#ContentAlmoshtrat").append(datamoshtryat);
  }
}
window.delmoshtryat = delmoshtryat;
function delmoshtryat(id) {
  const Upddets = {};
  Upddets[`/المشتريات/${id}`] = null; // احذف
  return update(ref(database), Upddets);
}