import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message'; // Certifique-se de importar o componente Message corretamente

function NewProject() {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        
        navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });
        // Atualize o estado para exibir a mensagem de sucesso
        setShowSuccessMessage(true);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <h2>Crie seu projeto para depois adicionar os serviços</h2>
      <br /> 
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      
      
      {showSuccessMessage && (
        <Message type="success" msg="Projeto criado com sucesso!" />
      )}
    </div>
  );
}

export default NewProject;
