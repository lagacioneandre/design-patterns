"use strict";
// Adapter
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryAdapter = void 0;
var DirectoryAdapter = /** @class */ (function () {
    function DirectoryAdapter(legacySystem) {
        this.legacySystem = legacySystem;
    }
    DirectoryAdapter.prototype.fetchUser = function (id) {
        // 1. Conversao de tipo de entrada
        var numericId = parseInt(id, 10);
        // 2. Chamada ao sistema incompativel
        var xmlData = this.legacySystem.getEntryById(numericId);
        // 3. Logica de traducao complexa (Parsing manual simplificado para o exemplo)
        var rawName = this.extractXmlAttr(xmlData, 'name'); // "Silva, Joao"
        var email = this.extractXmlAttr(xmlData, 'email');
        var rawRoles = this.extractXmlAttr(xmlData, 'access');
        // 4. Transformacao dos dados: "Silva, Joao" -> "Joao Silva"
        var _a = rawName.split(', '), surname = _a[0], firstName = _a[1];
        var formattedName = "".concat(firstName, " ").concat(surname);
        // 5. Transformacao de dados: String para array
        var rolesArray = rawRoles.split(',');
        // Retorna o objeto exatamente como o sistema novo exige
        return {
            id: id,
            fullName: formattedName,
            email: email,
            roles: rolesArray
        };
    };
    DirectoryAdapter.prototype.extractXmlAttr = function (xml, key) {
        var regex = new RegExp("key=\"".concat(key, "\">(.*?)</attr>"));
        var match = xml.match(regex);
        return match ? match[1] : '';
    };
    return DirectoryAdapter;
}());
exports.DirectoryAdapter = DirectoryAdapter;
