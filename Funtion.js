const blujens = 350000, zapatos = 280000, camisas = 175000, correas = 200000 
let valtotal, promventa

let servicios = () => {
    let servicio = 0, price = 0
    let countpro = -1    
    let acuPri = 0
    let totalPro = 0, promedio = 0, totalPri
    
   do {
       servicio = parseInt(prompt('Ingrese lo que desea registrar, de uno a 4, 1 serian jeans , 2 seria zapatos,3 seria camisas, 4 seria correas y para terminar pulsa 0'))

       switch(servicio){
        case 1:
          price = blujens
          alert('exelente decicion ya agregastes blujens')
          alert(price)
          acuPri = acuPri + price;                    
          break;
          case 2:
          price = zapatos    
          alert('exelente decicion ya agregastes zapatos')
          alert(price)         
          acuPri = acuPri + price;
          break;
          case 3:
          price = camisas   
          alert('exelente decicion ya agregastes camisas')     
          alert(price)
          acuPri = acuPri + price;
          break;
          case 4:
          price = correas    
          alert('exelente decicion ya agregastes correas')
          alert(price)          
          acuPri = acuPri + price;
          break;
          default:
            alert('este aticulo no esta en inventario')
          break;
       }
    totalPro = totalPro + servicio         
    countpro++

    totalPri = acuPri
    //countpri++

   } while (servicio != 0);

   promedio = totalPri / countpro
   

    alert(`Total: ${countpro}`)
    alert (`Promedio: ${promedio}`)
    alert (`Precio total: ${totalPri}`)
}
servicios()