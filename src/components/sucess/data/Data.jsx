export default function Data({buyerData}){
    return(
        <div>
            <h1>Comprador</h1>
            <p>Nome: {buyerData.name}</p>
            <p>CPF: {buyerData.cpf.substring(0,3)}.{buyerData.cpf.substring(3,6)}.{buyerData.cpf.substring(6,9)}-{buyerData.cpf.substring(9,11)}</p>
        </div>
    );
}