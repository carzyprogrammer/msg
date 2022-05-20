function sendsms(){
    user1=document.getElementById("user1").value;
    user2=document.getElementById("user2").value;
    if(user1!=""){
        let welement=document.createElement("welement");
        welement.append(user1);

        mydiv=document.getElementById("ansbox");
        mydiv.append(welement);
        welement.style.color="yellow",fontsize="10px";
        name1=document.getElementById("user1").value;
        mydiv.append(name1);
        document.getElementById("user1").value="";
        
    }
    else if(user2!=""){
        let welement=document.createElement("welement");
        welement.append(user1);
        mydiv=document.getElementById("ansbox");
        mydiv.append(welement);
        welement.style.color="blue";
        name2=document.getElementById("user2").value;
        mydiv.append(name2);
        document.getElementById("user2").value="";
    }
}
function clearsms(){
    document.getElementById("ansbox").value="";

}

let str = "Hello World!\nThis is my string";

console.log(str);