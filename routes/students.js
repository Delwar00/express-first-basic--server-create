const express=require('express');
const router=express.Router();
const {getAllStudentData,getStudentData,postStudentData,editStudentData,deleteStudentData}=require('../controllers/studentsController');
// console.log(getAllStudentData);

// router.get('/',getAllStudentData);
// router.post('/',postStudentData);
// router.get('/:id',getStudentData);
// router.put('/:id',editStudentData);
// router.patch('/:id',editStudentData);
// router.delete('/:id',deleteStudentData);
router.route('/').get(getAllStudentData).post(postStudentData);
router.route('/:id').put(editStudentData).patch(editStudentData).delete(deleteStudentData).get(getStudentData);

module.exports=router;