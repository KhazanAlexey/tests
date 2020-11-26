import {addFriends, copyStudent, deepcopyStudentGroup, fullcopy, mult, student, studentsGroupType, sum} from "./tests"

let a:number
let b:number
let st:student
let group:studentsGroupType
beforeEach(()=>{
    a=3
    b=6
 st=   {
        name:"donald",
            age:35,
        isMarried:true,
        scores:120,
        friends:[]

    }


   group= [
     {
         name: "Bob",
         age: 22,
         isMarried: true,
         scores: 85,
         friends: []
     },
         {
             name: "Alex",
             age: 21,
             isMarried: true,
             scores: 90,
             friends: []
         },
         {
             name: "Nick",
             age: 20,
             isMarried: true,
             scores: 120,
             friends: []
         },
         {
             name: "John",
             age: 19,
             isMarried: true,
             scores: 100,
             friends: []
         },
     ];

})
test("summ two numbers",()=>{

    expect(sum(a,b)).toBe(9)
})
test("mult two numbers",()=>{

    expect(mult(a,b)).toBe(18)
})

test("copy student get",()=>{

    expect(copyStudent(st).name===st.name).toBe(true)
})
test("fullcopy",()=>{

    expect( fullcopy(st).friends===st.friends).toBe(false)
})


test("deepcopustudentgroup",()=>{

    expect(deepcopyStudentGroup(group)===group).toBe(false)
    expect(deepcopyStudentGroup(group)[0]).not.toBe(group[0])
    expect(deepcopyStudentGroup(group)[0].friends).not.toBe(group[0].friends)


})

test("get friends to students",()=>{

    expect(addFriends(group).length !==0).toBe(true)
    expect(addFriends(group)[0].friends.includes(addFriends(group)[0].name)).toBe(false)
})