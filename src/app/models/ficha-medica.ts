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
    idFlebomista: String;
    nomeFlebomista: String;
    tipoDeDoacao: String;
    numeroDoTubo: String;
    volumeDoSangue: String;

    validarFichaMedica() {
        if (this.idDoador == "" || this.id == "" || this.cpfDoador == "" || this.hemoglobina == "" || this.pressaoArterial == "" ||
            this.temperatura == "" || this.peso == "" || this.altura == "" || this.bracoPunsionado == "" || this.reacoesAdversas == "" ||
            this.idFlebomista == "" || this.nomeFlebomista == "" || this.tipoDeDoacao == "" || this.numeroDoTubo == "" 
            || this.volumeDoSangue == "") {
                return false
        }

        return true
    }

}
