let orangeBtn = document.querySelector('.orangeBtn');

let welcomeScreen = document.querySelector('.welcome-screen');
let welcomeMessage = document.querySelector('.welcome-message');
let itemScreen = document.querySelector('.items-screen');

let items = document.querySelectorAll('#pricedItem');

let beep = document.getElementById('beep');
let isPlaying = false;

let total = document.querySelector('.total');
let totalCount = 0;


let keys = document.querySelectorAll('.KeyboardKey');

////////new code
let flag = 1;
document.querySelectorAll('.close').forEach(function (close) {
    close.addEventListener('click', closeCheck);
});

document.querySelector('.whichRoll').addEventListener('click', whichOne);
document.querySelector('.whichCabbage').addEventListener('click', whichOne);
////////new code end

function init() {
    document.querySelector('.startBtn').addEventListener('click', itemScreenOn);
    document.querySelector('.cancel').addEventListener('click', itemScreenOn);

    orangeBtn.addEventListener('click', orangeScreenOn);
    keys.forEach(function (key) {
        key.addEventListener('click', keyPress);
    })

    document.querySelector('.whichOrange').addEventListener('click', whichOne);
    document.getElementById('check').addEventListener('click', bigOrSmall);
    document.getElementById('enter').addEventListener('click', enterOrange);
    document.querySelector('.bigOranges').addEventListener('click', ()=>{
        itemScreenOn();
        document.querySelector('.list-group-item.list-group-item-warning').classList.remove("hidden");
                beep.play();
                totalCount = totalCount + 4.99;
                total.textContent = "Your total: $" + (totalCount).toFixed(2);
                                                                        
                                                                        
                                                                        });
    
    items.forEach(function(item){
        item.addEventListener('click', deleteItem);
    })

}

function itemScreenOn() {
    welcomeScreen.classList.add('hidden');
    welcomeMessage.classList.add('hidden');
    itemScreen.classList.remove('hidden');
    document.querySelector('.orange-screen').classList.add('hidden');
     
    document.querySelector('.pay-screen').classList.add('hidden');
    document.getElementById('RightSideMenu').classList.remove('hidden');
    document.querySelector('.Checkout-Screen').classList.add('hidden');
}

function deleteItem(ev) {
    if(document.querySelector('.selected')){document.querySelector('.selected').classList.remove('selected');}
    ev.currentTarget.classList.add('selected'); 
    ev.currentTarget.addEventListener('click', deleteItem2);
    document.getElementById('trueDelete').classList.add('possible');
}


function keyPress(ev) {

    document.getElementById('orangeName').value += ev.currentTarget.textContent;
    backspacePress();
}

function backspacePress() {

    switch (document.getElementById('orangeName').value) {
        case "":
            document.querySelector('.aRow').classList.remove('hidden');
            document.querySelector('.cabbageRow').classList.remove('hidden');
            document.querySelector('.rollRow').classList.remove('hidden');
            document.querySelector('.secondRow').classList.add('hidden');
            document.querySelector('.whichRoll').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.add('hidden');
            document.querySelector('.cherries').classList.add('hidden');
            document.querySelector('.loading').classList.add('hidden');
            document.querySelector('.whichOrange').classList.add('hidden');
            break;
        case "37C":
            console.log('using tag');
        case "OR":
        case "ORA":
        case "ORAN":
        case "ORANG":
        case "ORANGE":
            document.querySelector('.aRow').classList.add('hidden');
            document.querySelector('.cabbageRow').classList.add('hidden');
            document.querySelector('.rollRow').classList.add('hidden');
            document.querySelector('.secondRow').classList.remove('hidden');
            document.querySelector('.whichRoll').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.add('hidden');
            document.querySelector('.cherries').classList.add('hidden');
            document.querySelector('.loading').classList.add('hidden');
            document.querySelector('.whichOrange').classList.remove('hidden');
            flag = 1;
            break;
        case "RO":
        case "ROL":
        case "ROLL":
            document.querySelector('.aRow').classList.add('hidden');
            document.querySelector('.cabbageRow').classList.add('hidden');
            document.querySelector('.rollRow').classList.remove('hidden');
            document.querySelector('.secondRow').classList.add('hidden');
            document.querySelector('.banana').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.add('hidden');
            document.querySelector('.whichRoll').classList.remove('hidden');
            document.querySelector('.cherries').classList.add('hidden');
            document.querySelector('.loading').classList.add('hidden');
            document.querySelector('.whichOrange').classList.add('hidden');
            flag = 2;
            break;
        case "CA":
        case "CAB":
        case "CABB":
        case "CABBA":
        case "CABBAG":
        case "CABBAGE":
            document.querySelector('.aRow').classList.add('hidden');
            document.querySelector('.cabbageRow').classList.remove('hidden');
            document.querySelector('.rollRow').classList.add('hidden');
            document.querySelector('.secondRow').classList.add('hidden');
            document.querySelector('.whichRoll').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.remove('hidden');
            document.querySelector('.cherries').classList.add('hidden');
            document.querySelector('.loading').classList.add('hidden');
            document.querySelector('.whichOrange').classList.add('hidden');
            flag = 3;
            break;
        case "C":
            document.querySelector('.aRow').classList.add('hidden');
            document.querySelector('.cabbageRow').classList.remove('hidden');
            document.querySelector('.cherries').classList.remove('hidden');
            document.querySelector('.rollRow').classList.add('hidden');
            document.querySelector('.secondRow').classList.add('hidden');
            document.querySelector('.whichRoll').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.add('hidden');
            document.querySelector('.whichOrange').classList.add('hidden');
            document.querySelector('.loading').classList.add('hidden');
            break;
        default:
            document.querySelector('.aRow').classList.add('hidden');
            document.querySelector('.cabbageRow').classList.add('hidden');
            document.querySelector('.cherries').classList.add('hidden');
            document.querySelector('.rollRow').classList.add('hidden');
            document.querySelector('.secondRow').classList.add('hidden');
            document.querySelector('.whichRoll').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.add('hidden');
            document.querySelector('.whichOrange').classList.add('hidden');
            document.querySelector('.banana').classList.add('hidden');
            document.querySelector('.loading').classList.remove('hidden');
            document.querySelector('.orangeCheck').classList.add('hidden');
            break;
    }

}



