import { LuxuryPackageFactory } from "./acessorios-veiculos/factories/LuxuryPackageFactory";
import { SportsPackageFactory } from "./acessorios-veiculos/factories/SportsPackageFactory";
import { VehiclePackage } from "./acessorios-veiculos/VehiclePackage";
import { FaturaClientePadraoFactory } from "./e-commerce/factories/FaturaClientePadraoFactory";
import { FaturaClienteVipFactory } from "./e-commerce/factories/FaturaClienteVipFactory";
import { ProcessarFatura } from "./e-commerce/ProcessarFatura";
import { HistoricDataFactory } from "./financy-data/factories/HistoricaDataFactory";
import { RealimeFactory } from "./financy-data/factories/RealtimeFactory";
import { FinancyReport } from "./financy-data/FinancyReport";
import { BuildFOrniture } from "./forniture-factory/BuildForniture";
import { ArtdecoFactory } from "./forniture-factory/factories/ArtdecoFactory";
import { ModernFactory } from "./forniture-factory/factories/ModernFactory";
import { VictorianFactory } from "./forniture-factory/factories/VictorianFactory";
import { RelatorioCsvFactory } from "./gera-relatorio/factories/RelatorioCsvFactory";
import { RelatorioHtmlFactory } from "./gera-relatorio/factories/RelatorioHtmlFactory";
import { RelatorioPdfFactory } from "./gera-relatorio/factories/RelatorioPdfFactory";
import { GerarRelatorio } from "./gera-relatorio/GerarRelatorio";
import { DevelopmentTestFactory } from "./gerenciador-testes/factories/DevelopmentTestFactory";
import { ProductionTestFactory } from "./gerenciador-testes/factories/ProductionTestFactory";
import { TestManager } from "./gerenciador-testes/TestManager";
import { DevelopFactory } from "./log-system/factories/DevelopFactory";
import { ProductionFactory } from "./log-system/factories/ProductionFactory";
import { TestFactory } from "./log-system/factories/TestFactory";
import { LogSystem } from "./log-system/LogSystem";
import { BuildOSTheme } from "./os-theme/BuildOSTheme";
import { GUIFactory } from "./os-theme/factories/interface/gui-factory.interface";
import { LinuxFactory } from "./os-theme/factories/LinuxFactory";
import { MacOSFactory } from "./os-theme/factories/MacOSFactory";
import { WindowsFactory } from "./os-theme/factories/WindowsFactory";
import { PaymentMethods } from "./payment-system-factory/BuildPaymentMethod";
import { PagseguroFactory } from "./payment-system-factory/factories/PagseguroFactory";
import { StripeFactory } from "./payment-system-factory/factories/StripeFactory";
import { FiccaoFactory } from "./rpg-game/factories/FiccaoFactory";
import { MedievalFactory } from "./rpg-game/factories/MedievalFactory";
import { GerarPersonagem } from "./rpg-game/GerarPersonagem";
import { EmailNotificationFactory } from "./sistema-notificacao/factories/EmailNotificationFactory";
import { SmsNotificationFactory } from "./sistema-notificacao/factories/SmsNotificationFactory";
import { SendNotification } from "./sistema-notificacao/SendNotification";
import { BasicPlanFactory } from "./streaming/factories/BasicPlanFactory";
import { FamilyPlanFactory } from "./streaming/factories/FamilyPlanFactory";
import { PremiumPlanFacotry } from "./streaming/factories/PremiumPlanFactory";
import { Streaming } from "./streaming/Streaming";
import { CriarDocumento } from "./text-editor/CriarDocumento";
import { HtmlFactory } from "./text-editor/factories/HTMLFactory";
import { PdfFactory } from "./text-editor/factories/PdfFactory";
import { BuildVehicle } from "./vehicle-factory/BuildVehicle";
import { AudiFactory } from "./vehicle-factory/factories/AudiFactory";
import { BmwFactory } from "./vehicle-factory/factories/BmwFactory";
import { HondaFactory } from "./vehicle-factory/factories/HondaFactory";
import { IBuildVehicleFactory } from "./vehicle-factory/factories/interface/build-vehicle-factory.interface";
import { TemaClassicoFactory } from "./xadrez-personalizado/factories/TemaClassicoFactory";
import { TemaFantasiaFacotry } from "./xadrez-personalizado/factories/TemaFantasiaFactory";
import { SelecionarJogo } from "./xadrez-personalizado/SelecionarJogo";

