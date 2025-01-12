'use client';
import { useState } from 'react';
import estilos from './mapear.module.css';

export default function Mapear({ NomesALunos }) {
    const [presente, setPresente] = useState(NomesALunos.map(() => ({ count: 0, dates: [] })));
    const [falta, setFalta] = useState(NomesALunos.map(() => ({ count: 0, dates: [] })));
    const [mostrarDatas, setMostrarDatas] = useState(NomesALunos.map(() => false));

    function Presente(index) {
        const data = new Date().toLocaleDateString();
        if (presente[index].dates.includes(data)) {
            alert('Presença já registrada para hoje.');
            return;
        }

        const newPresencas = [...presente];
        newPresencas[index].count++;
        newPresencas[index].dates.push(data);
        setPresente(newPresencas);
    }

    function Falta(index) {
        const data = new Date().toLocaleDateString();
        if (falta[index].dates.includes(data)) {
            alert('Falta já registrada para hoje.');
            return;
        }

        const newFaltas = [...falta];
        newFaltas[index].count++;
        newFaltas[index].dates.push(data);
        setFalta(newFaltas);
    }

    function MostrarDatas(index) {
        const newMostrarDatas = [...mostrarDatas];
        newMostrarDatas[index] = !newMostrarDatas[index];
        setMostrarDatas(newMostrarDatas);
    }

    function ResetarDados() {
        const resetData = NomesALunos.map(() => ({ count: 0, dates: [] }));
        setPresente(resetData);
        setFalta(resetData);
    }

    return (
        <>
            <button onClick={ResetarDados} className={estilos.botaoResetar}>
                Resetar Tabela
            </button>
            {NomesALunos.map((aluno, index) => (
                <section key={aluno.id}>
                    <div className={estilos.container}>
                        <table className={estilos.tabela}>
                            <thead>
                                <tr>
                                    <th className={estilos.primeiro}>Nome:</th>
                                    <th>Status:</th>
                                    <th>Presenças:</th>
                                    <th>Faltas:</th>
                                    <th>Dias presentes:</th>
                                    <th>Dias faltosos:</th>
                                    <th className={estilos.tabelaFinal}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={estilos.primeiro}>{aluno.nome}</td>
                                    <td>
                                        <button className={estilos.presente} onClick={() => Presente(index)}>
                                            P
                                        </button> -
                                        <button className={estilos.falta} onClick={() => Falta(index)}>
                                            F
                                        </button>
                                    </td>
                                    <td>{presente[index].count}</td>
                                    <td>{falta[index].count}</td>
                                    <td>
                                        {mostrarDatas[index] && (
                                            <div>
                                                <strong>Presenças:</strong> {presente[index].dates.join(", ")}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {mostrarDatas[index] && (
                                            <div>
                                                <strong>Faltas:</strong> {falta[index].dates.join(", ")}
                                            </div>
                                        )}
                                    </td>
                                    <td className={estilos.botaoFinal}>
                                        <button onClick={() => MostrarDatas(index)} className={estilos.botaoMostrarDatas}>
                                            &#8592;
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            ))}
        </>
    );
}
