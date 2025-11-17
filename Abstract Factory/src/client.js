"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var LuxuryPackageFactory_1 = require("./acessorios-veiculos/factories/LuxuryPackageFactory");
var SportsPackageFactory_1 = require("./acessorios-veiculos/factories/SportsPackageFactory");
var VehiclePackage_1 = require("./acessorios-veiculos/VehiclePackage");
var FaturaClientePadraoFactory_1 = require("./e-commerce/factories/FaturaClientePadraoFactory");
var FaturaClienteVipFactory_1 = require("./e-commerce/factories/FaturaClienteVipFactory");
var ProcessarFatura_1 = require("./e-commerce/ProcessarFatura");
var HistoricaDataFactory_1 = require("./financy-data/factories/HistoricaDataFactory");
var RealtimeFactory_1 = require("./financy-data/factories/RealtimeFactory");
var FinancyReport_1 = require("./financy-data/FinancyReport");
var BuildForniture_1 = require("./forniture-factory/BuildForniture");
var ArtdecoFactory_1 = require("./forniture-factory/factories/ArtdecoFactory");
var ModernFactory_1 = require("./forniture-factory/factories/ModernFactory");
var VictorianFactory_1 = require("./forniture-factory/factories/VictorianFactory");
var RelatorioCsvFactory_1 = require("./gera-relatorio/factories/RelatorioCsvFactory");
var RelatorioHtmlFactory_1 = require("./gera-relatorio/factories/RelatorioHtmlFactory");
var RelatorioPdfFactory_1 = require("./gera-relatorio/factories/RelatorioPdfFactory");
var GerarRelatorio_1 = require("./gera-relatorio/GerarRelatorio");
var DevelopmentTestFactory_1 = require("./gerenciador-testes/factories/DevelopmentTestFactory");
var ProductionTestFactory_1 = require("./gerenciador-testes/factories/ProductionTestFactory");
var TestManager_1 = require("./gerenciador-testes/TestManager");
var DevelopFactory_1 = require("./log-system/factories/DevelopFactory");
var ProductionFactory_1 = require("./log-system/factories/ProductionFactory");
var TestFactory_1 = require("./log-system/factories/TestFactory");
var LogSystem_1 = require("./log-system/LogSystem");
var BuildOSTheme_1 = require("./os-theme/BuildOSTheme");
var LinuxFactory_1 = require("./os-theme/factories/LinuxFactory");
var MacOSFactory_1 = require("./os-theme/factories/MacOSFactory");
var WindowsFactory_1 = require("./os-theme/factories/WindowsFactory");
var BuildPaymentMethod_1 = require("./payment-system-factory/BuildPaymentMethod");
var PagseguroFactory_1 = require("./payment-system-factory/factories/PagseguroFactory");
var StripeFactory_1 = require("./payment-system-factory/factories/StripeFactory");
var FiccaoFactory_1 = require("./rpg-game/factories/FiccaoFactory");
var MedievalFactory_1 = require("./rpg-game/factories/MedievalFactory");
var GerarPersonagem_1 = require("./rpg-game/GerarPersonagem");
var EmailNotificationFactory_1 = require("./sistema-notificacao/factories/EmailNotificationFactory");
var SmsNotificationFactory_1 = require("./sistema-notificacao/factories/SmsNotificationFactory");
var SendNotification_1 = require("./sistema-notificacao/SendNotification");
var BasicPlanFactory_1 = require("./streaming/factories/BasicPlanFactory");
var FamilyPlanFactory_1 = require("./streaming/factories/FamilyPlanFactory");
var PremiumPlanFactory_1 = require("./streaming/factories/PremiumPlanFactory");
var Streaming_1 = require("./streaming/Streaming");
var CriarDocumento_1 = require("./text-editor/CriarDocumento");
var HTMLFactory_1 = require("./text-editor/factories/HTMLFactory");
var PdfFactory_1 = require("./text-editor/factories/PdfFactory");
var BuildVehicle_1 = require("./vehicle-factory/BuildVehicle");
var AudiFactory_1 = require("./vehicle-factory/factories/AudiFactory");
var BmwFactory_1 = require("./vehicle-factory/factories/BmwFactory");
var HondaFactory_1 = require("./vehicle-factory/factories/HondaFactory");
var TemaClassicoFactory_1 = require("./xadrez-personalizado/factories/TemaClassicoFactory");
var TemaFantasiaFactory_1 = require("./xadrez-personalizado/factories/TemaFantasiaFactory");
var SelecionarJogo_1 = require("./xadrez-personalizado/SelecionarJogo");
/**
 * Exemplo de uso das Abstracts Factories
 * Funcao principal para mostrar o uso do padrao Abstract Factory.
 * Configura a aplicacao com diferentes fabricas para criar diferentes familias de produtos
 */
