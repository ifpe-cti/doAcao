import { Usuario } from "./usuario";

describe("Conjunto de testes do Usuário", () => {
    it("Deve retornar falso, pois é um usuário inválido", () => {
        let usuario: Usuario = new Usuario();
        expect(usuario.validarUsuario()).toBeFalsy();
    })

    it("Deve retornar verdadeiro, pois todos os dados do usuário sá válidos", () => {
        let usuario: Usuario = new Usuario();
        
        this.usuario.nome = "Kim Minseok"
        this.usuario.user = "xiumin"
        this.usuario.senha = "xiumin"
        this.usuario.dataNascimento = "25/03/1190"
        this.usuario.tipoSanguineo = "A+"
        this.usuario.tipoUsuario = "usuario"
        this.usuario.cpf = "123.456.789-10"
        this.usuario.nomePai = "Pai"
        this.usuario.nomeMae = "Mãe"
        this.usuario.numeroDocumento = "186523-5"
        this.usuario.tipoDocuemento = "Carteira de Reservista"
        this.usuario.orgaoExpeditorDocuemento = "SSA"

        expect(usuario.validarUsuario()).toBeTruthy();

    })
}

);