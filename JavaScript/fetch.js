//GET
fetch('https://api.exemplo.com/usuarios/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

//POST
fetch('https://api.exemplo.com/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: 'João',
      email: 'joao@email.com'
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

//PUT
fetch('https://api.exemplo.com/usuarios/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: 'João Silva',
      email: 'joao.silva@email.com'
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

//DELETE
fetch('https://api.exemplo.com/usuarios/1', {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        console.log('Usuário deletado com sucesso');
      } else {
        console.error('Erro ao deletar o usuário');
      }
    })
    .catch(error => console.error('Erro:', error));
  