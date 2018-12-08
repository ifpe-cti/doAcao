import { Usuario } from "./usuario";
import { Observable } from "rxjs";

export class RequisicaoDeExames {

    idDoador: String;
    id?: String;

    numeroDocumentoDoador: String;
    tipoDocumentoDoador: String;
    orgaoExpeditorDoador: String;
    nomePaiDoador: String;
    nomeMaeDoador: String;

    tecnicoResponsavel: String;
    etiquetaDaAmostra: String;

    validacaoRequisicaoExame() {
        if (this.idDoador == ""  || this.numeroDocumentoDoador == "" || this.tipoDocumentoDoador == ""
            || this.orgaoExpeditorDoador == "" || this.nomeMaeDoador == "" || this.nomePaiDoador == "" || this.tecnicoResponsavel == ""
            || this.etiquetaDaAmostra == "") {
            return false
        }
        return true
    }

    toDocument(){
        return {
            idDoador: this.idDoador,
            numeroDocumentoDoador: this.numeroDocumentoDoador, 
            tipoDocumentoDoador: this.tipoDocumentoDoador,
            orgaoExpeditorDoador: this.orgaoExpeditorDoador,
            nomeMaeDoador: this.nomeMaeDoador,
            nomePaiDoador: this.nomePaiDoador, 
            tecnicoResponsavel: this.tecnicoResponsavel,
            etiquetaDaAmostra: this.etiquetaDaAmostra
        }
    }

} 
