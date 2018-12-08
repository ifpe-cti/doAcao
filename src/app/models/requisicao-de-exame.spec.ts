import { RequisicaoDeExames } from "./requisicao-de-exames";

describe("Conjunto de testes de Requisição de Exames", () => {
    it("Deve retornar falso, pois é uma solioitação inválido", () => {
        let requisicaoDeExames: RequisicaoDeExames = new RequisicaoDeExames();
        expect(requisicaoDeExames.validacaoRequisicaoExame()).toBeFalsy();
    })



    it("Deve retornar verdadeiro, pois todos os dados da requisição são válidos", () => {
        let requisicaoDeExames: RequisicaoDeExames = new RequisicaoDeExames();

        requisicaoDeExames.idDoador = "65468SDF655"
        requisicaoDeExames.numeroDocumentoDoador = "7859625-5"
        requisicaoDeExames.tipoDocumentoDoador = "Carteira de Motorista"
        requisicaoDeExames.orgaoExpeditorDoador = "DETRAN"
        requisicaoDeExames.nomeMaeDoador = "Mãe"
        requisicaoDeExames.nomePaiDoador = "Pai"
        requisicaoDeExames.tecnicoResponsavel = "Kim Minseok"
        requisicaoDeExames.etiquetaDaAmostra = "KJHFDJ71"

        expect(requisicaoDeExames.validacaoRequisicaoExame()).toBeTruthy();
    })
}

);