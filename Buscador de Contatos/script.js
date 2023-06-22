
let p = document.querySelector('p')
let input = document.querySelector('input')

let contacts = [
	{name:'Rodrigo', number: '(19) 8989-8787'},
	{name:'Paulo', number: '(11) 9517-5386'},
	{name:'Aline', number: '(11) 9865-2321'},
	{name:'Maria', number: '(21) 9431-8761'}

]

function search(){
	
	for(let i = 0; i < contacts.length   ;  i++){

		if(input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()) {
			p.innerHTML = `Contato Encontrado Nome: ${contacts[i].name} Tel: ${contacts[i].number}`
		

			break
	

		} else {
			p.innerHTML = "Contato não encontrado tente novamente"
		}


	}

}