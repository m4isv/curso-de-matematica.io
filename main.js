document.addEventListener('DOMContentLoaded', function() {
    	let elems = document.querySelectorAll('.sidenav');
    	let instances = M.Sidenav.init(elems,);

  });

function fundo(){

    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange','#decb52','#bda639','#8c7d4a','#5a4d31','#6b6963','#de7131','#94e339','#84e7a5','#42aaa5','#527db5','#5a6573','#945dd6','#5a5163','#e70cff','#846d84','#ad2873','#7b717b','#ad2c73','#ad8ea5','#5af708'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numero];
}