/**
 * Exemplo de uso das Abstracts Factories
 * Funcao principal para mostrar o uso do padrao Abstract Factory.
 * Configura a aplicacao com diferentes fabricas para criar diferentes familias de produtos
 */

export class Client {

    /**
     * Nos exemplos abaixo, obseve que a classe "Client" nao mudou.
     * Ela sempre interage com a Abstract Factory e as Abstract products.
     * Apenas a instancia da Concrete Factory passada muda o comportamento.
     */
    getWindowsTheme() {
        console.log('--- Configurando para windows ---');
        const windowsFactory: GUIFactory = new WindowsFactory();
        const appWindows = new BuildOSTheme(windowsFactory);
        appWindows.createUI(); // Cria os produtos windows
        appWindows.run(); // Interage com os produtos windows
    }

    getMacOSTheme() {
        console.log('--- Configurando para macOS ---');
        const macOSFactory: GUIFactory = new MacOSFactory();
        const appMacOS = new BuildOSTheme(macOSFactory);
        appMacOS.createUI(); // Cria os produtos macOS
        appMacOS.run(); // Interage com os produtos macOS
    }

    getLinuxTheme() {
        console.log('--- Configurando para Linux ---')
        const linuxFactory: GUIFactory = new LinuxFactory();
        const appLinux = new BuildOSTheme(linuxFactory);
        appLinux.createUI(); // Cria os produtos Linux
        appLinux.run(); // Interage com os produtos Linux
    }

    buildAuidVehicle() {
        console.log('--- Criando veiculos Audi ---')
        const audiFactory: IBuildVehicleFactory = new AudiFactory();
        const audiVehicles = new BuildVehicle(audiFactory);
        const carProperties = audiVehicles.setCarProperties('azul', 4, 'v6');
        const motorcycleProperties = audiVehicles.setMotorcycleProperties('verde', 600, 16);
        const truckProperties = audiVehicles.setTruckProperties('branco', 12, '250cv')
        console.log(carProperties)
        console.log(motorcycleProperties)
        console.log(truckProperties)
    }

    buildBmwVehicle() {
        console.log('--- Criando veiculos BMW ---')
        const bmwFactory: IBuildVehicleFactory = new BmwFactory();
        const bmwVehicles = new BuildVehicle(bmwFactory);
        const carProperties = bmwVehicles.setCarProperties('azul', 4, 'v6');
        const motorcycleProperties = bmwVehicles.setMotorcycleProperties('verde', 600, 16);
        const truckProperties = bmwVehicles.setTruckProperties('branco', 12, '250cv')
        console.log(carProperties)
        console.log(motorcycleProperties)
        console.log(truckProperties)
    }

    buildHondaVehicle() {
        console.log('--- Criando veiculos Honda ---')
        const hondaFactory: IBuildVehicleFactory = new HondaFactory();
        const hondaVehicles = new BuildVehicle(hondaFactory);
        const carProperties = hondaVehicles.setCarProperties('azul', 4, 'v6');
        const motorcycleProperties = hondaVehicles.setMotorcycleProperties('verde', 600, 16);
        const truckProperties = hondaVehicles.setTruckProperties('branco', 12, '250cv')
        console.log(carProperties)
        console.log(motorcycleProperties)
        console.log(truckProperties)
    }

