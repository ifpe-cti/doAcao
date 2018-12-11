import { AgendamentoDoacao } from "./agendamento-de-doacoes";

describe("Conjunto de testes de Agendamento de Doações", () => {
    it("Deve retornar falso, pois é um agendamento inválido", () => {
        let agendamentoDoacao: AgendamentoDoacao = new AgendamentoDoacao();
        expect(agendamentoDoacao.validarAgendamentoDoacao()).toBeFalsy();
    })

    it("Deve retornar verdadeiro, pois todos os dados do agendamento são válidos", () => {
        let agendamentoDoacao: AgendamentoDoacao = new AgendamentoDoacao();

        agendamentoDoacao.cpfDoador = "123.456.789-10"
        agendamentoDoacao.data = "23/12/2018"
        agendamentoDoacao.idDoador = "13465fDF564"

        expect(agendamentoDoacao.validarAgendamentoDoacao()).toBeTruthy();
    })
}
);