////////////////// Keyboard Backspace
document.getElementById('Backspace').addEventListener('click', ()=>{
   let removeOne = document.getElementById('orangeName');
    let newValue = removeOne.value.slice(0, - 1);
    removeOne.value = newValue;
    backspacePress();
})
/////////////////////////


function whichOne() {
    switch (flag) {
        case 1:
            document.querySelector('.orangeCheck').classList.remove('hidden');
            document.querySelector('.secondRow').classList.add('hidden');
            document.querySelector('.keyboard').classList.add('hidden');
            break;
        case 2:
            document.querySelector('.rollCheck').classList.remove('hidden');
            document.querySelector('.whichRoll').classList.add('hidden');
            document.querySelector('.keyboard').classList.add('hidden');
            break;
        case 3:
            document.querySelector('.cabbageCheck').classList.remove('hidden');
            document.querySelector('.whichCabbage').classList.add('hidden');
            document.querySelector('.keyboard').classList.add('hidden');
            break;
    }
}

function closeCheck() {
    switch (flag) {
        case 2:
            document.querySelector('.rollCheck').classList.add('hidden');
            document.querySelector('.whichRoll').classList.remove('hidden');
            document.querySelector('.keyboard').classList.remove('hidden');
            break;
        case 3:
            document.querySelector('.cabbageCheck').classList.add('hidden');
            document.querySelector('.whichCabbage').classList.remove('hidden');
            document.querySelector('.keyboard').classList.remove('hidden');
            break;
    }
}

////////////////// Orange Counter
let oranges = 1;

document.getElementById('orangePlus').addEventListener('click', ()=>{
    let oaranges = document.getElementById('orangeNum');
    oranges ++;
    oaranges.value = oranges;
    console.log(oranges)
});

document.getElementById('orangeMinus').addEventListener('click', ()=>{
    if(oranges > 1){
    let oaranges = document.getElementById('orangeNum');
        oranges --;
    oaranges.value = oranges;
    console.log(oranges)}
})

//////////////////////////////

function bigOrSmall() {
    if (document.getElementById('orangeNum').value <= 2) {
        document.querySelector('.bigOrSmall').textContent = "Those are big orange(s)";
    } else {
        document.querySelector('.bigOrSmall').textContent = "Those are small orange(s)";
    }
    
    document.getElementById('enter').classList.remove('hidden');
}

function enterOrange() {
    document.getElementById('orangeName').value = "BIG ORANGES";
    document.querySelector('.orangeCheck').classList.add('hidden');
    document.querySelector('.secondRow').classList.remove('hidden');
    document.querySelector('.smallOranges').classList.add('hidden');
    document.querySelector('.whichOrange').classList.add('hidden');
    document.querySelector('.keyboard').classList.remove('hidden');

}

document.addEventListener('keypress', function (ev) {
    let char = ev.char || ev.charCode || ev.which;
    if (char == 32) {
        for (i = 0; i < 4; i++) {
            if (items[i].classList.contains('hidden')) {
                items[i].classList.remove('hidden');
                beep.play();
                totalCount = totalCount + 4.99;
                total.textContent = "Your total: $" + (totalCount).toFixed(2);
                break;
            }
        }
    }
});




