"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["ter\u00E7a"] = 3] = "ter\u00E7a";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabadpa"] = 7] = "sabadpa";
})(dias || (dias = {}));
var arcoiris;
(function (arcoiris) {
    arcoiris[arcoiris["verde"] = 0] = "verde";
    arcoiris[arcoiris["amarelo"] = 1] = "amarelo";
    arcoiris[arcoiris["azul"] = 2] = "azul";
})(arcoiris || (arcoiris = {}));
var ações;
(function (ações) {
    ações[ações["salvar"] = 1] = "salvar";
    ações[ações["imprimir"] = 2] = "imprimir";
    ações[ações["abrir"] = 3] = "abrir";
    ações[ações["visualizar"] = 4] = "visualizar";
    ações[ações["fechar"] = 5] = "fechar";
})(ações || (ações = {}));
var pontos;
(function (pontos) {
    pontos[pontos["norte"] = 1] = "norte";
    pontos[pontos["leste"] = 2] = "leste";
    pontos[pontos["sul"] = 3] = "sul";
    pontos[pontos["oeste"] = 4] = "oeste";
})(pontos || (pontos = {}));
