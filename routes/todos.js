const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

//get todos
router.get('/', (req, res) => {
  Todo.find()
    .then(todos => {
    res.status(200).json({todos})
    })
    .catch(err => {
      res.status(500).json({
        error,
        message: "Error al buscar los todos"
    })
  })
})


//get todo
router.get('/:id', (req, res) => {

  const { id } = req.params;

  Todo.findById(id)
    .then(todo => {
    res.status(200).json({todo})
    })
    .catch(err => {
      res.status(404).json({
        error,
        message: "Error al buscar los todos"
    })
  })
})


//create todo
router.post('/', (req, res) => {
  
  Todo.create(req.body)
    .then(todo => {
    res.status(201).json({todo})
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "No se pudo crear el todo"
      })
  })
})

//update todo
router.patch('/:id', (req, res) => {

  const { id } = req.params;

  Todo.findByIdAndUpdate(id, {$set: req.body}, {new: true})
    .then(todo => {
    res.status(200).json({todo})
    })
    .catch(err => {
      res.status(500).json({
        error,
        message: "Error al editar el todo"
    })
  })
})

//delete todo
router.delete('/:id', (req, res) => {

  const { id } = req.params;

  Todo.findByIdAndDelete(id)
    .then(todo => {
    res.status(200).json({todo})
    })
    .catch(err => {
      res.status(500).json({
        error,
        message: "Error al eliminar el todo"
    })
  })
})

module.exports = router;
