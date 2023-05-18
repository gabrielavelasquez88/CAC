const general=document.getElementById ("general");

let texto="";
let array=[]



function getChar (){
    let data;
    
    fetch (`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then (res =>res.json())
        .then (res=> {
            console.log(res);
            
            const label=document.createElement('h2');
            label.className='apiLabel';
            label.id='apiLabel';
            label.innerText='Elige tu Pokemon';
            const explicacion=document.createElement('p');
            explicacion.className='explicacion';
            explicacion.innerText='(Busca tu Pokemon y escribe su nombre para ver)';

            let formulario=document.getElementById('apiFormulario');

            

            const seleccion= document.getElementById('apiSelect');

            const opcion=document.createElement('option');
            let boton=document.createElement('input');
            boton.className='boton'
            boton.type='submit';    
            boton.textContent='Aceptar'

            const divSelect=document.createElement('div');
            divSelect.className='divSelect';


            general.appendChild(label);
            general.appendChild(explicacion);
            general.appendChild(divSelect);
            divSelect.appendChild(formulario);
            
            formulario.appendChild(boton);

            res.results.forEach(element => {
                texto=texto+'<option>'+capitalize(element.name)+'</option>'

            });
            seleccion.innerHTML=texto;
        })
}    
const mostrar=event=> {
    event.preventDefault();
    const { value } = event.target.pokemon;
    console.log(value);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then (resultado=>resultado.json())
        .then (resultado => {
            
            let imagen=document.createElement('img');
            imagen.className='apiImagen'

            let divContenedor=document.getElementById('apiContenedor');
            divContenedor.innerHTML='';

            let divCarta= document.createElement ('div');
            divCarta.className='apiCarta';

            let divTexto=document.createElement('div');
            divTexto.className='apiTexto'

            let divH2=document.createElement('div')
            divH2.className='apiH2';

            imagen.src=resultado.sprites.other.home.front_default;
            imagen.alt='Imagen del Pokemon '+capitalize(resultado.name);
            
            general.appendChild(divContenedor);
            
            divContenedor.appendChild(divCarta);
            divContenedor.appendChild(divTexto);
            divCarta.appendChild(imagen);
            divCarta.appendChild(divH2);
            divH2.innerHTML='<h2>'+capitalize(resultado.name)+'</h2>'
            texto='<p>Nombre: '+capitalize(resultado.name)+'<p>';
            texto=texto+'<p>Tipo de Pokemon: '
            for (let i=0;i<resultado.types.length;i++){
                texto=texto+' '+capitalize(resultado.types[i].type.name);
            };
            texto=texto+'<p>';
            texto=texto+'<p>Altura: '+resultado.height+'</p>';
            texto=texto+'<p>Peso: '+resultado.weight+'</p>'
            texto=texto+'<p>Habilidades: '
            for (let i=0;i<resultado.abilities.length;i++){
                texto=texto+' ('+(parseInt(i)+1)+') '+capitalize(resultado.abilities[i].ability.name);
            }
            texto=texto+'</p>'
            texto=texto+'<ul class="ul">Estadisticas: '
            for (let i=0;i<resultado.stats.length;i++){
                texto=texto+'<li class="li">'+capitalize(resultado.stats[i].stat.name)+': '+resultado.stats[i].base_stat+'</li>'
            }
            texto=texto+'</ul>'
            divTexto.innerHTML=texto;
            
            
        })
     }

getChar();

function capitalize(word){
    const upper= word.charAt(0).toUpperCase()+word.slice(1);
    return upper;
}