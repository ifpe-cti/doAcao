import { Flebomista } from "./flebomista";

describe("Conjunto de testes de Flebomista", () => {
    it("Deve retornar falso, pois é um flebomista inválido", () => {
        let flebomista: Flebomista = new Flebomista();
        expect(flebomista.validarFlebomista()).toBeFalsy();
    })



    it("Deve retornar verdadeiro, pois todos os dados do flebomista são válidos", () => {
        let flebomista: Flebomista = new Flebomista();

        flebomista.nome = "Kim Junmyeon"
        flebomista.cpf = "123.456.789-10"

        expect(flebomista.validarFlebomista()).toBeTruthy();
    })
}

);