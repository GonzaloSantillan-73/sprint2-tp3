import express from "express"
import {obtenerSuperHeroePorIdController,
  obtenerTodosLosSuperheroesController,
  obtenerSuperheroesMayoresDe30Controller,
  buscarSuperheroesPorAtributoController
} from "../controllers/superheroesController.mjs"

const router = express.Router()

router.get("/heroes",obtenerTodosLosSuperheroesController)
router.get("/heroes/mayores-30",obtenerSuperheroesMayoresDe30Controller)
router.get("/heroes/buscar/:atributo/:valor",buscarSuperheroesPorAtributoController)
router.get("/heroes/:id",obtenerSuperHeroePorIdController)

export default router