    buildStripePaymentMethod() {
        console.log('--- Criando o metodo de pagamento Stripe ---');
        const stripeFactory = new StripeFactory();
        const stripeMethod = new PaymentMethods(stripeFactory);
        const cash = stripeMethod.cash();
        const creditCard = stripeMethod.creditCard();
        console.log(cash);
        console.log(creditCard);
    }

    buildPagseguroPaymentMethod() {
        console.log('--- Criando o metodo de pagamento Pagseguro ---');
        const pagseguroFactory = new PagseguroFactory();
        const pagseguroMethod = new PaymentMethods(pagseguroFactory);
        const cash = pagseguroMethod.cash();
        const creditCard = pagseguroMethod.creditCard();
        console.log(cash);
        console.log(creditCard);
    }

    buildArtdecoForniture() {
        console.log('--- Criando moveis do tipo Artdeco ---');
        const factory = new ArtdecoFactory();
        const forniture = new BuildFOrniture(factory);
        const chair = forniture.chairDetails();
        const sofa = forniture.sofaDetails();
        const table = forniture.tableDetails();
        console.log(chair);
        console.log(sofa);
        console.log(table);
    }

    buildModernForniture() {
        console.log('--- Criando moveis do tipo Modern ---');
        const factory = new ModernFactory();
        const forniture = new BuildFOrniture(factory);
        const chair = forniture.chairDetails();
        const sofa = forniture.sofaDetails();
        const table = forniture.tableDetails();
        console.log(chair);
        console.log(sofa);
        console.log(table);
    }

    buildVictorianForniture() {
        console.log('--- Criando moveis do tipo Victorian ---');
        const factory = new VictorianFactory();
        const forniture = new BuildFOrniture(factory);
        const chair = forniture.chairDetails();
        const sofa = forniture.sofaDetails();
        const table = forniture.tableDetails();
        console.log(chair);
        console.log(sofa);
        console.log(table);
    }

    buildFaturaClientePadrao() {
        console.log('--- Criando fatura do cliente padrao ---');
        const factory = new FaturaClientePadraoFactory();
        const processarFatura = new ProcessarFatura(factory, 250);
        processarFatura.processar();
    }

    buildFaturaClienteVip() {
        console.log('--- Criando fatura do cliente VIP ---');
        const factory = new FaturaClienteVipFactory();
        const processarFatura = new ProcessarFatura(factory, 2500);
        processarFatura.processar();
    }

    getHtmlDocument() {
        console.log('--- Criando o documento em HTML ---');
        const factory = new HtmlFactory();
        const document = new CriarDocumento(factory);
        document.build();
    }

    getPdfDocument() {
        console.log('--- Criando o documento em PDF ---');
        const factory = new PdfFactory();
        const document = new CriarDocumento(factory);
        document.build();
    }

    getRelatorioPdf() {
        console.log('--- Criando o relatorio em PDF ---');
        const factory = new RelatorioPdfFactory();
        const gerarRelatorio = new GerarRelatorio(factory);
        gerarRelatorio.renderHeader('PDF PDF');
        gerarRelatorio.renderTable(['PDF', 'PDF']);
        gerarRelatorio.renderFooter('PDF');
    }

    getRelatorioHtml() {
        console.log('--- Criando o relatorio em HTML ---');
        const factory = new RelatorioHtmlFactory();
        const gerarRelatorio = new GerarRelatorio(factory);
        gerarRelatorio.renderHeader('HTML HTML');
        gerarRelatorio.renderTable(['HTML', 'HTML']);
        gerarRelatorio.renderFooter('HTML');
    }

    getRelatorioCsv() {
        console.log('--- Criando o relatorio em CSV ---');
        const factory = new RelatorioCsvFactory();
        const gerarRelatorio = new GerarRelatorio(factory);
        gerarRelatorio.renderHeader('CSV CSV');
        gerarRelatorio.renderTable(['CSV', 'CSV']);
        gerarRelatorio.renderFooter('CSV');
    }

