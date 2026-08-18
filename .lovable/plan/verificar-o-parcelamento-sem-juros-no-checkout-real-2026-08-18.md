# Verificar o parcelamento sem juros no checkout real

Você ativou o parcelamento sem juros na conta Mercado Pago. Os textos da plataforma já anunciam "até 12x sem juros" e o checkout já é criado com 12 parcelas, então não há mudança de código prevista — o objetivo aqui é confirmar na prática.

## O que será feito

1. Gerar um checkout real a partir da sua conta (Signature, com o benefício de 10% reemitido) e abrir a página do Mercado Pago.
2. Conferir na tela de pagamento por cartão: valor total R$ 521,10, opção de 12 parcelas e a indicação "sem juros" (sem acréscimo no total).
3. Registrar evidência em captura de tela e reportar o resultado.
4. Nenhum pagamento será concluído — a verificação para antes da confirmação.

## Se algo aparecer diferente

- Se o Mercado Pago mostrar juros ou menos parcelas, identifico se é limite do meio de pagamento/emissor ou configuração da conta, e digo exatamente o que ajustar.
- Só nesse caso proponho alteração de código (por exemplo, ajustar o texto exibido para refletir a condição real).

## Detalhes técnicos

- O checkout usa `createPreference` em `src/lib/mercadopago.server.ts` (Checkout Pro), com `payment_methods.installments: 12` e o valor final já com desconto.
- A verificação é feita via navegador automatizado na URL `init_point` retornada pela preference; nenhum dado de pagamento é inserido.
