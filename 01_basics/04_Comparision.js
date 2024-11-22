console.log("helo")
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log("null chek")
console.log(null == 0);
console.log(null > 0);
console.log(null < 0);

// memory
// stack (premitive),heap(non-primitive)
let myYoutubename="Mish"
let anothername=myYoutubename
anothername="suayshkumar"
// stack(primitive)=>copy
// heap(Non-Primitive)=> reference
console.log(anothername)
console.log(myYoutubename)
let userOne={
    email:"hello",
    upi:"hello@upi"

}
let userTwo = userOne;
userTwo.email="suyash@"
console.log(userOne.email);
console.log(userTwo.email);

