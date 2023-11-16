// Tutorial do site

const driver = window.driver.js.driver;
const tour = driver({
    showProgress: true,
    steps: [
        {
            popover: {
                title: "Seja bem vindo ao Snake-Game!",
                description: "O seu objeto é ganhar o máximo de pontos possivel sem perder. "
            }
        },
        {
            element: "#controls",
            popover: {
                title: "Controles simples",
                description: "Use qualquer umas das setas ➡⬅⬆⬇ para mover a cobra."
            }
        },
        {
            element: "#start",
            popover: {
                title: "Comece por aqui",
                description: "Você pode iniciar o jogo por aqui :)"
            }
        },
        {
            element: "canvas",
            popover: {
                title: "O jogo",
                description: "Preste muita atenção nessa parte, pois será aqui que a cobra irá andar. Colete as frutas que aparecerão aleatoriamente neste espaço e cresça. "
            }
        },
        {
            element: "#statistics",
            popover: {
                title: "Estatisticas",
                description: "Aqui você poderá conferir os seus numeros no jogo, de pontuação e perda."
            }
        },
        {
            element: "#menu",
            popover: {
                title: "Configurações",
                description: "Veja as opções e configurações do site aqui."
            }
        },
        {
            popover: {
                title: "Fácil, não é?",
                description: "Bem, agora divirta-se! 😁"
            }
        }
    ]
});

//tour.drive();

