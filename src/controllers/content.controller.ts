import { json } from "express";
import Content from "../ models/content.model";

const contentController = async (req: any, res: any) => {
    const userId = req.userId;
    try {
      const content = await Content.find({
        userId: userId,
      })

      console.log("the content", content)

      res.json({
        content
      })
    } catch (error) {
        res.status(500).json({ message: "Error creating content", error });
    }

};


const contentCreate = async (req: any, res: any) => {
    const link = req.body.link;
    const type  = req.body.type;

    console.log("in the link type", link, type)

    const userId = req.userId;
    console.log("in the user id", userId)

     Content.create({
        link,
        type,
        userId,
        tags: []
     })

    return res.status(201).json({
        message: "Content Added"
    })
}


export {
    contentCreate,
    contentController
}