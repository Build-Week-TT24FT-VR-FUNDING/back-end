const express = require("express");
const Helper = require("./user-model");
const ProjectHelper = require("../projects/project-model");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Helper.findByID(id);
    if (user.length <= 0) {
      res
        .status(204)
        .json({ message: "We were unable to locate the requested user." });
    } else {
      const userProjects = await ProjectHelper.getByOwnerId(id);
      res.status(200).json({
        email: user.email,
        role: user.role,
        projects: userProjects,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