var Client = /** @class */ (function () {
    function Client() {
    }
    /**
     * Nos exemplos abaixo, obseve que a classe "Client" nao mudou.
     * Ela sempre interage com a Abstract Factory e as Abstract products.
     * Apenas a instancia da Concrete Factory passada muda o comportamento.
     */
    Client.prototype.getWindowsTheme = function () {
        console.log('--- Configurando para windows ---');
        var windowsFactory = new WindowsFactory_1.WindowsFactory();
        var appWindows = new BuildOSTheme_1.BuildOSTheme(windowsFactory);
        appWindows.createUI(); // Cria os produtos windows
        appWindows.run(); // Interage com os produtos windows
    };
    Client.prototype.getMacOSTheme = function () {
        console.log('--- Configurando para macOS ---');
        var macOSFactory = new MacOSFactory_1.MacOSFactory();
        var appMacOS = new BuildOSTheme_1.BuildOSTheme(macOSFactory);
        appMacOS.createUI(); // Cria os produtos macOS
        appMacOS.run(); // Interage com os produtos macOS
    };
    Client.prototype.getLinuxTheme = function () {
        console.log('--- Configurando para Linux ---');
        var linuxFactory = new LinuxFactory_1.LinuxFactory();
        var appLinux = new BuildOSTheme_1.BuildOSTheme(linuxFactory);
        appLinux.createUI(); // Cria os produtos Linux
        appLinux.run(); // Interage com os produtos Linux
    };
    Client.prototype.buildAuidVehicle = function () {
        console.log('--- Criando veiculos Audi ---');
        var audiFactory = new AudiFactory_1.AudiFactory();
        var audiVehicles = new BuildVehicle_1.BuildVehicle(audiFactory);
        var carProperties = audiVehicles.setCarProperties('azul', 4, 'v6');
        var motorcycleProperties = audiVehicles.setMotorcycleProperties('verde', 600, 16);
        var truckProperties = audiVehicles.setTruckProperties('branco', 12, '250cv');
        console.log(carProperties);
        console.log(motorcycleProperties);
        console.log(truckProperties);
    };
    Client.prototype.buildBmwVehicle = function () {
        console.log('--- Criando veiculos BMW ---');
        var bmwFactory = new BmwFactory_1.BmwFactory();
        var bmwVehicles = new BuildVehicle_1.BuildVehicle(bmwFactory);
        var carProperties = bmwVehicles.setCarProperties('azul', 4, 'v6');
        var motorcycleProperties = bmwVehicles.setMotorcycleProperties('verde', 600, 16);
        var truckProperties = bmwVehicles.setTruckProperties('branco', 12, '250cv');
        console.log(carProperties);
        console.log(motorcycleProperties);
        console.log(truckProperties);
    };
    Client.prototype.buildHondaVehicle = function () {
        console.log('--- Criando veiculos Honda ---');
        var hondaFactory = new HondaFactory_1.HondaFactory();
        var hondaVehicles = new BuildVehicle_1.BuildVehicle(hondaFactory);
        var carProperties = hondaVehicles.setCarProperties('azul', 4, 'v6');
        var motorcycleProperties = hondaVehicles.setMotorcycleProperties('verde', 600, 16);
        var truckProperties = hondaVehicles.setTruckProperties('branco', 12, '250cv');
        console.log(carProperties);
        console.log(motorcycleProperties);
        console.log(truckProperties);
    };
    Client.prototype.buildStripePaymentMethod = function () {
        console.log('--- Criando o metodo de pagamento Stripe ---');
        var stripeFactory = new StripeFactory_1.StripeFactory();
        var stripeMethod = new BuildPaymentMethod_1.PaymentMethods(stripeFactory);
        var cash = stripeMethod.cash();
        var creditCard = stripeMethod.creditCard();
        console.log(cash);
        console.log(creditCard);
    };
    Client.prototype.buildPagseguroPaymentMethod = function () {
        console.log('--- Criando o metodo de pagamento Pagseguro ---');
        var pagseguroFactory = new PagseguroFactory_1.PagseguroFactory();
        var pagseguroMethod = new BuildPaymentMethod_1.PaymentMethods(pagseguroFactory);
        var cash = pagseguroMethod.cash();
        var creditCard = pagseguroMethod.creditCard();
        console.log(cash);
        console.log(creditCard);
    };
    Client.prototype.buildArtdecoForniture = function () {
        console.log('--- Criando moveis do tipo Artdeco ---');
        var factory = new ArtdecoFactory_1.ArtdecoFactory();
        var forniture = new BuildForniture_1.BuildFOrniture(factory);
        var chair = forniture.chairDetails();
        var sofa = forniture.sofaDetails();
        var table = forniture.tableDetails();
        console.log(chair);
        console.log(sofa);
        console.log(table);
    };
    Client.prototype.buildModernForniture = function () {
        console.log('--- Criando moveis do tipo Modern ---');
        var factory = new ModernFactory_1.ModernFactory();
        var forniture = new BuildForniture_1.BuildFOrniture(factory);
        var chair = forniture.chairDetails();
        var sofa = forniture.sofaDetails();
        var table = forniture.tableDetails();
        console.log(chair);
        console.log(sofa);
        console.log(table);
    };
    Client.prototype.buildVictorianForniture = function () {
        console.log('--- Criando moveis do tipo Victorian ---');
        var factory = new VictorianFactory_1.VictorianFactory();
        var forniture = new BuildForniture_1.BuildFOrniture(factory);
        var chair = forniture.chairDetails();
        var sofa = forniture.sofaDetails();
        var table = forniture.tableDetails();
        console.log(chair);
        console.log(sofa);
        console.log(table);
    };
    Client.prototype.buildFaturaClientePadrao = function () {
        console.log('--- Criando fatura do cliente padrao ---');
        var factory = new FaturaClientePadraoFactory_1.FaturaClientePadraoFactory();
        var processarFatura = new ProcessarFatura_1.ProcessarFatura(factory, 250);
        processarFatura.processar();
    };
    Client.prototype.buildFaturaClienteVip = function () {
        console.log('--- Criando fatura do cliente VIP ---');
        var factory = new FaturaClienteVipFactory_1.FaturaClienteVipFactory();
        var processarFatura = new ProcessarFatura_1.ProcessarFatura(factory, 2500);
        processarFatura.processar();
    };
    Client.prototype.getHtmlDocument = function () {
        console.log('--- Criando o documento em HTML ---');
        var factory = new HTMLFactory_1.HtmlFactory();
        var document = new CriarDocumento_1.CriarDocumento(factory);
        document.build();
    };
    Client.prototype.getPdfDocument = function () {
        console.log('--- Criando o documento em PDF ---');
        var factory = new PdfFactory_1.PdfFactory();
        var document = new CriarDocumento_1.CriarDocumento(factory);
        document.build();
    };
    Client.prototype.getRelatorioPdf = function () {
        console.log('--- Criando o relatorio em PDF ---');
        var factory = new RelatorioPdfFactory_1.RelatorioPdfFactory();
        var gerarRelatorio = new GerarRelatorio_1.GerarRelatorio(factory);
        gerarRelatorio.renderHeader('PDF PDF');
        gerarRelatorio.renderTable(['PDF', 'PDF']);
        gerarRelatorio.renderFooter('PDF');
    };
    Client.prototype.getRelatorioHtml = function () {
        console.log('--- Criando o relatorio em HTML ---');
        var factory = new RelatorioHtmlFactory_1.RelatorioHtmlFactory();
        var gerarRelatorio = new GerarRelatorio_1.GerarRelatorio(factory);
        gerarRelatorio.renderHeader('HTML HTML');
        gerarRelatorio.renderTable(['HTML', 'HTML']);
        gerarRelatorio.renderFooter('HTML');
    };
    Client.prototype.getRelatorioCsv = function () {
        console.log('--- Criando o relatorio em CSV ---');
        var factory = new RelatorioCsvFactory_1.RelatorioCsvFactory();
        var gerarRelatorio = new GerarRelatorio_1.GerarRelatorio(factory);
        gerarRelatorio.renderHeader('CSV CSV');
        gerarRelatorio.renderTable(['CSV', 'CSV']);
        gerarRelatorio.renderFooter('CSV');
    };
    Client.prototype.getBasicPlan = function () {
        console.log('--- Criando Streaming com plano basico ---');
        var factory = new BasicPlanFactory_1.BasicPlanFactory();
        var streaming = new Streaming_1.Streaming(factory);
        streaming.play();
    };
    Client.prototype.getPremiumPlan = function () {
        console.log('--- Criando Streaming com plano premium ---');
        var factory = new PremiumPlanFactory_1.PremiumPlanFacotry();
        var streaming = new Streaming_1.Streaming(factory);
        streaming.play();
    };
    Client.prototype.getFamilyPlan = function () {
        console.log('--- Criando Streaming com plano familia ---');
        var factory = new FamilyPlanFactory_1.FamilyPlanFactory();
        var streaming = new Streaming_1.Streaming(factory);
        streaming.play();
    };
    Client.prototype.getClassicXadrez = function () {
        console.log('--- Criando tabuleiro de xadrex classico ---');
        var factory = new TemaClassicoFactory_1.TemaClassicoFactory();
        var streaming = new SelecionarJogo_1.SelecionarJogo(factory);
        streaming.render();
    };
    Client.prototype.getFantasyXadrez = function () {
        console.log('--- Criando tabuleiro de xadrex fantasia ---');
        var factory = new TemaFantasiaFactory_1.TemaFantasiaFacotry();
        var streaming = new SelecionarJogo_1.SelecionarJogo(factory);
        streaming.render();
    };
    Client.prototype.getHistoricFinancyReport = function () {
        console.log('--- Criando relatorio financeiro historico ---');
        var factory = new HistoricaDataFactory_1.HistoricDataFactory();
        var streaming = new FinancyReport_1.FinancyReport(factory);
        streaming.generate('SQL', 'Teste com dados historicos');
    };
    Client.prototype.getRealtimeFinancyReport = function () {
        console.log('--- Criando relatorio financeiro em tempo real ---');
        var factory = new RealtimeFactory_1.RealimeFactory();
        var streaming = new FinancyReport_1.FinancyReport(factory);
        streaming.generate('SocketIO', 'Teste com dados em tempo real');
    };
    Client.prototype.getProductionLog = function () {
        console.log('--- Obtendo logs de produção ---');
        var factory = new ProductionFactory_1.ProductionFactory();
        var streaming = new LogSystem_1.LogSystem(factory);
        streaming.build();
    };
    Client.prototype.getDevelopLog = function () {
        console.log('--- Obtendo logs de desenvolvimento ---');
        var factory = new DevelopFactory_1.DevelopFactory();
        var streaming = new LogSystem_1.LogSystem(factory);
        streaming.build();
    };
    Client.prototype.getTestLog = function () {
        console.log('--- Obtendo logs de teste ---');
        var factory = new TestFactory_1.TestFactory();
        var streaming = new LogSystem_1.LogSystem(factory);
        streaming.build();
    };
    Client.prototype.getCampanhaMedieval = function () {
        console.log('--- Criando um personagem para a campanha medieval ---');
        var factory = new MedievalFactory_1.MedievalFactory();
        var streaming = new GerarPersonagem_1.GerarPersonagem(factory);
        streaming.generate();
    };
    Client.prototype.getCampanhaFiccao = function () {
        console.log('--- Criando um personagem para a campanha ficcao ---');
        var factory = new FiccaoFactory_1.FiccaoFactory();
        var streaming = new GerarPersonagem_1.GerarPersonagem(factory);
        streaming.generate();
    };
    Client.prototype.getSportsPackage = function () {
        console.log('--- Build sport package car ---');
        var factory = new SportsPackageFactory_1.SportsPackageFactory();
        var streaming = new VehiclePackage_1.VehiclePackage(factory);
        streaming.buildPackage();
    };
    Client.prototype.getLuxuryPackage = function () {
        console.log('--- Build luxury package car ---');
        var factory = new LuxuryPackageFactory_1.LuxuryPackageFactory();
        var streaming = new VehiclePackage_1.VehiclePackage(factory);
        streaming.buildPackage();
    };
    Client.prototype.configureProductionTest = function () {
        console.log('--- Configure production test ---');
        var factory = new ProductionTestFactory_1.ProductionTestFactory();
        var streaming = new TestManager_1.TestManager(factory);
        streaming.run();
    };
    Client.prototype.configureDevelopmentTest = function () {
        console.log('--- Configure development test ---');
        var factory = new DevelopmentTestFactory_1.DevelopmentTestFactory();
        var streaming = new TestManager_1.TestManager(factory);
        streaming.run();
    };
    Client.prototype.sendEmailNotification = function () {
        console.log('--- Send email notification ---');
        var factory = new EmailNotificationFactory_1.EmailNotificationFactory();
        var streaming = new SendNotification_1.SendNotification(factory);
        streaming.send();
    };
    Client.prototype.sendSmsNotification = function () {
        console.log('--- Send SMS notification ---');
        var factory = new SmsNotificationFactory_1.SmsNotificationFactory();
        var streaming = new SendNotification_1.SendNotification(factory);
        streaming.send();
    };
    return Client;
}());
exports.Client = Client;
(function main() {
    var client = new Client();
    client.getWindowsTheme();
    client.getMacOSTheme();
    client.getLinuxTheme();
    client.buildAuidVehicle();
    client.buildBmwVehicle();
    client.buildHondaVehicle();
    client.buildStripePaymentMethod();
    client.buildPagseguroPaymentMethod();
    client.buildArtdecoForniture();
    client.buildModernForniture();
    client.buildVictorianForniture();
    client.buildFaturaClientePadrao();
    client.buildFaturaClienteVip();
    client.getHtmlDocument();
    client.getPdfDocument();
    client.getRelatorioPdf();
    client.getRelatorioHtml();
    client.getRelatorioCsv();
    client.getBasicPlan();
    client.getPremiumPlan();
    client.getFamilyPlan();
    client.getClassicXadrez();
    client.getFantasyXadrez();
    client.getHistoricFinancyReport();
    client.getRealtimeFinancyReport();
    client.getProductionLog();
    client.getDevelopLog();
    client.getTestLog();
    client.getCampanhaMedieval();
    client.getCampanhaFiccao();
    client.getSportsPackage();
    client.getLuxuryPackage();
    client.configureProductionTest();
    client.configureDevelopmentTest();
    client.sendEmailNotification();
    client.sendSmsNotification();
})();
