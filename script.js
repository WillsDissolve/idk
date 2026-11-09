nn.on('load', () =>{
  
  
  kaplay({
    focus:false,
    background: [255,0,255]
  })
  
  //sprites
  const sprite1 = add([
    rect(50,76),
    pos(100,100),
    area(),
    color(100,200,255),
    "sprite1"
  ])
})