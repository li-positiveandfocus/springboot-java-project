const person ={
    name:'Linjing',
    address: {
        line1:'123 Baker Street',
        city: 'London',
        country: 'UK',
    },
    profiles:['twitter','facebook','linkedin'],
    printProfile: ()=>{
        person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
        // console.log(person.profiles[1]);
    }
}




export default function LearningJavaScript(){
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}