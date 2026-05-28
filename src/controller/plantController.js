import plantModel from '../model/plantModel.js'

const getAll = async (req, res) => {
    const types = await plantModel.getAll();
    res.json(types);
};
 
 const create = async (req,res) => {
    const { nome, preco, quantidade, id_tipos } = req.body;

    if (!nome || !preco || !quantidade || !id_tipos) {
        return res.status(400).json({
            message: 'Todos os campos são obrigatórios'
        });
    }

    const newPlant = await plantModel.create(nome, preco, quantidade, id_tipos);
    res.status(201).json(newPlant);
};

 
 
const remove = async (req, res) => {
    const deletedPlant = await plantModel.remove(req.params.id);

if (!deletedPlant) {
    return res.status(404).json({
        message: 'planta não encontrado'
    });
}

res.status(200).json({
    message: 'planta deletado com sucesso',
    deletedPlant
});
}

export default { getAll, create, remove};
