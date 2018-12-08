import { Usuario } from "./usuario";

describe("Conjunto de testes do Usuário", () => {
    it("Deve retornar falso, pois é um usuário inválido", () => {
        let usuario: Usuario = new Usuario();
        expect(usuario.validarUsuario()).toBeFalsy();
    })

    it("Deve retornar verdadeiro, pois todos os dados do usuário sá válidos", () => {
        let usuario: Usuario = new Usuario();

        usuario.nome = "Kim Minseok"
        usuario.user = "xiumin"
        usuario.senha = "xiumin"
        usuario.dataNascimento = "25/03/1190"
        usuario.tipoSanguineo = "A+"
        usuario.tipoUsuario = "usuario"
        usuario.cpf = "123.456.789-10"
        usuario.nomePai = "Pai"
        usuario.nomeMae = "Mãe"
        usuario.numeroDocumento = "186523-5"
        usuario.tipoDocumento = "Carteira de Reservista"
        usuario.orgaoExpeditorDocumento = "SSA"

        expect(usuario.validarUsuario()).toBeTruthy();
    })
}

);