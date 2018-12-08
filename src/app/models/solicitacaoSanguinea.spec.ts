import { SolicitacaoSanguinea } from "./solicitacaoSanguinea";

describe("Conjunto de testes de Solicitação Sanguínea", () => {
    it("Deve retornar falso, pois é uma solioitação inválido", () => {
        let solicitacaoSanguinea: SolicitacaoSanguinea = new SolicitacaoSanguinea();
        expect(solicitacaoSanguinea.validarSolicitacaoSanguinea()).toBeFalsy();
    })



    it("Deve retornar verdadeiro, pois todos os dados da solicitação são válidos", () => {
        let solicitacaoSanguinea: SolicitacaoSanguinea = new SolicitacaoSanguinea();

        solicitacaoSanguinea.cpfUsuario = "123.456.789-10"
        solicitacaoSanguinea.nomeUsuario = "Do Kyungsoo"
        solicitacaoSanguinea.tipoSanguineo = "+O"

        expect(solicitacaoSanguinea.validarSolicitacaoSanguinea()).toBeTruthy();
    })
}

);