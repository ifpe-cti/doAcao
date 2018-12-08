import { FichaMedica } from "./ficha-medica";

describe("Conjunto de testes de Ficha Médica", () => {
    it("Deve retornar falso, pois é uma ficha médica inválida", () => {
        let fichaMedica: FichaMedica = new FichaMedica();
        expect(fichaMedica.validarFichaMedica()).toBeFalsy();
    })



    it("Deve retornar verdadeiro, pois todos os dados da ficha médica são válidos", () => {
        let fichaMedica: FichaMedica = new FichaMedica();

        fichaMedica.idDoador = "47865FSD546F"
        fichaMedica.cpfDoador = "123.456.789-10"
        fichaMedica.hemoglobina = "13"
        fichaMedica.pressaoArterial = "12/6"
        fichaMedica.temperatura = "36º"
        fichaMedica.peso = "60 Kg"
        fichaMedica.altura = "1,60"
        fichaMedica.bracoPunsionado = "Não"
        fichaMedica.reacoesAdversas = "Não"
        fichaMedica.idFlebomista = "567984JD6578"
        fichaMedica.nomeFlebomista = "Oh Sehun"
        fichaMedica.tipoDeDoacao = "Normal"
        fichaMedica.numeroDoTubo = "564531SD6D"
        fichaMedica.volumeDoSangue = "0,5 L"

        expect(fichaMedica.validarFichaMedica()).toBeTruthy();
    })
}

);