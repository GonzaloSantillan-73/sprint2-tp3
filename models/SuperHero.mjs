import mongoose from "mongoose"

const superheroeSchema = new mongoose.Schema({
  nombreSuperHeroe: {type: String, required: true},
  nombreReal: {type: String, required: true},
  edad: {type: Number, min: 0},
  planetaOrigen: {type: String, default: "Desconocido"},
  debilidad: {type: String},
  poderes: {type: [String]},
  aliados: {type: [String]},
  enemigos: {type: [String]},
  creador: {type: String},
  createAt: {type: Date, default: Date.now}
}, {collection: "Grupo-09"});

const superHero = mongoose.model("SuperHero",superheroeSchema)

export default superHero