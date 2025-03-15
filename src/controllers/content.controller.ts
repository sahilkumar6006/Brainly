import { json } from "express";
import Content from "../ models/content.model";

const contentController = async (req: any, res: any) => {
    const userId = req.userId;
    try {
      const content = await Content.find({
        userId: userId,
      }).populate("userId", "username");

      console.log("the content", content)

    res.status(200).json({
        message: "Content fetched successfully",
        content,
    });
    } catch (error) {
        res.status(500).json({ message: "Error creating content", error });
    }

};


const contentCreate = async (req: any, res: any) => {
    const link = req.body.link;
    const type  = req.body.type;
    const title = req.body.title;

    console.log("in the link type", link, type)

    const userId = req.userId;
    console.log("in the user id", userId)

     Content.create({
        link,
        type,
        userId,
        title,
        tags: []
     })

    return res.status(201).json({
        message: "Content Added"
    })
}


const deletContent = async (req: any, res: any) => {
    const id = req.params.id;
    const userId = req.userId;

    try {
        const content = await Content.findByIdAndDelete(id);
        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }
        res.status(200).json({ message: "Content deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting content", error });
    }
};

export {
    contentCreate,
    contentController
}