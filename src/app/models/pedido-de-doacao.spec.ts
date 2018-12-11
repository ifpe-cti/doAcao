import { PedidoDeDoacao } from "./pedido-de-doacao";

describe("Conjunto de testes de Solicitação Sanguínea", () => {
    it("Deve retornar falso, pois é uma solioitação inválido", () => {
        let pedidoDeDoacao: PedidoDeDoacao = new PedidoDeDoacao();
        expect(pedidoDeDoacao.validarPedidoDeDoacao()).toBeFalsy();
    })

    it("Deve retornar verdadeiro, pois todos os dados da solicitação são válidos", () => {
        let pedidoDeDoacao: PedidoDeDoacao = new PedidoDeDoacao();

        pedidoDeDoacao.cpfUsuario = "123.456.789-10"
        pedidoDeDoacao.nomeUsuario = "Do Kyungsoo"
        pedidoDeDoacao.tipoSanguineo = "+O"

        expect(pedidoDeDoacao.validarPedidoDeDoacao()).toBeTruthy();
    })
}

);