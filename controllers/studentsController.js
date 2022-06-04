const fs =require('fs');
const path=require('path');

//data model
const student_data=fs.readFileSync(path.join(__dirname,'../data/students.json'));
const studnt_obj=JSON.parse(student_data);
// console.log(stusdent_data.toString());

//generate id
const makeLastId=()=>{
    if( studnt_obj.length > 0 ){
        return studnt_obj[studnt_obj.length-1].id+1;
    }
    else{
        return 1;
    }
}

//get data controller
const getAllStudentData=(req,res)=>{
    if(studnt_obj.length > 0){
        res.status(200).json(studnt_obj);
    }
    else{
        res.status(400).json({
            message:"Data Not Found"
        });
    }
    
}
//get single student data controller
const getStudentData=(req,res)=>{
    let id=req.params.id;
    if(studnt_obj.some(data=>data.id==id)){
        res.status(200).json(studnt_obj.find(data=>data.id==id));
    }
    else{
        res.status(404).json({
            error:"Invalid Data !"
        });
    }
    
    
}
//post student data controller
const postStudentData=(req,res)=>{
    // console.log(req.body);
    if(req.body.name == ''){
        res.status(400).send("Must field Input all fields");  
    }
    else{
        studnt_obj.push({
            id:makeLastId(),
            name:req.body.name,
            age:req.body.age,
            skills:req.body.skills,
            location:req.body.location
        });
        fs.writeFileSync(path.join(__dirname,'../data/students.json'),JSON.stringify(studnt_obj));
        res.status(200).send("Post Data form send successfully");
    }
}
//edit student data controller
const editStudentData=(req,res)=>{
    let id=req.params.id;
    if(studnt_obj.some(data=>data.id==id)){
        
        res.status(200).json({
            message:"Edit Data successfully"
        });
    }
    else{
        res.status(400).json({
            message:"Invalid Edit Data"
        });
    }
    
}
//delete student data controller
const deleteStudentData=(req,res)=>{
    let id=req.params.id;
    if(studnt_obj.some(data=>data.id == id)){
        let updated_data=studnt_obj.filter(data=>data.id!=id);
        fs.writeFileSync(path.join(__dirname,'../data/students.json'),JSON.stringify(updated_data));
        res.status(202).json({
            message:"Delete Data Succesfuly"
        });
    }
    else{
        res.status(400).json({
            message:"Invalid deleted Data"
        });
    }
    
}
module.exports={
    getAllStudentData,
    getStudentData,
    postStudentData,
    editStudentData,
    deleteStudentData
}