import { random } from "../utils/utils";
import Link from "../ models/link.model";
import Content from "../ models/content.model";
import User from "../ models/user.model";

const shareLinkcreate = async (req: any, res: any) => {
  const share = req.body.share;
  const userId = req.userId;



  console.log(userId);
  
  try {
    let hash = null;
    if (share) {

      hash = random(10);
      await Link.create({
        userId, 
        hash,
      });
    } else {
      await Link.deleteOne({
        userId,
      });
    }

    res.json({
      hash,
      message: "Link shared successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating content", error });
  }
};

const shareLink = async (req: any, res: any) => {
  console.log("in the share link", req.params.shareLink);
  const hash = req.params.shareLink;

  console.log("in the hash", hash);



  try {
    const link = await Link.findOne({ hash });
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    const content = await Content.findOne({
      userId: link.userId, // Fixed incorrect reference to Link.userId
    });

    const user = await User.findOne({
      _id: link.userId, // Use `_id` to find user
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      username: user.username,
      content,
    });
  } catch (error) {
    res.status(500).json({ message: "Error getting content", error });
  }
};

export {  shareLinkcreate , shareLink};
