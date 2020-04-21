(function(){
  // transformicons.add(".tcon");

  // document.querySelector(".toggle-menu").addEventListener("click",function(){
  //   document.querySelector("#wrapper").classList.toggle("toggled");
  // })

    const toggle = document.querySelectorAll('.toggle-menu');

    toggle.forEach(key => key.addEventListener("click",function(){
            document.querySelector("#wrapper").classList.toggle("toggled");
        })
    );

})()
