import styled from "styled-components";


export const Container = styled.div`
body{
  padding-top: 30px;
}

figure{
  padding: 20px;
}

button{
  display:inline;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  cursor: pointer;
  background-color: #e95420;
  box-shadow: 0 3px 0 #bd3e13;
}

button:hover{
  box-shadow: 0 3px 0 #bd3e13;
  background-color: #bd3e13;

}

a:link 
{ 
text-decoration:none; 
} 


button:active{
  position: relative;
  top: 5px;
  box-shadow: none;
}

.container{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  width: 100%; height: 100%;
  background-color:#f5f5f557;
  background-image: url(https://image.freepik.com/fotos-gratis/os-ingredientes-para-pizza-caseira-em-fundo-branco-de-madeira_35641-2728.jpg);
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left;
  background-position-x: -10cm;
  border-top: 2px;
}

.mensagemInicial h2{
  color: white;
  font-size: 45px;
  margin: 40px auto;
  margin-top: 21px;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  background-image: linear-gradient(#e95420, #e956209a);
  
}
.mensagemInicial p{
  color: white;
  margin-top: 5px;
  margin-right:300px;
  margin-left: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 25px;
  background-image: linear-gradient(#e95420, #e956209a);
  border-radius: 5px;
}

.container img{
  border-radius: 3%; 
  width: 300px;
  height: 200px;
  overflow: hidden;
  /*-moz-*/transition: all 0.5s;
  /*-webkit-*/transition: all 0.5s;

  -moz-opacity: 1;
  opacity: 1 ;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  filter: alpha(opacity=100); 	
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
}
.container img:hover{
  /*-moz-*/transform: scale(1.1);
  /*-webkit-*/transform: scale(1.1);

  -moz-opacity: 0.8;
  opacity: 0.8;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=80);
  filter: alpha(opacity=80); 	
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=80)";
}

.informacoes{
  margin-bottom: 35px;
  margin-top: 35px;
  text-align: center;
  padding: 5px;
  background-color: #8d8d8d3f;
  border-radius: 15px;

}

.informacoes p{
  font-size: 20px;

}
.informacoes ul li{
  list-style-type : none;
}


#backgroudImagens{
  width:100%; height: 100%;
  background-color:rgb(49, 49, 49);
  background-image: url(https://image.freepik.com/fotos-gratis/parede-de-concreto_1154-641.jpg);
  background-attachment:fixed; 
  background-size: 100% 100%;
  border-radius: 1%;
}

#imagemPrincipal{
  width: 650px;
  height: 440px;
}
body{
  padding-top: 70px;
}




`