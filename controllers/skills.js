import { Skill } from "../models/skill.js"

async function index(req, res) {
  try {
    const skills = await Skill.find({})
  
  
    res.render("skills/index", {
      skills
    })
    
  } catch (error) {
    res.redirect(("/"))
  }
}

async function newSkill(req, res) {
  res.render("skills/new")
}

async function create(req, res) {
  req.body.learned = false
  await Skill.create(req.body)
  res.redirect("/skills")
}

export {
  index,
  newSkill as new,
  create,
}