const mongoose = require('mongoose');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/seu_banco_de_dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.error("Erro de conexão: ", err));

// Definir o modelo de dados
const itemSchema = new mongoose.Schema({
  id: Number,
  tipo_material: String,
  maquina: String,
  tamanho: String,
  tempo: String,
  data_hora: Date
});

const Item = mongoose.model('Item', itemSchema);

// Inserir dados na coleção
const items = [
  { id: 1, tipo_material: 'Temperado', maquina: 'Jateadora', tamanho: '200x200', tempo: '12:03:15', data_hora: new Date('2024-05-24T11:16:00Z') },
  { id: 2, tipo_material: 'Laminado', maquina: 'Lapidadora', tamanho: '250x400', tempo: '00:00:00', data_hora: new Date('2024-05-24T07:16:00Z') },
  { id: 3, tipo_material: 'Temperado', maquina: 'Lapidadora', tamanho: '200x200', tempo: '00:03:01', data_hora: new Date('2024-05-24T11:03:00Z') },
  { id: 4, tipo_material: 'Temperado', maquina: 'Jateadora', tamanho: '200x200', tempo: '00:03:15', data_hora: new Date('2024-05-24T11:16:00Z') },
  { id: 5, tipo_material: 'Laminado', maquina: 'Lapidadora', tamanho: '250x400', tempo: '00:00:00', data_hora: new Date('2024-05-24T07:16:00Z') },
  { id: 6, tipo_material: 'Temperado', maquina: 'Lapidadora', tamanho: '200x200', tempo: '00:03:01', data_hora: new Date('2024-05-24T11:03:00Z') },
  { id: 7, tipo_material: 'Temperado', maquina: 'Jateadora', tamanho: '200x200', tempo: '00:03:15', data_hora: new Date('2024-05-24T11:16:00Z') }
];

// Inserir múltiplos documentos na coleção
Item.insertMany(items)
  .then(() => console.log("Dados inseridos com sucesso"))
  .catch((err) => console.error("Erro ao inserir dados: ", err));
