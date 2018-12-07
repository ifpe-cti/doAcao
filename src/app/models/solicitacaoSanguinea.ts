import { Usuario } from "./usuario";

export class SolicitacaoSanguinea{

    nomeUsuario: String;
    cpfUsuario: String;
    tipoSanguineo: String;
    id?: String;
   
   validarSolicitacaoSanguinea(){
       if(this.nomeUsuario == "" || this.cpfUsuario == "" || this.tipoSanguineo == "" || this.id == ""){
           return false
       }
       return true
   }
} 
