import { useEffect, useState } from 'react';
import LivroRequests from '../../../fetch/LivroRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function TabelaLivro() {
    const [livros, setLivros] = useState();

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const livro = await LivroRequests.listarLivros();
                setLivros(livro);

                livro.forEach((e: any) => { 

                    e.valorAquisicao = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(e.valorAquisicao);
                });
                
            } catch (error) {
                console.error(`erro ao chmar a API: ${error}`)
            }
        };
        fetchLivros();
    }, [livros]);

    return (
        <div className="card">
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="Titulo" style={{ width: '25%' }}></Column>
                <Column field="autor" header="Autor" style={{ width: '25%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
                <Column field="isbn" header="ISBN" style={{ width: '25%' }}></Column>
                <Column field="valorAquisicao" header="Valor Aquisicao" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}

export default TabelaLivro