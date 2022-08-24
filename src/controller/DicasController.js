import database from "../infra/database.js";
import DicasModel from "../model/DicasModel.js.js"


const Dicas =  (app) =>{

        app.get("/dicas", (req, res) => {
            const confirma =  Math.round(Math.random() * (database.length - 1));
            console.log(confirma);
            res.json(database[confirma])
        })

        app.post("/criar", (req, res) => {
            const body = req.body
            console.log(body)
            const dica = new DicasModel(body.dica, body.data, body.autor)
            database.push(dica)
            res.json({erro: false, message: "Dica cadastrada com sucesso!"})
        })
    }
export default Dicas