const BLOG_SCHEMA = require("../models/blogs.model");

exports.addBlog = async (req, res) => {
  try {
    // console.log(req.body);
    const { title, description } = req.body;

    let newBlog = await BLOG_SCHEMA.create({
      title,
      description,
      createdBy: req.myUser._id,
    });

    res.status(201).json({ success: true, message: "data added successfully", newBlog });
  } catch (error) {
    console.log("error while adding a blog");
    res.status(500).json({ success: false, message: error });
  }
};

exports.fetchAllBlogs = async (req, res) => {
  try {
    let allBlogs = await BLOG_SCHEMA.find();

    if (allBlogs.length === 0) return res.json({ message: "no data present" });

    res.status(200).json({
      success: true,
      message: "all blogs fetched",
      count: allBlogs.length,
      data: allBlogs,
    });
  } catch (error) {
    console.log("error while fetching all blogs");
    res.status(500).json({ success: false, message: error });
  }
};

exports.fetchOneBlog = async (req, res) => {
  try {
    console.log(req.params);

    //   let id = req.params.id;
    let { id } = req.params;
    console.log(id);

    let blog = await BLOG_SCHEMA.findOne({ _id: id });

    if (!blog) return res.json({ message: "no such blog found" });

    res.status(200).json({ success: true, message: "data fetched", data: blog });
  } catch (error) {
    console.log("erro while fetching one blog");
    res.status(500).json({ success: false, message: error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    let { id } = req.params;

    let blog = await BLOG_SCHEMA.findOne({ _id: id });

    console.log(blog);

    if (!blog) {
      return res.status(400).json({ success: "false", message: "no blog found" });
    }

    let deletedBlog = await BLOG_SCHEMA.deleteOne({ _id: id });
    console.log(deletedBlog);

    res.status(200).json({ success: true, message: "blog deleted" });
  } catch (error) {
    console.log("error while deleting a blog");
    res.status(500).json({ success: false, message: error });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    let { id } = req.params;

    let findBlog = await BLOG_SCHEMA.findOne({ _id: id });
    if (!findBlog) return res.status(400).json({ success: false, message: "no such blog found" });

    await BLOG_SCHEMA.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title, //? updating the values from new request.
          description: req.body.description,
        },
      }
    );

    res.status(200).json({ success: true, message: "blog updated" });
  } catch (error) {
    console.log(":error occurred while updating");
    res.status(500).json({ success: false, message: error });
  }
};

/* https://www.amazon.in/Campus-OXYFIT-Walking-Shoes-India/dp/B09RPPR4S2/ref=sr_1_1?_encoding=UTF8&content-id=amzn1.sym.5e9610aa-a283-4f27-8121-ae5c038daee4&dib=eyJ2IjoiMSJ9.KzmI9_Z1sIq6E-baKimkW-fbkgUM2B9Gb_he0WTzVfsqtVXfsR6iu-mW6qW4u399oUC3cpub6VYlCz-RcQra_HyKMgED-gZCCJzCZEGGJlvOIXTGlgiUciB0LaA9JxoCpICgkfwyxCv-FXhvn71V4wuqkZGRGTrlmK9UYObHZidx9aIVxt8Hr9Y6FBhUbEU6MQfP-HKOjeaTeFTNKhxPehZ90f1xhdHzRg_-TepSTDi4eE842vt4Jv8tqVFItJk6nwMAnz0GiJiQLKoj9jM6KqV9wGoTnTxKV3rYXRT40is.nTkpDtLLGRKmy1kncuu9yI-BQkQNEPdFG1i48yLt82w&dib_tag=se&pd_rd_r=523c7d39-5c4c-4d81-8ed1-d35f9eb4c0be&pd_rd_w=N3Aar&pd_rd_wg=eYIhh&pf_rd_p=5e9610aa-a283-4f27-8121-ae5c038daee4&pf_rd_r=1TCCHDYFQKJ7ZYG756XJ&qid=1731995772&refinements=p_72%3A1318477031%2Cp_36%3A60000-%2Cp_n_feature_nineteen_browse-bin%3A11301363031&rnid=11301362031&s=apparel&sr=1-1 */

/* https://www.amazon.in/Puma-Dazzler-Black-Puma-Silver-Sneaker/dp/B09RG9WPTC/ref=sr_1_2?_encoding=UTF8&content-id=amzn1.sym.5e9610aa-a283-4f27-8121-ae5c038daee4&dib=eyJ2IjoiMSJ9.KzmI9_Z1sIq6E-baKimkW-fbkgUM2B9Gb_he0WTzVfsqtVXfsR6iu-mW6qW4u399oUC3cpub6VYlCz-RcQra_HyKMgED-gZCCJzCZEGGJlvOIXTGlgiUciB0LaA9JxoCpICgkfwyxCv-FXhvn71V4wuqkZGRGTrlmK9UYObHZidx9aIVxt8Hr9Y6FBhUbEU6MQfP-HKOjeaTeFTNKhxPehZ90f1xhdHzRg_-TepSTDi4eE842vt4Jv8tqVFItJk6nwMAnz0GiJiQLKoj9jM6KqV9wGoTnTxKV3rYXRT40is.nTkpDtLLGRKmy1kncuu9yI-BQkQNEPdFG1i48yLt82w&dib_tag=se&pd_rd_r=523c7d39-5c4c-4d81-8ed1-d35f9eb4c0be&pd_rd_w=N3Aar&pd_rd_wg=eYIhh&pf_rd_p=5e9610aa-a283-4f27-8121-ae5c038daee4&pf_rd_r=1TCCHDYFQKJ7ZYG756XJ&qid=1731995772&refinements=p_72%3A1318477031%2Cp_36%3A60000-%2Cp_n_feature_nineteen_browse-bin%3A11301363031&rnid=11301362031&s=apparel&sr=1-2 */
