let grossAnnualIncome = document.querySelector(".Annual_income");
let Extra_Income = document.querySelector(".extraIncome");
let enteredAge = document.querySelector("#enteredAge");
let Applicable_deduction = document.querySelector(".deductions");
let reset = document.querySelector(".reset");
let calculate = document.querySelector(".calculate");
let results = document.querySelector("#output");
let close = document.querySelector(".close");


function isValidNumber(val) {
    return /^\d+(\.\d+)?$/.test(val);
}

function popup(){
    let checkAge=ageCheck();
    if(isValidNumber(grossAnnualIncome.value) && isValidNumber( Extra_Income.value ) && isValidNumber(Applicable_deduction.value) && !checkAge){
    var popup=document.querySelector(".popup_tab");
    popup.classList.toggle("showPopup");
    }
}

function ageCheck(){
    if(enteredAge.options[enteredAge.selectedIndex].value == "0"){
        document.querySelector(".ageExclam_mark").style.visibility ="visible";
        return true;
    }
}

function exclamVisibility(classEntered){
    document.querySelector(classEntered).style.visibility ="visible";
    
}
function hiddenExclam(classEntered){
    document.querySelector(classEntered).style.visibility ="hidden";
};

close.addEventListener("click",()=>{
    document.querySelector(".popup_tab").style.visibility="hidden";
    document.location.reload();
});

reset.addEventListener("click",()=>{
    document.location.reload();
});
calculate.addEventListener("click",(e) => {
    e.preventDefault();
    hiddenExclam(".ageExclam_mark");
    hiddenExclam(".extraExclam_mark");
    hiddenExclam(".grossExclam_mark");
    hiddenExclam(".deductExclam_mark");
    popup();
    let totalIncome = parseFloat(grossAnnualIncome.value) + parseFloat(Extra_Income.value) - parseFloat(Applicable_deduction.value);

    if(isValidNumber(grossAnnualIncome.value) && isValidNumber( Extra_Income.value ) && isValidNumber(Applicable_deduction.value)){
        if(totalIncome <= 800000 ){
            results.textContent=`No Tax Below 8 Lakhs`;
            if(enteredAge.options[enteredAge.selectedIndex].value == "0"){
                exclamVisibility(".ageExclam_mark");
            } 
        }else if(totalIncome > 800000){
            if(enteredAge.options[enteredAge.selectedIndex].value == "0"){
                exclamVisibility(".ageExclam_mark");
            }else{
                if(enteredAge.options[enteredAge.selectedIndex].value == "1"){
                    results.textContent = totalIncome - (.3*(totalIncome-800000));
                }
                else if(enteredAge.options[enteredAge.selectedIndex].value == "2" ){
                    results.textContent = totalIncome - (.4*(totalIncome-800000));
                }
                else{
                    results.textContent = totalIncome - (.1*(totalIncome-800000));
                    }
            }
            }
        }else{
            if(!isValidNumber(grossAnnualIncome.value)){
                exclamVisibility(".grossExclam_mark");
                ageCheck();
            }
            if(!isValidNumber(Extra_Income.value)){
                exclamVisibility(".extraExclam_mark")
                ageCheck();
            }
            }
            if(!isValidNumber(Applicable_deduction.value)){
                exclamVisibility(".deductExclam_mark")
                ageCheck();
            }
});