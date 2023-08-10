import React, { useState } from 'react';
import styles from './ServiceForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({
        name: '',
        cost: '',
        description: ''
    });

    function submit(e) {
        e.preventDefault();
        const updatedProjectData = {
            ...projectData,
            services: [...projectData.services, service]
        };
        handleSubmit(updatedProjectData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setService(prevService => ({
            ...prevService,
            [name]: value
        }));
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <p>Nome do Projeto:</p>
            <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Insira o nome do serviço"
                value={service.name}
                onChange={handleChange}
            />
            <p>Orçamento do Projeto:</p>
            <input
                className={styles.input}
                type="number"
                name="cost"
                placeholder="Insira o valor total"
                value={service.cost}
                onChange={handleChange}
            />
            <p>Descrição do Projeto:</p>
            <input
                className={styles.input}
                type="text"
                name="description"
                placeholder="Descreva o serviço"
                value={service.description}
                onChange={handleChange}
            />
            <button className={styles.button} type="submit">
                {btnText}
            </button>
        </form>
    );
}

export default ServiceForm;
