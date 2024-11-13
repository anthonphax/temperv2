import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [pedidoId, setPedidoId] = useState(null);
  const [cliente, setCliente] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função que faz a requisição para o backend
    const fetchData = async () => {
      try {
        const response = await axios.get('URL_DO_SEU_BACKEND'); // Substitua com a URL do seu backend
        const data = response.data;
        
        // Atualiza o estado com os dados recebidos
        setPedidoId(data.pedidoId);
        setCliente(data.cliente);
      } catch (err) {
        // Trata erros, caso a requisição falhe
        setError('Erro ao carregar dados');
        console.error('Erro ao buscar dados:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // O array vazio significa que a requisição será feita uma vez quando o componente for montado

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <header className="header">
      <h2>
        Lotes do Pedido #{pedidoId} - {cliente}
      </h2>
      <div className="admin-info">
        <img src="session_user.jpeg" alt="Foto da Administradora" />
        <div>
          <h3>PEDRÃO</h3>
          <p>Gerente de Produção</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
