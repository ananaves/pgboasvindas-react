import { useEffect, useState } from 'react';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState();

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const emprestimo = await EmprestimoRequests.listarEmprestimos();
                console.table(emprestimo);
                setEmprestimos(emprestimo);
                console.table(emprestimos);

                emprestimo.forEach((e: any) => {
                    e.dataEmprestimo = new Date(e.dataEmprestimo).toLocaleDateString('pt-BR');
                    e.dataDevolucao = new Date(e.dataDevolucao).toLocaleDateString('pt-BR');

                });

            } catch (error) {
                console.error(`erro ao chamar a API: ${error}`)
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);

    return (
        <div className="card">
            <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="aluno.nome" header="Nome Aluno" style={{ width: '25%' }}></Column>
                <Column field="livro.titulo" header="Nome Livro" style={{ width: '25%' }}></Column>
                <Column field="dataEmprestimo" header="Data Emprestimo" style={{ width: '25%' }}></Column>
                <Column field="dataDevolucao" header="Data Devolução" style={{ width: '25%' }}></Column>
                <Column field="statusEmprestimo" header="Status" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}

export default TabelaEmprestimo;