import { Observable } from 'rxjs';

export class FichaMedica {
    idDoador: String;
    id?: String;

    cpfDoador: String;
    hemoglobina: String;
    pressaoArterial: String;
    temperatura: String;
    peso: String;
    altura: String;
    pulso: String
    bracoPunsionado: String;
    reacoesAdversas: String;
    nomeFlebomista: String;
    tipoDeDoacao: String;
    numeroDoTubo: String;
    volumeDoSangue: String;

    validarFichaMedica() {
        if (this.idDoador == "" || this.id == "" || this.cpfDoador == "" || this.hemoglobina == "" || this.pressaoArterial == "" ||
            this.temperatura == "" || this.peso == "" || this.altura == "" || this.bracoPunsionado == "" || this.reacoesAdversas == "" ||
            this.nomeFlebomista == "" || this.tipoDeDoacao == "" || this.numeroDoTubo == ""
            || this.volumeDoSangue == "" || this.pulso == "" || this.peso == "") {
            return false
        }

        return true
    }

    toDocument() {
        return {
            idDoador: this.idDoador,
            cpfDoador: this.cpfDoador,
            hemoglobina: this.hemoglobina,
            pressaoArterial: this.pressaoArterial,
            temperatura: this.temperatura,
            preso: this.peso,
            altura: this.altura,
            bracoPunsionado: this.bracoPunsionado,
            reacoesAdversas: this.reacoesAdversas,
            nomeFlebomista: this.nomeFlebomista,
            tipoDeDoacao: this.tipoDeDoacao,
            numeroDoTubo: this.numeroDoTubo,
            volumeDoSangue: this.volumeDoSangue,
            peso: this.peso,
            pulso: this.pulso

        }
    }

}
