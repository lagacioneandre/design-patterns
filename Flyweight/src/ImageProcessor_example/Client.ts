async function runSystem() {
    console.log("--- Início do Sistema ---");

    // Simulando 3 pedidos SIMULTÂNEOS para a mesma imagem (Concorrência)
    console.log("Solicitando 'foto_paris.png' 3 vezes ao mesmo tempo...");
    
    const [img1, img2, img3] = await Promise.all([
        ImageFactory.getImage("foto_paris.png"),
        ImageFactory.getImage("foto_paris.png"),
        ImageFactory.getImage("foto_paris.png")
    ]);

    console.log("As instâncias são iguais?", img1 === img2 && img2 === img3); // true

    // Simulando Gestão de Memória (Excedendo o limite)
    await ImageFactory.getImage("foto_tokyo.png");
    await ImageFactory.getImage("foto_roma.png");
    await ImageFactory.getImage("foto_ny.png"); // Isso deve remover a foto_paris do cache

    console.log("--- Fim do Sistema ---");
}

runSystem();