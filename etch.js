function createGrid (rws)
{

  let max = rws;

  var container = document.getElementById("container");
  while(container.firstChild)
  {
  	container.firstChild.remove();
  }

  container.style.display = "grid";
  container.style.gridGap = "2px";
  
  container.style.width = "500px";
  container.style.height = "500px"; 

  
  for(let x = 1; x <= max; x++)
  {
  	for(let y = 1; y <=max; y++)
  	{
  		var box = document.createElement('div');
  		box.style.gridColumnStart=x;
  		box.style.gridColumndEnd=x+1;
  		box.style.gridRowStart=y;
  		box.style.gridRowEnd=y+1;
  		box.style.borderStyle="solid";
  		box.style.borderColor="black";
		box.style.borderWidth="1px";
		box.style.opacity = "0.1";
		box.style.backgroundColor = "black";
		box.id = "box";
		container.appendChild(box);
		
  	}
  }
  let boxes=container.childNodes;
  for(let i = 0; i < boxes.length; i++)
  {
	boxes[i].addEventListener("mouseover", function(){
		opac = parseFloat(this.style.opacity);
		opac+=0.15;
		this.style.opacity=String(opac);});
  }


}


function myFunction () {
	let inp = document.getElementById('rws').value;
	createGrid(inp);

}











