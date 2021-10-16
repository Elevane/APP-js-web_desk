
let window_button = document.querySelectorAll(".window_button")[0];
window_button.addEventListener("click", ()=>{
    _window = new Window(document.body, document.body, window.innerHeight, window.innerWidth);
    _window.init()
})

document.body.style.width = window.innerWidth + "px"
document.body.style.height = window.innerHeight + "px"
document.body.style.backgroundColor  ="#081C15"
class Window{
    constructor(parent,body, windowheight, windowwidth, title , width , height ){
        this.parent = parent
        this.body = body
        this.title = title
        this.width = width
        this.height = height
        this.screenwidth = windowwidth
        this.screenheight = windowheight
        this._window = document.createElement("div");
        this._header = document.createElement("div");
        this._arrow = document.createElement("button")
        this._arrow.innerHTML = "X"
        this._title = document.createElement("h2")
        this._title.innerHTML = this.title == null ? "Title" : this.Title
        this._window.style.position = "absolute"
        this._window.style.width = this.width == null ? (this.screenwidth - 4 )+ "px" : this.width + "px"
        this._window.style.height = this.height == null ?  (this.screenheight - (document.getElementById("taskbar").clientHeight + 4) )+ "px" : this.height + "px"
    }
   
    init(){
        console.log(this)
        this._header.appendChild(this._title)
        this._header.appendChild(this._arrow)
        this._window.classList.add("window")
        this._header.classList.add("header")
        this._window.appendChild(this._header);
        this.parent.appendChild(this._window)

        this.AddEvents()

    }


    AddEvents(){

        let windows = document.querySelectorAll('.window');
            windows.forEach(elm => {
                dragElement(elm)
        })

        let headers = document.querySelectorAll('.header');
        headers.forEach(element => {
            element.querySelector('button').addEventListener('click',(e)=> {
            element.parentNode.remove()
            })
        });
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}