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
    const consulta = {}
    consulta[atributo] = valor
    return await superHero.find(consulta)
  }

  async obtenerMayoresDe30() {
    // return await superHero.find({
    //   $and: [
    //     { edad: { $gt: 30 } },
    //     { planetaOrigen: "Tierra" },
    //     {
    //       $expr: { $gte: [{ $size: "$poderes" }, 2] }
    //     }
    //   ]
    // })
    const heroes = await superHero.find(); // trae todos los documentos
    const filtrados = heroes.filter(hero =>
      hero.edad > 30 &&
      hero.planetaOrigen === "Tierra" &&
      hero.poderes.length >= 2
    );

    return filtrados;
  }

}

export default new SuperHeroRepository()