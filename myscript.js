let data = {}
let states = {}

const getDiseaseData = async()=>{
    const res = await fetch("",JSON.stringify({...states.disease.active}));
    const data = await res.json()
    console.log(data)

}