import superHero from "../models/SuperHero.mjs"
import IRepository from "./IRepository.mjs"

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await superHero.findById(id)
  }

  async obtenerTodos() {
    return await superHero.find()
  }

  async buscarPorAtributo(atributo, valor) {
    const query = {}
    query[atributo] = valor
    return await superHero.find(query)
  }

  async obtenerMayoresDe30() {
    return await superHero.find({
      $and: [
        { edad: { $gt: 30 } },
        { planetaOrigen: "Tierra" },
        {
          $expr: { $gte: [{ $size: "$poderes" }, 2] }
        }
      ]
    })
  }

}

export default new SuperHeroRepository()