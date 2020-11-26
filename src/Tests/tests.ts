export type student={
    name:string
    age:number
    isMarried:boolean
    scores:number
    friends: Array<string>
}
export type studentsGroupType=Array<student>

export function sum(a:number,b:number):number {
    return a+b

}
export function mult(a:number,b:number):number {
    return a*b

}

export function copyStudent(stu:student) {
    return{...stu}

}
export const  fullcopy=(st:student)=>{
    return {...st,friends: [...st.friends]}

}

export function deepcopyStudentGroup(group:studentsGroupType):studentsGroupType {
    return group.map(st=>({...st,friends:[...st.friends]}))

}


export function addFriends(students:studentsGroupType):studentsGroupType{
    /*   добавить свойство friends каждому студенту
        всвойстве должны лежать все осталбные друзья за исключением своего имени*/
    let studentsWithFriends=students.map(st=>({...st,friends:students.filter(f=>f.name!=st.name).map(fr=>fr.name)}))
    return studentsWithFriends
}
