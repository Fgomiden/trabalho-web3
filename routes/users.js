const express = require("express");
const router = express.Router();
const User = require("../models/user");

//GET: Recebe todos os usuários
router.get("/", async (request, response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (error) {
    response.send(`Erro: ${error}`);
  }
});

//GET: Recebe um usuário com id específico
router.get("/:id", async (request, response) => {
  try {
    const getUserById = await User.findById(request.params.id);
    response.json(getUserById);
  } catch (error) {
    response.send(`Erro: ${error}`);
  }
});

//POST: Cria um novo usuário
router.post("/", async (request, response) => {
  const user = new User({
    name: request.body.name, //Nome
    role: request.body.role, //Papel ou Função
    age: request.body.age, //Idade
    isActive: request.body.isActive, //Status do Cadastro
  });
  try {
    const saveUser = await user.save();
    response.json(saveUser);
  } catch (error) {
    response.send(`Erro: ${error}`);
  }
});

//PUT: Edita um usuário de id específicode id específico
router.put("/:id", async (request, response) => {
    try {
      const user = await User.findById(request.params.id);
      const saveUser = await user.save();
      response.json(saveUser);
    } catch (error) {
      response.send(`Erro: ${error}`);
    }
});

//PATCH: Atualiza o campo isActive. Ex: Mudar o campo isActive para false para desativar cadastro do usuário
router.patch("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    user.isActive = request.body.isActive;
    const saveUser = await user.save();
    response.json(saveUser);
  } catch (error) {
    response.send(`Erro: ${error}`);
  }
});

//DELETE: Remove um usuário de id específico
router.delete("/:id", async (request, response) => {
  try {
    const deleteUserById = await User.findById(request.params.id);
    response.json(deleteUserById);
  } catch (error) {
    response.send(`Erro: ${error}`);
  }
});

module.exports = router;
