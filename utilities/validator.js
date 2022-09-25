exports.validatePin=function(pin){
    if(pin.toString().length===6){
        return true;
    }else{
        return false;
    }

};

exports.validateState=function(state){
    if(state.toLowerCase()==="andhra pradesh"||state.toLowerCase()==="arunachal pradesh"||
    state.toLowerCase()==="assam"||state.toLowerCase()==="bihar"||
    state.toLowerCase()==="chhattisgarh"||state.toLowerCase()==="goa"||
    state.toLowerCase()==="gujarat"||state.toLowerCase()==="haryana"||
    state.toLowerCase()==="himachal pradesh"||state.toLowerCase()==="jammu and kashmir"||
    state.toLowerCase()==="jharkhand"||state.toLowerCase()==="karnataka"||
    state.toLowerCase()==="kerala"||state.toLowerCase()==="madhya pradesh"||
    state.toLowerCase()==="maharashtra"||state.toLowerCase()==="mizoram"||
    state.toLowerCase()==="meghalaya"||state.toLowerCase()==="manipur"||
    state.toLowerCase()==="nagaland"||state.toLowerCase()==="odisha"||
    state.toLowerCase()==="punjab"||state.toLowerCase()==="rajasthan"||
    state.toLowerCase()==="sikkim"||state.toLowerCase()==="tamil nadu"||
    state.toLowerCase()==="telangana"||state.toLowerCase()==="tripura"||
    state.toLowerCase()==="uttarakhand"||state.toLowerCase()==="uttar pradesh"||
    state.toLowerCase()==="west bengal"){
        return true;
    }else{
        return false;
    }
};

exports.validatePhone=function(ph){
    if(ph.toString().length===10){
        return true;
    }else{
        return false;
    }

};

exports.validateCity=function(city){
    const specialch=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,\.<>\/?~]/;
    if(specialch.test(city)){
        console.log("city");
        return false;
    }else{
        return true;
    }

};