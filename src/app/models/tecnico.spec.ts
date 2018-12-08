import { Tecnico } from "./tecnico";

describe("Conjunto de testes do Técnico", () => {
    it("Deve retornar falso, pois é um técnico inválido", () => {
        let tecnico: Tecnico = new Tecnico();
        expect(tecnico.validarTecnico()).toBeFalsy();
    })



    it("Deve retornar verdadeiro, pois todos os dados do técnico são válidos", () => {
        let tecnico: Tecnico = new Tecnico();

        tecnico.nome = "Kim Junmyeon"
        tecnico.cpf = "123.456.789-10"

        expect(tecnico.validarTecnico()).toBeTruthy();
    })
}

);