////////////////////////////////// Menu Buttons


/////////////////// Back, or 'items page;
document.querySelector('#itemsPage').addEventListener('click', ()=>{
    document.querySelector('.Checkout-Screen').classList.add('hidden');
    itemScreenOn();
})

//////////// Language
document.getElementById("LanguageSelect").addEventListener('click', ()=>{
    itemScreen.classList.add('hidden');
    document.querySelector('.welcome-screen').classList.remove('hidden');
    document.getElementById('RightSideMenu').classList.add('hidden');
})

////////// Untagged

function orangeScreenOn() {
    itemScreen.classList.add('hidden');
    document.querySelector('.orange-screen').classList.remove('hidden');
    document.getElementById('RightSideMenu').classList.add('hidden');
    document.querySelector('.Checkout-Screen').classList.add('hidden');
}

function helpIsComing() {
   document.getElementById("overlayHelp").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlayHelp").style.display = "none";
}

////////////////////////////// Bag Buttons
let bags = document.getElementById('bagNum');
let totalbags = 0;
document.getElementById("lessBags").addEventListener('click', ()=>{
    if(totalbags > 0){totalbags = totalbags - 1; bags.value = totalbags;
                      
    document.getElementById('bagPrice').innerHTML =
        "Plastic Bags: " + totalbags + "<p style='float: right'>" + "$" +((5 * totalbags)/100).toFixed(2) +"</p>";
                totalCount = totalCount - 0.05;
                total.textContent = "Your total: $" + (totalCount).toFixed(2);;
                     
    if(totalbags == 0){ document.getElementById('bagPrice').classList.add('hidden')}  }
  console.log(totalbags);
});
    
document.getElementById("moreBags").addEventListener('click', ()=>{
    if(totalbags == 0){
         document.getElementById('bagPrice').classList.remove('hidden'); 
    }
                                                     console.log(totalbags);
    totalbags = totalbags + 1; bags.value = totalbags;
    document.getElementById('bagPrice').innerHTML =
        "Plastic Bags: " + totalbags + "<p style='float: right'>" + "$" + (0.05 * totalbags).toFixed(2) +"</p>";
    
                totalCount = totalCount + 0.05;
                total.textContent = "Your total: $" + (totalCount).toFixed(2);;
});

////////////////// Remove Item



document.getElementById("trueDelete").addEventListener('click', deleteItem2);

function deleteItem2(ev) {
    let targetItem = document.querySelector('.selected');
    document.getElementById('trueDelete').classList.remove('possible');
    ev.currentTarget.removeEventListener('click', deleteItem2);
    
    try{if (targetItem.id == "bagPrice"){
        targetItem.classList.remove('selected')
        targetItem.classList.add('hidden');
        totalCount = totalCount - (0.05 * totalbags).toFixed(2)
        total.textContent = "Your total: $" + (totalCount).toFixed(2);
        
        
    totalbags = 0; bags.value = 0;
        
        return}
    if(targetItem){
        targetItem.classList.remove('selected')
        targetItem.classList.add('hidden');
                totalCount = totalCount - 4.99;
                total.textContent = "Your total: $" + (totalCount).toFixed(2);
        return
    
    }}
    catch(err){}
    if(!targetItem){
        alert('If you wish to remove an item, please select it first.');
        return
    }
}

///////////// Checkout


document.getElementById("continue").addEventListener('click', ()=>{
    itemScreen.classList.add('hidden');
    document.querySelector('.Checkout-Screen').classList.remove('hidden');
  
document.querySelector('.baggies').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
    
})

document.getElementById('chekkout').addEventListener('click', ()=>{
document.querySelector('.baggies').classList.remove('hidden');
document.querySelector('.overlay').classList.remove('hidden');
    
})

function goodbye (){
    document.querySelector('.pay-screen').classList.add('hidden');
    document.querySelector('.goodbye-screen').classList.remove('hidden');
}

let loadEvent = ('deviceready' in document) ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(loadEvent, init);

///////////// Pay Options, Move on to the next page
document.querySelectorAll('.payment').forEach((buttin)=>{buttin.addEventListener('click', ()=>{
    itemScreen.classList.add('hidden');
    document.querySelector('.orange-screen').classList.add('hidden'); 
    document.querySelector('.pay-screen').classList.remove('hidden');
    document.getElementById('RightSideMenu').classList.add('hidden');
    document.querySelector('.Checkout-Screen').classList.add('hidden');
    })
    
})