    getBasicPlan() {
        console.log('--- Criando Streaming com plano basico ---');
        const factory = new BasicPlanFactory();
        const streaming = new Streaming(factory);
        streaming.play();
    }

    getPremiumPlan() {
        console.log('--- Criando Streaming com plano premium ---');
        const factory = new PremiumPlanFacotry();
        const streaming = new Streaming(factory);
        streaming.play();
    }

    getFamilyPlan() {
        console.log('--- Criando Streaming com plano familia ---');
        const factory = new FamilyPlanFactory();
        const streaming = new Streaming(factory);
        streaming.play();
    }

    getClassicXadrez() {
        console.log('--- Criando tabuleiro de xadrex classico ---');
        const factory = new TemaClassicoFactory();
        const streaming = new SelecionarJogo(factory);
        streaming.render();
    }

    getFantasyXadrez() {
        console.log('--- Criando tabuleiro de xadrex fantasia ---');
        const factory = new TemaFantasiaFacotry();
        const streaming = new SelecionarJogo(factory);
        streaming.render();
    }

    getHistoricFinancyReport() {
        console.log('--- Criando relatorio financeiro historico ---');
        const factory = new HistoricDataFactory();
        const streaming = new FinancyReport(factory);
        streaming.generate('SQL', 'Teste com dados historicos');
    }

    getRealtimeFinancyReport() {
        console.log('--- Criando relatorio financeiro em tempo real ---');
        const factory = new RealimeFactory();
        const streaming = new FinancyReport(factory);
        streaming.generate('SocketIO', 'Teste com dados em tempo real');
    }

    getProductionLog() {
        console.log('--- Obtendo logs de produção ---');
        const factory = new ProductionFactory();
        const streaming = new LogSystem(factory);
        streaming.build();
    }

    getDevelopLog() {
        console.log('--- Obtendo logs de desenvolvimento ---');
        const factory = new DevelopFactory();
        const streaming = new LogSystem(factory);
        streaming.build();
    }

    getTestLog() {
        console.log('--- Obtendo logs de teste ---');
        const factory = new TestFactory();
        const streaming = new LogSystem(factory);
        streaming.build();
    }

    getCampanhaMedieval() {
        console.log('--- Criando um personagem para a campanha medieval ---');
        const factory = new MedievalFactory();
        const streaming = new GerarPersonagem(factory);
        streaming.generate();
    }

    getCampanhaFiccao() {
        console.log('--- Criando um personagem para a campanha ficcao ---');
        const factory = new FiccaoFactory();
        const streaming = new GerarPersonagem(factory);
        streaming.generate();
    }

    getSportsPackage() {
        console.log('--- Build sport package car ---');
        const factory = new SportsPackageFactory();
        const streaming = new VehiclePackage(factory);
        streaming.buildPackage();
    }

    getLuxuryPackage() {
        console.log('--- Build luxury package car ---');
        const factory = new LuxuryPackageFactory();
        const streaming = new VehiclePackage(factory);
        streaming.buildPackage();
    }

    configureProductionTest() {
        console.log('--- Configure production test ---');
        const factory = new ProductionTestFactory();
        const streaming = new TestManager(factory);
        streaming.run();
    }

    configureDevelopmentTest() {
        console.log('--- Configure development test ---');
        const factory = new DevelopmentTestFactory();
        const streaming = new TestManager(factory);
        streaming.run();
    }

    sendEmailNotification() {
        console.log('--- Send email notification ---');
        const factory = new EmailNotificationFactory();
        const streaming = new SendNotification(factory);
        streaming.send();
    }

    sendSmsNotification() {
        console.log('--- Send SMS notification ---');
        const factory = new SmsNotificationFactory();
        const streaming = new SendNotification(factory);
        streaming.send();
    }
}

(function main() {
    const client = new Client();
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
})()
