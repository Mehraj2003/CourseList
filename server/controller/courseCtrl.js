import courseModel from "../models/courseModel.js";
import { getOptions } from "../utils/Utils.js";

const get = async (req,res)=>{
    try{
       const { filter, sort, dir, pageSize, skip } = getOptions(req, res);
        const course = await courseModel
        .find(filter)
        .sort({ [sort]: dir })
        .skip(skip)
        .limit(pageSize);
        const totalRecords = await courseModel.countDocuments();
        res.status(200).json({message:"Course Fetched Successfully",success:true,data: course,totalRecords });

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error",success:false});
    }
}

const add = async(req,res)=>{
   try{
    const data = req.body;
    data.createdAt = new Date();
    const newCourse = new courseModel(data);
    await newCourse.save();
    res.status(201).json({message:"Course Added Successfully",success:true});
}catch(e){
    res.status(500).json({message:"Internal Server Error",success:false});
}

}
const update = async (req, res) => {
    try {
      const courseId = req.body._id;
      const updateData = req.body;
      delete updateData._id;
      await courseModel.findOneAndUpdate({ _id: courseId }, updateData);
      res.status(200).json({ message: "Course updated Successfully!", success: true });
    } catch (error) {
      console.log("error", e);
      res.status(500).json({ message: "Internal Server Error!", success: false });
    }
  };
  
  const updatePut = async (req, res) => {
    try {
      const courseId = req.body._id;
      const updateData = req.body;
      delete updateData._id;
      await courseModel.findOneAndUpdate(
        { _id: courseId },
        {
          $set: {
            name: updateData.name,
            price: updateData.price,
            rating: updateData.rating,
            // duration: updateData.duration,
            trainer: updateData?.trainer || "",
          },
        }
      );
      res.status(200).json({ message: "Course updated Successfully!", success: true });
    } catch (error) {
      console.log("error", e);
      res.status(500).json({ message: "Internal Server Error!", success: false });
    }
  };
  
  const deleteCourse = async (req, res) => {
    try {
      const courseId = req.params.id;
      await courseModel.findOneAndDelete({ _id: courseId });
      res.status(200).json({ message: "Course Deleted Successfully!", success: true });
    } catch (error) {
      console.log("error", e);
      res.status(500).json({ message: "Internal Server Error!", success: false });
    }
  };

export { get, add,update, updatePut, deleteCourse };