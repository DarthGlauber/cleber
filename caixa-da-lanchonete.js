class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50
        };

        const formasDePagamento = {
            "dinheiro": 0.05,
            "debito": 0,
            "credito": 0.03
        };

        let valorTotal = 0;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (const item of itens) {
            const itemInfo = cardapio[item];
            
            if (!itemInfo) {
                return "Item inválido!";
            }
            
            valorTotal += itemInfo;
        }

        if (metodoDePagamento === "dinheiro") {
            valorTotal *= (1 - formasDePagamento.dinheiro);
        } else if (metodoDePagamento === "credito") {
            valorTotal *= (1 + formasDePagamento.credito);
        } else if (metodoDePagamento !== "debito") {
            return "Forma de pagamento inválida!";
        }

        return valorTotal.toFixed(2);
    }
}

export { CaixaDaLanchonete };