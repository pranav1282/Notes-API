const express = require('express')
const auth = require("../middlewares/auth")
const noteRouter = express.Router()
const {
    createNote,
    updateNote,
    deleteNote,
    getNotes
} = require("../controllers/noteControllers")

noteRouter.get("/", auth, getNotes)

noteRouter.post("/", auth, createNote)

noteRouter.delete("/:id", auth, deleteNote)

noteRouter.put("/:id", auth, updateNote)

module.exports = noteRouter