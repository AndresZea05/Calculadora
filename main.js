    const agregar = (value) => {
		result.value += value;
	};
		
	const LimpiarResultado = () => {
		result.value = "";
	};
	const BorrarTodo = () => {
		result.value = result.value.slice(0, -1);
	};
   

    const calcular = () => {
        result.value = eval(`${result.value}`);
   };   

   const deleteF = () =>{
    this.value = this.current.toString().slice(0, -1)
};

        const result = document.querySelector("#resultado");

        /*
        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
              calcular.appendNumber(button.innerText)
              calcular.updateDisplay()
            })
          })
*/










       